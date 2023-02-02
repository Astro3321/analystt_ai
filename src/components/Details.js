import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "./Details.css"

export default function Details({ data }) {
    return <Container fluid>
        <Card>
            <Card.Body>
                <Row className="row">
                    <Col>
                        <span className="header-text">Company Catchphrase</span>
                        <span className="text">{data.company.catchPhrase}</span>
                    </Col>
                </Row>

                <Row className="row">
                    <Col>
                        <span className="header-text">ID</span>
                        <span className="text">{data.id}</span>
                    </Col>

                    <Col>
                        <span className="header-text">Username</span>
                        <span className="text">{data.username}</span>
                    </Col>
                </Row>

                <Row className="row">
                    <Col>
                        <span className="header-text">Name</span>
                        <span className="text">{data.name}</span>
                    </Col>

                    <Col>
                        <span className="header-text">Address</span>
                        <span className="text">
                            {`${data.address.suite} ${data.address.street}, ${data.address.city} ${data.address.zipCode}`}
                        </span>
                    </Col>
                </Row>

                <Row className="row">
                    <Col>
                        <span className="header-text">Email</span>
                        <span className="text">{data.email}</span>
                    </Col>

                    <Col>
                        <span className="header-text">Phone</span>
                        <span className="text">{data.phone}</span>
                    </Col>
                </Row>

                <Row className="row">
                    <Col>
                        <span className="header-text">Website</span>
                        <span className="text">{data.website}</span>
                    </Col>
                    
                    <Col>
                        <span className="header-text">Business Segment</span>
                        <span className="text">{data.company.bs}</span>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Container>
}
