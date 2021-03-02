import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function Header({ isLogged }) {
    const darkMode = () =>{
        const background = getComputedStyle(document.documentElement).getPropertyValue('--background');
        if(background === " #dddddd"){
            document.documentElement.style.setProperty('--background', ' #222222');
            document.documentElement.style.setProperty('--text', ' #ffffff');
        }else if(background === " #222222"){
            document.documentElement.style.setProperty('--background', ' #dddddd');
            document.documentElement.style.setProperty('--text', ' #000000');
        }
    }


    return (
        <Navbar
            className="w-auto p-3 fixed-top"
            collapsedOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
        >
            <Navbar.Brand as={Link} to="/">
                Budget
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                {isLogged ? (
                    <Nav>
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="movements">
                            Movements
                        </Nav.Link>
                    </Nav>
                ) : (
                    <Nav>
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="login">
                            Login
                        </Nav.Link>
                    </Nav>
                )}
                <Nav>
                    <Button onClick={() => darkMode()}>
                    <FontAwesomeIcon icon={faMoon} />
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
