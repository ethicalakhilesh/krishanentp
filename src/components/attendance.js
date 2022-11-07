import React from "react"
import NavigBar from "./navbar";

import "../styles/attendance.css"


function Attendance () {
    return (
        <div>
            <NavigBar />
            <div className="attendArea">
                <div className="portion">
                    <form>
                        <input/>
                    </form>
                </div>

                <div className="portion">
                    hello
                </div>
            </div>
        </div>
  );
}

export default Attendance