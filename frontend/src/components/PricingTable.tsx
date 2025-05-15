'use client';

import React, { useState } from 'react';
import { SiMoneygram } from 'react-icons/si';
import { LuSquareArrowOutUpRight } from 'react-icons/lu';


interface Feature {
  name: string;
  Basic: boolean;
  BasicNote?: string;
  BasicPlus: boolean;
  BasicPlusNote?: string;
  premium: boolean;
  premiumNote?: string;
}

interface Plan {
  name: string;
  desc: string;
  tools: string;
  PerUser?: string;
  Price: string;
  buttonText: string;
  buttonlink: string;
  buttonClass: string;
  highlighted: boolean;
  tag: string;
}

interface FeatureIconProps {
  available: boolean;
}

const PricingTable: React.FC = () => {
  const features: Feature[] = [
    { name: 'Excel Data Migration', Basic: true, BasicPlus: true, premium: true },
    { name: 'Audit-Ready Storage', Basic: true, BasicNote: '', BasicPlus: true, BasicPlusNote: '', premium: true, premiumNote: '' },
    { name: 'Smart Internal Calibration', Basic: true, BasicPlus: true, premium: true },
    { name: 'MSA 4th Edition Automation', Basic: false, BasicPlus: true, premium: true },
    { name: 'QR / Barcode Sticker Generation', Basic: false, BasicNote: '', BasicPlus: true, BasicPlusNote: '', premium: true },
    { name: 'Android Mobile App Access', Basic: true, BasicPlus: true, premium: true },
    { name: 'Live Calibration Status Dashboard', Basic: false, BasicPlus: true, premium: true },
    { name: 'Calibration Reports & Certificates', Basic: true, BasicNote: '', BasicPlus: true, BasicPlusNote: '', premium: true },
    { name: 'Secure Cloud Storage', Basic: true, BasicPlus: true, premium: true },
  ];



  const plans: Plan[] = [
    {
      name: 'Basic',
      desc: 'Best for calibration beginners',
      tools: 'Up to 250 tools',
      PerUser: '(100 Users)',
      Price: '50,000',
      buttonText: 'Subscribe Now',
      buttonlink: '#',
      buttonClass: 'bg-none border text-black hover:bg-blue-500 hover:text-white',
      highlighted: false,
      tag: '',
    },
    {
      name: 'Basic Plus',
      desc: 'For growing teams needing automation',
      tools: 'Up to 500 tools',
      PerUser: '(1,000 Users)',
      Price: '60,000',
      buttonText: 'Subscribe Now',
      buttonlink: '#',
      buttonClass: 'bg-none border text-black hover:bg-violet-500 hover:text-white',
      highlighted: true,
      tag: 'Smart Choice',
    },
    {
      name: 'Premium',
      desc: 'For large teams needing full control',
      tools: 'Up to 800 tools',
      PerUser: '(5,000 Users)',
      Price: '80,000',
      buttonText: 'Subscribe Now',
      buttonlink: '#',
      buttonClass: 'bg-none border text-black hover:bg-orange-600 hover:text-white',
      highlighted: false,
      tag: '',
    },
  ];

  const FeatureIcon: React.FC<FeatureIconProps> = ({ available }) => (
    <span className={`font-medium ${available ? 'text-green-500' : 'text-red-500'}`}>{available ? '✓' : '✗'}</span>
  );

  const getFeatureKey = (planName: string) => {
    if (planName === 'Basic Plus') return 'BasicPlus';
    if (planName === 'Premium') return 'premium';
    return 'Basic';
  };

  const renderFeatureList = (features: Feature[], key: string, planName: string) =>
    features.map((feature, i) => {
      const isAvailable = feature[key as keyof Feature] as boolean;
      const note = feature[`${key}Note` as keyof Feature] as string | undefined;
      return (
        <div key={`${planName}-${i}`} className="flex items-start">
          <div className="mt-0.5 mr-3">
            <FeatureIcon available={isAvailable} />
          </div>
          <span className={isAvailable ? 'text-gray-800' : 'text-gray-500'}>
            {feature.name}
            {note && <span className="text-gray-500 text-sm"> {note}</span>}
          </span>
        </div>
      );
    });

  const [expandedPlans, setExpandedPlans] = useState<{ [key: string]: boolean }>({});

  const togglePlanFeatures = (name: string) => {
    setExpandedPlans(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-8 sm:px-6 md:px-4 py-16" id="pricing">
      <div className="text-center mb-10">
        <div className="flex gap-2 justify-center">
          <span className="mt-1 text-2xl text-[#fd5a8b] lg:text-4xl">
            <SiMoneygram />
          </span>
          <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-bl from-violet-500 to-red-400">
            Subscription Options
          </h1>
        </div>
        <p className="text-lg md:text-3xl text-gray-600 md:mt-3">Power your growth with the right plan</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-2">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`relative bg-white rounded border ${plan.highlighted ? 'border-violet-500 shadow-lg' : 'border-gray-200 shadow'} hover:shadow-xl transition-all`}
          >
            {plan.tag && (
              <div className="absolute top-5 right-0">
                <span className="bg-gradient-to-bl from-violet-500 to-red-400 text-white px-3 py-1 rounded-l-full text-sm font-medium shadow-sm">
                  {plan.tag}
                </span>
              </div>
            )}
            <div className="p-5 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
              <p className="text-gray-600 mb-6">{plan.desc}</p>
              <div className="mb-2 flex gap-1 items-baseline">
                <span className="text-2xl xl:text-4xl font-bold text-gray-900">₹{plan.Price}</span>
                <span className="text-base text-gray-500 ml-2">/Yearly</span>
              </div>
              <p className="text-gray-600 mb-6">
                {plan.tools} <span className="text-indigo-700">{plan.PerUser}</span>
              </p>
              <a
                href={plan.buttonlink}
                className={`${plan.buttonClass} hidden w-full py-2 xl:py-3 rounded-lg font-medium shadow-sm hover:shadow text-center sm:block`}
              >
                {plan.buttonText}
              </a>

              <button
                className="w-full md:hidden bg-gradient-to-bl from-violet-500 to-red-300 text-white py-2 rounded-sm font-semibold flex items-center justify-center mt-8 mb-4"
                onClick={() => togglePlanFeatures(plan.name)}
              >
                Features List <LuSquareArrowOutUpRight className="ml-3 text-lg" />
              </button>

              <div className={`transition-all duration-300 ${expandedPlans[plan.name] ? 'block' : 'hidden'} md:block`}>
                <h3 className="font-medium text-gray-900 mb-4 md:mt-4">Key features :</h3>
                <div className="space-y-3">
                  {renderFeatureList(features, getFeatureKey(plan.name), plan.name)}
                  <a
                    href={plan.buttonlink}
                    className={`${plan.buttonClass} flex sm:hidden justify-center w-full py-2 rounded-lg font-medium shadow-sm hover:shadow text-center mb-5`}
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
