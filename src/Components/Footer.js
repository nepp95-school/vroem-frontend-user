import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export class Footer extends React.Component
{
    render()
    {
        return (
            <footer>
                <Container>
                    <Row>
                        <Col sm={{ span: 6, offset: 3 }}>
                            <h3 className="text-center">Footer</h3>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}