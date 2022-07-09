/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
<<<<<<< HEAD
import {BiHomeSmile} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {ImBooks} from 'react-icons/im'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {RiMessage2Line} from 'react-icons/ri'
=======
import {AiOutlineHome} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import  {MdOutlineHomeRepairService} from 'react-icons/md'
import {GoBook} from 'react-icons/go'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
>>>>>>> dd9a94ffa783e7aabd6d8931e36fae63c74a7bd0

const Nav = () => {
  const  [activeNav,setActiveNav] = useState('#');
  return (
<<<<<<< HEAD
   <nav>
    <a href="#" className='active'><BiHomeSmile/></a>
    <a href="#about"><AiOutlineUser/></a>
    <a href="#exp"><ImBooks/></a>
    <a href="#service"><MdOutlineHomeRepairService/></a>
    <a href="#contact"><RiMessage2Line/></a>
   </nav>
=======
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#contact" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><IoMdContact /></a>
        <a href="#exp" onClick={() => setActiveNav('#exp')} className={activeNav === '#exp' ? 'active' : ''}><GoBook /></a>
        <a href="#services"  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineHomeRepairService /></a>
        <a href="#testimonials"  onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><GiHamburgerMenu /></a> 
    </nav>
>>>>>>> dd9a94ffa783e7aabd6d8931e36fae63c74a7bd0
  )
}

export default Nav