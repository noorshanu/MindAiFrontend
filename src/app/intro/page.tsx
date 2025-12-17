'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const IntroPage = () => {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | 'other' | null>(null)
  const [loading, setLoading] = useState(false)
  const totalSteps = 2

  const handleContinue = async () => {
    if (currentStep === 1) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      if (selectedGender) {
        try {
          setLoading(true)
          // Update user profile with gender
          // For now, just redirect to dashboard
          // You can add API call to update profile here
          router.push('/dashboard')
        } catch (error) {
          console.error('Error updating profile:', error)
        } finally {
          setLoading(false)
        }
      }
    }
  }

  const handleSkip = () => {
    router.push('/dashboard')
  }

  return (
    <div className='min-h-screen bg-white relative overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src="/introbg.png"
          alt="Background"
          fill
          className='object-cover opacity-10'
          priority
        />
      </div>

      {/* Content */}
      <div className='relative z-10 min-h-screen flex'>
        {/* Left Section - Logo */}
        <div className='hidden lg:flex lg:w-1/3 items-center justify-center p-8 relative'>
          <div className='text-center'>
            <div className='text-8xl font-bold text-[#2C5F5D] mb-4 font-mon'>
              M<span className='text-[#84B357]'>.AI</span>
            </div>
            <div className='text-2xl font-bold text-[#2C5F5D] font-mon'>
              MIND&apos;S AI
            </div>
          </div>
          {/* Decorative blobs */}
          <div className='absolute top-20 left-10 w-32 h-32 bg-[#84B357] opacity-20 rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-10 w-40 h-40 bg-[#84B357] opacity-15 rounded-full blur-3xl'></div>
          <div className='absolute top-1/2 left-1/4 w-24 h-24 bg-[#84B357] opacity-10 rounded-full blur-2xl'></div>
        </div>

        {/* Right Section - Content */}
        <div className='flex-1 lg:w-2/3 flex flex-col p-6 lg:p-12'>
          {/* Top Navigation */}
          <div className='flex justify-between items-center mb-8'>
            <button
              onClick={() => currentStep > 1 ? setCurrentStep(currentStep - 1) : router.back()}
              className='text-gray-700 hover:text-[#2C5F5D] transition-colors'
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
            </button>
            <button
              onClick={handleSkip}
              className='text-gray-600 hover:text-[#2C5F5D] font-medium transition-colors'
            >
              Skip
            </button>
          </div>

          {/* Step Content */}
          <div className='flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full'>
            {currentStep === 1 ? (
              // Welcome Screen
              <div className='text-center space-y-6'>
                <h1 className='text-5xl lg:text-6xl font-bold text-[#2C5F5D] font-mon'>
                  Hey, you made it!! 👋
                </h1>
                <p className='text-xl text-gray-600 max-w-md mx-auto'>
                  Where your mind is heard, your pain held, and healing begins.
                </p>
                <button
                  onClick={handleContinue}
                  className='mt-8 bg-[#84B357] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#709944] transition-colors shadow-lg'
                >
                  Begin Your Healing Journey
                </button>
              </div>
            ) : currentStep === 2 ? (
              // Gender Selection Screen
              <div className='space-y-8'>
                <h2 className='text-4xl lg:text-5xl font-bold text-[#2C5F5D] font-mon'>
                  Your Gender?
                </h2>
                
                <div className='space-y-4'>
                  {/* Female Option */}
                  <button
                    onClick={() => setSelectedGender('female')}
                    className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                      selectedGender === 'female'
                        ? 'border-[#84B357] bg-[#84B357] bg-opacity-10'
                        : 'border-[#84B357] border-opacity-30 hover:border-opacity-50'
                    }`}
                  >
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center'>
                        <span className='text-2xl'>♀</span>
                      </div>
                      <span className='text-lg font-medium text-gray-700'>Female</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 ${
                      selectedGender === 'female'
                        ? 'border-[#84B357] bg-[#84B357]'
                        : 'border-gray-300'
                    }`}>
                      {selectedGender === 'female' && (
                        <div className='w-full h-full rounded-full bg-white scale-50'></div>
                      )}
                    </div>
                  </button>

                  {/* Male Option */}
                  <button
                    onClick={() => setSelectedGender('male')}
                    className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                      selectedGender === 'male'
                        ? 'border-[#84B357] bg-[#84B357] bg-opacity-10'
                        : 'border-[#84B357] border-opacity-30 hover:border-opacity-50'
                    }`}
                  >
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center'>
                        <span className='text-2xl'>♂</span>
                      </div>
                      <span className='text-lg font-medium text-gray-700'>Male</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 ${
                      selectedGender === 'male'
                        ? 'border-[#84B357] bg-[#84B357]'
                        : 'border-gray-300'
                    }`}>
                      {selectedGender === 'male' && (
                        <div className='w-full h-full rounded-full bg-white scale-50'></div>
                      )}
                    </div>
                  </button>

                  {/* Other Option */}
                  <button
                    onClick={() => setSelectedGender('other')}
                    className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                      selectedGender === 'other'
                        ? 'border-[#84B357] bg-[#84B357] bg-opacity-10'
                        : 'border-[#84B357] border-opacity-30 hover:border-opacity-50'
                    }`}
                  >
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center'>
                        <div className='w-6 h-6 rounded-full bg-purple-400'></div>
                      </div>
                      <span className='text-lg font-medium text-gray-700'>Other</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 ${
                      selectedGender === 'other'
                        ? 'border-[#84B357] bg-[#84B357]'
                        : 'border-gray-300'
                    }`}>
                      {selectedGender === 'other' && (
                        <div className='w-full h-full rounded-full bg-white scale-50'></div>
                      )}
                    </div>
                  </button>
                </div>

                <button
                  onClick={handleContinue}
                  disabled={!selectedGender || loading}
                  className='w-full bg-[#84B357] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#709944] transition-colors shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed mt-8'
                >
                  {loading ? 'Saving...' : 'Continue'}
                </button>
              </div>
            ) : null}
          </div>

          {/* Bottom Navigation */}
          <div className='mt-8 flex items-center justify-between'>
            {/* Progress Bar */}
            <div className='flex-1 bg-gray-200 h-2 rounded-full overflow-hidden max-w-md mx-auto'>
              <div
                className='bg-white h-full transition-all duration-300'
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>

            {/* Next Arrow */}
            {currentStep < totalSteps && (
              <button
                onClick={handleContinue}
                className='text-gray-700 hover:text-[#2C5F5D] transition-colors ml-4'
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroPage