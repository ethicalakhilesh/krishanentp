import React from "react"
import NavigBar from "./navbar"
import BasicCards from "./cards";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import "../styles/attendance.css"

import Card from 'react-bootstrap/Card';

function Attendance () {
    return(
        <div>
            <NavigBar />
            <div className="CardsArea">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card className="attendForm">
                            <BasicCards />
                        </Card>
                    </Col>
                
                    <Col>
                        <Card className="empDetails">
                            <BasicCards />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Attendance