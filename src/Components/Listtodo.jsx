import React from 'react'
import { Table, Card} from 'react-bootstrap';
import { connect } from 'react-redux';
import Todoitme from './Todoitme'
function ListToDo({ todostate}) {
    const RenderToDo = ()=>{
        return(
            todostate.map((itme,index) =>{
                return (<Todoitme key={index} todo={itme} />)
            })
        )
    }
    return (

        <Card border="light">
            <Card.Header>لیست تمام تسک ها</Card.Header>
            <Card.Body>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>عنوان لیست</th>
                            <th className="text-center">عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                       {RenderToDo()}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

const mapToProps = (state) => {
    return {
        todostate: state.todo
    }
}
export default connect(mapToProps, null)(ListToDo);