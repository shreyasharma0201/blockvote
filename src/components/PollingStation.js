import React, { useState } from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import jk from '../assets/jk.jpg';

const PollingStation = props => {

const [candidate1URL, changeCandidate1Url] = useState(jk);
const [candidate2URL, changeCandidate2Url] = useState(jk);
const [showResults, changeResultsDisplay] = useState(true);

    return (
        <Container>
            <Row>
                <Col className='justify-content-center d-flex'>
                <Container>
                    <Row style={{marginTop: "5vh", backgroundColor:"pink"}}>
                        <div
                            style={{
                                display:'flex',
                                justifyContent:'center',
                                padding: "3vw",
                            }}
                        >
                            <img 
                                style={{height: "35vh", width: "20vw"}}
                                src={candidate2URL}
                            ></img>   
                        </div>
                    </Row>  
                    {showResults ? <Row 
                        className='justify-content-center d-flex' style={{marginTop: "2vh"}}>
                        <div style={{
                            display:'flex', 
                            justifyContent:'center',
                            fontSize:'40px',
                            padding:'10 px',
                            backgroundColor:'#c4c4c4',
                    }}>4444</div></Row> : null}
                    <Row className='justify-content-center d-flex'>
                        <Button>vote</Button>
                    </Row>
                </Container>
                </Col>
                <Col className='justify-content-center d-flex align-items-center'>
                        <div
                            style={{
                                display:"flex",
                                justifyContent:"center",
                                backgroundColor:"purple",
                                height:"20vh",
                                width: "20vw",
                                alignItems:"center",
                                padding:"2vw",
                                textAlign:"center",
                            }}>
                                Who is better vocalist?
                        </div>
                </Col>
                <Col className='justify-content-center d-flex'>
                <Container>
                    <Row style={{marginTop: "5vh", backgroundColor:"pink"}}>
                        <div
                            style={{
                                display:'flex',
                                justifyContent:'center',
                                padding: "3vw",
                            }}
                        >
                            <img 
                                style={{height: "35vh", width: "20vw"}}
                                src={candidate2URL}
                            ></img>   
                        </div>
                    </Row>  
                    {showResults ? <Row 
                        className='justify-content-center d-flex' style={{marginTop: "2vh"}}>
                        <div style={{
                            display:'flex', 
                            justifyContent:'center',
                            fontSize:'40px',
                            padding:'10 px',
                            backgroundColor:'#c4c4c4',
                    }}>4444</div></Row> : null}
                    <Row className='justify-content-center d-flex'>
                        <Button>vote</Button>
                    </Row>
                </Container>
                </Col>
            </Row>
        </Container>
    )
};



export default PollingStation;