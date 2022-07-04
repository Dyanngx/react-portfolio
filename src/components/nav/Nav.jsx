/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import  {MdOutlineHomeRepairService} from 'react-icons/md'
import {GoBook} from 'react-icons/go'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'

const Nav = () => {
  const  [activeNav,setActiveNav] = useState('#');
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#contact" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><IoMdContact /></a>
        <a href="#exp" onClick={() => setActiveNav('#exp')} className={activeNav === '#exp' ? 'active' : ''}><GoBook /></a>
        <a href="#services"  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineHomeRepairService /></a>
        <a href="#testimonials"  onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><GiHamburgerMenu /></a> 
    </nav>
  )
}

export default Nav