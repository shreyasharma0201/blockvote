import React from 'react'
import { login, logout } from './utils'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Home from './components/Home'
import NewPoll from './components/NewPoll'
import PollingStation from './components/PollingStation'  
import getConfig from './config'
import BlockVoteLogo from './assets/BlockVoteLogo.jpg';
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {

  return (
    <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={BlockVoteLogo}></img> BlockVote</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"> </Nav>
            <Nav>
              <Nav.Link href="/NewPoll">New Poll</Nav.Link>
              <Nav.Link onClick = {window.accountId === ''? login:logout}>
                {window.accountId === "" ? "Login" : window.accountId}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/Home' element = {<Home />} />
        <Route path='/NewPoll' element = {<NewPoll/>} />
        <Route path='/PollingStation' element = {<PollingStation/>} />
      </Routes>
    </BrowserRouter>
    );
}
Home