// UI hooks
import { useState, useEffect, useCallback, useRef } from 'react';

// Hook for modal state
export const useModal = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  return { isOpen, open, close, toggle };
};

// Hook for dropdown state
export const useDropdown = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const ref = useRef();

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, close]);

  return { isOpen, open, close, toggle, ref };
};

// Hook for tooltip state
export const useTooltip = (delay = 500) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef();

  const show = useCallback((event) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      setPosition({ x: event.clientX, y: event.clientY });
    }, delay);
  }, [delay]);

  const hide = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { isVisible, position, show, hide };
};

// Hook for loading state
export const useLoading = (initialLoading = false) => {
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [loadingText, setLoadingText] = useState('');

  const startLoading = useCallback((text = '') => {
    setIsLoading(true);
    setLoadingText(text);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
    setLoadingText('');
  }, []);

  const withLoading = useCallback(async (fn, text = '') => {
    startLoading(text);
    try {
      const result = await fn();
      return result;
    } finally {
      stopLoading();
    }
  }, [startLoading, stopLoading]);

  return {
    isLoading,
    loadingText,
    startLoading,
    stopLoading,
    withLoading
  };
};

// Hook for notification state
export const useNotification = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = {
      id,
      type: 'info',
      duration: 5000,
      ...notification
    };

    setNotifications(prev => [...prev, newNotification]);

    // Auto remove after duration
    if (newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, newNotification.duration);
    }

    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  return {
    notifications,
    addNotification,
    removeNotification,
    clearNotifications
  };
};

// Hook for theme
export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }, [theme]);

  const setThemeMode = useCallback((newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }, []);

  return { theme, toggleTheme, setThemeMode };
};

// Hook for language
export const useLanguage = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = useCallback((newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  }, []);

  return { language, changeLanguage };
};

// Hook for window size
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

// Hook for scroll position
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

// Hook for click outside
export const useClickOutside = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [callback]);

  return ref;
};

// Hook for keyboard shortcuts
export const useKeyboardShortcut = (key, callback, deps = []) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) {
        event.preventDefault();
        callback(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [key, callback, ...deps]);
};

// Hook for copy to clipboard
export const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return true;
    } catch (error) {
      console.error('Failed to copy text:', error);
      return false;
    }
  }, []);

  return { copied, copy };
};

// Hook for focus management
export const useFocus = () => {
  const [focused, setFocused] = useState(false);
  const ref = useRef();

  const focus = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const blur = useCallback(() => {
    if (ref.current) {
      ref.current.blur();
    }
  }, []);

  useEffect(() => {
    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    const element = ref.current;
    if (element) {
      element.addEventListener('focus', handleFocus);
      element.addEventListener('blur', handleBlur);
      return () => {
        element.removeEventListener('focus', handleFocus);
        element.removeEventListener('blur', handleBlur);
      };
    }
  }, []);

  return { focused, ref, focus, blur };
};
