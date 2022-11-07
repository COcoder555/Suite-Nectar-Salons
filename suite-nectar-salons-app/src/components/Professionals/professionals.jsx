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
  const cosmoRef = useRef();
  const tattooRef = useRef();
  const nailTechRef = useRef();
  const asethRef = useRef();

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
  let [clickedProfImage1, setClickedProfImage1] = useState(null);
  let [clickedProfImage2, setClickedProfImage2] = useState(null);
  let [clickedProfImage3, setClickedProfImage3] = useState(null);

  console.log(data.data2.cosmo[1].gallery[0])
  

  let handleClick = (index, onClickCapture, item) => {
    let profClassName = ['prof1', 'prof2', 'prof3', 'prof4', 'prof5','prof6'];
    setCurrentIdx(index);

    // console.log(onClickCapture, "this is the event");
    console.log(data, "hello what is the index")

    // Function to handle images and data sent to Modal in lightbox
    for (let i = 0; i < profClassName.length; i++) {
      if (index.nativeEvent.target.id === profClassName[i]) {
        setClickedImg(profImages[i])
        // console.log(clickedImg, " this is clicked image on porfessionals")

        // setLinkIdx(data.data[i])
        // setClickedProfImage1(data.data[i].gallery)
        // setClickedProfImage2()
        // console.log(linkIdx, 'THIS IS THE LINKIDX HANDLECLICK PROFSIDE')
        // console.log(linkIdx.email, "THIS IS THE EMAIL")

        // let nameTitle = linkIdx.name;
        // document.getElementById('nameText').textContent = nameTitle;
      }

    }
  }





  return (
    <div style = {{width: '100%'}}>
     
      <Navhandler />
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
                data.data2.cosmo.map((element,index) => {
                  console.log(element.profileImg)
                  return <Card id = {`prof${index + 1}`} src = {element.profileImg}  data = {element} setClickedImg = {setClickedImg} 
                  setClickedProfImage1 = {setClickedProfImage1} setLinkIdx = {setLinkIdx} setClickedProfImage2 = {setClickedProfImage2}/>
                })
              }

              {/* <div className='col-2 par'>
                <img id="prof5" className="profImg" handleClick={handleClick} src={profImages[4]}></img>
                <div className='profName'>
                  {data.data[4].name}
                </div>

              </div>
              <div className='col-2 par'>
                <img id="prof5" className="profImg" onClickCapture={handleClick} src={profImages[4]}></img>
                <div className='profName'>
                  {data.data[4].name}
                </div>

              </div>

              <div className='col-2 par'>
                <img id="prof5" className="profImg " onClickCapture={handleClick} src={profImages[4]}></img>
                <div className='profName'>
                  {data.data[4].name}
                </div>

              </div>

              <div className='col-2 par'>
                <img id="prof3" className="profImg " onClickCapture={handleClick} src={profImages[2]}></img>
                <div className='profName'>
                  {data.data[2].name}
                </div>
              </div> */}


              {
                clickedImg
                  ?

                  <div className='modal-container'>
                    <Modal1 
                    linkIdx={linkIdx}
                   clickedProfImage1 = {clickedProfImage1} 
                   clickedProfImage2 = {clickedProfImage2} 
                   setClickedImg={setClickedImg} 
                   currentIdx={currentIdx} 
                   clickedImg={clickedImg} 
                   profImages={profImages} />

                  </div>
                  :
                  ''
              }







            </div>

            {/* <div style = {{marginBottom: '500px'}}></div> */}



          </div>
          <div className='row rL rL'>
            <div className='col-2 par'>
              <img id="prof5" className="profImg" onClickCapture={handleClick} src={profImages[4]}></img>
              <div className='profName'>
                {data.data[4].name}
              </div>

            </div>
            <div className='col-2 par'>
              <img id="prof5" className="profImg" onClickCapture={handleClick} src={profImages[4]}></img>
              <div className='profName'>
                {data.data[4].name}
              </div>

            </div>
            <div className='col-2 par'>
              <img id="prof5" className="profImg" onClickCapture={handleClick} src={profImages[4]}></img>
              <div className='profName'>
                {data.data[4].name}
              </div>

            </div>
            <div className='col-2 par'>
              <img id="prof5" className="profImg" onClickCapture={handleClick} src={profImages[4]}></img>
              <div className='profName'>
                {data.data[4].name}
              </div>

            </div>
          </div>
          <div id='estheticians' className='sectionTitle'>
            ESTHETICIANS
            <div className='row rL'>
              <div className='col-2 par'>

              </div>
              <div className='col-2 par'>
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>
              <div className='col-2 par'>
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>

              <div className='col-2 par'>
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>
              <div className='col-2 par'>
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>
            </div>
            <div className='row rL'>
              <div className='col-2 par'>
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>
              <div className='col-2 par'>
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>
              <div className='col-2 par'>
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>

              <div className='col-2 par'>
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>
              <div className='col-2 par'>
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>
            </div>
            <div className='row rL'>
              <div className='col-2 par'>
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>
              <div className='col-2 par'>
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>
              <div className='col-2 par'>
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>

              <div className='col-2 par'>
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>
              <div className='col-2 par'>
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>
            </div>




          </div>

          <div ref={tattooRef}>
            <div id='nail' className=''>
              <div className='sectionTitle'>
                NAIL TECHNICIANS
              </div>
              <div className='row rL'>
                <div className='col-2 par'>
                  <img id="prof2" className='profImg' onClickCapture={handleClick} src={profImages[1]}></img>

                </div>
                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>

                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
              </div>
              <div className='row rL'>
                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>

                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
              </div>
              <div className='row rL'>
                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>

                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
              </div>



            </div>
          </div>
          <div id='tattoo'></div>
          <div >
            <div className='sectionTitle'>
              TATTOO / PIERCING
            </div>
            <div className='row rL'>
              <div className='col-2 par'>
                <img id="prof4" className="profImg" onClickCapture={handleClick} src={profImages[3]}></img>

              </div>
              <div className='col-2 par'>

              </div>
              <div className='col-2 par'>

              </div>

              <div className='col-2 par'>

              </div>
              <div className='col-2 par'>

              </div>
            </div>
            <div id='additional'></div>
            <div className='sectionTitle'>
              ADDITIONAL SERVICES
              <div className='row rL'>
                <div className='col-2 par'>
                  <img id="prof1" className="" onClickCapture={handleClick} src={profImages[0]}></img>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>

                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
                </div>
                <div className='col-2 par'>
                  {/* <img src="../../.../public/assets/work3.png"> </img> */}
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