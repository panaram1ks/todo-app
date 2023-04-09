import { useParams,Link } from 'react-router-dom'

function WelcomeComponent() {

    /*const params = useParams()
    console.log(params.username);*/
    const {username} = useParams()
    console.log(username);

    return(
        <div className="WelcomeComponent">
            <h1>Welcom {username}</h1>
            <div>
                Manage your todos. <Link to="/todos">Go to</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent