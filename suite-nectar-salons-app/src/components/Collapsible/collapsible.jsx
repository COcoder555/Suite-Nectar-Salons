import React, {memo, useState,ref,useEffect} from 'react'
import { Card, CardBody,Button,NavLink, NavItem } from 'reactstrap'
import './collapsible.scss';
import {App} from '../../App.jsx'
import scrollToSection from '../Professionals/professionals'
import tattooRef from '../Professionals/professionals'
import elementRef from '../Professionals/professionals'
import Professionals from '../Professionals/professionals';





let Collapse1  =React.forwardRef( (props,ref) =>{

  const profButtonCLick =(event,ref) => {
    // console.log(event.target.name)
    props.setCurrentPage(event.target.name);
    window.scrollTo({
      top: 590,
      behavior:'smooth',
 
    })
console.log(window.top)
      // console.log(event.target.id)
     

  }
 






  
const [isOpen, setIsOpen] = useState(false);


return<div className='collapsible'>
    <div className='service-card'>
  <Card className='serv'>
  <div className='btn1'>
  <span onClick={() => setIsOpen(!isOpen)}><h3  className=' toggleBtn' > COSMOTOLOGISTS HAIRSYLISTS BARBERS </h3></span>
</div>
{/* 
  <div className='btn1'>
  <button className=' toggleBtn' onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-arrow-down fa-2xl"></i> </button>
  </div> */}
 {isOpen && <CardBody className=''>
 <p className='titleUnderline'></p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  <div className='profBtnContainer'>

<Button tittle ='cosmoRef'  name = "PROFESSIONALS" onClick={profButtonCLick } href="" id='profBtn'>BROWSE OUR PROFESSIONALS</Button>
</div>
  </CardBody>}



  </Card>
  </div>
</div>
})  




export default React.memo(Collapse1);