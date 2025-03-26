import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = (state) => {
        setMobileMenu(state);
    };

    return (
        <div className="navbar">
            <div className="navbar-box">
                <a href="/" className="navbar-logo">
                    <img src="images/logo.svg" height="8vh" alt="Logo firmy Electricians Crew"/>
                    <h1>Electricians Crew</h1>
                </a>
                <div className={`navbar-list ${mobileMenu ? "active" : ""}`}>
                    <a href="/blog">Blog</a>
                    <a href="/galeria">Galeria</a>
                    <a href="/oferta">Oferta</a>
                    <a href="/kontakt">Kontakt</a>
                    <span className="close-list" onClick={() => toggleMobileMenu(false)}>ZAMKNIJ</span>
                </div>
                <div className="navbar-menu" onClick={() => toggleMobileMenu(true)}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
