import React, {memo, useState} from 'react'
import { Card, CardBody,Button } from 'reactstrap'


function Collapse3(){

    const [isOpen, setIsOpen] = useState(false);
    return<div className='collapsible'>
        <div className='service-card'>
      <Card className='serv'>

      <h3>TATTOO & PIERCING</h3>
      <div className='btn1'>
      <button className=' toggleBtn' onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-arrow-down fa-2xl"></i> </button>
      </div>
     {isOpen && <CardBody className=''>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </CardBody>}
      </Card>
      </div>
    </div>
}



export default React.memo(Collapse3);