import { useState, React, useEffect, useRef } from 'react'
import Navbar from '../Nav/Navbar'
import './services.scss'
import { Card, CardBody, Button } from 'reactstrap'
import Collapse from '../Collapsible/collapsible'


import Footer from '../Footer/Footer'
import Bar from '../BBar/bbar';
import Modal1 from '../Modal/Modal'



import scrollToSection from '../Professionals/professionals'
import Professionals from '../Professionals/professionals'

let Services = (props, scrollToSection) => {
  const [currentPage,] = useState();

  let objects = [
    {
      title: 'COSMOTOLOGISTS HAIRSYLISTS BARBERS',
      serviceDescription: 'Our Beauticians offer a range of services from unique cuts and styles of all hair types, to coloring, conditioning treatments, extensions and so much more! ',
      id: 'cosmotologists'
    },
    {
      title: 'ESTHETICIANS MEDSPA',
      serviceDescription: 'Eyelash extensions, facials ...???',
      id: 'estheticians'
    },
    {
      title: 'NAIL TECHNICIANS',
      serviceDescription: 'Our manicure and pedicurists offer a personalized experience to fit your individual needs! Featuring all styles from acrylics, to gel, to dip powder. ',
      id: 'nail'
    },
    {
      title: 'TATTOO  PIERCING',
      serviceDescription: 'From talented styling and techniques, to skilled scar cover ups. Beautiful microblading is also available.',
      id: 'tattoo'
    },
    {
      title: 'ADDITIONAL SERVICES',
      serviceDescription: 'Explore the suites for other various artists and services!',
      id: 'additional'
    },



  ]


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
                <div className='servicesTitle'>
                  <h1 className="servTitle">
                    SERVICES
                  </h1>
                </div>

                {/* <Button name ="PROFESSIONALS" onClick={(profButtonCLick) }  className='tryButton'>
                 THIS LEVEL BUTTON
                     </Button> */}
              </div>

              {
                objects.map((element) => {
                  return <Collapse id={element.id} currentPage={currentPage} setCurrentPage={props.setCurrentPage} title={element.title} description={element.serviceDescription} />
                })
              }


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
