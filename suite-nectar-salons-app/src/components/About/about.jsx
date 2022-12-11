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
          <p className='philoText'>Empowering Independent Beauty Professionals to elevate their careers and build their own businesses.  <br></br>

We are committed to offering affordable luxury suites, 
along with all the tools and support<br></br> you need to experience salon ownership for yourself. 

          </p>
       
        </div>
        </div>
        <div className='row'>

          <div className='aboutImg col-6'>
sfdsfdsfdsfdsafdsafdsas
         
          </div>
          <div className='aboutHrsBackground col-6'>
       
ggggggggggggggggggggggg
          </div>

        </div>
      </div>



<div className='ownerBar'>
  <h1 className='ownerTitle'>PROUD OWNERS</h1>
  <div>
  <p className='ownerStatement'>We are passionate about keeping business local. <br>
  </br>We pride ourselves on being a locally owned and operated company in the beauty industry for over seven years. <br></br>We find success in having the opportunity to know our salon partners as individuals.<br></br>
We deliver a more personalized experience, and thrive on continuing to cultivate a community of local professionals.  </p> <br/>
<p></p>
  </div>

</div>
    </div>






  )
}

export default About