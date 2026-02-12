// Validation service
import { validationSchemas, errorMessages } from '../config/api.js';

class ValidationService {
  validateField(fieldName, value, rules) {
    const rule = rules[fieldName];
    if (!rule) return null;

    // Required validation
    if (rule.required && (!value || value.trim() === '')) {
      return errorMessages.validation.required;
    }

    // Skip other validations if field is empty and not required
    if (!value || value.trim() === '') return null;

    // Min length validation
    if (rule.minLength && value.length < rule.minLength) {
      return `${errorMessages.validation.minLength} (minimum ${rule.minLength} characters)`;
    }

    // Max length validation
    if (rule.maxLength && value.length > rule.maxLength) {
      return `${errorMessages.validation.maxLength} (maximum ${rule.maxLength} characters)`;
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(value)) {
      return errorMessages.validation.pattern;
    }

    // Custom validation
    if (rule.custom) {
      const customError = rule.custom(value);
      if (customError) return customError;
    }

    return null;
  }

  validateForm(data, schema) {
    const errors = {};
    let isValid = true;

    for (const [fieldName, value] of Object.entries(data)) {
      const error = this.validateField(fieldName, value, schema);
      if (error) {
        errors[fieldName] = error;
        isValid = false;
      }
    }

    return { isValid, errors };
  }

  validateContactForm(data) {
    return this.validateForm(data, validationSchemas.contact);
  }

  validateNewsletterForm(data) {
    return this.validateForm(data, validationSchemas.newsletter);
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  validateUrl(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, ''); // Remove event handlers
  }

  sanitizeFormData(data) {
    const sanitized = {};
    for (const [key, value] of Object.entries(data)) {
      sanitized[key] = this.sanitizeInput(value);
    }
    return sanitized;
  }

  // Real-time validation for form fields
  createFieldValidator(fieldName, rules) {
    return (value) => {
      return this.validateField(fieldName, value, { [fieldName]: rules });
    };
  }

  // Debounced validation for better UX
  createDebouncedValidator(validator, delay = 300) {
    let timeoutId;
    
    return (value, callback) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const error = validator(value);
        callback(error);
      }, delay);
    };
  }

  // Validate file uploads
  validateFile(file, options = {}) {
    const {
      maxSize = 5 * 1024 * 1024, // 5MB
      allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
      allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.pdf']
    } = options;

    const errors = [];

    // Check file size
    if (file.size > maxSize) {
      errors.push(`File size must be less than ${maxSize / 1024 / 1024}MB`);
    }

    // Check file type
    if (!allowedTypes.includes(file.type)) {
      errors.push(`File type must be one of: ${allowedTypes.join(', ')}`);
    }

    // Check file extension
    const extension = '.' + file.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(extension)) {
      errors.push(`File extension must be one of: ${allowedExtensions.join(', ')}`);
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Validate password strength
  validatePassword(password) {
    const errors = [];
    
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    
    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }

    return {
      isValid: errors.length === 0,
      errors,
      strength: this.calculatePasswordStrength(password)
    };
  }

  calculatePasswordStrength(password) {
    let score = 0;
    
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
    if (password.length >= 16) score += 1;
    
    if (score <= 2) return 'weak';
    if (score <= 4) return 'medium';
    if (score <= 6) return 'strong';
    return 'very-strong';
  }
}

export default new ValidationService();
