import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './CounterButton.css'



export default function CounterButton({by, incrementMethod, decrementMethod}){ 

    return (
        <div className="CounterButton">    
            <div>
                <button className="counterButton" onClick={() => incrementMethod(by)}> +{by} </button>
                <button className="counterButton" onClick={() => decrementMethod(by)}> -{by} </button>
            </div>            
        </div>
    )
}

CounterButton.prototype = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}