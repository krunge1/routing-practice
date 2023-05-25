import React from 'react'
import { useParams } from 'react-router-dom'


const StringAndColor = () => {
    const {item} = useParams();
    const {textColor}  = useParams ();
    const {backgroundColor} = useParams ();
    
    const theStringStyle ={
        color: textColor,
        backgroundColor: backgroundColor,
    }
    return (
        <div>
            <h1 style={theStringStyle}>The word is: {item}</h1>
        </div>
    )
}

export default StringAndColor