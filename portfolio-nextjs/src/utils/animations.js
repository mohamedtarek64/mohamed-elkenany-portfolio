// Animation utilities
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const bounceIn = {
  initial: { opacity: 0, scale: 0.3 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.8, 
    ease: "easeOut",
    type: "spring",
    stiffness: 200,
    damping: 10
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 }
};

export const hoverLift = {
  whileHover: { y: -5 },
  transition: { duration: 0.3, ease: "easeOut" }
};

export const hoverGlow = {
  whileHover: { 
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" 
  },
  transition: { duration: 0.3 }
};

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: "easeInOut" }
};

// Loading animations
export const loadingSpinner = {
  animate: { rotate: 360 },
  transition: { 
    duration: 1, 
    repeat: Infinity, 
    ease: "linear" 
  }
};

export const loadingPulse = {
  animate: { 
    scale: [1, 1.1, 1],
    opacity: [0.5, 1, 0.5]
  },
  transition: { 
    duration: 1.5, 
    repeat: Infinity, 
    ease: "easeInOut" 
  }
};

// Scroll animations
export const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scrollRevealLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scrollRevealRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Parallax animations
export const parallaxUp = {
  y: [0, -50],
  transition: { duration: 1, ease: "easeOut" }
};

export const parallaxDown = {
  y: [0, 50],
  transition: { duration: 1, ease: "easeOut" }
};

// Floating animations
export const float = {
  y: [0, -10, 0],
  transition: { 
    duration: 3, 
    repeat: Infinity, 
    ease: "easeInOut" 
  }
};

export const floatSlow = {
  y: [0, -5, 0],
  transition: { 
    duration: 4, 
    repeat: Infinity, 
    ease: "easeInOut" 
  }
};

// Gradient animations
export const gradientShift = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: { 
    duration: 3, 
    repeat: Infinity, 
    ease: "easeInOut" 
  }
};

// Shimmer effect
export const shimmer = {
  backgroundPosition: ["-200% 0", "200% 0"],
  transition: { 
    duration: 2, 
    repeat: Infinity, 
    ease: "linear" 
  }
};
