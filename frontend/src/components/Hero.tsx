'use client'

import Navbar from './Navbar';

const Hero = () => {
  
  return (
  <div className='bg-gray-100 relative min-h-fit overflow-hidden '>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-100 to-purple-200 z-0"></div>

    
      <div className="relative min-h-fit overflow-hidden bg-gray-100 container mx-auto ">

      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-100 to-purple-200 z-0"></div>
 
      <div className="absolute top-20 right-40 w-64 h-64 rounded-full bg-cyan-400 opacity-80 blur-lg z-0 animate-pulse "></div>
      <div className="absolute top-40 left-10 w-16 h-16  border border-purple-600 transform rotate-45 opacity-70 z-0"></div>
      <div className="absolute bottom-20 left-40 w-32 h-8 rounded-full bg-green-400 opacity-60 z-0"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-blue-400 opacity-80 z-0"></div>
      <div className="absolute top-32 right-32 w-4 h-4 rounded-full border border-green-500 z-0"></div>
      <div className="absolute bottom-60 left-20 w-32 h-12 rounded-full bg-cyan-300 opacity-70 z-0"></div>
      <div className="absolute top-80 left-60 w-12 h-12 rounded-full bg-cyan-400 opacity-80 z-0"></div>
      <div className="absolute bottom-10 right-60 w-16 h-16 rounded-full bg-blue-500 opacity-70 z-0"></div>
      <div className="absolute right-20 bottom-52 w-16 h-16 rounded-full bg-cyan-500 opacity-70 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 container ">
      
        <Navbar/>

        <div className="py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Streamline Your Calibration Processes with <span className='bg-clip-text text-transparent bg-gradient-to-bl from-blue-600 via-red-300 to-purple-400'>ACE CMS</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Efficient, compliant, and cloud-based calibration management tailored for manufacturing excellence.
          </p>
          
          <div className="mt-10">
            <button className="border border-cyan-400 text-cyan-500 hover:bg-cyan-500 hover:text-white px-10 py-3 rounded-md font-medium transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero;