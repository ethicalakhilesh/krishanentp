import React from "react"
import "../styles/loginFrame.css"

function Loginframe() {
    return (
        <div>
            <div className="loginContainer">
                <div className="formbg">
                        <div className="formlogin">
                            <img className="loginBanner" src="https://raw.githubusercontent.com/ethicalakhilesh/krishanentp/master/public/images/krishanentp.jpg" 
                            alt="krishan-enterprises"/>
                            <form>
                                <input type="text" className="loginput" placeholder="username" />
                                <input type="password" className="loginput" placeholder="password" />
                                <input type="subit" className="login-btn" value="login"/>
                            </form>
                            
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Loginframe