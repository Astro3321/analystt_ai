import React, { useState } from 'react'
import { Container, Card, Button, Col, Row } from 'react-bootstrap'
import "./View.css"
import Details from './Details'

export default function View({ data }) {
    const [hiddenCardDisplay, setHiddenCardDisplay] = useState("none")
    const [cardStyle, setCardStyle] = useState(null)
    const [loading, setLoading] = useState(false)

    const cardBorder = {border: "2px solid red"}

    function handleClick(){
        setLoading(true)

        if (hiddenCardDisplay === "none"){setHiddenCardDisplay("block")}
        else{setHiddenCardDisplay("none")}

        if (cardStyle === null){setCardStyle(cardBorder)}
        else{setCardStyle(null)}

        setLoading(false)
    }

    return <Container fluid id="frame">
        <Card id="view-card" style={cardStyle}>
            <Card.Body>
                <Row>
                    <Col>{data.company.name}</Col>

                    <Col>
                        <Col><b>Contact</b></Col>
                        <Col>{data.name}</Col>
                    </Col>

                    <Col>
                        <Col><b>City</b></Col>
                        <Col>{data.address.city}</Col>
                    </Col>

                    <Col>
                        <Col><b>Zip Code</b></Col>
                        <Col>{data.address.zipcode}</Col>
                    </Col>

                    <Col>
                        <Button id="view-btn" variant="primary" type="button" 
                                value="View Details" onClick={handleClick} disabled={loading}>
                            View Details
                        </Button>
                    </Col>
                </Row>

                <Row style={{paddingTop: "2rem", display: `${hiddenCardDisplay}`}}>
                    <Details data={data} />
                </Row>
            </Card.Body>
        </Card>
    </Container>
}
