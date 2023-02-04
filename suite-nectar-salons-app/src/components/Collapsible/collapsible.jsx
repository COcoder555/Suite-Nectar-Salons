import React, { memo, useState, ref, useEffect,useContext } from 'react'
import { Card, CardBody, Button, NavLink, NavItem } from 'reactstrap'
import './collapsible.scss';
import { App } from '../../App.jsx'
import scrollToSection from '../Professionals/professionals'
import tattooRef from '../Professionals/professionals'
import elementRef from '../Professionals/professionals'
import Professionals from '../Professionals/professionals';
import { ReduxLiteContext } from '../../global/ReduxLiteContext';





const Collapse = (props) => {

  const{id,setID} = useContext(ReduxLiteContext)
  
  const [isOpen, setIsOpen] = useState(false);

  const profButtonCLick = (event, ref) => {
    console.log(event.target.name)
    props.setCurrentPage(event.target.name);

    setID(props.id)

  }







  


  return (<div className='collapsible'>
    <div className='service-card'>
      <Card className='serv'>
        <div className='btn1'>
          <span onClick={() => setIsOpen(!isOpen)}><h3 className=' toggleBtn' >{props.title}</h3></span>
        </div>
        {/* 
  <div className='btn1'>
  <button className=' toggleBtn' onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-arrow-down fa-2xl"></i> </button>
  </div> */}
        {isOpen && <CardBody className=''>
          <p className='titleUnderline'></p>
          <div className='collapseDescription'>
          {props.description}
          </div>

          <div className='profBtnContainer'>

            <Button tittle='cosmoRef' name="PROFESSIONALS" onClick={profButtonCLick} href="" className ='profBtn'>BROWSE  OUR PROFESSIONALS</Button>
          </div>
        </CardBody>}



         </Card>
    </div>
  </div>
  )}




  export default Collapse