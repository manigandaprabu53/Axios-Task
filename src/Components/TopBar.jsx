import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function TopBar() {
    let navigate = useNavigate();
  return <>
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={()=>navigate('/')}>DashBoard</Nav.Link>
                <NavDropdown title="Users" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={()=>navigate('/create')}>Create</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  </>
}

export default TopBar