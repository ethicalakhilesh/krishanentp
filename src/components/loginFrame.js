import React from "react"

function Loginframe() {
    return (
        <div>
            <div style={{
                backgroundImage: "url(https://raw.githubusercontent.com/ethicalakhilesh/krishanentp/master/public/images/login-bgnd.jpg)",
                width: "100%",
                minHeight: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "relative",
            }} >
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,.65)",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "2px solid black",
                        padding: 15,
                    }} >
                        <div style={{
                            fontSize: 30,
                            minWidth: 350,
                            maxWidth: 500,
                            height: 350,
                            backgroundColor: "white",
                            color: "white",
                            border: "1px solid white",
                            borderRadius: 15,
                        }}>
                            <img src="https://raw.githubusercontent.com/ethicalakhilesh/krishanentp/master/public/images/krishanentp.jpg" 
                            style={{
                                maxWidth: "100%",
                            }} />
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Loginframe;