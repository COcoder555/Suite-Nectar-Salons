import "./Navbar.scss"
import React, { useState, useContext } from 'react';
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
  NavbarText,
  Button
} from 'reactstrap';
import { ReduxLiteContext } from '../../global/ReduxLiteContext';
import barColor from '../Footer/Footer'

let Navhandler = (props) => {
  const{id,setID} = useContext(ReduxLiteContext)

  const handleNavclick = (event) => {
    console.log(event.target.textContent)
    props.setCurrentPage(event.target.textContent)
    window.scrollTo(0,0)


    setID(props.id)
  }


  
  return (

    <div  id = 'fullWidth'>
      <div className="col-12">
        <div id = 'fullWidth1' className="row">
          <div id="c1" className="col-2">
            <div className="container">
              <Nav className="link" navbar>
                <NavItem className="info" nav caret>
                  <NavLink onClick={handleNavclick} href='#' className="phone">+1 704 334 8055</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={handleNavclick} href='#' className="email">info@suitnectorsalons.com</NavLink>
                </NavItem>
              </Nav>
            </div>

          </div>

          <div id="c2" className="col-8">
            <div className="container">
              <div className="linkBankContainer">
                <Nav className="link" navbar>
                  <NavItem className="navLinkBank" nav caret>


                    <NavLink id = "About" onClick={handleNavclick} href='#' className="S">ABOUT</NavLink>
                    <NavLink onClick={handleNavclick} href='#' className="S">SERVICES</NavLink>
                    <NavLink onClick={handleNavclick} href='#' className="S">PROFESSIONALS</NavLink>

                  </NavItem>
                </Nav>
              </div>
              <div className="logo-link">
                <NavLink onClick={handleNavclick} href="#"><img id="logo" src="../../assets/snslogo3.png"></img></NavLink>

              </div>
              <div className="linkBankContainer">
                <Nav className="link" navbar>
                  <NavItem className="navLinkBank" nav caret>


                    <NavLink onClick={handleNavclick} href='#' className="S">LEASING</NavLink>
                    <NavLink onClick={handleNavclick} href='#' className="S">GALLERY</NavLink>
                    <NavLink onClick={handleNavclick} href='#' className="S">EXPERIENCES</NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </div>
          <div id="c3" className="col-2">
            <div className="container">
              <Nav id="" className="" navbar>
                <NavItem className="c3contain" nav caret>
                  <NavLink onClick={handleNavclick} href='# ' className="link3">CONTACT</NavLink>
                </NavItem>cd
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Navhandler




