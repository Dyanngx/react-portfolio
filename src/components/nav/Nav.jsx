import React from 'react'
import './nav.css'
import {BiHomeSmile} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {ImBooks} from 'react-icons/im'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {RiMessage2Line} from 'react-icons/ri'

const Nav = () => {
  return (
   <nav>
    <a href="#" className='active'><BiHomeSmile/></a>
    <a href="#about"><AiOutlineUser/></a>
    <a href="#exp"><ImBooks/></a>
    <a href="#service"><MdOutlineHomeRepairService/></a>
    <a href="#contact"><RiMessage2Line/></a>
   </nav>
  )
}

export default Nav