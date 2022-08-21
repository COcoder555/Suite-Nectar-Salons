import React from 'react'
import './professionals.scss'
import Navhandler from '../Nav/Navbar'
export default function Professionals() {
  return (
    <div className='col-12'>
    <Navhandler />
    <div className='professional-container'>
      <div className="professional-background" />

      <div className='professionalTitle'>
        <h1>PROFESSIONALS</h1>
      </div>
      <div className='professionalImg-container'>
      
            <div className=''>
              <div className='row'>
                <div className='col-3'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
                <div className='col-3'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
                <div className='col-3'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
             

          </div>
          <div className='row'>
              
                <div className='col-3'>
             
                </div>
                <div className='col-3'>
                
                </div>
                <div className='col-3'>
                
                </div>
             

          </div>
          <div className='row'>
                <div className='col-3'>
                
                </div>
                <div className='col-3'>
                
                </div>
                <div className='col-3'>
                
                </div>
             

          </div>
        </div>
      </div>
    </div>

  </div>





  )
}
