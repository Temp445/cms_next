'use client'

import React, { useState } from 'react';
import { Shield, CheckCircle, X } from 'lucide-react';

interface IsoStandard {
  id: string;
  description: string;
}

const Iso: React.FC = () => {
  const [activeStandard, setActiveStandard] = useState<number | null>(null);

  const standards: IsoStandard[] = [
    { 
      id: "9001",
      description: "Specifies requirements for a quality management system. Organizations use this standard to demonstrate the ability to consistently provide products and services that meet customer and regulatory requirements."
    },
    { 
      id: "14001",
      description: "Provides a framework for organizations to protect the environment and respond to changing environmental conditions while maintaining a balance with socio-economic needs."
    },
    { 
      id: "27001",
      description: "Specifies the requirements for establishing, implementing, maintaining, and continually improving an information security management system within the context of the organization."
    },
    { 
      id: "45001",
      description: "Helps organizations provide safe and healthy workplaces by preventing work-related injury and ill health, and by proactively improving their OH&S performance."
    },
    { 
      id: "22301",
      description: "Specifies requirements to plan, establish, implement, operate, monitor, review, maintain and continually improve a documented management system to protect against disruptive incidents."
    },
    { 
      id: "20000",
      description: "Enables organizations to ensure their IT service management processes are aligned with the needs of the business and international best practices."
    },
    { 
      id: "13485",
      description: "Specifies requirements for a quality management system where an organization needs to demonstrate its ability to provide medical devices and related services."
    },
    { 
      id: "31000",
      description: "Provides principles, framework and a process for managing risk. It can be used by any organization regardless of its size, activity or sector."
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
    <div className="bg-white text-gray-900 p-6  relative container mx-auto mt-12">
      <div className="flex items-center justify-center mb-8">
        <Shield className="text-blue-600 mr-3" size={36} />
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          ACE CMS Compliance Suite
        </h1>
      </div>
      
      <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
        Our comprehensive management system ensures your organization meets every major quality standard with minimal effort.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {standards.map((standard, index) => (
          <div 
            key={index} 
            className={`border border-gray-200 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 cursor-pointer relative shadow-sm ${activeStandard === index ? 'ring-2 ring-teal-500' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="text-green-500" size={20} />
            </div>
            <div className="text-center">
              <div className="font-bold text-xl text-blue-600">ISO {standard.id}</div>
            </div>

            {/* The popup */}
            {activeStandard === index && (
              <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-xl z-10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-blue-600">ISO {standard.id}</h3>
                  <button 
                    className="text-gray-500 hover:text-gray-700" 
                    onClick={closePopup}
                  >
                    <X size={18} />
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