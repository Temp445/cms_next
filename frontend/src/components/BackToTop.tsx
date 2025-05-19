'use client'

import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {


  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    });
  };


  return (
 <div className="container mx-auto w-full">
     <button
      className={`hidden lg:block  fixed bottom-5 right-5 bg-gradient-to-br from-blue-700   to-violet-400 text-white p-3 rounded-full shadow-lg z-50 `}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
 </div>
  );
};

export default BackToTop;