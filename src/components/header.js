
import React from 'react';
import {
    Container,
    Navbar,
    Nav
} from 'react-bootstrap/';

const Header = () => (
    <header className="Pokemon-header">
        <Container fluid>
            <Navbar id="navbar" variant="dark">
                <Navbar.Brand href="#"> Pokémon </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="https://github.com/agathapaiiva" target="black">GitHub</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/agathapaiva/" target="black">Linkedin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </header>
);

export default Header;