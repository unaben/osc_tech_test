import { useEffect } from "react";

const useLockScroll = (active: boolean = true) => {
  useEffect(() => {
    if (!active) return;

    const scrollY = window.scrollY;
    const originalStyle = document.body.style.cssText;

    document.body.style.cssText = `
        overflow: hidden;
        position: fixed;
        top: -${scrollY}px;
        left: 0;
        right: 0;
      `;

    return () => {
      document.body.style.cssText = originalStyle;
      window.scrollTo(0, scrollY);
    };
  }, [active]);
};

export default useLockScroll;