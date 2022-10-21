import {React, useState}from 'react'
import { Nav } from 'reactstrap'
import Navhandler from '../Nav/Navbar'
import './gallery.scss'
import Bar from '../BBar/bbar';
import Modal1 from '../Modal/Modal.jsx';


import profImages from '../Modal/Modal.jsx';

function Gallery(props) {


  return (
    
    <div className='col-12'>
      <Navhandler />
      <div className='gallery-container'>
        <div className="gallery-background" />
    

        <div className='galleryTitle'>
          <h1>Gallery</h1>
        </div>
       
        <div className='row'>
        <div className = 'col-12'>
        <div className='galleryImg-container'>
              <div className=''>
                <div className='row'>
             
                  <div className='col-3'>
                  <div className='try'>
        
   
        </div>

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
      </div>
    </div>






  )
}

export default Gallery