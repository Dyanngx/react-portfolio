import React from 'react';
import './about.css';
import  Me from '../../assets/me.png';
import {FaAward} from 'react-icons/fa';
import {FiUser} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div> 
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Exp</h5>
              <small>2+ Year Working</small>
            </article>
            <article className='about__card'>
              <FiUser className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3 Working on</small>
            </article>
          </div> 
          <p>I'm on a journey to find opportunities to grow, challenge limits and enhance self-worth. On that journey, I hope to be able to find a team that is right for me to contribute to creating more value and help me experience more.
          </p>
          <a href="#contact" className='btn btn--primary'>Let's Talk</a>
        </div>
      </div> 
    </section>
  )
}
export default About