'use client'
import React from 'react'
import Image from 'next/image'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
import icon7 from '../assets/icon7.png'
import icon8 from '../assets/icon8.png'
import icon9 from '../assets/icon9.png'


const Features = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100 mt-20" id='features' >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 container mx-auto relative">

      {/* <div className="absolute bottom-20 right-0 w-24 h-24 rounded-full bg-blue-400 opacity-80 z-0"></div> */}
          


        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold  mb-4  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-600 "> What We Offer</h2>
          <p className="text-lg text-slate-600 max-w-5xl mx-auto">
            ACE CMS is a smart calibration management system that streamlines every step—from data import to audit prep—so you can stay compliant, save time, and keep every instrument tracked and up to date, wherever you are.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className="w-28  mr-4">
                <Image src={icon1} alt="" width={100} height={100} className=' ' />   
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Audit-Ready, Always</h3>
                <p className="text-slate-600">No more scrambling during audits—everything's stored right and shown instantly. Auditors will be impressed.</p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className="w-28 mr-4">
                <Image src={icon2} alt="" width={100} height={100} className=' ' />              
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Smart Internal Calibration – Parameter by Parameter</h3>
                <p className="text-slate-600">Do internal calibration with auto-filled results—no more typing the same thing again and again.</p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className=" w-28 mr-4 -mt-2">
                <Image src={icon3} alt="" width={100} height={100}  />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">MSA 4th Edition Done in Minutes</h3>
                <p className="text-slate-600">Manual MSA takes hours—ACE CMS does it in minutes, fully industry compliant.</p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className=" w-28 mr-4">
                <Image src={icon4} alt="" width={100} height={100} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">QR / Bar Code Stickers for Every Instrument</h3>
                <p className="text-slate-600">Generate, print, and stick codes—just scan to instantly view all instrument details. No more searching.</p>
              </div>
            </div>
          </div>

          {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className="w-28 mr-4">
                <Image src={icon5} alt="" width={100} height={100}  />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Android App for On-the-Go Access</h3>
                <p className="text-slate-600">Check calibration info anytime, anywhere—right from your mobile.</p>
              </div>
            </div>
          </div>

          {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className="w-28 mr-4">
                <Image src={icon6} alt="" width={100} height={100}/>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Live Calibration Status Dashboard</h3>
                <p className="text-slate-600">Get a bird’s-eye view of your company’s entire calibration status in one clean dashboard.</p>
              </div>
            </div>
          </div>

            {/* Feature 7 */}
            <div className="bg-white rounded-xl shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className="w-28 mr-4">
                <Image src={icon7} alt="" width={100} height={100}/>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Seamless Excel Data Migration</h3>
                <p className="text-slate-600">We handle the Excel import for you—zero stress, zero data loss.</p>
              </div>
            </div>
          </div>

            {/* Feature 8 */}
            <div className="bg-white rounded-xl shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className="w-28 mr-4">
                <Image src={icon8} alt="" width={100} height={100}/>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">All the Reports You’ll Ever Need</h3>
                <p className="text-slate-600">Calibration reports, certificates, due lists—you name it, ACE CMS has it.</p>
              </div>
            </div>
          </div>

          {/* Feature 9 */}
            <div className="bg-white rounded-xl shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100">
            <div className="flex items-start">
              <div className="w-28 mr-4">
                <Image src={icon9} alt="" width={100} height={100} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">100% Cloud-Based, No Data Loss</h3>
                <p className="text-slate-600">Your data is safely stored in the cloud—always accessible, always secure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features