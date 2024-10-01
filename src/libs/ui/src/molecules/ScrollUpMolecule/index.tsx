// ScrollToTop component
import { useEffect, useState } from 'react';
import { ScrollToTopButton } from '@ui/atoms/ScrollupButton';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const smallScrollThreshold = 400; 
      setIsVisible(window.scrollY > smallScrollThreshold);
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
