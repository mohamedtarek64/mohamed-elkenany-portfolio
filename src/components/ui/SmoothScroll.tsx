'use client';

import React, { useEffect } from 'react';

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Handle anchor links - only for internal links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      
      // Check if the clicked element is a link
      const link = target.closest('a');
      if (!link || !link.getAttribute('href')?.startsWith('#')) {
        return;
      }

      const href = link.getAttribute('href');
      if (!href) return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        const headerHeight = 80; // Adjust based on your header height
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleAnchorClick, true);

    return () => {
      document.removeEventListener('click', handleAnchorClick, true);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return null;
};

export default SmoothScroll;
