import { useEffect, useState } from 'react';
import { ScrollToTopButton } from '@ui/atoms/ScrollupButton';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollThresholdPercentage = parseFloat(import.meta.env.VITE_SCROLL_THRESHOLD) / 100;

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const scrollThreshold = (scrollHeight - windowHeight) * scrollThresholdPercentage;

      setIsVisible(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsVisible(false);
  };

  return <ScrollToTopButton onClick={scrollToTop} isVisible={isVisible} />;
};
