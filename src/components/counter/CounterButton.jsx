import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './CounterButton.css'



export default function CounterButton({by, incrementMethod, decrementMethod}){

    const [count, setCount] = useState(0)


    function incrementCounterFunction(){
        setCount(count + by)
        console.log(count)
        /*someMethodInParent()*/
        incrementMethod(by)

        /*state[1](state[0] + 1)
        console.log(state[0])
        console.log(state[1])
        console.log('increment clicked')*/
    }

    function decrementCounterFunction(){
        setCount(count - by)
        console.log(count)
        decrementMethod(by)
    }


    return (
        <div className="CounterButton">    
            <div>
                <button className="counterButton" onClick={incrementCounterFunction}> +{by} </button>
                <button className="counterButton" onClick={decrementCounterFunction}> -{by} </button>
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