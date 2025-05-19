
import Image from 'next/image';
import React from 'react';
import cms from '../assets/CMS1.png'
import Link from 'next/link';


const Scenario = () => {


  return (
    <div className="flex w-full min-h-fit bg-gradient-to-br from-blue-300 to-orange-200 items-center justify-center py-12 px-4 sm:px-6 lg:px-20 mt-2  md:mt-10">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl p-4 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center md:items-start relative">
        <div className='hidden w-32 h-3 inset-0 lg:flex mx-auto absolute bg-gradient-to-bl from-blue-200 to-violet-300  rounded-b-lg '></div>
        <div className="lg:w-1/2 mb-6 md:mb-0 md:pr-8 order-2 lg:order-1">
          <h1 className="text-2xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold mb-4 text-gray-800">
            ACE Calibration Management System
          </h1>
          <p className=" md:text-lg text-justify sm:text-xl lg:text-sm xl:text-xl text-gray-600 leading-relaxed md:mt-5">
            Imagine your next audit — no more paper trails, no more scrambling for certificates. 
            With <span className="font-semibold text-blue-500">ACE CMS</span>, everything you need is ready at a click, 
            and your auditors are impressed. Your team stays calm, focused, and confident that everything is in order.
          </p>
<div className='mt-6'>
          <Link href="#contact"  className='mt-6 p-2 rounded-lg bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-red-600 md:text-lg lg:text-sm xl:text-lg font-semibold border border-violet-300 shadow-lg hover:scale-105'>Book A Demo</Link>

</div>
        </div>

        <div className="mb-5 lg:w-1/2 order-1 md:mb-0 lg:order-2 md:pb-10">
     <Image src={cms} alt="cms" className='rounded-lg md:shadow-xl shadow-indigo-300' />
        </div>
      </div>
    </div>
  );
};

export default Scenario;
