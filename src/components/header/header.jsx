import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function header() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Header</Navbar.Brand>
                    <Nav className="me-2">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default header
