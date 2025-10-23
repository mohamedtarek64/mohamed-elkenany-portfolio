// API configuration
export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  endpoints: {
    contact: '/api/contact',
    health: '/api/health',
  },
  timeout: 10000, // 10 seconds
  retries: 3,
  retryDelay: 1000, // 1 second
};

// Email configuration
export const emailConfig = {
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  },
  from: process.env.SMTP_USER || 'noreply@example.com',
  to: process.env.CONTACT_EMAIL || 'mohamed20220632@gmail.com',
  templates: {
    contact: {
      subject: 'Portfolio Contact: {{subject}}',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {{name}}</p>
        <p><strong>Email:</strong> {{email}}</p>
        <p><strong>Subject:</strong> {{subject}}</p>
        <p><strong>Message:</strong></p>
        <p>{{message}}</p>
        <hr>
        <p><small>Sent from portfolio contact form</small></p>
      `
    },
    newsletter: {
      subject: 'Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> {{email}}</p>
        <p><strong>Date:</strong> {{date}}</p>
        <hr>
        <p><small>Sent from portfolio newsletter form</small></p>
      `
    }
  }
};

// Validation schemas
export const validationSchemas = {
  contact: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s]+$/
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    subject: {
      required: true,
      minLength: 5,
      maxLength: 100
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 1000
    }
  },
  newsletter: {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    }
  }
};

// Error messages
export const errorMessages = {
  validation: {
    required: 'This field is required',
    minLength: 'Minimum length not met',
    maxLength: 'Maximum length exceeded',
    pattern: 'Invalid format',
    email: 'Invalid email address'
  },
  api: {
    network: 'Network error. Please try again.',
    timeout: 'Request timeout. Please try again.',
    server: 'Server error. Please try again later.',
    unknown: 'An unknown error occurred.'
  },
  email: {
    notConfigured: 'Email service not configured',
    sendFailed: 'Failed to send email',
    invalidConfig: 'Invalid email configuration'
  }
};

// Success messages
export const successMessages = {
  contact: 'Message sent successfully! I\'ll get back to you soon.',
  newsletter: 'Successfully subscribed to newsletter!',
  email: 'Email sent successfully!'
};

// Rate limiting
export const rateLimit = {
  contact: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 requests per window
    message: 'Too many contact form submissions. Please try again later.'
  },
  newsletter: {
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // 3 requests per window
    message: 'Too many newsletter subscriptions. Please try again later.'
  }
};
