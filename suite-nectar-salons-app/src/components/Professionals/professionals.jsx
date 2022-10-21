import {useRef,useEffect,useState, Profiler,} from 'react'
import './professionals.scss'
import Navhandler from '../Nav/Navbar'
import { Button } from 'reactstrap';
import data from "../../data/images.json";
import wor3photo from "../../Images/work3.png";
import flower from "../../Images/flowerbg.jpg";
import prof1 from "../../Images/prof1.jpg"
import prof2 from "../../Images/prof2.jpg"
import prof3 from "../../Images/prof3.jpg"
import Modal1 from "../Modal/Modal.jsx"



let Professionals = (item,link)=> {
//   useEffect(() =>{
//     setCurrentIdx(currentIdx)
//     // console.log(currentIdx)
//  })
const cosmoRef = useRef();
const tattooRef = useRef();
const nailTechRef = useRef();
const asethRef = useRef();

const profImages = [prof1,prof2,prof3]
let imProfImages = profImages.slice();
// STATE FOR LIGHT BOX

let[clickedImg, setClickedImg] = useState(null);
let [currentIdx, setCurrentIdx] = useState(null);
let [linkIdx, setLinkIdx] = useState(null);

let handleClick  = (index,onClickCapture,item) =>{
  let profClassName = ['prof1','prof2','prof3'];
  setCurrentIdx(index);  

// console.log(onClickCapture, "this is the event");
console.log(data,"hello what is the index")

// Function to handle images sent to Modal in lightbox
for(let i = 0; i < profClassName.length; i ++){
if(index.nativeEvent.target.className === profClassName[i]){
  setClickedImg(profImages[i])
  // console.log(clickedImg, " this is clicked image on porfessionals")
setLinkIdx(data.data[i])
console.log(linkIdx, 'THIS IS THE LINKIDX HANDLECLICK PROFSIDE')
  // let nameTitle = linkIdx.name;
// document.getElementById('nameText').textContent = nameTitle;
}

}}



// THIS IS THE SCORLL TO FUNCTION THAT 
// const scrollToSection= (elementRef,event) =>{

//   window.scrollTo({
//     top: 3600,
//     behavior:'smooth',

//   })
//   console.log(elementRef.current)
// }
// useEffect((element) =>{
//   if(element== 'tattoRef'){
//  scrollToSection();
//   }
// })
// console.log(data.data[0].link)

  return (
    <div className='col-12'>
      <Navhandler />
      <div className='professional-container'>
        <div className="professional-background" />

        <div className='professionalTitle'>
          <h1>PROFESSIONALS</h1>
         
        </div>


         {/* <Button onClick={()=>scrollToSection(tattooRef)} className='tryButton'>
             THIS LEVEL BUTTON
           </Button> */}
       
        <div className='professionalImg-container'>

          <div ref ={cosmoRef} className='cosoProfImgContainer'> COSMOTOLOGISTS HAIRSYLISTS BARBERS
            <div className='row rL rL'>
              <div className='col-2 par par1 '>
                {data.data.map((item,index) =>{
                  <div key ={index} className = "col-2 "> 
                
                   <img src ={item.link} alt ={item.text} /> 
                    <div className='try'> {item.link}</div>
      x
                  <h2>{item.link}</h2>
                
                  </div>
                } )}
                
               
                <img id = "profImg"  className = "prof1" onClickCapture = {handleClick} src={profImages[0]}></img>

              </div>
              <div className='col-2 par'>
                {/* <img src ={prof1} className = "photo"></img> */}

           {/* <div className='try'>{data.data[0].text}</div>  */}
           <img id = "profImg"className='prof2' onClickCapture  = {handleClick} src={profImages[1]}></img>
              </div>
              <div className='col-2 par'>
              <img id = "profImg" className = "prof3" onClickCapture = {handleClick} src={profImages[2]}></img>
              </div>
              <div className='modal-container'>
              {clickedImg && <Modal1 linkIdx ={linkIdx}  setClickedImg = {setClickedImg} currentIdx = {currentIdx}  clickedImg = {clickedImg} profImages = {profImages}/>}
              </div>

              <div className='modal-container'>
              {/* {clickedImg && <Modal1 currentIdx = {currentIdx} setClickedImg = {setClickedImg} clickedImg = {clickedImg} profImages = {profImages}/>} */}
              </div>
              <div className='col-2 par'>
              
                {/* <img src="../../.../public/assets/work3.png"> </img> */}
              </div>
              <div className='col-2 par'>
     
                
              </div>
   

            </div>
            


          </div>
          <div ref = {asethRef}className='asheticianProfImgContainer'>
            ASETHETICIANS
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
         
         <div ref = {tattooRef}>
          <div   className='asheticianProfImgContainer'>
            <div >
          TATTOO / PIERCING
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
          <div ref ={nailTechRef} className='asheticianProfImgContainer'>
          NAIL TECHNICIANS
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
      </div>

    </div>





  )
}
export default Professionals 