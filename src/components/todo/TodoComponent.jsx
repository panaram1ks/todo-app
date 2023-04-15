import { useParams } from "react-router-dom"
import { retrieveTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"

export default function TodoComponent(){

    const authContext = useAuth()
    const username = authContext.username
    const {id} = useParams()

    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')

    useEffect(
        () => retrieveTodos(), [id]
    )

    function retrieveTodos(){
        retrieveTodoApi(username, id)
            .then(response => {
                setDescription(response.data.description) 
                setTargetDate(response.data.targetDate)  
                console.log('response.data.targetDate ' + response.data.targetDate);             
            })
            .catch(error => console.log(error))
    }

    function onSubmit(values){
        console.log(values);
    }

    function validate(values){
        let errors = {
           /* description: 'Enter a valid description',
            targetDate: 'Enter a valid date'*/
        }
        if(values.description.length < 5){
            errors.description = 'Enter atleast 5 characters'
        }
        if(values.targetDate == null){
            errors.targetDate = 'Enter a targetDate'
        }
        console.log(values);
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