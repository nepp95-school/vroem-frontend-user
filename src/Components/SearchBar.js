import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

export class SearchBar extends React.Component
{
    render()
    {
        return (
            <Container>
                <Row>
                    <Col sm={{ span: 4, offset: 4 }}>
                        <InputGroup>
                            <Form.Control 
                                placeholder="Zoeken..."
                            />
                            <Button>Zoeken</Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}