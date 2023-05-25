import React from 'react'
import { useParams } from 'react-router-dom'

const NumberAndString = (props) => {
    const {item} = useParams();

    return (
        <div>
            {
            isNaN(+item)?
            <h1>The word is: {item}</h1>:
            <h1>The number is: {item}</h1>
            }
        </div>
        )
}

export default NumberAndString