import React from 'react'
import { Container, Card, Button, Col, Row } from 'react-bootstrap'
import "./View.css"

export default function View({ data }) {
    return <Container fluid>
        <Card id="view-card">
            <Card.Body>
                <Row>
                    <Col>{data.company.name}</Col>

                    <Col>
                        <Col><b>Contact</b>{"\n"}</Col>
                        <Col>{data.name}</Col>
                    </Col>

                    <Col>
                        <Col><b>City</b>{"\n"}</Col>
                        <Col>{data.address.city}</Col>
                    </Col>

                    <Col>
                        <Col><b>Zip Code</b>{"\n"}</Col>
                        <Col>{data.address.zipcode}</Col>
                    </Col>

                    <Col>
                        <Button id="view-btn" variant="primary" type="button" value="View Details">View Details</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Container>
}
