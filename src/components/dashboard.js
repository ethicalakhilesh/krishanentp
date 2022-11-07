import React from "react"
import NavigBar from "./navbar"
import BasicCards from "./cards";

import "../styles/dashboard.css"

function Dashboard () {
    return(
        <div>
            <NavigBar />
            <div className="CardsArea">
                <BasicCards />
            </div>
        </div>
    );
}

export default Dashboard