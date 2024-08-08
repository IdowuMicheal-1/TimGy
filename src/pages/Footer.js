import React from 'react'
import logo from '../assets/Untitled_design__1_-removebg-preview.png'

const Footer = () => {
  return (
    <div>
        <div className='bg-gradient-to-br from-black to-pink w-full md:flex md:mx-auto md:flex-col md:items-center md:justify-center'>
           <div>
            <div className='flex flex-col mx-auto items-center justify-center md:flex-row'>
                <img src={logo} alt='logo' className='h-24 w-24'/>
                <h4 className='text-white text-xl font-bold'>TIMGYM</h4>
            </div>
            <p className='text-white items-center flex justify-center mx-auto md:text-xl'>We best of the best</p>
            </div>
            <div>
                <div className='flex flex-col justify-center items-center mt-7'>
                <div className='space-y-6 font-sans font-medium text-center text-white md:flex md:flex-row md:items-center md:space-y-0 md:space-x-12'>
                    <div className='group h-2'>
                    <a href="#home">Home</a>
                    <div className='group-hover:border-b group-hover:mx-2 group-hover:bg-blue-50'></div>
                    </div>
                    <div className='group h-2'>
                    <a href="#home">Trainers</a>
                    <div className='group-hover:border-b group-hover:mx-2 group-hover:bg-blue-50'></div>
                    </div>
                    <div className='group h-2'>
                    <a href="#home">Programs</a>
                    <div className='group-hover:border-b group-hover:mx-2 group-hover:bg-blue-50'></div>
                    </div>
                    <div className='group h-2'>
                    <a href="#home">Pricing</a>
                    <div className='group-hover:border-b group-hover:mx-2 group-hover:bg-blue-50'></div>
                    </div>
                    <div className='group h-2'>
                    <a href="#home">About Us</a>
                    <div className='group-hover:border-b group-hover:mx-2 group-hover:bg-blue-50'></div>
                    </div>
                </div>
                </div>
            </div>
            <div className='text-medium text-lg mt-10 text-center'>
                @copywrite 2024
            </div>
        </div>
    </div>
  )
}

export default Footer