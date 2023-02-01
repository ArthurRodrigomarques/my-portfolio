import React from 'react'
import { useState, useEffect } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'


 

const NavBar = () => {
  
  return (

    <div className='navbar'>
        <div className="name-navbar">
            <h1>&lt;DEV/&gt;</h1>
        </div>
       
        <div className="menu-navbar"> 
        <GiHamburgerMenu size={30} className='menu' />
            <ul className='menu-all'>   
                <li>Home</li> 
                <li>habilidades</li>
                <li>Sobre Mim</li>
                <li>Projetos</li>
               
            </ul>
        </div>
    </div>
  )
}

export default NavBar