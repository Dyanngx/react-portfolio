import React from 'react';
import './exp.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Exp = () => {
  return (
    <section id='exp'>
      <h5>Wwhat's Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container exp__container">
        <div className="exp__frondend">
          <h3>Frontend Development</h3>
          <div className="exp__content">
            <article className='exp_details'>
              <BsPatchCheckFill className='exp__details-icons'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className='exp__details-icons'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className='exp__details-icons'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className='exp__details-icons'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className='exp__details-icons'/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className='exp__details-icons'/>
              <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

        </div>
        <div className="exp__backend">
          <h3>Backend Development</h3>
          <div className="exp__content">
            <article className='exp_details'>
              <BsPatchCheckFill className='exp__details-icons'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Experienced</small>
              </div>
             </article>
            <article className='exp_details'>
              <BsPatchCheckFill className='exp__details-icons'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className='exp__details-icons'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className='exp__details-icons'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className='exp__details-icons'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className='exp__details-icons'/>
              <div>
              <h4>Docker</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Exp