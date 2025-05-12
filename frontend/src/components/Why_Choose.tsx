'use client'

import React from 'react'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import CMS from '../assets/CMS3.png'
import icon from '../assets/icon.png'
import { useRouter } from 'next/navigation'


const Why_Choose = () => {
 
  const router = useRouter();

  const navigateToSection = ()=>{
    router.push('/#features')
  }

  return (
    <section className="py-16 container mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full md:w-5/12 relative">
            <div className="relative z-10 bg-white p-1 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="mx-auto  relative">
                <Image 
                  src={CMS} 
                  alt="ACE CMS" 
                  className="object-cover w-full h-full rounded-lg" 
                />
<div className="absolute w-16 h-16 rounded-full bg-gray-700 z-20 -right-5 -bottom-5 flex items-center justify-center">
  <div className='absolute bg-white w-12 h-12 rounded-full z-30 flex items-center justify-center'><Image src={icon} alt="iso" className="w-10 h-10 z-40 -rotate-12 absolute" /></div>
</div>
              </div>
            </div>
          
            {/* <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full opacity-70 z-0"></div>    */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-100 rounded-full opacity-70 z-0"></div>
          </div>
          
          {/* Content section */}
          <div className="w-full md:w-7/12 space-y-6">
            <div className="inline-block bg-blue-50 text-blue-800 px-4 py-1 rounded-full font-medium">
              Why Choose Us?
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
               ACE CMS – Smart <span className='bg-clip-text text-transparent bg-gradient-to-bl from-indigo-600 to-red-300'>Calibration Management</span>Made Simple
              <span className="text-blue-600"></span>
            </h2>
            
            <p className="text-lg text-gray-600">
              At <strong>ACE CMS</strong>, we don't just help you manage calibration—we help you master it. 
              Here's why leading companies trust us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {[
                "Audit-ready, zero stress.",
                "Calibrate smarter, not harder.",
                "MSA done in minutes—not hours.",
                "Scan it. Know it. Done.",
                "Your calibration, in your pocket."
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-violet-100 border border-gray-100"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <button onClick={navigateToSection} className="mt-6 bg-gradient-to-tr from-blue-500 to-violet-400 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-3xl shadow-md transition-colors duration-300 flex items-center">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why_Choose