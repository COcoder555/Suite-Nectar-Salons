import './footer.scss'
import React, { useRef, useState, useEffect } from 'react';
import CurrentPage from '../../App.jsx'
import {
    Collapse,
    CardBody,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
 
  } from 'reactstrap';
import Landing from '../Landing/landing';

function Footer(props) {
  const barColorRef = useRef();
  const [onLanding, setOnLanding] = useState (false);
  const[className, setClassName] = useState('')




  const handleNavclick2 = (event) => {
    console.log(event.target.textContent)
    props.setCurrentPage(event.target.textContent) 
    
    }
  
    useEffect(() => {
      if(!document.getElementById('landing')){
        setClassName('landingBar')
      }else{
        setClassName('contactBar')
      }
    })



// let className  = onLanding ? 'landingBar' : 'contactBar' ;

let barColor = (event) =>{

   
  }
 



    return (
 
     
        <div className='row'>
     
   <div ref = {barColorRef}  className ={className}>

    </div>
           <div id ='footer' className='col-12'>
      
            {/* <Nav className="link"  navbar>
              <NavItem className="footerLinks" nav caret>
                <NavLink onClick={handleNavclick2} href='#' className="FL">SERVICES</NavLink>
                <NavLink onClick={handleNavclick2} href='#' className="FL">ABOUT</NavLink>
                <NavLink onClick={handleNavclick2} href='#' className="FL">GALLERY</NavLink>
              </NavItem>
            </Nav> */}
 
            <div>
            <div>
            <NavLink  onClick={handleNavclick2 } href="#"><img id="logo2" src="../../assets/snslogo3.png"></img></NavLink>
            <div>
            <Nav className="link"  navbar>
            <NavItem className="footerLinks" nav caret>
       
              <NavLink   onClick={handleNavclick2 } href='#' className="FL">SERVICES</NavLink>
                <NavLink onClick={handleNavclick2} href='#' className="FL">ABOUT</NavLink>
                <NavLink onClick={handleNavclick2 } href='#' className="FL">GALLERY</NavLink>
                <NavLink onClick={handleNavclick2} href='#' className="FL">PROFESSIONALS</NavLink>
                <NavLink onClick={handleNavclick2} href='#' className="FL">LEASING</NavLink>
              <NavLink onClick={handleNavclick2} href='#' className="FL">EXPERIENCES</NavLink>
                </NavItem>
                </Nav>
                </div>
            </div>
            <div className='socialMedia'>
            <NavLink  onClick={handleNavclick2} href="#"> <i id = "SM" className ="fa-brands fa-facebook fa-2xl"></i></NavLink>
            <NavLink onClick={handleNavclick2} href="https://www.instagram.com/suitenectarsalons_matthews/?hl=en"> <i  id = "SM" className ="fa-brands fa-instagram fa-2xl"></i></NavLink>
            <NavLink onClick={handleNavclick2} href="https://www.pinterest.com/suite_nectar/"> <i id = "SM" className ="fa-brands fa-pinterest fa-2xl"></i> </NavLink>
            <NavLink onClick={handleNavclick2} href="https://twitter.com/SuiteNectar"> <i id = "SM" className ="fa-brands fa-twitter fa-2xl"></i></NavLink>
            </div>
            <div>
              <div> <CardBody>
      <div  className='footer-card'>
    
<div>7928 Council Place Matthews
   NC 28105
   <div>
  
   <div>
2250 Hawkins St
Charlotte NC 28105
</div>
<div className='footerPhone'>1 704 334 8055</div>
</div>
</div>
</div>
       </CardBody>
       </div>
                   <CardBody>
   

 
          </CardBody>
          
            </div>
          </div>
{/*           
          <Nav className="link"  navbar>
            <NavItem className="footerLinks" nav caret>

              <NavLink onClick={handleNavclick2} href='#' className="FL">PROFESSIONALS</NavLink>
              <NavLink onClick={handleNavclick2} href='#' className="FL">LEASING</NavLink>
              <NavLink onClick={handleNavclick2} href='#' className="FL">EXPERIENCES</NavLink>
            </NavItem>
          </Nav> */}
     
              </div>  
   
</div>
    )
}


export default Footer