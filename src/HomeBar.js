import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './HomeBar.css';



const HomeBar = () => {
    return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">CCBU Main Menu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Team Reports</Nav.Link>
                            <Nav.Link href="#link">Communications</Nav.Link>
                            <Nav.Link href="#link">Media</Nav.Link>
                            <Nav.Link href="#link">Retail</Nav.Link>
                            <Nav.Link href="#link">CPG</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

                <Jumbotron fluid style={{backgroundColor: '#357edd'}}>
                    <Container>
                        <h1>Welcome to the CCBU Team Reporting Page!</h1>
                    </Container>
                </Jumbotron>
            </div>
            );
}

export default HomeBar;