import React from 'react'
import './about.scss'
import { DropdownItem } from 'reactstrap'
import { DropdownToggle } from 'reactstrap'
import { DropdownMenu } from 'reactstrap'
import { NavLink } from 'reactstrap'
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

          <h1>PHILOSPHY</h1>


          <p className='philoText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore<br></br>
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br></br>
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
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