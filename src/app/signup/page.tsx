'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar2 from '@/components/Navbar2'
import Footer from '@/components/Footer'

const SignupPage = () => {
  const [signupMethod, setSignupMethod] = useState<'email' | 'phone'>('email')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [showOtpPassword, setShowOtpPassword] = useState(false)
  const [showOtpConfirmPassword, setShowOtpConfirmPassword] = useState(false)

  return (
    <>
      <Navbar2/>
      <div className='min-h-screen bg-white flex items-center justify-center py-12 px-4'>
        <div className='container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Section - Logo */}
          <div className='flex flex-col items-center justify-center'>
            <Image
              src="/logobig.png"
              alt="MIND'S AI Logo"
              width={300}
              height={300}
              className="w-auto h-auto mb-6"
            />
            <div className='text-center'>
              <h1 className='text-3xl font-bold font-mon'>
                <span className='text-[#2C5F5D]'>MIND&apos;S</span>{' '}
                <span className='text-[#84B357]'>AI</span>
              </h1>
            </div>
          </div>

          {/* Right Section - Signup Form */}
          <div className='flex items-center justify-center'>
            <div className='w-full max-w-md bg-white rounded-2xl shadow-lg p-8'>
              {/* Title */}
              <h2 className='text-4xl font-bold font-mon text-[#84B357] mb-2'>Signup</h2>
              <p className='text-sm text-gray-600 mb-6'>Create your account to get started</p>

              {/* Signup Method Toggle */}
              <div className='flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg'>
                <button
                  type='button'
                  onClick={() => {
                    setSignupMethod('email')
                    setOtpVerified(false)
                  }}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                    signupMethod === 'email'
                      ? 'bg-[#84B357] text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Email
                </button>
                <button
                  type='button'
                  onClick={() => {
                    setSignupMethod('phone')
                    setOtpVerified(false)
                  }}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                    signupMethod === 'phone'
                      ? 'bg-[#84B357] text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Phone
                </button>
              </div>

              {/* Form */}
              <form className='space-y-6'>
                {signupMethod === 'email' ? (
                  <>
                    {/* User ID Input */}
                    <div>
                      <label htmlFor="user-id" className='block text-sm font-medium text-gray-700 mb-2'>
                        Enter your user-id
                      </label>
                      <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                          <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                          </svg>
                        </div>
                        <input
                          type='text'
                          id="user-id"
                          placeholder='Your user ID'
                          className='w-full pl-10 pr-4 py-3 border-2 border-[#84B357] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-transparent text-gray-700 placeholder-gray-400'
                        />
                      </div>
                    </div>

                    {/* Phone/Email Input */}
                    {/* <div>
                      <label htmlFor="phone-email" className='block text-sm font-medium text-gray-700 mb-2'>
                        Phone/Email
                      </label>
                      <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                          <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                          </svg>
                        </div>
                        <input
                          type='text'
                          id="phone-email"
                          placeholder='Enter your Phone number/email-id'
                          className='w-full pl-10 pr-4 py-3 border-2 border-[#84B357] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-transparent text-gray-700 placeholder-gray-400'
                        />
                      </div>
                    </div> */}

                    {/* Password Input */}
                    <div>
                      <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-2'>
                        Enter password
                      </label>
                      <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                          <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                          </svg>
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          placeholder='Your password'
                          className='w-full pl-10 pr-10 py-3 border-2 border-[#84B357] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-transparent text-gray-700 placeholder-gray-400'
                        />
                        <button
                          type='button'
                          onClick={() => setShowPassword(!showPassword)}
                          className='absolute inset-y-0 right-0 pr-3 flex items-center'
                        >
                          <svg className='h-5 w-5 text-gray-400 hover:text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            {showPassword ? (
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21' />
                            ) : (
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                            )}
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password Input */}
                    <div>
                      <label htmlFor="confirm-password" className='block text-sm font-medium text-gray-700 mb-2'>
                        Confirm password
                      </label>
                      <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                          <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                          </svg>
                        </div>
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          id="confirm-password"
                          placeholder='Confirm your password'
                          className='w-full pl-10 pr-10 py-3 border-2 border-[#84B357] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-transparent text-gray-700 placeholder-gray-400'
                        />
                        <button
                          type='button'
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className='absolute inset-y-0 right-0 pr-3 flex items-center'
                        >
                          <svg className='h-5 w-5 text-gray-400 hover:text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            {showConfirmPassword ? (
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21' />
                            ) : (
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                            )}
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Forgot Password */}
                    <div className='flex justify-end'>
                      <Link href="/forgot-password" className='text-sm text-gray-600 hover:text-[#84B357] transition-colors'>
                        Forgot Password?
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {!otpVerified ? (
                      <>
                        {/* Phone Number Input */}
                        <div>
                          <label htmlFor="phone" className='block text-sm font-medium text-gray-700 mb-2'>
                            Enter your phone number
                          </label>
                          <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                              <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                              </svg>
                            </div>
                            <input
                              type='tel'
                              id="phone"
                              placeholder='Your phone number'
                              className='w-full pl-10 pr-4 py-3 border-2 border-[#84B357] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-transparent text-gray-700 placeholder-gray-400'
                            />
                          </div>
                        </div>

                        {/* OTP Input */}
                        <div>
                          <label htmlFor="otp" className='block text-sm font-medium text-gray-700 mb-2'>
                            Enter verification code
                          </label>
                          <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                              <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                              </svg>
                            </div>
                            <input
                              type='text'
                              id="otp"
                              placeholder='Enter OTP'
                              maxLength={6}
                              className='w-full pl-10 pr-4 py-3 border-2 border-[#84B357] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-transparent text-gray-700 placeholder-gray-400'
                            />
                          </div>
                          <div className='flex justify-between items-center mt-2'>
                            <button
                              type='button'
                              className='text-sm text-[#84B357] hover:underline font-medium'
                            >
                              Resend OTP
                            </button>
                            <button
                              type='button'
                              onClick={() => setOtpVerified(true)}
                              className='text-sm bg-[#84B357] text-white px-4 py-2 rounded-md hover:bg-[#709944] transition-colors font-medium'
                            >
                              Verify OTP
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Password Input after OTP verification */}
                        <div>
                          <label htmlFor="otp-password" className='block text-sm font-medium text-gray-700 mb-2'>
                            Set password
                          </label>
                          <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                              <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                              </svg>
                            </div>
                            <input
                              type={showOtpPassword ? 'text' : 'password'}
                              id="otp-password"
                              placeholder='Your password'
                              className='w-full pl-10 pr-10 py-3 border-2 border-[#84B357] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-transparent text-gray-700 placeholder-gray-400'
                            />
                            <button
                              type='button'
                              onClick={() => setShowOtpPassword(!showOtpPassword)}
                              className='absolute inset-y-0 right-0 pr-3 flex items-center'
                            >
                              <svg className='h-5 w-5 text-gray-400 hover:text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                {showOtpPassword ? (
                                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21' />
                                ) : (
                                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                                )}
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Confirm Password Input */}
                        <div>
                          <label htmlFor="otp-confirm-password" className='block text-sm font-medium text-gray-700 mb-2'>
                            Confirm password
                          </label>
                          <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                              <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                              </svg>
                            </div>
                            <input
                              type={showOtpConfirmPassword ? 'text' : 'password'}
                              id="otp-confirm-password"
                              placeholder='Confirm your password'
                              className='w-full pl-10 pr-10 py-3 border-2 border-[#84B357] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-transparent text-gray-700 placeholder-gray-400'
                            />
                            <button
                              type='button'
                              onClick={() => setShowOtpConfirmPassword(!showOtpConfirmPassword)}
                              className='absolute inset-y-0 right-0 pr-3 flex items-center'
                            >
                              <svg className='h-5 w-5 text-gray-400 hover:text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                {showOtpConfirmPassword ? (
                                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21' />
                                ) : (
                                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                                )}
                              </svg>
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}

                {/* Signup Button */}
                <button
                  type='submit'
                  className='w-full bg-[#4CAF50] text-white py-3 rounded-lg font-medium hover:bg-[#45a049] transition-colors shadow-md text-lg'
                >
                  Signup
                </button>

                {/* Login Link */}
                <div className='text-center text-sm text-gray-600'>
                  Already have an account?{' '}
                  <Link href="/login" className='text-[#84B357] font-medium hover:underline'>
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default SignupPage