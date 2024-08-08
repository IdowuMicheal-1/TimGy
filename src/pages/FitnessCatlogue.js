import React from 'react'
import images1 from '../assets/victor-freitas-KkYWWpurqbE-unsplash.jpg'
import images2 from '../assets/spencer-davis-0ShTs8iPY28-unsplash.jpg'
import images3 from '../assets/scott-webb-U5kQvbQWoG0-unsplash.jpg'
import images4 from '../assets/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg'
import { MdArrowOutward } from "react-icons/md";

const FitnessCatlogue = () => {
  return (
    <div>
      <div className='mt-36 '>
        <div className='md:flex flex-row justify-between items-center mx-4'>
        <h4 className='font-bold text-md m-8 md:text-3xl'>Your health and safety are our top priorities. </h4>
        {/* <p className='max-w-sm mx-2 flex items-center justify-center text-center text-gray-700 md:text-purple md:font-bold'>We maintain the highest standards of cleanliness and hygiene throughout our gym. Our facilities are regularly sanitized, and we have implemented safety protocols to ensure a safe workout environment for all our members.</p> */}
        </div>
        <div className='md:flex md:flex-row md:space-x-6 md:mx-4 md:relative'>
          <div className='mt-4'>
            <img src={images1} alt='one' className='rounded-lg w-80 h-52 mx-auto object-cover'/>
            <p className='flex items-center justify-center mt-2 text-lg font-medium'>Diverse Class Offerings<MdArrowOutward className='bg-pink rounded-2xl p-2 text-4xl text-white ml-6'/></p>
          </div>
          <div className='mt-4'>
            <img src={images2} alt='one' className='rounded-lg w-80 h-52 mx-auto object-cover'/>
            <p className='flex items-center justify-center mt-2 text-lg font-medium'>24/7 Access<MdArrowOutward className='bg-pink rounded-2xl p-2 text-4xl text-white ml-6'/></p>
          </div>
          <div className='mt-4'>
            <img src={images3} alt='one' className='rounded-lg w-80 h-52 mx-auto object-cover'/>
            <p className='flex items-center justify-center mt-2 text-lg font-medium'>Personalized Workout Plans<MdArrowOutward className='bg-pink rounded-2xl p-2 text-4xl text-white ml-6'/></p>
          </div>
          <div className='mt-4'>
            <img src={images4} alt='one' className='rounded-lg w-80 h-52 mx-auto object-cover'/>
            <p className='flex items-center justify-center mt-2 text-lg font-medium'>Cutting-Edge Technology<MdArrowOutward className='bg-pink rounded-2xl p-2 text-4xl text-white ml-6'/></p>
          </div>
          
        </div>
        </div>
    </div>
  )
}

export default FitnessCatlogue