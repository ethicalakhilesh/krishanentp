import React from "react"
import QRCode from "react-qr-code";
import NavigBar from "./navbar"

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import '../styles/billing.css'

var taxbleamt = 1000

function Billing () {
    return(
        <div>
            <NavigBar/>
            <Card className="billSoft">
                <Card style={{display:"flex"}}>
                    <Card.Img className="billingImg" style={{width:100}} src="https://raw.githubusercontent.com/ethicalakhilesh/krishanentp/master/public/images/krishanentp.jpg" />
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

                        <Card className="productDet">
                            <input />
                        </Card>

                        <Card className="quickresponse">
                            <QRCode
                                title="BHIM UPI"
                                value= 'upi://pay?pa=9906090421@okbizaxis&pn=M/s Krishan Enterprises&am=2300&tn=phoneNumber'
                                size={100}
                            />
                            <Card.Img className="dynamicQR" src="https://zeevector.com/wp-content/uploads/Bhim-Upi-Logo-PNG.png"/>
                        </Card>
                    
                        <Card className="taxing">
                            <div className="taxTitle">
                                taxable amount<br />
                                CGST @ 9%<br />
                                SGST @ 9%<br />
                                tatal payable
                            </div>
                            <div className="taxVal">
                                ₹{taxbleamt}<br />
                                ₹{0.09 * taxbleamt}<br />
                                ₹{0.09 * taxbleamt}<br />
                                ₹{(taxbleamt) + (0.09 * taxbleamt) + (0.09 * taxbleamt)}
                            </div>
                        </Card>
                    </Col>
                </Card>
            </Card>
        </div>
    );
}

export default Billing