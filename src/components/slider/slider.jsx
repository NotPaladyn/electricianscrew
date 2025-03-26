import { React } from "react"
import "./slider.css";

const Slider = () => {
    return (
        <div className="slider">
            <div className="slider-img"></div>
            <div className="slider-text">
                <h1>Usługi elektryczne</h1>
                <h2>Electricians Crew - wykonujemy wszelkiego rodzaju instalacje elektryczne na terenie całego województwa kujawsko-pomorskiego.</h2>
                <a href="/oferta" className="check-offer">Sprawdź ofertę</a>
            </div>
        </div>
    )
}

export default Slider;