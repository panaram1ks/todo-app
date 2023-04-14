import { useParams,Link } from 'react-router-dom'
import axios from 'axios';

function WelcomeComponent() {

    /*const params = useParams()
    console.log(params.username);*/
    const {username} = useParams()
    console.log(username);

    function callHelloWorldRestApi(){
        console.log('called');
        //axios
        axios.get('http://localhost:8080/hello-world')
        .then( (response)=> successfulResponse(response) )
        .catch( (error) => errorResponse(error) )
        .finally( () => console.log('cleanup') )
    }

    function successfulResponse(response){
        console.log(response);
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
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>Call Hellow World</button>
            </div>
        </div>
    )
}

export default WelcomeComponent