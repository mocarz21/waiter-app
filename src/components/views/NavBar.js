import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () =>{

    return(
        <Navbar bg="primary" expand="lg">
        <Container>
            <Navbar.Brand as={NavLink} to="/">waiterr-app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-2">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                </Nav>        
        </Container>
        </Navbar>
    )
}

export default NavBar;