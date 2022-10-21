import { React, useState, useEffect } from "react";
import ReactDom from "react-dom";
import "../Modal/Modal.scss";
import { createPortal } from "react-dom";
import prof1 from "../../Images/prof1.jpg";
import prof2 from "../../Images/prof2.jpg";
import data from "../../data/images.json";
import { NavItem } from "reactstrap";

const profImages = [prof1, prof2];

//  function that returns Modle 

const Modal1 = ({ clickedImg, setClickedImg, currentIdx, setCurrentIdx, linkIdx, item, index }, props) => {

    console.log(linkIdx)
    console.log(clickedImg)

    console.log(linkIdx.name, 'THIS IS linkIDX modal side');
    // let nameTitle = linkIdx.name;
    // document.getElementById('nameText').textContent = nameTitle;
//     const [domReady, setDomReady] = useState(false)

// useEffect(() => {
//     setDomReady(true)
//   })

    const handleClose = (e) => {
        if (e.target.classList.contains("dismiss"))
            setClickedImg(null);

    }
    // console.log(clickedImg)
    // return domReady ?
return(
    ReactDom.createPortal (

       

            <div className="overlay-dismiss"onClick={handleClose}>
            <div className = "modal-content"> 
        

            <div className="modal-template">
            <div className="dismiss">
                X
            </div>
            <img id="modalImage" src={clickedImg}></img>

                    <div id='nameText' className="nameText">

                        <div className="profName">
                        <h2>{linkIdx.name}</h2>
                    <h3>LOCATION: {linkIdx.salonLocation}</h3>
                        </div>
                 
                        <div className="profBio">
                        <div>{linkIdx.bioText}</div>
                        </div>
                   
                      <div className="socialMedia">
                   
               
                    
                            <div className="instagramLink SM">
                                <a className="fa-brands fa-instagram fa-2xl" href={linkIdx.badgeLink1} />
                            </div>
                            <div className='facebookLink SM'>
                                <a className="fa-brands fa-facebook fa-2xl" href={linkIdx.badgeLink1} />
                            </div>
                            <div className="twitterLink SM">
                                <a className="fa-brands fa-twitter fa-2xl" href={linkIdx.badgeLink1} />
                            </div>
                        
                    
                        </div>
                        </div>
                        <div className="profLinks">
                            <a href={linkIdx.link1}>{linkIdx.link1Name}</a>
                            <a href={linkIdx.link2}>{linkIdx.link2Name}</a>

                  

                        </div>
                    </div>





            </div>
            </div>,
            document.getElementById("portal")
    ))
    // ):null

}



export default Modal1;