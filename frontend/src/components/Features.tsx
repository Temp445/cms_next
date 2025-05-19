


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


const features = [
  {
    icon: icon1,
    title: 'Audit-Ready, Always',
    description: "No more scrambling during audits—everything's stored right and shown instantly. Auditors will be impressed.",
  },
  {
    icon: icon2,
    title: 'Smart Internal Calibration – Parameter by Parameter',
    description: 'Do internal calibration with auto-filled results—no more typing the same thing again and again.',
  },
  {
    icon: icon3,
    title: 'MSA 4th Edition Done in Minutes',
    description: 'Manual MSA takes hours—ACE CMS does it in minutes, fully industry compliant.',
  },
  {
    icon: icon4,
    title: 'QR / Bar Code Stickers for Every Instrument',
    description: 'Generate, print, and stick codes—just scan to instantly view all instrument details. No more searching.',
  },
  {
    icon: icon5,
    title: 'Android App for On-the-Go Access',
    description: 'Check calibration info anytime, anywhere—right from your mobile.',
  },
  {
    icon: icon6,
    title: 'Live Calibration Status Dashboard',
    description: 'Get a bird’s-eye view of your company’s entire calibration status in one clean dashboard.',
  },
  {
    icon: icon7,
    title: 'Seamless Excel Data Migration',
    description: 'We handle the Excel import for you—zero stress, zero data loss.',
  },
  {
    icon: icon8,
    title: 'All the Reports You’ll Ever Need',
    description: 'Calibration reports, certificates, due lists—you name it, ACE CMS has it.',
  },
  {
    icon: icon9,
    title: '100% Cloud-Based, No Data Loss',
    description: 'Your data is safely stored in the cloud—always accessible, always secure.',
  },
]

const Features = () => {
  return (
    <div className="py-10 md:py-16 bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100 mt-12 md:mt-20" id="features">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-600">
            What We Offer
          </h2>
          <p className="md:text-lg text-slate-600 max-w-5xl mx-auto">
            ACE CMS is a smart calibration management system that streamlines every step—from data import to audit prep—so you can stay compliant, save time, and keep every instrument tracked and up to date, wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-slate-100"
            >
              <div className="flex items-start">
                <div className="w-24 md:w-28 mr-4">
                  <Image src={feature.icon} alt={feature.title} width={100} height={100} />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm md:text-base">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
