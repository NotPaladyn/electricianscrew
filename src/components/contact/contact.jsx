import React, { useEffect, useState } from "react";
import "./contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-items">
                <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>NASZA SIEDZIBA</p>
                    <span>ul. Ulica 123/8</span>
                    <span> 00-123 Warszawa</span>
                </div>
                <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <p>NUMER TELEFONU</p>
                    <span>+48 123 456 789</span>
                </div>
                <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <p>EMAIL</p>
                    <span>kontakt@electricianscrew.pl</span>
                </div>
                <div className="contact-item">
                    <i className="fas fa-fax"></i>
                    <p>FAX</p>
                    <span>1-234-567-8900</span>
                </div>
            </div>
            <div className="contact-box">
                <h2>Zostaw nam wiadomość</h2>
                <input type="text" name="input-name" className="input-name" placeholder="Wprowadź swoje imię..."/>
                <input type="text" name="input-name" className="input-mail" placeholder="Wprowadź swój adres e-mail..."/>
                <input type="tel" name="input-name" className="input-phone" placeholder="Wprowadź swój numer telefonu..."/>
                <textarea name="area-msg" className="area-msg" placeholder="Zostaw tu swoją wiadomość..."></textarea>
                <button>WYŚLIJ WIADOMOŚĆ</button>
            </div>
        </div>
    );
};

export default Contact;