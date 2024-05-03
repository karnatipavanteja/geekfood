import React from 'react'
import './App.css'

function Nav() {
  return (
    <nav className='nav'>
  <div className="logo">
    <img src="https://flowbite.com/docs/images/logo.svg" alt="" /><h1>GeekFoods</h1></div>
    <ul>
        <li style={{color:'blue'}}>Home</li>
        <li>Quote</li>
        <li>Resturants</li>
        <li>Foods</li>
        <li>Contact</li>
    </ul>
    <button>Get started</button>
 

    </nav>
  )
}

export default Nav