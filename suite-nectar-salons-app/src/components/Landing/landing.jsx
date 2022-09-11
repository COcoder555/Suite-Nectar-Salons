import './landing.scss'
// import '../../components/grid.scss'
import Navhandler from '../Nav/Navbar'
import Footer from '../Footer/Footer'
import About from '../About/about'
import Carousel from '../Carousel/Corouse1'
import Caro from '../Carousel/Corouse1'
import { NavbarBrand, NavLink } from 'reactstrap'

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import LBar from '../BBar/lbbar'


function Landing() {
    
    const myRef = useRef();
    const [landingTextVisible, setLaningText] = useState(false);
    console.log('setLandingText', setLaningText);
    useEffect(() => {
        
        const view0ptions = {
            threshold: 1
         };
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
    
          entries.forEach(entry =>{
            if(!entry.isIntersecting){
                return;
            }else{
                observer.unobserve(entry.target);
            }
          });


        },
        view0ptions)
        observer.observe(myRef.current)
       
    }, [0])



    return (
        <>
        <Navhandler/>
            <div className="landing-container">
                <div className='caro-style'>
                                    <Caro id = "Caro"></Caro>
                       </div>




                <div id="landing" className='landing-background col-12'>
                    <h2 id="text1" className=''>

                    </h2>
                    <div className='row'>
                        <div className='col-5'></div>
                        <div className='col-6' >

                            <p ref={myRef}><span className={`animateText ${landingTextVisible ? 'text4' : ''}`} >
                            Suite Nectar Salons offers an effortless approach to creating your own salon suite business.<br></br>
As your trusted salon partner, we’re here to support you every step of the way. <br></br>
We focus on creating a thriving community of creative talent, and are committed to offering all the tools you need to succeed. <br></br>
You focus on creating a business that is uniquely you!<br></br>  
<h1 id='Join'>Join us and the suite life today!</h1>
     
                          

                            </span>
                            </p>
                        </div>
                    </div>

                </div>

{/* <div className='landingBar'/> */}


                


            </div>
            {/* <LBar></LBar> */}
        </>
    )
}

export default Landing