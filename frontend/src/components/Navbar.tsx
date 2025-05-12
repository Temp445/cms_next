'use client';
import { FC } from 'react';
import Link from 'next/link';
import { Star, DollarSign, Phone, FileText } from 'lucide-react';

const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between pt-6 pb-10">
      <div className="flex items-center">
        <div className="text-3xl font-bold text-gray-800 flex gap-1">
          <span className='bg-clip-text text-transparent bg-gradient-to-tr from-blue-800 to-red-500'>ACE </span>CMS
        </div>
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

      <div>
        <Link href="/signin" className="bg-gradient-to-r from-green-400 to-green-300 text-white px-6 py-2 rounded-md font-medium hover:opacity-90 transition">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
