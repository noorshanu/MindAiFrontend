import Navbar2 from '@/components/Navbar2'
import Footer from '@/components/Footer'
import Link from 'next/link'
const page = () => {
  return (
    <>
    <Navbar2/>
    <div className='container mx-auto'>
    <h2 className='text-4xl font-bold font-mon text-center mt-10'>Signup</h2>
    <p className='text-lg text-center mt-4'>
    Signup to your account to continue
    </p>
    <form className='flex flex-col items-center justify-center'>
    <input type='text' placeholder='Name' />
    <input type='email' placeholder='Email' />
    <input type='password' placeholder='Password' />
    <input type='password' placeholder='Confirm Password' />
    <button type='submit' className='bg-[#84B357] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#709944] transition-colors shadow-md'>Signup</button>
    </form>
    </div>
    <Footer/>
    </>
  );
};

export default page;