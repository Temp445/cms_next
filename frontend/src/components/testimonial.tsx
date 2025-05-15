'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, Tech Innovations',
    quote: 'This product has completely transformed our workflow and increased our productivity by 200%.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Lead Developer, CodeCraft Solutions',
    quote: 'An incredible tool that seamlessly integrates with our existing systems. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Marketing Director, Global Brands',
    quote: 'The intuitive design and powerful features make this the best solution we\'ve ever used.',
    rating: 4
  }
];

export default function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const { name, position, quote } = testimonials[currentTestimonial];

  return (
    <div className='bg-gradient-to-bl from-violet-200 to-blue-200 py-10 px-2 md:px-10'>
      <h1 className='text-center text-2xl md:text-3xl font-bold pb-5 bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-blue-800'>Authentic Customer Feedback</h1>
      <div className="max-w-4xl mx-auto p-4 md:p-6 bg-gray-100 rounded-lg shadow-lg">
        <div className="relative">
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full md:p-2"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full md:p-2"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="text-center py-2 md:py-8 px-4">
            <Quote className="mx-auto mb-4 md:w-12 md:h-12 text-gray-300" />
            <p className="text-sm md:text-lg lg:text-xl text-gray-700 mb-4 px-1 md:px-5">&quot;{quote}&quot;</p>
            <div>
              <h3 className="text-base md:text-xl font-semibold text-gray-900">{name}</h3>
              <p className="text-gray-500 text-xs md:text-base">{position}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full ${
                index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
