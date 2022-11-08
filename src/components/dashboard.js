import React from "react"
import NavigBar from "./navbar"
import CardGrid from "./cards";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import "../styles/dashboard.css"

function Dashboard () {
    return(
        <div>
            <NavigBar />
            <div className="CardsArea">
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col>
                            <CardGrid />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Dashboard