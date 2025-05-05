import React from 'react'
import NavLinks from './NavBar'
import NavBar from './NavBar'

export default function Navigation() {
  return (
    <nav className='flex w-[95%] justify-center items-center py-4'>
        <div className='flex items-center justify-between w-full'>
            <div className='text-2xl font-bold'>Logo</div>
            <NavBar />
        </div>
    </nav>
  )
}
