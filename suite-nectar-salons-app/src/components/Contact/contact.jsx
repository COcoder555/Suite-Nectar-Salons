import { React, useState,useRef,ref } from 'react'
import './contact.scss'
import { Form, FormGroup,Button, Label, Select, Input, Row, Col, Dropdown, DropdownMenu, DropdownToggle, DropdownItem, } from 'reactstrap'
import Navhandler from '../Nav/Navbar';
import Bar from '../BBar/bbar';
import emailjs from "emailjs-com";


function Contacter({ direction, ...args }) {

const form = useRef();
let sendEmail = (e)=>{
  e.preventDefault();

    emailjs.sendForm('service_igdq1hc', 'suiteNectarS124', e.target, 'sG7gzaL6Dl23a8o8V')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
e.target.reset();
};

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const [selection, setSelection] = useState("");




  console.log(selection)


  return (
    <div>
         <Navhandler />
      <div className='wrapper'>
        <div className='contactBackground-container'>
        <div className='contact-background'></div>
       
        <div className = 'headerBackground'>

                
              </div>
        </div>
      <div className='formBackroung-wrapper'>
        <div className='formBackground'><h1>
                  CONTACT
                </h1>
                <div className='phNumber'>1 704 334 8055</div>

          <div className='contact-wrapper'>
            <Form ref={{form}} onSubmit={sendEmail}>
              <Row className='contactRow-1'>
                <Col md={5}>
                  <FormGroup>

                        <Input
                          id="exampleEmail"
                          name="name"
                          placeholder="NAME"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={5}>
                      <FormGroup>

                        <Input
                          id="exampleEmail"
                          name="phone"
                          placeholder="PHONE"
                          type="text"
                        />

                      </FormGroup>
                    </Col>
                    <Col md={5}>
                      <FormGroup>

                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="EMAIL"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={5}>
                      <FormGroup>

                        <Input
                          id="exampleEmail"
                          name="source"
                          placeholder="HOW DID YOU HEAR ABOUT SUITE NECTAR SALONS?"
                          type="text"
                        />

                      </FormGroup>
                    </Col>
                 
                    <Col md={10}>
                  


                      <div className='interest'>
                        <h4></h4>
                        <select name ='interest' id="exampleEmail" value={selection} onChange={e => setSelection(e.target.value)} className='col-12'>
                          <option value="" disabled selected>*INTEREST</option>
                          <option value="HAIRSTYLISTS BARBERS">COSMOTOLOGISTS HAIRSTYLISTS  BARBERS</option>
                          <option value="SPA SERVICES">ESTHETICIANS MEDSPA</option>
                          <option value="TATOOO  PIERCING">TATOOO PIERCING</option>
                          <option value="GENERAL INQUIRY">GENERAL INQUIRY</option>
                          <option value="LEASING">LEASING</option>
                        </select>
                      </div>

                    </Col>

              <Col md={10}>
                      <FormGroup>
                        <Input className='inquery-text-area'
                          id="text area"
                          name="message"
                          placeholder="INQUIRY"
                          type="text"
                        />
                      </FormGroup>

                    </Col>
                    </Row>
                    <Row className ='subBtnRow'>
                    <Col md ={1} >
                      <Button type ='submit' value ='send Message'className='submitButton'>
                  SUBMIT
                 
                      </Button>

                    </Col>
                    </Row>
       
        </Form>
        </div>
        </div>
        <div className='hrsTitle'>
                <div className='col-6'>
                  <h2 className='shTitle'>HOURS</h2>
                </div>

              </div>
              <div className='operationHrs'>
                <div className='col-6'>

                  <ui>
                    <p>Sunday - 8:00 am - 8:00 pm</p>
                    <p>Monday - 9:00 am - 7:00 pm</p>
                    <p>Tuesday - 9:00 am - 7:00 pm</p>
                    <p>Wednesday - 9:00 am - 7:00 pm</p>
                    <p>Thursday - 9:00 am - 7:00 pm</p>
                    <p>Friday - 9:00 am - 7:00 pm</p>
                    <p>Saturday - 8:00 am - 8:00 pm</p>


                  </ui>
                </div>
              </div>
              <div className='operationHrs'>
                <div className='col-6'>
                  <h2 className='shTitle'>LOCATIONS</h2>
                  <div>
                    <a href=" " className='location1'>
                      2250 Hawkins St
                      Charlotte, NC 28105
                    </a>
                  </div>
                  <div>
                    <a href="https://www.google.com/maps/place/Suite+Nectar+Salons/@35.1043759,-80.7138051,17.26z/data=!4m13!1m7!3m6!1s0x88542419eec8952d:0xd5e2241c25462dc1!2s7928+Council+Pl,+Matthews,+NC+28105!3b1!8m2!3d35.1041918!4d-80.7112629!3m4!1s0x88542419eec7d1e7:0xc2ef130ad940c7b8!8m2!3d35.104197!4d-80.711297" className='location2'>
                      7928 Council Place Matthews
                      NC 28105
                    </a>

                  </div>

                </div>

              </div>
          
        </div>'


      </div>



    </div>
  )
}

export default Contacter