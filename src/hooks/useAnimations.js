// Animation hooks
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

// Hook for scroll-triggered animations
export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef();
  const isInView = useInView(ref, { threshold });

  return { ref, isInView };
};

// Hook for staggered animations
export const useStaggerAnimation = (items, delay = 0.1) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < items.length) {
      const timer = setTimeout(() => {
        setVisibleItems(prev => [...prev, items[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, items, delay]);

  return visibleItems;
};

// Hook for typing animation
export const useTypingAnimation = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return displayedText;
};

// Hook for counter animation
export const useCounterAnimation = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (target > 0) {
      setIsAnimating(true);
      const startTime = Date.now();
      const startValue = count;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
        
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [target, duration]);

  return { count, isAnimating };
};

// Hook for parallax effect
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

// Hook for mouse position
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};

// Hook for element size
export const useElementSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const ref = useRef();

  useEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        setSize({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return { ref, size };
};

// Hook for intersection observer
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, hasIntersected]);

  return { ref, isIntersecting, hasIntersected };
};

// Hook for smooth scroll
export const useSmoothScroll = () => {
  const scrollTo = (target, duration = 1000) => {
    const start = window.pageYOffset;
    const distance = target - start;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeInOutCubic = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      window.scrollTo(0, start + distance * easeInOutCubic);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return { scrollTo };
};

// Hook for animation controls
export const useAnimationControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const play = () => {
    setIsPlaying(true);
    setIsPaused(false);
  };

  const pause = () => {
    setIsPaused(true);
    setIsPlaying(false);
  };

  const stop = () => {
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
  };

  const reset = () => {
    setProgress(0);
  };

  return {
    isPlaying,
    isPaused,
    progress,
    play,
    pause,
    stop,
    reset,
    setProgress
  };
};
