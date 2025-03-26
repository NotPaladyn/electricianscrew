import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-box">
                <div className="footer-logo">
                    <img src="images/logo.svg" width="8rem" alt="Logo firmy Electricians Crew"/>
                    <h3>Electricians Crew</h3>
                </div>
                <div className="footer-column">
                    <p>NIP: 12312312312</p>
                    <p>REGON: 89089089090</p>
                    <p>ul. Ulica 123/8</p>
                    <p>00-123 Warszawa</p>
                    <p>Nr.tel +48 123 456 789</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;