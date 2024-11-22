import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  // Show the button when the user scrolls down
  const checkScrollTop = () => {
    if (!showButton && window.pageYOffset > 200) {
      setShowButton(true);
    } else if (showButton && window.pageYOffset <= 200) {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showButton]);

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 rounded-full shadow-lg hover:animate-bounce transform transition-all duration-300 hover:scale-110"
        style={{
          animation: 'rocket-animation 2s ease-in-out infinite', // Add rocket animation
        }}
      >
        🚀
      </button>
    )
  );
};

export default ScrollToTop;
