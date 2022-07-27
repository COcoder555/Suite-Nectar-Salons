


import React, {useState} from "react";
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
import Caro2 from "./components/Carousel/carousel2";

import "./app.scss"


function App() {
  // const [currentPage, targetPage] = useState();
  const [currentPage, setCurrentPage] = useState('');
  
  return (

    
    <div className="app">
           <div className="App">
            <nav >
      <Navhandler currentPage ={currentPage} setCurrentPage ={setCurrentPage}/>
      </nav>
      {currentPage===''? <Landing/>:''}
      {currentPage ==='SERVICES'? <Services/>: ''}
      {currentPage ==='ABOUT'? <About/>: ''}
      {currentPage ==='GALLERY'? <Gallery/>: ''}
      {currentPage ==='PROFESSIONALS'? <Professionals/>: ''}
      {currentPage ==='LEASING'? <Leasing/>: ''}
      {currentPage ==='EXPERIENCES'? <Experiences/>: ''}
     
      
   
   
    </div>
  

    <Footer currentPage = {currentPage} setCurrentPage ={setCurrentPage}/>
      </div>

  );
}

export default App;
