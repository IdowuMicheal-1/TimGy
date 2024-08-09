import React from 'react'
import { TbGymnastics } from "react-icons/tb";
import { GiGymBag } from "react-icons/gi";
import { MdOutlineCardMembership } from "react-icons/md";

const Fitness = () => {
  return (
    <div className='container'>
        <div className='mt-24'>
        <h4 className='text-2xl font-medium flex items-center justify-center'>Why Choose TIMGYM?</h4>
        <p className='text-gray-500 text-md mx-auto text-center p-3 md:max-w-4xl'>Discover a new level of fitness at TIMGYM . With cutting-edge equipment, experienced trainers, and a variety of classes, we are here to support you every step of the way.</p>
        </div>
        <div className='flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center md:mx-auto md:max-w-full space-y-6 md:space-y-0 w-full md:ml-28'>
            <div className='shadow-sm w-[90%] shadow-gray-800 rounded-2xl m-6 max-w-md flex items-left justify-center flex-col px-4 py-8 mx-auto md:w-[30%] md:h-96'>
            <TbGymnastics style={{fontSize:'150px'}}  className='text-pink'/>
            <h4 className='text-lg font-bold'>Exceptional Facilities and Equipment</h4>
            <p className='text-gray-600 font-normal'>At TIMGYM, we pride ourselves on offering state-of-the-art facilities and top-notch equipment. Our gym is equipped with the latest machines and tools to ensure you have everything you need to reach your fitness goals. Whether you're into cardio, strength training, or functional fitness, we've got you covered.</p>
            </div>
            <div className='shadow-sm w-[90%] shadow-pink rounded-2xl m-6 max-w-md flex items-left justify-center flex-col px-4 py-8 md:w-[30%] md:h-96'>
            <GiGymBag style={{fontSize:'150px'}} className='text-pink'/>
            <h4 className='text-lg font-bold'>Expert Trainers</h4>
            <p className='text-gray-600 font-normal'>Our team of certified and experienced trainers is here to guide you every step of the way. They are passionate about fitness and dedicated to helping you achieve your personal best. Whether you're a beginner or a seasoned athlete, our trainers will create a customized workout plan tailored to your needs and goals.</p>
            </div>
            <div className='shadow-sm w-[90%] shadow-gray-800 rounded-2xl m-6 max-w-md flex items-left justify-center flex-col px-4 py-8 md:w-[30%] md:h-96'>
            <MdOutlineCardMembership style={{fontSize:'150px'}} className='text-pink'/>
            <h4 className='text-lg font-bold'>Flexible Membership Plans</h4>
            <p className='text-gray-600 font-normal'>We offer a variety of membership plans to suit your lifestyle and budget. Whether you prefer month-to-month options or long-term commitments. Plus, enjoy the flexibility to access our facilities at any time with our 24/7 availability.</p>
            </div>
        </div>
    </div>
  )
}

export default Fitness