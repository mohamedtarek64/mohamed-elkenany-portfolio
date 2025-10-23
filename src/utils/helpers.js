// Helper utility functions

// String utilities
export const stringUtils = {
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
  
  capitalizeWords: (str) => str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  ),
  
  slugify: (str) => str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, ''),
  
  truncate: (str, length, suffix = '...') => 
    str.length > length ? str.substring(0, length) + suffix : str,
  
  removeHtml: (str) => str.replace(/<[^>]*>/g, ''),
  
  escapeHtml: (str) => str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;'),
  
  unescapeHtml: (str) => str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'"),
  
  generateId: (length = 8) => 
    Math.random().toString(36).substring(2, 2 + length),
  
  generateSlug: (text) => 
    text.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, ''),
  
  formatPhone: (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  }
};

// Number utilities
export const numberUtils = {
  formatCurrency: (amount, currency = 'USD', locale = 'en-US') => 
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(amount),
  
  formatNumber: (num, locale = 'en-US') => 
    new Intl.NumberFormat(locale).format(num),
  
  formatPercent: (num, decimals = 1) => 
    `${(num * 100).toFixed(decimals)}%`,
  
  clamp: (num, min, max) => Math.min(Math.max(num, min), max),
  
  random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  
  round: (num, decimals = 2) => 
    Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals),
  
  isEven: (num) => num % 2 === 0,
  
  isOdd: (num) => num % 2 !== 0,
  
  factorial: (num) => {
    if (num < 0) return NaN;
    if (num === 0 || num === 1) return 1;
    return num * numberUtils.factorial(num - 1);
  }
};

// Date utilities
export const dateUtils = {
  format: (date, format = 'MM/DD/YYYY') => {
    const d = new Date(date);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return format
      .replace('MM', String(d.getMonth() + 1).padStart(2, '0'))
      .replace('DD', String(d.getDate()).padStart(2, '0'))
      .replace('YYYY', d.getFullYear())
      .replace('MMM', months[d.getMonth()]);
  },
  
  formatRelative: (date) => {
    const now = new Date();
    const diff = now - new Date(date);
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
  },
  
  isToday: (date) => {
    const today = new Date();
    const d = new Date(date);
    return d.toDateString() === today.toDateString();
  },
  
  isYesterday: (date) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const d = new Date(date);
    return d.toDateString() === yesterday.toDateString();
  },
  
  addDays: (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  },
  
  addMonths: (date, months) => {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  },
  
  addYears: (date, years) => {
    const result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    return result;
  },
  
  getAge: (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  }
};

// Array utilities
export const arrayUtils = {
  unique: (arr) => [...new Set(arr)],
  
  shuffle: (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },
  
  chunk: (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  },
  
  groupBy: (arr, key) => {
    return arr.reduce((groups, item) => {
      const group = item[key];
      groups[group] = groups[group] || [];
      groups[group].push(item);
      return groups;
    }, {});
  },
  
  sortBy: (arr, key, direction = 'asc') => {
    return [...arr].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      
      if (direction === 'desc') {
        return bVal > aVal ? 1 : -1;
      }
      return aVal > bVal ? 1 : -1;
    });
  },
  
  flatten: (arr) => {
    return arr.reduce((flat, item) => 
      flat.concat(Array.isArray(item) ? arrayUtils.flatten(item) : item), []);
  },
  
  intersection: (arr1, arr2) => {
    return arr1.filter(item => arr2.includes(item));
  },
  
  difference: (arr1, arr2) => {
    return arr1.filter(item => !arr2.includes(item));
  },
  
  union: (arr1, arr2) => {
    return arrayUtils.unique([...arr1, ...arr2]);
  }
};

// Object utilities
export const objectUtils = {
  deepClone: (obj) => {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map(item => objectUtils.deepClone(item));
    if (typeof obj === 'object') {
      const cloned = {};
      Object.keys(obj).forEach(key => {
        cloned[key] = objectUtils.deepClone(obj[key]);
      });
      return cloned;
    }
  },
  
  deepMerge: (target, source) => {
    const result = { ...target };
    
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = objectUtils.deepMerge(result[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
    
    return result;
  },
  
  pick: (obj, keys) => {
    const result = {};
    keys.forEach(key => {
      if (key in obj) {
        result[key] = obj[key];
      }
    });
    return result;
  },
  
  omit: (obj, keys) => {
    const result = { ...obj };
    keys.forEach(key => {
      delete result[key];
    });
    return result;
  },
  
  isEmpty: (obj) => {
    return Object.keys(obj).length === 0;
  },
  
  has: (obj, path) => {
    return path.split('.').every(key => {
      if (obj && typeof obj === 'object' && key in obj) {
        obj = obj[key];
        return true;
      }
      return false;
    });
  },
  
  get: (obj, path, defaultValue) => {
    const keys = path.split('.');
    let result = obj;
    
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        return defaultValue;
      }
    }
    
    return result;
  },
  
  set: (obj, path, value) => {
    const keys = path.split('.');
    const lastKey = keys.pop();
    let current = obj;
    
    for (const key of keys) {
      if (!(key in current) || typeof current[key] !== 'object') {
        current[key] = {};
      }
      current = current[key];
    }
    
    current[lastKey] = value;
    return obj;
  }
};

// URL utilities
export const urlUtils = {
  buildQueryString: (params) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        searchParams.append(key, value);
      }
    });
    return searchParams.toString();
  },
  
  parseQueryString: (queryString) => {
    const params = {};
    const searchParams = new URLSearchParams(queryString);
    for (const [key, value] of searchParams) {
      params[key] = value;
    }
    return params;
  },
  
  isValidUrl: (string) => {
    try {
      new URL(string);
      return true;
    } catch {
      return false;
    }
  },
  
  getDomain: (url) => {
    try {
      return new URL(url).hostname;
    } catch {
      return null;
    }
  },
  
  getPath: (url) => {
    try {
      return new URL(url).pathname;
    } catch {
      return null;
    }
  }
};

// Local storage utilities
export const storageUtils = {
  set: (key, value, ttl = null) => {
    const item = {
      value,
      timestamp: Date.now(),
      ttl
    };
    localStorage.setItem(key, JSON.stringify(item));
  },
  
  get: (key) => {
    try {
      const item = JSON.parse(localStorage.getItem(key));
      if (!item) return null;
      
      if (item.ttl && Date.now() - item.timestamp > item.ttl) {
        localStorage.removeItem(key);
        return null;
      }
      
      return item.value;
    } catch {
      return null;
    }
  },
  
  remove: (key) => {
    localStorage.removeItem(key);
  },
  
  clear: () => {
    localStorage.clear();
  },
  
  exists: (key) => {
    return localStorage.getItem(key) !== null;
  }
};

// Debounce utility
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

// Throttle utility
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Copy to clipboard utility
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    return true;
  }
};

// Download file utility
export const downloadFile = (content, filename, type = 'text/plain') => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
