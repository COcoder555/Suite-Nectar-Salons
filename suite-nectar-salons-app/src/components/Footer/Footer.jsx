import './footer.scss'
import React, { useState } from 'react';
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
  

function Footer(props) {
  const handleNavclick2 = (event) => {
    console.log(event.target.textContent)
    props.setCurrentPage(event.target.textContent)

  }
    return (
      
        <div className='row'>

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
            <NavLink onClick={handleNavclick2} href="#"> <img id="logo2" src="../../assets/snslogo3.png"></img></NavLink>
            <div>
            <Nav className="link"  navbar>
            <NavItem className="footerLinks" nav caret>
              <NavLink onClick={handleNavclick2} href='#' className="FL">PROFESSIONALS</NavLink>
              <NavLink onClick={handleNavclick2} href='#' className="FL">SERVICES</NavLink>
                <NavLink onClick={handleNavclick2} href='#' className="FL">ABOUT</NavLink>
                <NavLink onClick={handleNavclick2} href='#' className="FL">GALLERY</NavLink>
                <NavLink onClick={handleNavclick2} href='#' className="FL">LEASING</NavLink>
              <NavLink onClick={handleNavclick2} href='#' className="FL">EXPERIENCES</NavLink>
                </NavItem>
                </Nav>
                </div>
            </div>
            <div className='socialMedia'>
            <NavLink onClick={handleNavclick2} href="#"> <i id = "SM" className ="fa-brands fa-facebook fa-2xl"></i></NavLink>
            <NavLink onClick={handleNavclick2} href="https://www.instagram.com/suitenectarsalons_matthews/?hl=en"> <i  id = "SM" className ="fa-brands fa-instagram fa-2xl"></i></NavLink>
            <NavLink onClick={handleNavclick2} href="https://www.pinterest.com/suite_nectar/"> <i id = "SM" className ="fa-brands fa-pinterest fa-2xl"></i> </NavLink>
            <NavLink onClick={handleNavclick2} href="https://twitter.com/SuiteNectar"> <i id = "SM" className ="fa-brands fa-twitter fa-2xl"></i></NavLink>
            </div>
            <div>
              <div> <CardBody>
      <div  className='footer-card'>
    
<div>7928 COUNCIL PLACE
MATTHEWS
   NC 28105
   <div>
   <a className='ph' href= "">704-800-4008</a>
   <div>
2250 HAWKINS ST
CHARLOTTE, NC 28105
</div>
<div>
<a className='ph' href= "">704-800-4008</a>
</div>
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