import React from 'react'




const Card = (props) => {
    console.log(props.data)
    function handleClick(){
        props.setLinkIdx(props.data)
        props.setClickedImg(props.data.profileImg)
        props.setClickedProfImages(props.data.gallery)
    
    }

    return (
        <div className='col-2 par'>
            <img id= {props.id} className="profImg" onClick={handleClick} src={props.src}></img>
            <div className='profName'>
                {props.data.name}
            </div>
        </div>
    )
}

export default Card