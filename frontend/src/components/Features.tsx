'use client'
import React from 'react'
import Image from 'next/image'
import icon1 from '../assets/icon1.png'

const Features = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-violet-200 via-blue-50 to-orange-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">What We Offer</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className=" mr-4">
                <Image src={icon1} alt="" width={100} height={100} className='w-16 h-10 ' />
               
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Audit-Ready, Always</h3>
                <p className="text-slate-600">No more scrambling during audits—everything's stored right and shown instantly. Auditors will be impressed.</p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className="mt-1 mr-4">
               
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Smart Internal Calibration – Parameter by Parameter</h3>
                <p className="text-slate-600">Do internal calibration with auto-filled results—no more typing the same thing again and again.</p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className="mt-1 mr-4">
               
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">MSA 4th Edition Done in Minutes</h3>
                <p className="text-slate-600">Manual MSA takes hours—ACE CMS does it in minutes, fully industry compliant.</p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className="mt-1 mr-4">
               
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">QR / Bar Code Stickers for Every Instrument</h3>
                <p className="text-slate-600">Generate, print, and stick codes—just scan to instantly view all instrument details. No more searching.</p>
              </div>
            </div>
          </div>

          {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className="mt-1 mr-4">
               
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Android App for On-the-Go Access</h3>
                <p className="text-slate-600">Check calibration info anytime, anywhere—right from your mobile.</p>
              </div>
            </div>
          </div>

          {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className="mt-1 mr-4">
               
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Live Calibration Status Dashboard</h3>
                <p className="text-slate-600">Get a bird’s-eye view of your company’s entire calibration status in one clean dashboard.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features