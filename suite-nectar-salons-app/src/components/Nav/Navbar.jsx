import "./Navbar.scss"
import React, { useState } from 'react';
import {
  Collapse,

  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';



let Navhandler = (props) => {
  const handleNavclick = (event) => {
    console.log(event.target.textContent)
    props.setCurrentPage(event.target.textContent)

  }
  return (

    <div className="row">

   
        <div id="c1" className="col-2">
       
          <Nav className="link" navbar>
          <NavItem className="" nav caret>
          <NavLink onClick={handleNavclick} href='#' className="email">INFO@SUITENCTARSALONS.COM</NavLink> 
          <NavLink onClick={handleNavclick} href='# ' className="phone">+1 704-334-8055</NavLink>
          </NavItem>
          </Nav>
          </div>
      


        <div id="c2" className="col-8">
   
            <Nav className="link"  navbar>
              <NavItem className="leftLinks" nav caret>
                <NavLink onClick={handleNavclick} href='#' className="S">SERVICES</NavLink>
                <NavLink onClick={handleNavclick} href='#' className="S">ABOUT</NavLink>
                <NavLink onClick={handleNavclick} href='#' className="S">GALLERY</NavLink>
              </NavItem>
            </Nav>
 
          <div >
            <NavLink onClick={handleNavclick} href="#"> <img id="logo" src="../../assets/snslogo2.png"></img></NavLink>
          </div>
         
          <Nav className="link"  navbar>
            <NavItem className="leftLinks" nav caret>

              <NavLink onClick={handleNavclick} href='#' className="S">PROFESSIONALS</NavLink>
              <NavLink onClick={handleNavclick} href='#' className="S">LEASING</NavLink>
              <NavLink onClick={handleNavclick} href='#' className="S">EXPERIENCES</NavLink>
            </NavItem>
          </Nav>
        </div>

        <div id="c3" className="col-2">
         
        <Nav className="link" navbar>
          <NavItem className="" nav caret>
          <NavLink onClick={handleNavclick} href='# ' className="phone">CONTACT NOW</NavLink>
          </NavItem>
          </Nav>
        </div>

      </div>
   

  )
}

export default Navhandler




