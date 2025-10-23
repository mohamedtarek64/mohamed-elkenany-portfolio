// Error handling middleware
export class AppError extends Error {
  constructor(message, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

    Error.captureStackTrace(this, this.constructor);
  }
}

export const createError = (message, statusCode = 500) => {
  return new AppError(message, statusCode);
};

export const handleAsync = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export const globalErrorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error
  console.error('Error:', err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = createError(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = createError(message, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    error = createError(message, 400);
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    const message = 'Invalid token';
    error = createError(message, 401);
  }

  if (err.name === 'TokenExpiredError') {
    const message = 'Token expired';
    error = createError(message, 401);
  }

  // Rate limit errors
  if (err.statusCode === 429) {
    return res.status(429).json({
      success: false,
      message: err.message,
      retryAfter: err.retryAfter
    });
  }

  // Default error response
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

export const notFound = (req, res, next) => {
  const error = createError(`Not found - ${req.originalUrl}`, 404);
  next(error);
};

// Validation error handler
export const handleValidationError = (errors) => {
  const formattedErrors = errors.map(error => ({
    field: error.path,
    message: error.message,
    value: error.value
  }));

  return createError('Validation failed', 400, formattedErrors);
};

// Database error handler
export const handleDatabaseError = (error) => {
  if (error.code === 'ER_DUP_ENTRY') {
    return createError('Duplicate entry', 409);
  }
  
  if (error.code === 'ER_NO_REFERENCED_ROW_2') {
    return createError('Referenced record not found', 404);
  }
  
  if (error.code === 'ER_ROW_IS_REFERENCED_2') {
    return createError('Cannot delete referenced record', 409);
  }
  
  return createError('Database error', 500);
};

// Email error handler
export const handleEmailError = (error) => {
  if (error.code === 'EAUTH') {
    return createError('Email authentication failed', 500);
  }
  
  if (error.code === 'ECONNECTION') {
    return createError('Email connection failed', 500);
  }
  
  if (error.code === 'ETIMEDOUT') {
    return createError('Email timeout', 500);
  }
  
  return createError('Email sending failed', 500);
};

// File upload error handler
export const handleFileUploadError = (error) => {
  if (error.code === 'LIMIT_FILE_SIZE') {
    return createError('File too large', 413);
  }
  
  if (error.code === 'LIMIT_FILE_COUNT') {
    return createError('Too many files', 413);
  }
  
  if (error.code === 'LIMIT_UNEXPECTED_FILE') {
    return createError('Unexpected field', 400);
  }
  
  return createError('File upload failed', 500);
};

// Network error handler
export const handleNetworkError = (error) => {
  if (error.code === 'ECONNREFUSED') {
    return createError('Connection refused', 503);
  }
  
  if (error.code === 'ETIMEDOUT') {
    return createError('Request timeout', 504);
  }
  
  if (error.code === 'ENOTFOUND') {
    return createError('Service not found', 503);
  }
  
  return createError('Network error', 500);
};

// Error logging
export const logError = (error, req) => {
  const errorInfo = {
    message: error.message,
    stack: error.stack,
    statusCode: error.statusCode,
    url: req?.url,
    method: req?.method,
    ip: req?.ip,
    userAgent: req?.get('User-Agent'),
    timestamp: new Date().toISOString()
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error Details:', errorInfo);
  }

  // In production, you might want to log to a service like Sentry
  // Sentry.captureException(error, { extra: errorInfo });
};

// Error response formatter
export const formatErrorResponse = (error, req) => {
  const response = {
    success: false,
    message: error.message || 'Internal Server Error',
    timestamp: new Date().toISOString()
  };

  // Add additional info in development
  if (process.env.NODE_ENV === 'development') {
    response.stack = error.stack;
    response.details = {
      url: req?.url,
      method: req?.method,
      ip: req?.ip
    };
  }

  return response;
};
