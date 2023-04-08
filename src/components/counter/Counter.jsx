import { useState } from 'react'
import CounterButton from './CounterButton'
import Reset from './Reset'

export default function Counter(){
    const [count, setCount] = useState(0)

    function incrementCounterParentFunction(by){
        setCount(count + by)
    }

    function decrementCounterParentFunction(by){
        setCount(count - by)
    }

    function resetCounterFunction(){
        setCount(0)
    }


 /*   function someMethodInParent(by){
        console.log("parent method called")
    }*/

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton 
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={2} 
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={5} 
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod={decrementCounterParentFunction}/>
            <Reset resetMethod={resetCounterFunction}/>   
        </>
    )
}