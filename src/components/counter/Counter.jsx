import { useState } from 'react'
import './Counter.css'
export default function Counter(){

    const [count, setCount] = useState(0)


    function incrementCounterFunction(){
        setCount(count + 1)
        console.log(count)
        /*state[1](state[0] + 1)
        console.log(state[0])
        console.log(state[1])
        console.log('increment clicked')*/
    }


    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton"
                    onClick={incrementCounterFunction}>   
                    +1
                </button>
            </div>
            
        </div>
    )
}