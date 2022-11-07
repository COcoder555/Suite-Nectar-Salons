import React from 'react'
import './about.scss'
import { DropdownItem } from 'reactstrap'
import { DropdownToggle } from 'reactstrap'
import { DropdownMenu } from 'reactstrap'
// import { NavLink } from 'reactstrap'
import Navhandler from '../Nav/Navbar'

function About() {
  return (
    <div className='col-12'>
      <Navhandler />
      <div className='about-container'>
        <div className="about-background" />
        <div className='row'>
          <div className = 'col-12'>
        <div className='philoTitle'>

          <h1 className='philo'>PHILOSPHY</h1>

          </div>
          <p className='philoText'>Empowering Independent Beauty Professionals to elevate their careers and build their own businesses.  

We are committed to offering affordable luxury suites, along with all the tools and support you need to experience salon ownership for yourself.  
          </p>
       
        </div>
        </div>
        <div className='row'>

          <div className='aboutImg col-6'>

         
          </div>
          <div className='aboutHrsBackground col-6'>
       

          </div>

        </div>
      </div>



<div className='partnerBar'>
  <h1>PROUD PARTNERS</h1>

</div>
    </div>






  )
}

export default About