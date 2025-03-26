import React from "react";
import "./fields.css";

const Fields = () => {
    return (
        <div className="fields" id="offer">
            <div className="fields-box">
                <div className="field anim-appear-scale">
                    <h3>Kosztorysowanie i doradztwo techniczne</h3>
                    <i className="fas fa-funnel-dollar"></i>
                </div>
                <div className="field anim-appear-scale">
                    <h3>Projektowanie i montaż instalacji elektrycznych</h3>
                    <i className="fas fa-pencil-alt"></i>
                </div>
                <div className="field anim-appear-scale">
                    <h3>Instalacje teletechniczne</h3>
                    <i className="fas fa-digital-tachograph"></i>
                </div>
                <div className="field anim-appear-scale">
                    <h3>Pomiary elektryczne</h3>
                    <i className="fas fa-tablet-alt"></i>
                </div>
                <div className="field anim-appear-scale">
                    <h3>Modernizacja i konserwacja instalacji</h3>
                    <i className="fas fa-broom"></i>
                </div>
                <div className="field anim-appear-scale">
                    <h3>Systemy oświetleniowe</h3>
                    <i className="far fa-lightbulb"></i>
                </div>
                <div className="field anim-appear-scale">
                    <h3>Instalacje fotowoltaiczne</h3>
                    <i className="fas fa-solar-panel"></i>
                </div>
                <div className="field anim-appear-scale">
                    <h3>Sieci energetyczne</h3>
                    <i className="fas fa-power-off"></i>
                </div>
            </div>
        </div>
    )
}

export default Fields;