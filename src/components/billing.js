import React from "react"
//import QRCode from "react-qr-code";
import NavigBar from "./navbar"
import BillInput from "./billinput";

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import '../styles/billing.css'

var subTotal = 0
var icount = 1;

function Billing() {
    return (
        <div>
            <NavigBar />
            <Card className="billSoft">
                <Card><Col>
                    <div>
                        <Card className="custDetails">
                            <input className="intBill" placeholder="name" />
                            <input className="intBill" placeholder="address" />
                        </Card>
                        <Card className="custDetails addinfo">
                            <div className="avc" style={{textAlign:"left"}}>
                                <p style={{width:"7%"}}>
                                    qty</p>
                                <p style={{width:"34%"}}>
                                    description</p>
                                <p style={{width:"14%"}}>
                                    weight</p>
                                <p style={{width:"14%"}}>
                                    rate</p>
                                <p style={{width:"14%"}}>
                                    value</p>
                                <p style={{width:"14%"}}>
                                    amount</p>
                            </div>
                            <BillInput />
                        </Card>
                    </div>

                    <div>
                        <Card className="billDetail">
                            <Card.Img className="billingImg" src="https://raw.githubusercontent.com/ethicalakhilesh/krishanentp/master/public/images/krishanentp.jpg" />
                            <input className="intBill" placeholder="invoice number" />
                            <input className="intBill" placeholder="dated" />
                            <input className="intBill" placeholder="vehicle number" />
                            <input className="intBill" placeholder="phone number" />
                            <input className="intBill" placeholder="GSTIN/PAN No." />
                            <input className="intBill" placeholder="customer state" />
                        </Card>
                        <Card className="billDetail">
                            <div className="taxArea">
                                <div className="taxTitle">
                                    taxable<br />
                                    CGST @ 9%<br />
                                    IGST @ 9%<br />
                                    payable
                                </div>
                                <div className="taxVal">
                                    : ₹ {subTotal}<br />
                                    : ₹ {subTotal * 0.09}<br />
                                    : ₹ {subTotal * 0.09}<br />
                                    : ₹ {subTotal * 1.18}
                                </div>
                            </div>
                        </Card>
                    </div>
                </Col></Card>
            </Card>
        </div>
    );
}

export default Billing