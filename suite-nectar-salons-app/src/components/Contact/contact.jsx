import React from 'react'
import './contact.scss'
import { Form,FormGroup,Label,Input } from 'reactstrap'
function Contacter() {
  return (
    <div>



      <div className='contact-wrapper'>

        <div className=''>

          <div className='flower-background'>
            <div className='contact-background'></div>



            <div className='container2'>
              <div id="serv">

                <h1>
                  CONTACT
                </h1>
              </div>



              <Form>
  <FormGroup>

    <Input
      id="exampleEmail"
      name="email"
      placeholder="*NAME"
      type="email"
    />
  
     <Input
      id="exampleEmail"
      name="email"
      placeholder="*PHONE"
      type="email"
    />
     
     <Input
      id="exampleEmail"
      name="email"
      placeholder="*EMAIL"
      type="email"
    />
         <Input
      id="exampleEmail"
      name="email"
      placeholder="*HOW DID YOU HEAR ABOUT SUITE NECTOR SALON"
      type="email"
    />
     
     <Input
      id="exampleEmail"
      name="email"
      placeholder="*INTEREST"
      type="email"
    />
      <Input
      id="exampleEmail"
      name="email"
      placeholder="INQUIRY"
      type="email"
    />
    </FormGroup>
    </Form>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contacter