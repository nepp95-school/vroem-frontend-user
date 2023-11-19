import axios from "axios";
import React from "react";
import { Button, Col, Container, Form, FormText, Row } from "react-bootstrap"
import { api } from "../App";

export class Login extends React.Component
{
    state = {
        username: null,
        password: null,
        msg: null,
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

    setMsg = (msg) =>
    {
        this.setState(state => ({
            msg: msg
        }))
    }

    onFormSubmit = (event) =>
    {
        event.preventDefault();
        
        api.post('/Main/GetData', {
            Username: this.state.username,
            Password: this.state.password
        }).then(response => {
            if (response.data.Id <= 0)
                this.setMsg("Foutieve gegevens ingevuld.");
            else
            {
                document.cookie = "JwtToken=" + response.data.Token + "; path=/; secure; HttpOnly; SameSite=Strict";
                console.log(response.data.Token);
            }
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
                            { this.state.msg && <FormText>{ this.state.msg }</FormText> }

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