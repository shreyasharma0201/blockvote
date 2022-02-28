import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';

const NewPoll = props => {
    return (
        <Container style={{marginTop: "10px"}}>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Candidate 1 Name</Form.Label>
                    <Form.Control placeholder='Enter candidate Name'></Form.Control>
                </Form.Group>
            </Form>
        </Container>
    )
};


export default NewPoll;
