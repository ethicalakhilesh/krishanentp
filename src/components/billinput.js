import React from "react";
import "../styles/billingInput.css"

function BillInput(){
    return(
        <div className="avc" style={{textAlign:"left"}}>
            <p style={{width:"7%"}}>
                <input type="number" className="btmOnly"/>
            </p>
            <p style={{width:"34%",textAlign:"left"}}>
                <input type="text" className="btmOnly"/>
            </p>
            <p style={{width:"14%"}}>
                <input type="text" className="btmOnly"/>
            </p>
            <p style={{width:"14%"}}>
                <input type="text" className="btmOnly"/>
            </p>
            <p style={{width:"14%"}}>
                value</p>
            <p style={{width:"14%"}}>
                amount</p>
        </div>
    );
}

export default BillInput