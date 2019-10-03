import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import AddTodo from './AddTodo'
import ListToDo from './Listtodo'
export default function Containers() {
    return (
        <Container id="all-data-todo">
            <Row className="justify-content-md-center">
                <Col xs={4}>
                    <AddTodo/>
                </Col>
                <Col xs={8}>
                    <ListToDo/>
                </Col>
            </Row>
        </Container>
    )
}
