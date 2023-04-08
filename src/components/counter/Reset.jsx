import './Reset.css'

export default function Reset({resetMethod}){    

    return (
        <div className="Reset">    
            <div>
                <button className="resetButton" onClick={resetMethod}>Reset</button>
            </div>            
        </div>
    )

}