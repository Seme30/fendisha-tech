import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 992) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (for SSR compatibility)
    if (typeof window === 'undefined') return;

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Set initial value
    checkIsMobile();

    // Add event listener with throttling for better performance
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIsMobile, 150);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
