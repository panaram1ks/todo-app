import { useEffect, useState } from "react"
import { retrieveAllTodosForUser } from "./api/TodoApiService"

function ListTodosComponent() {
    
    const today = new Date()
    const targetDate = new Date(  today.getDay(),today.getMonth, today.getFullYear+12)

    const [todos, setTodos] = useState([])

    useEffect(() => refreshTodos(), [])
   
    function refreshTodos(){
        retrieveAllTodosForUser('in28minutes')
        .then(response => {
            setTodos(response.data)

        })
        .catch(error => console.log(error))
    }   

    return(
        <div className="container">
            <h1>Things You Want To Do!</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Is Done</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            )
                        }                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodosComponent