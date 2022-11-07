import { React, useState, useEffect } from "react";
import ReactDom from "react-dom";
import "../Modal/Modal.scss";
import { createPortal } from "react-dom";
import prof1 from "../../Images/prof1.jpg";
import prof2 from "../../Images/prof2.jpg";
import data from "../../data/images.json";
import { NavItem } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const profImages = [prof1, prof2];

//  function that returns Modle 

const Modal1 = ({ clickedImg, clickedProfImage1,clickedProfImage2, setClickedImg, currentIdx, setCurrentIdx, linkIdx, item, index }, props) => {

    console.log(linkIdx)
    console.log(clickedImg)

    // console.log(linkIdx.name, 'THIS IS linkIDX modal side');
    // let nameTitle = linkIdx.name;
    // document.getElementById('nameText').textContent = nameTitle;
    //     const [domReady, setDomReady] = useState(false)

    // useEffect(() => {
    //     setDomReady(true)
    //   })

    const handleClose = (e) => {
        console.log(e.target.classList)
        if (e.target.classList.contains("dismiss")){
            console.log('dismiss')
            setClickedImg(null);
        }

    }
    // console.log(clickedImg)
    // return domReady ?
    return (




        <div className="overlay dismiss" onClick = {(event) =>{handleClose(event)}}>
            <div className="modal-content dismiss">


                <div className="modal-template">
                <div className="modalImage-container">
                
                <img id = "modalImage" src={clickedImg}></img>
       
                   

                </div>
              
                  
                    <div className="nameText-container">
                        
                    </div>
                    <div id='nameText' className="nameText">

                        <div className="profName">
                            <h2>{linkIdx.name}</h2>
                            <h3>LOCATION: {linkIdx.salonLocation}</h3>
                        </div>

                       
                        <div className="socialMedia">



                            <div className="instagramLink SM">
                                <a className="fa-brands fa-instagram fa-2xl" href={linkIdx.instagram} />
                            </div>
                            <div className='facebookLink SM'>
                                <a className="fa-brands fa-facebook fa-2xl" href={linkIdx.facebook} />
                            </div>
                            <div className="twitterLink SM">
                                <a className="fa-brands fa-twitter fa-2xl" href={linkIdx.twitter} />
                            </div>
                            <div className="email SM">
                            < div class="fa-sharp fa-solid fa-envelope fa-2xl" href ={linkIdx.email} />
                            </div>


                        </div>
                        <div className="profLinks">
                        <a href={linkIdx.link1}>{linkIdx.link1Name}</a>
                        <a href={linkIdx.link2}>{linkIdx.link2Name}</a>



                    </div>
                        <div className="profBio">
                            <div>{linkIdx.bioText}</div>
                        </div>
                        
                    </div>
               
                  
                </div>
       
                <img id = "modalImage" src={clickedProfImage1}></img>
                <img id = "modalImage" src={clickedProfImage2}></img>




            </div>
        </div>
    )
    // ):null

}



export default Modal1;