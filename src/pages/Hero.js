import React from 'react'
import heros from '../assets/alora-griffiths-LOnMc8Rp1Qs-unsplash-removebg-preview.png'

const Hero = () => {
  return (
    <div>
        <section className='mt-52 md:mt-52 md:ml-4 flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-x-6'>
            <div className='flex flex-col md:flex-col space-y-4 items-center justify-center md:items-start md:mt-0 '>
            <h1 className='text-xl md:text-3xl font-bold mx-0 text-pink' >Unleash Your Inner Strength</h1>
            <p className='text-white font-medium max-w-md text-center md:text-left'>Join us at TIMGYM to transform your body and mind. With state-of-the-art equipment, expert trainers, and a supportive community, your fitness journey starts here.</p>
            <div className='hidden md:block mt-6'>
                    <a href="#login" className='bg-pink px-6 py-3 text-white rounded-lg md:text-left md:items-start md:justify-start md:mt-8'>Get Started Today</a>
                </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={heros} alt='hero' className='flex items-center justify-center rounded-lg md:rounded-3xl shadow-2xl bg-gradient-to-b from-black hover:from-white hover:scale-105 duration-200'/>
                </div>
        </section>
    </div>
  )
}

export default Hero