import React from 'react'
import Navbar2 from '@/components/Navbar2'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <>
    <Navbar2/>
        <div className='container mx-auto'>
        <h2 className='text-4xl font-bold font-mon text-center mt-10'>Login</h2>
        <p className='text-lg text-center mt-4'>
        Login to your account to continue
        </p>
        <form>
        <input type='email' placeholder='Email' />
        </form>
        </div>
    <Footer/>
    </>
  )
}

export default page