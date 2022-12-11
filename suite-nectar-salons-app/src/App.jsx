import React, { useState } from "react";
import Landing from "./components/Landing/landing";
import Navhandler from './components/Nav/Navbar';
import Contact from "./components/pages/contact/Contact";

import Salons from "./components/pages/salonandsuites/Salons";

import About from "./components/About/about";
import Services from "./components/Services/services";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/gallery";
import Professionals from "./components/Professionals/professionals";
import Caro from "./components/Carousel/Corouse1";
import Experiences from "./components/Experiences/experiences";
import Leasing from "./components/Leasing/leasing";
import onLanding from './components/Footer/Footer'
import collapsible from "./components/Collapsible/collapsible";
import Contacter from "./components/Contact/contact";
import data from "./data/images.json"
import Modal1 from "./components/Modal/Modal.jsx";
import linkIdx from "./components/Modal/Modal.jsx"

import "./app.scss"


function App(clickedImg,linkIdx,currentIdx,setClickedImg,profImages,handleClick,props,) {
  // const [currentPage, targetPage] = useState();
  const [currentPage, setCurrentPage] = useState('');
  // const [isModalOpned,setIsModelOpned] = useState(true);

  return (

   
      <div >
      {/* <Modal1 currentPage = {currentPage} setCurrentPage ={setCurrentPage} clickedImg={clickedImg}  linkIdx ={linkIdx} handleClick= {handleClick}  setClickedImg = {setClickedImg} currentIdx = {currentIdx}   profImages = {profImages}/>:''} */}

    
       


              <nav >
                <Navhandler className = "navbar"  currentPage={currentPage} setCurrentPage={setCurrentPage} />
              </nav>

        

              {currentPage  === '' ? <Landing /> : ''}
              {currentPage === 'SERVICES' ? <Services currentPage={currentPage} setCurrentPage={setCurrentPage}  /> : ''}
              {currentPage === 'ABOUT' ? <About /> : ''}
              {currentPage === 'GALLERY' ? <Gallery  /> : ''}
              {currentPage === 'PROFESSIONALS' ? <Professionals linkIdx = {linkIdx} setClickedImg = {setClickedImg} clickedImg = {clickedImg} /> : ''}
              {currentPage === 'LEASING' ? <Leasing /> : ''}
              {currentPage === 'EXPERIENCES' ? <Experiences /> : ''}
              {currentPage === 'CONTACT' ? <Contacter /> : ''}

    
                         {/* {clickedImg && <Modal1 linkIdx ={linkIdx}  setClickedImg = {setClickedImg} currentIdx = {currentIdx}  clickedImg = {clickedImg} profImages = {profImages}/>} */}


                <div className="footerContainer">
              <Footer className="col-12" currentPage={currentPage} setCurrentPage={setCurrentPage} />
              
            </div>
          </div>


  );
}

export default App;
