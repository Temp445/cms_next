'use client';
import { FC, useState } from 'react';
import Link from 'next/link';
import { Star, DollarSign, Phone, FileText, Menu, X, Calendar } from 'lucide-react';

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between md:pt-6 md:pb-10 px-4 md:px-6 relative">
        <div className="md:flex items-center hidden ">
          <div className="text-2xl md:text-3xl font-bold text-gray-800 flex gap-1">
            <span className='bg-clip-text text-transparent bg-gradient-to-tr from-blue-800 to-red-500'>ACE </span>CMS
          </div>
        </div>

        <div className="hidden md:block lg:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      
        <div className="hidden md:flex items-center space-x-2">
          <Link href="#feature" className="flex items-center text-gray-800 hover:text-white text-base font-semibold relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-purple-600">
            <Star className="w-4 h-4 mr-2" />
            Feature
          </Link>

          <Link href="#pricing" className="flex items-center text-gray-800 hover:text-white text-base font-semibold relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-purple-600">
            <DollarSign className="w-4 h-4 mr-2" />
            Pricing
          </Link>

          <Link href="#contact" className="flex items-center text-gray-800 hover:text-white text-base font-semibold relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-purple-600">
            <Phone className="w-4 h-4 mr-2" />
            Contact
          </Link>

          <Link href="#brochure" className="flex items-center text-gray-800 hover:text-white text-base font-semibold relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-purple-600">
            <FileText className="w-4 h-4 mr-2" />
            Brochure
          </Link>
        </div>


        {isMenuOpen && (
          <div className="absolute bottom- md:top-full left-0 right-0 bg-white shadow-lg rounded-b-lg py-4 px-6 z-50 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link href="#feature" className="flex items-center text-gray-800 hover:text-purple-600 text-base font-semibold">
                <Star className="w-4 h-4 mr-2" />
                Feature
              </Link>

              <Link href="#pricing" className="flex items-center text-gray-800 hover:text-purple-600 text-base font-semibold">
                <DollarSign className="w-4 h-4 mr-2" />
                Pricing
              </Link>

              <Link href="#contact" className="flex items-center text-gray-800 hover:text-purple-600 text-base font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Link>

              <Link href="#brochure" className="flex items-center text-gray-800 hover:text-purple-600 text-base font-semibold">
                <FileText className="w-4 h-4 mr-2" />
                Brochure
              </Link>
            </div>
          </div>
        )}

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/signin" className="bg-gradient-to-r from-green-400 to-green-300 text-white px-6 py-2 rounded-md font-medium hover:opacity-90 transition">
            Sign In
          </Link>
        </div>
      </nav>


      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-between items-center py-3 md:hidden z-50">
        <button 
          onClick={toggleMenu}
          className="flex flex-col items-center justify-center text-gray-100"
        >
<div className='w-10 h-10  bg-gradient-to-r from-gray-100 to-gray-400 flex items-center justify-center'>
          <Menu className="w-6 h-6" />
  
  </div>        </button>

        <Link href="/signin" className="flex flex-col items-center justify-center text-white w-full">
          <span className="w-full h-10  bg-gradient-to-r from-red-500 to-red-400 flex items-center justify-center">Sign In</span>
        </Link>

        <Link href="/demo" className="flex flex-col items-center justify-center text-gray-600">
          <div className="w-10 h-10  bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
        </Link>
      </div>


      <div className="h-16 md:hidden"></div>
    </>
  );
};

export default Navbar;