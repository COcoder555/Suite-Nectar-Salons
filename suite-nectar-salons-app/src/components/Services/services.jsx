import React from 'react'
import Navbar from '../Nav/Navbar'
import './services.scss'
import { Card, CardBody,Button } from 'reactstrap'
import Collapse1 from '../Collapsible/collapsible'
import Collapse2 from '../Collapsible/collapsible2'
import Collapse3 from '../Collapsible/collapsible3'
import Collapse4 from '../Collapsible/collapsible4'
import Footer from '../Footer/Footer'

export default function Services() {
  return (


<div>
  
<div className='serv-background'></div>
<div className='wrapper'>
<div className ='services-background'>



  
  <div className='container'>
    <div id = "serv">
      
      <h1>
        SERVICES
      </h1>
    </div>

<Collapse1/>
<Collapse2/>
<Collapse3/>
<Collapse4/>

 
    
    
    
</div>
  </div>

</div>

</div>
)}
