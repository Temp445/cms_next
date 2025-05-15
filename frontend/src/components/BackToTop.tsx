'use client'


import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
 <div className="container mx-auto w-full">
     <button
      className={`hidden lg:block  fixed bottom-5 right-5 bg-gradient-to-br from-blue-700   to-violet-400 text-white p-3 rounded-full shadow-lg z-50 ${
        visible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
 </div>
  );
};

export default BackToTop;