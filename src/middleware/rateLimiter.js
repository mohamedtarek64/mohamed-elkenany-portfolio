// Rate limiting middleware
const rateLimitMap = new Map();

export const rateLimiter = (options = {}) => {
  const {
    windowMs = 15 * 60 * 1000, // 15 minutes
    max = 100, // limit each IP to 100 requests per windowMs
    message = 'Too many requests from this IP, please try again later.',
    standardHeaders = true,
    legacyHeaders = false
  } = options;

  return (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const now = Date.now();
    const windowStart = now - windowMs;

    // Clean up old entries
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.resetTime < now) {
        rateLimitMap.delete(key);
      }
    }

    // Get or create rate limit info for this IP
    let rateLimitInfo = rateLimitMap.get(ip);
    if (!rateLimitInfo) {
      rateLimitInfo = {
        count: 0,
        resetTime: now + windowMs
      };
      rateLimitMap.set(ip, rateLimitInfo);
    }

    // Reset if window has passed
    if (now > rateLimitInfo.resetTime) {
      rateLimitInfo.count = 0;
      rateLimitInfo.resetTime = now + windowMs;
    }

    // Check if limit exceeded
    if (rateLimitInfo.count >= max) {
      const retryAfter = Math.ceil((rateLimitInfo.resetTime - now) / 1000);
      
      if (standardHeaders) {
        res.setHeader('Retry-After', retryAfter);
        res.setHeader('X-RateLimit-Limit', max);
        res.setHeader('X-RateLimit-Remaining', 0);
        res.setHeader('X-RateLimit-Reset', new Date(rateLimitInfo.resetTime).toISOString());
      }

      if (legacyHeaders) {
        res.setHeader('X-Rate-Limit-Limit', max);
        res.setHeader('X-Rate-Limit-Remaining', 0);
        res.setHeader('X-Rate-Limit-Reset', new Date(rateLimitInfo.resetTime).toISOString());
      }

      return res.status(429).json({
        success: false,
        message,
        retryAfter
      });
    }

    // Increment counter
    rateLimitInfo.count++;

    // Set headers
    if (standardHeaders) {
      res.setHeader('X-RateLimit-Limit', max);
      res.setHeader('X-RateLimit-Remaining', Math.max(0, max - rateLimitInfo.count));
      res.setHeader('X-RateLimit-Reset', new Date(rateLimitInfo.resetTime).toISOString());
    }

    if (legacyHeaders) {
      res.setHeader('X-Rate-Limit-Limit', max);
      res.setHeader('X-Rate-Limit-Remaining', Math.max(0, max - rateLimitInfo.count));
      res.setHeader('X-Rate-Limit-Reset', new Date(rateLimitInfo.resetTime).toISOString());
    }

    next();
  };
};

// Specific rate limiters for different endpoints
export const contactRateLimit = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 contact form submissions per 15 minutes
  message: 'Too many contact form submissions. Please try again later.'
});

export const newsletterRateLimit = rateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // 3 newsletter subscriptions per hour
  message: 'Too many newsletter subscriptions. Please try again later.'
});

export const apiRateLimit = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 API requests per 15 minutes
  message: 'Too many API requests. Please try again later.'
});
