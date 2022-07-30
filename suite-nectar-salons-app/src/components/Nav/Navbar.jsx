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
        <div className="container">
          <Nav className="link" navbar>
          <NavItem className="info" nav caret>
          <NavLink onClick={handleNavclick} href='#' className="phone">+1 704 334 8055</NavLink>
          </NavItem>
          <NavItem>
         <NavLink onClick={handleNavclick} href='#' className ="email">info@suitnectorsalons.com</NavLink>
         </NavItem>
          </Nav>
          </div>
      
      </div>

        <div id="c2" className="col-8">
              <div className="container">
                <div className="linkBankContainer">
            <Nav className="link"  navbar>
              <NavItem className="navLinkBank" nav caret>
              
                <NavLink onClick={handleNavclick} href='#' className="S">SERVICES</NavLink>
                <NavLink onClick={handleNavclick} href='#' className="S">ABOUT</NavLink>
                <NavLink onClick={handleNavclick} href='#' className="S">GALLERY</NavLink>
              </NavItem>
            </Nav>
          </div>
          <div className="logo-link">
            <NavLink onClick={handleNavclick} href="#"> <img id="logo" src="../../assets/snslogo3.png"></img></NavLink>
          </div>
         <div className="linkBankContainer">
          <Nav className="link"  navbar>
            <NavItem className="navLinkBank" nav caret>

              <NavLink onClick={handleNavclick} href='#' className="S">PROFESSIONALS</NavLink>
              <NavLink onClick={handleNavclick} href='#' className="S">LEASING</NavLink>
              <NavLink onClick={handleNavclick} href='#' className="S">EXPERIENCES</NavLink>
            </NavItem>
          </Nav>
          </div>
        </div>
    </div>
        <div id="c3" className="col-2">
        <div className="container">
        <Nav className="link" navbar>
          <NavItem className="" nav caret>
          <NavLink onClick={handleNavclick} href='# ' className="phone">CONTACT NOW</NavLink>
          </NavItem>
          </Nav>
        </div>
</div>
</div>
   

  )
}

export default Navhandler




