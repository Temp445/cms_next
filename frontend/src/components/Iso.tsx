'use client'

import React, { useState } from 'react';

import { IoShieldHalfOutline } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

interface IsoStandard {
  id: string;
  description: string;
}

const Iso: React.FC = () => {
  const [activeStandard, setActiveStandard] = useState<number | null>(null);

  const standards: IsoStandard[] = [
    { 
      id: "ISO 9001:2015",
      description: "ISO 9001:2015 is a global standard for quality management systems that helps organizations improve processes, meet customer needs, and ensure consistent product and service quality."
    },
    { 
      id: "21 CFR Parts 11 and 820",
      description: "21 CFR Parts 11 and 820 are FDA regulations that ensure quality and compliance in the medical device industry. Part 11 sets requirements for trustworthy electronic records and signatures, while Part 820 outlines quality system requirements to ensure medical devices are safe and effective."
    },
    { 
      id: "AS 9100",
      description: "AS9100 is an international quality management standard specifically for the aerospace, aviation, and defense industries. It builds on ISO 9001 and adds requirements for safety, reliability, and regulatory compliance in high-risk sectors."
    },
    { 
      id: "API Spec Q1 and Q2",
      description: "API Spec Q1 and Q2 are quality management standards by the American Petroleum Institute for the oil and gas industry. Q1 applies to equipment manufacturers, while Q2 focuses on service providers—both emphasize risk management, quality, and operational reliability."
    },
    { 
      id: "ISO 13485",
      description: "ISO 13485 is an international standard for quality management systems specific to the medical device industry. It ensures that organizations consistently meet regulatory requirements and produce safe, effective medical devices."
    },
    { 
      id: "IATF 16949",
      description: "IATF 16949 is a global quality management standard for the automotive industry. It focuses on defect prevention, continuous improvement, and reducing variation and waste in the supply chain."
    },
    { 
      id: "ISO 29001:2020",
      description: "ISO 29001:2020 is a quality management standard for the oil, gas, and petrochemical industries. It builds on ISO 9001 and adds sector-specific requirements to ensure consistent product and service quality, risk management, and regulatory compliance."
    },
    { 
      id: "ISO 17025",
      description: "ISO/IEC 17025 is an international standard that specifies the general requirements for the competence of testing and calibration laboratories. It ensures the accuracy, reliability, and consistency of lab results."
    }
  ];

  const handleCardClick = (index: number): void => {
    setActiveStandard(activeStandard === index ? null : index);
  };

  const closePopup = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setActiveStandard(null);
  };

  return (
    <div className="bg-white text-gray-900 p-6  relative container mx-auto mt-5 md:mt-12">
      <div className="flex items-center justify-center mb-8">
        <IoShieldHalfOutline className="text-blue-600 mr-1 md:mr-3 text-3xl md:text-4xl"  />
        <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          ACE CMS Compliance Suite
        </h1>
      </div>
      
      <p className="md:text-lg text-justify md:text-center text-gray-700 mb-8 max-w-3xl mx-auto">
        Our comprehensive management system ensures your organization meets every major quality standard with minimal effort.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {standards.map((standard, index) => (
          <div 
            key={index} 
            className={`border border-gray-200 rounded-lg p-4 bg-white hover:bg-gray-100 transition-colors duration-300 cursor-pointer relative shadow-lg ${activeStandard === index ? 'ring-1 ring-blue-200' : ''}`}
            onClick={() => handleCardClick(index)}
          >
          <div className=''> 
             <div className="flex items-center justify-center mb-2">
              <MdVerifiedUser className="text-green-400" size={20} />
            </div>
            <div className="text-center">
              <div className="font-bold md:text-xl text-blue-600">{standard.id}</div>
            </div>
            
            </div>

            
            {activeStandard === index && (
              <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white border border-blue-200 rounded-lg shadow-xl z-10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-blue-600">{standard.id}</h3>
                  <button 
                    className="text-gray-500 hover:text-gray-700" 
                    onClick={closePopup}
                  >
                    <IoCloseOutline size={18} />
                  </button>
                </div>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Iso;