import { useRef, useEffect, useState, Profiler, useContext } from 'react'
import './professionals.scss'
import Navhandler from '../Nav/Navbar'
import { Button } from 'reactstrap';
import data from "../../data/images.json";
import wor3photo from "../../Images/work3.png";
import flower from "../../Images/flowerbg.jpg";
import prof1 from "../../Images/prof1.jpg"
import prof2 from "../../Images/prof2.jpg"
import prof3 from "../../Images/prof3.jpg"
import prof4 from "../../Images/prof4.jpg"
import prof5 from "../../Images/prof5.jpg"
import prof6 from "../../Images/prof6.jpg"
import prof2ProImages from "../../Images/prof2ProImages.jpg"
import prof3ProImages1 from "../../Images/prof3ProImages.jpg"
import Modal1 from "../Modal/Modal.jsx"
import { ReduxLiteContext } from '../../global/ReduxLiteContext';
import Card from './Card'



const Professionals = (item, link) => {
  const { id, setID } = useContext(ReduxLiteContext)
  useEffect(() => {

    let element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      })
    }
  })


  //  const profImages = [prof1, prof2, prof3, prof4, prof5]

  // PROFESSIONALS IMAGE ARRAYS
  const cosmoProfileImages = [prof3, prof5, prof6];
  // const cosmoProfImages = [prof3ProImages];
  const prof3ProImages = [prof3, prof3ProImages1];
  // const esthfProfileImages = [];
  // const esthProfImages =[];
  // const nailTechProfilefImages =[];
  // const nailTechProfImages = [prof2ProImages];
  // const tattooProfilefImages =[prof4];
  // const tattooProfImages = [];
  // const addProfilefImages =[prof1];
  // const addProfImages = [];

  let str = data.data2.cosmo[0].name
  let str2 = data.data[0].gallery

  const profImages = [prof1, prof2, prof3, prof4, prof5, prof6]
  let imProfImages = profImages.slice();
  // STATE FOR LIGHT BOX

  let [clickedImg, setClickedImg] = useState(null);
  let [currentIdx, setCurrentIdx] = useState(null);
  let [linkIdx, setLinkIdx] = useState(null);
  let [clickedProfImages, setClickedProfImages] = useState([]);

  console.log(data.data2.cosmo[1].gallery[0])






  return (
    <div style={{ width: '100%' }}>
{/* 
      <Navhandler /> */}
      <div className='professional-container'>
        <div className="professional-background" />

        <div className='professionalTitle'>
          <h1 className='profTitle'>PROFESSIONALS</h1>

        </div>
        <div className='professionalImg-container'>
          <div id='cosmotologists' className='sectionTitle'>COSMOTOLOGISTS HAIRSYLISTS BARBERS</div>
          <div>

            <div className='row rL rL' style={{ marginBottom: '100px' }}>

              {
                data.data2.cosmo.map((element, index) => {
                  console.log(element.profileImg)
                  return <Card id={`prof${index + 1}`} src={element.profileImg} data={element} setClickedImg={setClickedImg}
                    setClickedProfImages={setClickedProfImages} setLinkIdx={setLinkIdx}
                  />
                })
              }

             

              {
                clickedImg
                  ?

                  <div className='modal-container'>
                    <Modal1
                      linkIdx={linkIdx}
                      setClickedProfImages={setClickedProfImages}
                      clickedProfImages={clickedProfImages}
                      setClickedImg={setClickedImg}
                      currentIdx={currentIdx}
                      clickedImg={clickedImg}
                      profImages={profImages} />

                  </div>
                  :
                  ''
              }







            </div>

        



          </div>
          <div className='row rL rL'>
            <div className='col-2 par'>


            </div>
            <div className='col-2 par'>

            </div>


            <div className='col-2 par'>

            </div>

            <div className='col-2 par'>

            </div>


          </div>
          <div id='estheticians' className='sectionTitle'>
            ESTHETICIANS
            
            
            




          </div>

  
              <div id='nail' className='sectionTitle'>
                NAIL TECHNICIANS
              </div>
              <div className='row rL'>

                <div className='row rL rL' style={{ marginBottom: '100px' }}>

                  {
                    data.data2.nailTech.map((element, index) => {
                      console.log(element.profileImg)
                      return <Card id={`prof${index + 1}`} src={element.profileImg} data={element} setClickedImg={setClickedImg}
                        setClickedProfImages={setClickedProfImages} setLinkIdx={setLinkIdx}
                      />
                    })
                  }
                </div>







              </div>
              <div className='row rL'>


              </div>



        
          
          <div ></div>
          <div >
            
            <div id='tattoo' className='sectionTitle'>
              TATTOO / PIERCING
            </div>
            <div className='row rL'>

              <div className='row rL rL' style={{ marginBottom: '100px' }}>
                {
                  data.data2.tattoo.map((element, index) => {
                    console.log(element.profileImg)
                    return <Card id={`prof${index + 1}`} src={element.profileImg} data={element} setClickedImg={setClickedImg}
                      setClickedProfImages={setClickedProfImages} setLinkIdx={setLinkIdx}
                    />
                  })
                }
              </div>
            </div>
            <div id='additional'></div>
            <div className='sectionTitle'>
            
              ADDITIONAL SERVICES
              <div className='row rL'>
                <div className='row rL rL' style={{ marginBottom: '100px' }}>
                  {
                    data.data2.additionalServices.map((element, index) => {
                      console.log(element.profileImg)
                      return <Card id={`prof${index + 1}`} src={element.profileImg} data={element} setClickedImg={setClickedImg}
                        setClickedProfImages={setClickedProfImages} setLinkIdx={setLinkIdx}
                      />
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





  )
}
export default Professionals 