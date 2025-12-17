'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="w-full bg-white px-6 py-4 shadow-sm  ">
      {/* Logo */}
<div className='container mx-auto flex items-center justify-between '>
<div className="flex items-center">
        <Link href="/" className="flex items-center">
       <h2 className="text-2xl font-bold font-mon">MIND&apos;S <span className='text-[#84B357]'>AI</span></h2>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <Link 
          href="/about" 
          className="text-[#2C5F5D] font-medium hover:text-[#1a3d3b] transition-colors"
        >
          ABOUT
        </Link>
        <Link 
          href="/chat" 
          className="text-[#2C5F5D] font-medium hover:text-[#1a3d3b] transition-colors"
        >
          CHAT
        </Link>
        <Link 
          href="/vr-integration" 
          className="text-[#2C5F5D] font-medium hover:text-[#1a3d3b] transition-colors"
        >
          VR INTEGRATION
        </Link>
      </div>

      {/* Right Side - Buttons and Profile */}
      <div className="flex items-center gap-4">
        {/* Signup and Login Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/signup"
            className="bg-[#4CAF50] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#45a049] transition-colors shadow-md"
          >
            SIGNUP
          </Link>
          <Link
            href="/login"
            className="bg-[#4CAF50] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#45a049] transition-colors shadow-md"
          >
            LOGIN
          </Link>
        </div>

        {/* Profile Icon */}
        <div className="ml-2">
          <Link href="/dashboard">
            <div className="w-12 h-12 rounded-full bg-[#FF6B6B] flex items-center justify-center overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/dp.png"
                alt="Profile"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
</div>
    </nav>
  )
}
