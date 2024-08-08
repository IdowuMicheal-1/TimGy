import React,{useState,lazy} from 'react'
import logo from '../assets/Untitled_design__1_-removebg-preview.png'
import Hero from './Hero'
import { IoMdLogIn } from "react-icons/io";
import LandingPage from './LandingPage';
import Fitness from './Fitness';
import FitnessCatlogue from './FitnessCatlogue';
import Meet from './Meet';
import Frequently from './Frequently';
import Footer from './Footer';


const Header = () => {
    const [show,setShow] = useState(false)
    const btnHandler = () => {
        setShow((prev) => !prev)
    }
    const displayHam = 'absolute py-20 pl-12 px-6 top-0 right-0 bottom-0 flex flex-col bg-gradient-to-br from-black to-pink  text-lg text-white md:hidden min-h-fit w-full space-y-2 '
    const hideHam = 'absolute py-20 pl-12 px-6 top-0 right-0 bottom-0 hidden flex-col bg-gradient-to-br from-black to-pink text-lg text-white md:hidden min-h-fit w-full space-y-2 '
    const openHam= 'z-40 block open hambuger md:hidden focus:outline-none'
    const closeHam= 'z-40 block hambuger md:hidden focus:outline-none'
  return (
    <div>
        <section className="mx-auto px-6 py-8 bg-gradient-to-br from-black from-10% via-white via-80% to-pink to-10%  w-full">
            <nav className='flex justify-between items-center border-b min-w-full'>
                <div>
                    <img src={logo} alt="logo" className='w-28 h-28 z-60 text-white'/>
                </div>
                    <div className='hidden md:flex md:space-x-6 font-sans font-bold text-pink'>
                    <div className='group'>
                    <a href="#home">Home</a>
                    <div className='group-hover:border-b group-hover:mx-2 group-hover:bg-blue-50'></div>
                    </div>
                    <div className='group'>
                    <a href="#trainers">Trainers</a>
                    <div className='group-hover:border-b group-hover:mx-2 group-hover:bg-blue-50'></div>
                    </div>
                    <div className='group'>
                    <a href="#program">Programs</a>
                    <div className='group-hover:border-b group-hover:mx-2 group-hover:bg-blue-50'></div>
                    </div>
                    <div className='group'>
                    <a href="#pricing">Pricing</a>
                    <div className='group-hover:border-b group-hover:mx-2 group-hover:bg-blue-50'></div>
                    </div>
                    <div className='group'>
                    <a href="#aboutus">About Us</a>
                    <div className='group-hover:border-b group-hover:mx-2 group-hover:bg-blue-50'></div>
                    </div>
                    
                </div>
                <div className='hidden md:block'>
                    <a href="#login" className='bg-pink px-6 py-3 text-white border border-white rounded-lg flex items-center justify-center space-x-4'><IoMdLogIn className='text-white'/>Login</a>
                </div>
                <div className='md:hidden'>
                <button id='menu-btn' type='button' className={show ? openHam: closeHam} onClick={btnHandler}>
                <span class='hambuger-top'></span>
                <span class='hambuger-middle'></span>
                <span class='hambuger-bottom'></span>
            </button>
            </div>
            </nav>
            <div className={show? displayHam:hideHam}>
                <a href='#home' className='hover:text-pink'>Home</a>
                <a href="#trainers" className='hover:text-pink'>Trainers</a>
                <a href="#program" className='hover:text-pink'>Programs</a>
                <a href="#pricing" className='hover:text-pink'>Pricing</a>
                <a href="#aboutus" className='hover:text-pink'>About Us</a>

            </div>
           
            <Hero />
            <div className='flex items-center justify-center flex-col mt-6 space-y-6 md:flex-row md:justify-between md:max-w-xl ml-6 md:space-y-0 md:items-center'>
                <div className='flex items-center justify-center flex-col space-y-2'>
                    <h4 className='text-black font-bold text-2xl'>70+</h4>
                    <p className='font-medium text-lg'>Expert Trainers</p>
                </div>
                <div className='flex items-center justify-center flex-col space-y-2'>
                    <h4 className='font-bold text-2xl text-pink'>120009+</h4>
                    <p className='font-medium text-lg'>Members Joined</p>
                </div>
                <div className='flex items-center justify-center flex-col space-y-2'>
                    <h4 className='text-black font-bold text-2xl'>5+</h4>
                    <p className='font-medium text-lg'>years Experience</p>
                </div>
            </div>
        
        </section>
        <Fitness />
        <FitnessCatlogue />
        <Meet />
        <Frequently />
        <Footer />
    </div>
  )
}

export default Header