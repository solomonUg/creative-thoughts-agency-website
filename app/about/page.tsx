import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='flex w-[85%] justify-between'>
        <div className='flex flex-col flex-1 justify-center gap-4 items-start h-[500px] pr-36'>
          <h2 className='font-bold text-btn'>About Agency</h2>
          <h1 className='text-4xl font-bold '>We create digital ideas that are bigger, bolder, and better.</h1>
          <p>Our mission is to deliver innovative solutions that drive success. We believe in good ideas flexibility. We strive to exceed expectations and foster long-term partnerships.</p>
          <p>Contact us to learn more about how we can help you.</p>
          <div className='flex gap-6 mt-4'>
            <div className='flex flex-col items-start justify-center'>
              <span className='text-3xl font-bold text-btn'>10k+</span>
              <span> Years of Experience</span>
            </div>
            <div className='flex flex-col items-start justify-center' > 
              <span className='text-3xl font-bold text-btn'>355 k+</span>
              <span>Peaople Reached</span>
            </div>
            <div className='flex flex-col items-start justify-center'>
              <span className='text-3xl font-bold text-btn'>5 k+</span>
              <span> Services and Plugins</span>
            </div>
          </div>
        </div>
        <div className='relative flex-1 '>
          <Image src='/about.png' alt='about' fill className='object-contain'/>
        </div>
      </div>
    </div>
  )
}
