import React from 'react'
import { Button} from 'react-bootstrap'
import {connect} from 'react-redux'
function ToDoItme({ todo, deleteTodo}) {
    let count =1;
    return (
        <tr>
            <td>{todo.id}</td>
            <td id={`titel-todo-${todo.id}`}>{todo.title}</td>
            <td className="text-center">
                <Button variant="success" id={`doing-${todo.id}`}
                 className="edit-btn" onClick={e=>{
                     console.log(document.querySelector(`#titel-todo-${todo.id}`).setAttribute('class','todo-doing'))
                 }}>
                    <i className="fa fa-check-square "></i>
                </Button>
                <Button variant="danger" id={`delete-${todo.id}`}
                 className="edit-btn" onClick={ e=>{
                     deleteTodo({
                         id: todo.id
                     })
                 }}>
                    <i className="fa fa-window-close"></i>
                </Button>
            </td>
        </tr>
    )
}
const mapToDispatch=(dispatch)=>{
    return {
        deleteTodo : function(payload){
            dispatch({
                type:'DELETE_TODO',
                payload
            })
        }
    }
}
export default connect(null,mapToDispatch)(ToDoItme);