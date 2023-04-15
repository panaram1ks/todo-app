import { useParams,Link } from 'react-router-dom'
import { useState } from 'react';
import { retrieveHelloWorldBean,retrieveHelloWorldPathVariable } from './api/HelloWorldApiService';
import { useAuth } from './security/AuthContext';

function WelcomeComponent() {

    /*const params = useParams()
    console.log(params.username);*/
    const {username} = useParams()
    //console.log(username);

    const [message, setMessage] = useState(null)

    const authContext = useAuth()

    function callHelloWorldRestApi(){
        console.log('called');
        retrieveHelloWorldBean()
            .then( (response)=> successfulResponse(response) )
            .catch( (error) => errorResponse(error) )
            .finally( () => console.log('cleanup') )
    }

    function callHelloWorldPathVariableRestApi(){
        console.log('called');
        retrieveHelloWorldPathVariable('ranga', authContext.token)
            .then( (response)=> successfulResponse(response) )
            .catch( (error) => errorResponse(error) )
            .finally( () => console.log('cleanup') )
    }

    function successfulResponse(response){
        console.log(response);
        /*setMessage(response.data)*/
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error);
    }

    return(
        <div className="WelcomeComponent">
            <h1>Welcom {username}</h1>
            <div>
                Manage your todos. <Link to="/todos">Go to</Link>
            </div>
            <div>
                <button className='btn btn-success m-2' onClick={callHelloWorldRestApi}>Call Hellow World</button>
            </div>
            <div>
                <button className='btn btn-success m-2' onClick={callHelloWorldPathVariableRestApi}>HelloWorldPathWariable</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent