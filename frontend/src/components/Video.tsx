'use client';

import React, { useState, useRef } from 'react';
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { IoCloseCircleOutline } from 'react-icons/io5';
import Image from 'next/image';
import CMS from '../assets/CMS3.png';

export default function Video() {
  const [showVideoOverlay, setShowVideoOverlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleDemoClick = () => {
    setShowVideoOverlay(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const closeVideoOverlay = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setShowVideoOverlay(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'videoOverlay') {
      closeVideoOverlay();
    }
  };

  return (
    <div className='container mt-10 md:mt-12 mx-auto'>
 {/* <div className="flex justify-center mb-2 ">
        <div className="h-3 w-1 mr-1 mt-0.5 bg-blue-500 rotate-12 text-center justify-center"></div>
        <div className="h-4 w-1 mr-1 mt-0.5 bg-red-500 rotate-12 text-center justify-center"></div>
        <div className="text-center font-semibold">ACE CMS</div>
      </div> */}
      <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 ">
         Let’s See ACE CMS in Action
        </h1>

      <div className="w-full  flex  justify-center container mx-auto p-4">
      <div className="relative w-full max-w-5xl">
        <Image
          src={CMS}
          alt="CMS"
          className="w-full md:h-[400px] rounded-xl shadow-lg object-cover"
        />
        <button
  onClick={handleDemoClick}
  className="absolute inset-0 m-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-full  transition-transform hover:scale-105 shadow-lg w-max h-max"
  aria-label="Watch demo video"
>
  <SiGoogledisplayandvideo360 className="text-2xl" />
  <span className="text-base font-semibold">Watch Demo</span>
</button>

      </div>

      {/* Video Overlay */}
      {showVideoOverlay && (
        <div
          id="videoOverlay"
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[300]"
          onClick={handleOverlayClick}
        >
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={closeVideoOverlay}
              className="absolute -top-10 right-0 text-white text-4xl hover:text-red-500 transition"
              aria-label="Close video"
            >
              <IoCloseCircleOutline />
            </button>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                className="w-full h-auto rounded-lg"
                controls
                playsInline
              >
                <source src="/videos/cms.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
