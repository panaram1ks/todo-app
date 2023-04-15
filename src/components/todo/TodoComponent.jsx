import { useNavigate, useParams } from "react-router-dom"
import { retrieveTodoApi, updateTodoApi, createTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import moment from "moment"

export default function TodoComponent(){

    const authContext = useAuth()
    const username = authContext.username
    const {id} = useParams()

    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')

    const navigate = useNavigate()

    useEffect(
        () => retrieveTodos(), [id]
    )

    function retrieveTodos(){
        if(id != -1){
            retrieveTodoApi(username, id)
            .then(response => {
                setDescription(response.data.description) 
                setTargetDate(response.data.targetDate)  
                console.log('response.data.targetDate ' + response.data.targetDate);             
            })
            .catch(error => console.log(error))
        }
        
    }

    function onSubmit(values){
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }
        if(id == -1){
            createTodoApi(username, todo)
            .then(response => {  
                navigate('/todos')             
            })
            .catch(error => console.log(error))
        } else {
            updateTodoApi(username, id, todo)
            .then(response => {  
                //console.log('response ' + response);
                navigate('/todos')             
            })
            .catch(error => console.log(error))
        }
    
    }

    function validate(values){
        let errors = {
           /* description: 'Enter a valid description',
            targetDate: 'Enter a valid date'*/
        }
        if(values.description.length < 5){
            errors.description = 'Enter atleast 5 characters'
        }
        if(values.targetDate == null || values.targetDate == '' || !moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a targetDate'
        }
        return errors
    }

    return (

        <div className="container">
            <h1>description: {description}</h1>
            <div>
                <Formik 
                    initialValues={ {description, targetDate} } enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="alert alert-warning"
                                />
                                <ErrorMessage
                                    name="targetDate"
                                    component="div"
                                    className="alert alert-warning"
                                />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Tagret</label>
                                    <Field type="date" className="form-control" name="targetDate"/>
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-5" type="submit">Save</button>
                                </div>
                            </Form>                            
                        )                        
                    }
                </Formik>                
            </div>
        </div>
    )
}