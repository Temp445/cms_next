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

}

interface Plan {
  name: string;
  desc: string;
  tools?: string;
  Price?: string;
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
    { name: 'Excel Data Migration', Basic: true, BasicPlus: true },
    { name: 'Audit-Ready Storage', Basic: true, BasicNote: '', BasicPlus: true, BasicPlusNote: '' },
    { name: 'Smart Internal Calibration', Basic: true, BasicPlus: true },
    { name: 'MSA 4th Edition Automation', Basic: false, BasicPlus: true },
    { name: 'QR / Barcode Sticker Generation', Basic: false, BasicNote: '', BasicPlus: true, BasicPlusNote: '' },
    { name: 'Android Mobile App Access', Basic: true, BasicPlus: true },
    { name: 'Live Calibration Status Dashboard', Basic: false, BasicPlus: true },
    { name: 'Calibration Reports & Certificates', Basic: true, BasicNote: '', BasicPlus: true, BasicPlusNote: '' },
    { name: 'Secure Cloud Storage', Basic: true, BasicPlus: true },
  ];

  const plans: Plan[] = [
    {
      name: 'Basic',
      desc: 'Best for calibration beginners',
      buttonText: 'Subscribe Now',
      buttonlink: '#',
      buttonClass: 'bg-none border text-black hover:bg-blue-500 hover:text-white',
      highlighted: false,
      tag: '',
    },
    {
      name: 'Basic Plus',
      desc: 'For growing teams needing automation',
      buttonText: 'Subscribe Now',
      buttonlink: '#',
      buttonClass: 'bg-none border text-black hover:bg-violet-500 hover:text-white',
      highlighted: true,
      tag: 'Smart Choice',
    },
    {
      name: 'Pro',
      desc: 'For large teams requiring full control',
      buttonText: 'Subscribe Now',
      buttonlink: '#',
      buttonClass: 'bg-none border text-black hover:bg-orange-600 hover:text-white',
      highlighted: false,
      tag: 'Full Access',
    },
  ];

  const [sliderValues, setSliderValues] = useState<{ [key: string]: number }>({
    Basic: 100,
    'Basic Plus': 100,
    Pro: 100,
  });

  const [expandedPlans, setExpandedPlans] = useState<{ [key: string]: boolean }>({});

  const togglePlanFeatures = (name: string) => {
    setExpandedPlans(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const FeatureIcon: React.FC<FeatureIconProps> = ({ available }) => (
    <span className={`font-medium ${available ? 'text-green-500' : 'text-red-500'}`}>{available ? '✓' : '✗'}</span>
  );

  const getFeatureKey = (planName: string) => {
    if (planName === 'Basic Plus') return 'BasicPlus';
    if (planName === 'Pro') return 'Pro';
    return 'Basic';
  };

  const FeatureList = (features: Feature[], key: string, planName: string) =>
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

  const calculatePrice = (plan: string, value: number): number => {
    const baseValues = {
      Basic: 42000,
      'Basic Plus': 54000,
      Pro: 66000,
    };

    const tiers = {
      Basic: [
        { min: 101, max: 250, perStep: 1750 },
        { min: 251, max: 500, perStep: 750 },
        { min: 501, max: 750, perStep: 625 },
        { min: 751, max: 1000, perStep: 500 },
      ],
      'Basic Plus': [
        { min: 101, max: 250, perStep: 2250 },
        { min: 251, max: 500, perStep: 1250 },
        { min: 501, max: 750, perStep: 1000 },
        { min: 751, max: 1000, perStep: 875 },
      ],
      Pro: [
        { min: 101, max: 250, perStep: 2750 },
        { min: 251, max: 500, perStep: 1750 },
        { min: 501, max: 750, perStep: 1500 },
        { min: 751, max: 1000, perStep: 1375 },
      ],
    };

    const basePrice = baseValues[plan as keyof typeof baseValues];
    if (value <= 100) return basePrice;

    let totalAdd = 0;
    for (const tier of tiers[plan as keyof typeof tiers]) {
      if (value > tier.min) {
        const upper = Math.min(value, tier.max);
        const stepCount = Math.floor((upper - Math.max(tier.min, 101) + 1) / 25);
        totalAdd += stepCount * tier.perStep;
      }
    }

    return basePrice + totalAdd;
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
              <p className="text-gray-600 mb-4">{plan.desc}</p>
             
              <div className="mb-4">

                <div className="text-xl font-semibold mt-2 mb-2 text-gray-800">
                  ₹{calculatePrice(plan.name, sliderValues[plan.name])}{' '}
                  <span className="text-sm text-gray-500">/Yearly</span>
                </div>
                 {/* Slider */}
                <input
                  type="range"
                  min={100}
                  max={1000}
                  step={25}
                  value={sliderValues[plan.name]}
                  onChange={(e) =>
                    setSliderValues(prev => ({ ...prev, [plan.name]: parseInt(e.target.value) }))
                  }
                  className="w-full accent-violet-500"
                />
             <label className="text-sm text-gray-600 block mb-1">
                    Instrument Range: {sliderValues[plan.name]}
                </label>
              </div>

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
                  {plan.name === 'Pro' ? (
                    <p className="text-gray-700">
                      Includes all features in <strong>Basic Plus</strong> + <strong> MSA 4th Edition support</strong> and enterprise-grade control.
                    </p>
                    
                  ) : (
                    <>
                      {FeatureList(features, getFeatureKey(plan.name), plan.name)}
                    </>
                  )}

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
