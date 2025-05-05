"use client"
import React from 'react';
import NavLink from './NavLink';

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
    }
]

const adminLinks =[
  {
      label: 'Admin Dashboard',
      path:'/admin'
  }
]



const isAdmin = true; // This should be replaced with actual logic to check if the user is an admin
const isLoggedIn = true; // This should be replaced with actual logic to check if the user is logged in



const combinedLinks = isAdmin ? [...links, ...adminLinks] : links;

export default function NavBar() {


  return (
    <ul className='flex gap-6 text-xl'>
        {combinedLinks.map((link) => (
           <NavLink link={link} key={link.label}/>
        ))}
        {isLoggedIn ? <NavLink link={{ label: 'Logout', path: '/logout' }} key='logout' /> : <NavLink link={{ label: 'Login', path: '/login' }} key='login' />}
    </ul>
    
  )
}
