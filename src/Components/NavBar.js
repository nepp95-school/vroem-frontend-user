import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./Assets/Images/Vroem logo.png"

export class NavBar extends React.Component
{
    componentDidMount()
    {}

    componentWillUnmount()
    {}

    tick()
    {}

    render()
    {
        return (
            <header>
                <Navbar>
                    <Container className="justify-content-center">
                        <Navbar.Brand>
                            <Image src={logo}></Image>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <Navbar>
                    <Container>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
                            <Nav>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/Artikelen">Artikelen</Nav.Link>
                                { this.props.user
                                    ? <Nav.Link as={Link} to="/Uitloggen">Uitloggen</Nav.Link>
                                    : <Nav.Link as={Link} to="/Inloggen">Inloggen</Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}