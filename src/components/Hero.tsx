'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='min-h-screen bg-[#FAFAFA] flex items-center justify-center py-16 px-4'>
      <div className='container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* Left Section - Text Content */}
        <div className='space-y-6'>
          <h1 className='text-5xl lg:text-6xl font-bold text-gray-800 leading-tight'>
            Your Personal<br />
            <span className='text-gray-800'>AI Therapist</span>
          </h1>
          <p className='text-lg text-gray-600 leading-relaxed max-w-2xl'>
            A 24/7 AI therapy platform delivering real-time conversations, CBT-based guidance, and NLP-powered interactions with a human-like experience, designed for global scalability and equipped with a crisis mode for smart escalation to human support in high-risk situations.
          </p>
        </div>

        {/* Right Section - Logo and Buttons */}
        <div className='flex flex-col items-center justify-center space-y-8'>
          {/* Logo */}
          <div className='flex justify-center'>
            <Image
              src="/logobig.png"
              alt="MIND'S AI Logo"
              width={250}
              height={250}
              className="w-auto h-auto"
            />
          </div>

          {/* Call-to-Action Buttons */}
          <div className='flex flex-col gap-4 w-full max-w-sm'>
            <Link
              href="/chat"
              className='w-full bg-[#84B357] text-white py-4 px-6 rounded-lg font-semibold text-center hover:bg-[#709944] transition-colors shadow-md text-lg'
            >
              CHAT WITH ISKRITI
            </Link>
            <Link
              href="/exposure-therapy"
              className='w-full bg-[#84B357] text-white py-4 px-6 rounded-lg font-semibold text-center hover:bg-[#709944] transition-colors shadow-md text-lg'
            >
              EXPOSURE THERAPY
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero