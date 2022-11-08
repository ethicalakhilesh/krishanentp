import React from "react"
import NavigBar from "./navbar"

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import '../styles/billing.css'

function Billing () {
    return(
        <div>
            <NavigBar/>
            <Card className="billSoft">
                <Card style={{display:"flex"}}>
                    <Card.Img className="billingImg" style={{width:300}} src="https://raw.githubusercontent.com/ethicalakhilesh/krishanentp/master/public/images/krishanentp.jpg" />
                    <Col>
                        <Card className="custDetails">
                            <input className="intBill" placeholder="name" />
                            <input className="intBill" placeholder="address" />
                            <div className="avc">
                                <input className="intBill smallInput" placeholder="phone number" />
                                <input className="intBill smallInput" placeholder="GSTIN/PAN No." />
                                <input className="intBill smallInput" placeholder="customer state" />
                            </div>
                        </Card>
                    
                        <Card className="billDetail">
                            <input className="intBill" placeholder="invoice number" />
                            <input className="intBill" placeholder="dated" />
                            <input className="intBill" placeholder="vehicle number" />
                            
                        </Card>
                    </Col>
                </Card>
            </Card>
        </div>
    );
}

export default Billing