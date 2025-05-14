'use client'

import React, { useState } from 'react';

// import { MdOutlineGeneratingTokens } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { SiMoneygram } from "react-icons/si";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
// Define types for features
interface Feature {
  name: string;
  standard: boolean;
  standardNote?: string;
  premium: boolean;
  premiumNote?: string;
}

// Define types for plans
interface Plan {
  name: string;
  desc: string;
  users: string;
  monthlyPerUser?: string;
  yearlyPerUser?: string;
  monthlyPrice: string;
  yearlyPrice: string;
  buttonText: string;
  buttonlink: string;
  buttonClass: string;
  highlighted: boolean;
  tag: string;
  trial?: string;
  card?: string;
  link?: string;
}

// Define props for FeatureIcon component
interface FeatureIconProps {
  available: boolean;
  limited?: boolean;
}

const PricingTable: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  // features-1
  const features1: Feature[] = [
    { name: 'Excel & Spreadsheet Import', standard: true, premium: true },
    { name: 'Lead Tracking', standard: true, standardNote: '(Up to 1500)', premium: true, premiumNote: '(Up to 3000)' },
    { name: 'Advanced Search & Filters', standard: true, premium: true },
    { name: 'Task Assignment & Tracking', standard: true, premium: true },
  ];

  //features-2
  const autoTriggerFeatures: Feature[] = [
    { name: 'Opportunity Tracking', standard: true, premium: true },
    { name: 'Quotation Generation', standard: true, premium: true },
    { name: 'Order Management', standard: true, premium: true },
  ];

  //features-3
  const features2: Feature[] = [
    { name: 'Customized Quote templates', standard: true, standardNote: '(1)', premium: true },
    { name: 'Sales Team Performance Monitoring', standard: true, premium: true },
    { name: 'Calendar & Activity Reminders', standard: true, premium: true },
    { name: 'One-Click Reports & Analytics', standard: true, standardNote: '(Up to 10)', premium: true },
    { name: 'Secure Cloud Storage', standard: true, premium: true },
    { name: 'Schedule Report', standard: false, premium: false },
  ];

  const plans: Plan[] = [
    { 
      name: 'Standard', 
      desc: 'Essential tools for small teams', 
      users: 'Up to 10 Users',
      monthlyPerUser: '( ₹120/User/month )',
      yearlyPerUser: '( ₹96/User/month )',
      monthlyPrice: '1,200', 
      yearlyPrice: '960', // 20% 
      buttonText: 'Subscribe Now', 
      buttonlink: '#',
      buttonClass: 'bg-none border text-black hover:bg-violet-500 hover:text-white',
      highlighted: false, 
      tag: '',
      trial: 'Free 30-day trial',
      card: '- no credit card required',
      link: '#'
    },
    { 
      name: 'Premium', 
      desc: 'Advanced features for growing teams', 
      users: 'Up to 20 Users',
      monthlyPerUser: '( ₹100/User/month )',
      yearlyPerUser: '( ₹80/User/month )',
      monthlyPrice: '2,000', 
      yearlyPrice: '1,600',  
      buttonText: 'Subscribe Now', 
      buttonlink: '#',
      buttonClass: 'bg-none border text-black hover:bg-violet-500 hover:text-white',  
      highlighted: true, 
      tag: 'Smart Choice',
      trial: 'Free 30-day trial',
      card: '- no credit card required',
      link: '#',
    },
    { 
      name: 'Enterprise', 
      desc: 'Comprehensive solution for large businesses', 
      users: '',
      monthlyPrice: 'Contact Us', 
      yearlyPrice: 'Contact Us',
      buttonText: 'Contact Sales',
      buttonlink: '#contact',
      buttonClass: 'bg-none border text-black hover:bg-gray-900 hover:text-white', 
      highlighted: false, 
      tag: '',
      trial: '',
      card: '',
      link: undefined
    },
  ];

  const FeatureIcon: React.FC<FeatureIconProps> = ({ available }) => {
    if (!available) return <span className="text-red-500 font-medium">✗</span>;
    return <span className="text-green-500 font-medium">✓</span>;
  };

  const renderFeatureList = (featureList: Feature[], planKey: string, planName: string) => {
    return featureList.map((feature, index) => {
      const isAvailable = feature[planKey as keyof Feature] as boolean;
      const noteKey = `${planKey}Note` as keyof Feature;
      const featureNote = feature[noteKey] as string | undefined;
      const isLimited = featureNote ? featureNote.includes('limited') : false;
      
      return (
        <div key={`${planName}-${index}`} className="flex items-start">
          <div className="mt-0.5 mr-3">
            <FeatureIcon available={isAvailable} limited={isLimited} />
          </div>
          <span className={`${isAvailable ? 'text-gray-800' : 'text-gray-500'}`}>
            {feature.name}
            {featureNote && <span className="text-gray-500 text-sm"> {featureNote}</span>}
          </span>
        </div>
      );
    });
  };

  const [expandedPlans, setExpandedPlans] = useState<{[key: string]: boolean}>({
    'Standard': false,
    'Premium': false,
    'Enterprise': false
  });


  const togglePlanFeatures = (planName: string) => {
    setExpandedPlans(prev => ({
      ...prev,
      [planName]: !prev[planName]
    }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-8 smm:px-6 md:px-4 py-16 mb-0 " id="pricing">
      
      <div className="text-center mb-10 md:mb-12">
        <div className='flex gap-2 text-center mx-auto w-full justify-center'>
          <span className='mt-1 text-2xl text-[#fd5a8b] lg:text-4xl'><SiMoneygram /></span>
        <h1 className=" text-2xl md:text-4xl font-bold bg-clip-text text-transparent  bg-gradient-to-bl from-violet-500  to-red-400 md:mb-4">Subscription Options</h1>
        </div>
        <p className="text-lg md:text-4xl text-gray-600">Power your growth with the right plan</p>
      </div>    

      <div className="flex justify-center mb-10">
        <div className=" rounded p-1 flex border border-violet-500 shadow-sm">
          <button 
            className={`px-6 py-2 text-sm font-medium rounded transition-all ${billingPeriod === 'monthly' ? 'bg-gradient-to-br from-violet-500  to-red-300  text-white shadow' : 'text-gray-700 hover:text-gray-900'}`} 
            onClick={() => setBillingPeriod('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`px-6 py-2 text-sm font-medium rounded transition-all flex items-center ${billingPeriod === 'yearly' ? 'bg-gradient-to-br from-violet-500  to-red-300  text-white shadow' : 'text-gray-700 hover:text-gray-900'}`} 
            onClick={() => setBillingPeriod('yearly')}
          >
            Yearly 
            <span className="ml-2 bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-medium">
              20% Off
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={`bg-white rounded flex flex-col border ${plan.highlighted ? 'border-violet-500 shadow-lg ' : 'border-gray-200 shadow'} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
          >
            {plan.tag && (
              <div className="absolute top-5 right-0">
                <span className="bg-gradient-to-bl from-violet-500 to-red-400 text-white px-3 py-1 rounded-l-full text-sm md:text-base font-medium shadow-sm">
                  {plan.tag}
                </span>
              </div>
            )}
            
            <div className="p-5 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900   mb-2">{plan.name}</h2>
              <p className="text-gray-600 mb-6">{plan.desc}</p>
              
              {plan.name !== 'Enterprise' ? (
                <div className="mb-2 flex  gap-1">
                  <div className="flex items-baseline">
                    <span className=" text-2xl md:text-4xl font-bold text-gray-900">₹{billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}</span>
                    <span className="text-base text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-sm text-violet-500 font-bold mt-2.5 md:mt-4.5">/billed {billingPeriod === 'monthly' ? 'monthly' : 'annually'}</p>
                </div>
              ) : (
                <div className="mb-2">
                  <span className="text-2xl font-bold text-gray-900">{plan.monthlyPrice}</span> 
                </div>
              )}
              
              <p className="text-gray-600 mb-6">{plan.users} <span className='text-indigo-700'>
                {plan.name !== 'Enterprise' && billingPeriod === 'monthly' ? plan.monthlyPerUser : plan.yearlyPerUser}
              </span></p>
              
              <a href={plan.buttonlink} className={`w-full ${plan.buttonClass} hidden py-3 rounded-lg font-medium shadow-sm hover:shadow transition-all duration-200 mb-8 text-center sm:block`}>
                {plan.buttonText}
              </a>




              <button
                className="  mx-auto w-full md:hidden bg-gradient-to-bl from-violet-500 to-red-300 text-white py-2 md:py-3 rounded-sm font-semibold flex items-center justify-center mt-8 mb-4"
                onClick={() => togglePlanFeatures(plan.name)}
              >
                Features List
                <LuSquareArrowOutUpRight  className="ml-3 text-lg text-white" />
              </button>
              
              {/* Features section visibility */}
              <div className={`md:block transition-all duration-300 ${expandedPlans[plan.name] ? 'block' : 'hidden'}`}>
              
              {plan.name !== 'Enterprise' ? (
                <>
                  <h3 className="font-medium text-gray-900 mb-4">Features included:</h3>
                  <div className="space-y-3">
                    {/* features-1 */}
                    {renderFeatureList(features1, plan.name.toLowerCase(), plan.name)}

                    {/*Feature-2  */}
                    {/* <div className="py-4 pl-3  rounded-lg my-4 border border-indigo-100 shadow-lg -ml-3 hover:shadow-xl">
                      <div className="flex items-center  mb-2">
                        <span className="text-indigo-700 font-bold flex"> <span className='mr-2 text-2xl'><MdOutlineGeneratingTokens /></span> Auto Creation Based On Trigger</span>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex-1">
                          {autoTriggerFeatures.map((feature, index) => {
                            const planKey = plan.name.toLowerCase();
                            const isAvailable = feature[planKey as keyof Feature] as boolean;
                            const noteKey = `${planKey}Note` as keyof Feature;
                            const featureNote = feature[noteKey] as string | undefined;
                            
                            return (
                              <div key={`auto-${index}`} className="flex items-start py-1">
                                <div className="mt-0.5 mr-3">
                                  <FeatureIcon available={isAvailable} />
                                </div>
                                <span className={`${isAvailable ? 'text-gray-800' : 'text-gray-500'}`}>
                                  {feature.name}
                                  {featureNote && <span className="text-gray-500 text-sm"> {featureNote}</span>}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div> */}

                    {/* features-3*/}
                    {renderFeatureList(features2, plan.name.toLowerCase(), plan.name)}

 <a href={plan.buttonlink} className={`w-full ${plan.buttonClass} flex mx-auto justify-center md:hidden py-2 rounded-lg font-medium shadow-sm hover:shadow transition-all duration-200 mb-8 text-center`}>
                {plan.buttonText}
              </a>


                    {/* {(plan.trial || plan.card) && plan.link && (
                      <div className='bg-blue-700 rounded  py-1'>   
                        <a href={plan.link} className="mt-6 pt-4">
                          {plan.trial && <p className="text-white font-bold text-center">{plan.trial}</p>}
                          {plan.card && <p className="text-white text-sm text-center">{plan.card}</p>}
                        </a> 
                      </div>
                    )} */}
                  </div>
                </>
              ) : (
                <div className="text-gray-800">
                  <p className="text-lg font-medium mb-4">Features included:</p>
                  <p className="mb-6"> <span className="text-green-500 font-medium mr-3">✓</span>Everything in the Premium plan.</p>
                  <p className="mb-6"> <span className="text-green-500 font-medium mr-3">✓</span>Fully customizable to your needs.</p>
                  <p className="mb-6"> <span className="text-green-500 font-medium mr-3">✓</span>Schedule Report</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600">Contact our sales team for custom solutions.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;