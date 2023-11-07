import React from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";

export class Home extends React.Component
{
    render()
    {
        return (
            <Container>
                <Row>
                    <Col sm={{ span: 8, offset: 2 }}>
                        <Carousel>
                            <Carousel.Item>
                                <Image src="https://placehold.co/1200x600" fluid></Image>
                                <Carousel.Caption>
                                    <h3>Slide 1</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="https://placehold.co/1200x600" fluid></Image>
                                <Carousel.Caption>
                                    <h3>Slide 2</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="https://placehold.co/1200x600" fluid></Image>
                                <Carousel.Caption>
                                    <h3>Slide 3</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        );
    }
}