import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function onScreenResize() {
      setIsMobile(window.innerWidth < 900);
    }

    window.addEventListener('resize', onScreenResize);

    onScreenResize();

    return () => window.removeEventListener('resize', onScreenResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
