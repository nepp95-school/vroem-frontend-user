import axios from "axios";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { api } from "../App";

export class Login extends React.Component
{
    state = {
        username: null,
        password: null
    }

    setUsername = (username) =>
    {
        this.setState(state => ({
            username: username
        }))
    }

    setPassword = (password) =>
    {
        this.setState(state => ({
            password: password
        }))
    }

    onFormSubmit = (event) =>
    {
        event.preventDefault();
        
        api.post('/Main/GetData', {
            Username: this.state.username,
            Password: this.state.password
        }).then(response => {
            console.log(response.data);
        }, []);
    }

    render()
    {
        return (
            <Container>
                <Row>
                    <h3 className="text-center">Inloggen</h3>
                    <Col sm={{ span: 4, offset: 4 }}>
                        <Form onSubmit={ this.onFormSubmit }>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Gebruikersnaam</Form.Label>
                                <Form.Control type="text" placeholder="Gebruikersnaam" onChange={ e => this.setUsername(e.target.value) } />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Wachtwoord</Form.Label>
                                <Form.Control type="password" placeholder="Wachtwoord" onChange={ e => this.setPassword(e.target.value) } />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}