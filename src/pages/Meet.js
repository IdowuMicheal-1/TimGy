import React from 'react'
import image1 from '../assets/alora-griffiths-LOnMc8Rp1Qs-unsplash (1).jpg'
import image2 from '../assets/victor-freitas-KkYWWpurqbE-unsplash.jpg'
import image3 from '../assets/edgar-chaparro-sHfo3WOgGTU-unsplash (1).jpg'
import image4 from '../assets/scott-webb-U5kQvbQWoG0-unsplash (1).jpg'
import image5 from '../assets/spencer-davis-0ShTs8iPY28-unsplash (1).jpg'

const Meet = () => {
  return (
    <div>
      <div className="bg-black mt-20 pt-24">
        <div className='mx-auto mb-12 flex items-center justify-center flex-col'>
        <h2 className='text-white text-4xl'>Meet Our <span className='text-pink'>Trainers</span></h2>
        <p className='text-white max-w-lg text-center'>Our team of certified and experienced trainers is here to guide you every step of the way.</p>
        </div>
        <div className='mx-4 grid grid-cols-1 md:grid-cols-3 gap-2 md:max-w-4xl md:mx-auto pb-6'>
          <img src={image1} alt='one' className='w-full h-80 object-cover rounded-md' loading="lazy"/>
          <img src={image2} alt='two' className='w-full h-full object-cover rounded-md md:col-start-2 md:col-end-6 md:row-start-1 md:row-end-3' loading="lazy"/>
          <img src={image3} alt='three' className='w-full h-80 object-cover rounded-md' loading="lazy"/>
          <img src={image4} alt='four' className='w-full h-80 object-cover rounded-md md:col-start-1 md:col-end-3' loading="lazy"/>
          <img src={image5} alt='five' className='w-full h-80 object-cover rounded-md' loading="lazy"/>
        </div>
      </div>
    </div>
  )
}

export default Meet