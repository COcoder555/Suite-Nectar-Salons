import React from 'react'




const Card = (props) => {
    console.log(props.data)
    function handleClick(){
        props.setClickedImg(true)
        props.setClickedProfImage1(props.data.profileImg)
        props.setLinkIdx(props.data)
        props.setClickedProfImage2(props.data.gallery[0])
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