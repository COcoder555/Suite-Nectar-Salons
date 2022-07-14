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
       <CardBody>
      <div  className='card'>
      <div> MATTHEWS LOCATION</div>
<div>7928 Council Place
Matthews
   NC 28105
   <div>
   <a className='ph' href= "">704-800-4008</a>
</div>
</div>
</div>
       </CardBody>
            <Nav className="link"  navbar>
              <NavItem className="leftLinks2" nav caret>
                <NavLink onClick={handleNavclick2} href='#' className="S">SERVICES</NavLink>
                <NavLink onClick={handleNavclick2} href='#' className="S">ABOUT</NavLink>
                <NavLink onClick={handleNavclick2} href='#' className="S">GALLERY</NavLink>
              </NavItem>
            </Nav>
 
            <div>
            <NavLink onClick={handleNavclick2} href="#"> <img id="logo2" src="../../assets/snslogo2.png"></img></NavLink>
          
            <div className='socialMedia'>
            <NavLink onClick={handleNavclick2} href="#"> <i id = "SM" className ="fa-brands fa-facebook fa-2xl"></i></NavLink>
            <NavLink onClick={handleNavclick2} href="#"> <i  id = "SM" className ="fa-brands fa-instagram fa-2xl"></i></NavLink>
            <NavLink onClick={handleNavclick2} href="#"> <i id = "SM" className ="fa-brands fa-pinterest fa-2xl"></i> </NavLink>
            <NavLink onClick={handleNavclick2} href="#"> <i id = "SM" className ="fa-brands fa-twitter fa-2xl"></i></NavLink>
            </div>
          </div>
          
          <Nav className="link"  navbar>
            <NavItem className="leftLinks2" nav caret>

              <NavLink onClick={handleNavclick2} href='#' className="S">PROFESSIONALS</NavLink>
              <NavLink onClick={handleNavclick2} href='#' className="S">LEASING</NavLink>
              <NavLink onClick={handleNavclick2} href='#' className="S">EXPERIENCES</NavLink>
            </NavItem>
          </Nav>
          <CardBody>
            <div className='card'>
          <div>SOUTHEND LOCATION</div>
          <div>
2250 Hawkins St
Charlotte, NC
</div>
<div>
<a className='ph' href= "">704-800-4008</a>
</div>
</div>


 
          </CardBody>
              </div>  
   
</div>
    )
}


export default Footer