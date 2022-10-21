

import React, {memo, useState} from 'react'
import { Card, CardBody,Button } from 'reactstrap'




let Collapse2  =React.forwardRef( (props,ref) =>{

  const profButtonCLick =(event,ref) => {
    // console.log(event.target.name)
    props.setCurrentPage(event.target.name);
window.scrollTo({
  top:100
})

console.log(window.top)
      // console.log(event.target.id)
     

  }
 
console.log(window.top)
    const [isOpen, setIsOpen] = useState(false);
    return<div className='collapsible'>
        <div className='service-card'>
      <Card className='serv'>
     
      <div className='btn1'>
      <span onClick={() => setIsOpen(!isOpen)}><h3  className=' toggleBtn' > ESTHETICIANS MEDSPA</h3></span>
      {/* <button className=' toggleBtn' onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-arrow-down fa-2xl"></i> </button> */}
      </div>
     {isOpen && <CardBody className=''>
     <p className='titleUnderline'></p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      
      <div className='profBtnContainer'>

<Button name = "PROFESSIONALS" onClick={profButtonCLick} href="" id='profBtn'>BROWSE OUR PROFESSIONALS</Button>
  </div>
      </CardBody>}
      </Card>
      </div>
    </div>
})

export default Collapse2 