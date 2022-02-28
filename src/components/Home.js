import React from 'react';
import {Table, Container, Button} from 'react-bootstrap';
 

const Home = (props) => {
    const promptList = [
        "Who would win this election?",
        "Who is the better actor?",
        "Whom you see as next CM of UP?",
    ];
    return (
        <Container>
            <Table style={{margin:"5vh"}} table-striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>List of polls</th>
                        <th>Go to Polls</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        promptList.map((el, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{el}</td>
                                    <td><Button variant='info'>Vote Now!</Button></td>
                                </tr> 
                            );
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
};

Home.propTypes = {
    
};

export default Home;