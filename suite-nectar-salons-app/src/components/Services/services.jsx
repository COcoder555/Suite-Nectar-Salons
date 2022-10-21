import { useState, React,useEffect,useRef } from 'react'
import Navbar from '../Nav/Navbar'
import './services.scss'
import { Card, CardBody, Button } from 'reactstrap'
import Collapse1 from '../Collapsible/collapsible'
import Collapse2 from '../Collapsible/collapsible2'
import Collapse3 from '../Collapsible/collapsible3'
import Collapse4 from '../Collapsible/collapsible4'
import Collapse5 from '../Collapsible/collapsible5'
import Footer from '../Footer/Footer'
import Bar from '../BBar/bbar';
import Modal1 from '../Modal/Modal'



import scrollToSection from '../Professionals/professionals'
import Professionals from '../Professionals/professionals'

let Services = (props,scrollToSection) =>{ 
  const [currentPage, ] = useState();

// let handleScrollTo = (event) =>{
//   if(event.target.id === 'tattooRef'){
//     scrollToSection()
//   } 
// }

return (


  <div>



    <div className='wrapper'>

      <div className='service-background-img'>
        <div className='serv-background1'></div>
        <div className='services-background'>




          <div className='container2'>
            <div id="serv">

              <h1>
                SERVICES
              </h1>
        {/* <Button name ="PROFESSIONALS" onClick={(profButtonCLick) }  className='tryButton'>
 THIS LEVEL BUTTON
        </Button> */}
            </div>
            <Collapse1 currentPage={currentPage} setCurrentPage={props.setCurrentPage } />
            <Collapse2 currentPage={currentPage} setCurrentPage={props.setCurrentPage  } />
            <Collapse5 currentPage={currentPage} setCurrentPage={props.setCurrentPage} />
            <Collapse3 currentPage={currentPage} setCurrentPage={props.setCurrentPage} />
            <Collapse4 currentPage={currentPage} setCurrentPage={props.setCurrentPage} />
          





          </div>
        </div>
      </div>

    </div>
    {/* <div className='contactBar'/> */}
    {/* <Bar></Bar> */}
  </div>
)

}
export default Services 
