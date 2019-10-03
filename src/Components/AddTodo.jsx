import React from 'react'
import {connect} from 'react-redux'
import { Form, Button,Card} from 'react-bootstrap'
let TodoId =1;
function AddTodo({ addTodofunc}) {
    return (
        <Card>
            <Card.Header>اضافه کردن</Card.Header>
            <Card.Body>
                <Form id="todo-form">
                    <Form.Group controlId="input-todo">
                        <Form.Label>عنوان لیست</Form.Label>
                        <Form.Control type="text" placeholder="عنوان لیست" />
                    </Form.Group>

                    <Button variant="primary" onClick={(e)=>{
                        e.preventDefault()
                        let form = document.querySelector("#todo-form")
                        addTodofunc({
                            id: TodoId++,
                            title: document.querySelector('#input-todo').value
                        })
                        form.reset();
                    }}  className="float-left">
                        اضافه کردن به لیست
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
const mapDispath= (dispatch)=>{
    return{
        addTodofunc: function (payload){
            console.log('payload==>',payload)
            dispatch({
                type:'ADD_ToDO',
                payload
            })
        }
    }
}
export default connect(null,mapDispath)(AddTodo);