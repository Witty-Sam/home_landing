import React from 'react';
import { useState, useEffect } from 'react';

const Body1 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    // Initial check
    checkScreenSize();

    // Re-check on resize
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div>
      <img
        src={isMobile ? "./images/why-mobile.svg" : "./images/Why-desktop.svg"}
        alt="Why Vida"
        className="w-full"
      />
    </div>
  );
};


export default Body1
