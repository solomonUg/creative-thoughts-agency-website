"use client"
import React from 'react';
import NavLink from './NavLink';
import Image from 'next/image';
import { useState } from 'react';

  const links = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'About',
        path: '/about',
    },
    {
        label: 'Contact',
        path: '/contact',
    },
    {
        label: 'Blog',
        path: '/blog',
    },
   
]



const isAdmin = true; // This should be replaced with actual logic to check if the user is an admin
const session =true; // This should be replaced with actual logic to check if the user is logged in




export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='flex '>
      <ul className='hidden sm:flex gap-6 text-xl '>
          {links.map((link) => (
            <NavLink link={link} key={link.label}/>
          ))}
          {session ? (isAdmin && <NavLink link={{label: 'Admin', path: '/admin'}} />)
          : <NavLink link={{ label: 'Login', path: '/login' }} key='login' />}
          {session && <button className='bg-foreground text-[#0d0c22] p-2 rounded-sm'>Logout</button>}
      </ul>
      <button className='flex sm:hidden' onClick={toggleMenu}><Image src='/menu.png' alt='Menu' width={20} height={20}/></button>
      {isOpen && <div className=' absolute top-25 bottom-25 h-[calcl(100vh-100px)] right-0  w-[50%]'>
        <ul className='flex flex-col sm:hidden gap-4 text-sm '>
        {links.map((link) => (
            <NavLink link={link} key={link.label}/>
          ))}
          {session ? (isAdmin && <NavLink link={{label: 'Admin', path: '/admin'}} />)
          : <NavLink link={{ label: 'Login', path: '/login' }} key='login' />}
          {session && <button className='bg-foreground text-[#0d0c22] p-2 rounded-sm'>Logout</button>}
         </ul>
      </div>} 
          
      </div>
  )
}
