'use client'

import React, { useState } from 'react';
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
    setCurrentTestimonial((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const { name, position, quote } = testimonials[currentTestimonial];

  return (
    <div className='bg-gradient-to-bl from-violet-200 to-blue-200 py-10'>
        <div className="max-w-4xl mx-auto p-6  bg-gray-100 rounded-lg shadow-lg">
      <div className="relative">
        <button 
          onClick={prevTestimonial} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button 
          onClick={nextTestimonial} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>


        <div className="text-center py-8 px-4">
          <Quote className="mx-auto mb-4 w-12 h-12 text-gray-300" />
          <p className="text-lg italic text-gray-700 mb-4">"{quote}"</p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-500">{position}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentTestimonial 
                ? 'bg-blue-500' 
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
    </div>
  );
}