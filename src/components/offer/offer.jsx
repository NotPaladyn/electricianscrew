import React, { useEffect, useState } from "react";
import "./offer.css";

const Offer = () => {
    return (
        <div className="offer-container">
            <div className="offer-items">
                <div className="offer-item anim-appear-scale">
                    <img src="/images/offer/1.webp" alt="Oferta - Kosztorysowanie i doradztwo techniczne"/>
                    <div className="offer-item-text">
                        <h2>Kosztorysowanie i doradztwo techniczne</h2>
                        <p>Oferujemy profesjonalne doradztwo techniczne oraz szczegółowe kosztorysowanie instalacji elektrycznych. Pomagamy naszym klientom w doborze optymalnych rozwiązań dostosowanych do ich potrzeb i budżetu. Dzięki naszemu doświadczeniu i wiedzy zapewniamy rzetelne wyceny oraz wsparcie na każdym etapie realizacji projektu.</p>
                    </div>
                </div>
                <div className="offer-item anim-appear-scale">
                    <img src="/images/offer/2.webp" alt="Oferta - Projektowanie i montaż instalacji elektrycznych"/>
                    <div className="offer-item-text">
                        <h2>Projektowanie i montaż instalacji elektrycznych</h2>
                        <p>Specjalizujemy się w projektowaniu i montażu instalacji elektrycznych w budynkach mieszkalnych, biurowych oraz przemysłowych. Tworzymy nowoczesne, bezpieczne i zgodne z obowiązującymi normami instalacje, które gwarantują niezawodne działanie oraz energooszczędność.</p>
                    </div>
                </div>
                <div className="offer-item anim-appear-scale">
                    <img src="/images/offer/3.webp" alt="Oferta - Instalacje teletechniczne"/>
                    <div className="offer-item-text">
                        <h2>Instalacje teletechniczne</h2>
                        <p>Wykonujemy kompleksowe instalacje teletechniczne, obejmujące systemy telewizji przemysłowej (CCTV), domofony, wideodomofony, systemy alarmowe oraz sieci komputerowe. Zapewniamy nowoczesne rozwiązania zwiększające komfort i bezpieczeństwo użytkowników.</p>
                    </div>
                </div>
                <div className="offer-item anim-appear-scale">
                    <img src="/images/offer/4.webp" alt="Oferta - Pomiary elektryczne"/>
                    <div className="offer-item-text">
                        <h2>Pomiary elektryczne</h2>
                        <p>Przeprowadzamy dokładne pomiary elektryczne, w tym sprawdzanie rezystancji izolacji, pomiary impedancji pętli zwarcia oraz kontrolę skuteczności ochrony przeciwporażeniowej. Nasze pomiary są niezbędne do odbioru instalacji oraz zapewnienia ich zgodności z normami bezpieczeństwa.</p>
                    </div>
                </div>
                <div className="offer-item anim-appear-scale">
                    <img src="/images/offer/5.webp" alt="Oferta - Modernizacja i konserwacja instalacji"/>
                    <div className="offer-item-text">
                        <h2>Modernizacja i konserwacja instalacji</h2>
                        <p>Oferujemy usługi modernizacji i konserwacji istniejących instalacji elektrycznych, poprawiając ich wydajność i bezpieczeństwo. Regularna konserwacja pozwala na uniknięcie awarii oraz przedłuża żywotność instalacji.</p>
                    </div>
                </div>
                <div className="offer-item anim-appear-scale">
                    <img src="/images/offer/6.webp" alt="Oferta - Systemy oświetleniowe"/>
                    <div className="offer-item-text">
                        <h2>Systemy oświetleniowe</h2>
                        <p>Projektujemy i montujemy nowoczesne systemy oświetleniowe dostosowane do różnych zastosowań – od oświetlenia domowego po zaawansowane systemy oświetlenia przemysłowego i ulicznego. Wykorzystujemy energooszczędne technologie LED, zapewniając efektywność oraz estetykę oświetlenia.</p>
                    </div>
                </div>
                <div className="offer-item anim-appear-scale">
                    <img src="/images/offer/7.webp" alt="Oferta - Instalacje fotowoltaiczne"/>
                    <div className="offer-item-text">
                        <h2>Instalacje fotowoltaiczne</h2>
                        <p>Zajmujemy się projektowaniem i montażem instalacji fotowoltaicznych, które pozwalają na pozyskiwanie energii ze słońca i obniżenie kosztów eksploatacyjnych. Pomagamy w doborze odpowiednich paneli oraz komponentów, aby zapewnić maksymalną wydajność instalacji.</p>
                    </div>
                </div>
                <div className="offer-item anim-appear-scale">
                    <img src="/images/offer/8.webp" alt="Oferta - Sieci energetyczne"/>
                    <div className="offer-item-text">
                        <h2>Sieci energetyczne</h2>
                        <p>Projektujemy i budujemy sieci energetyczne dla budynków mieszkalnych, przemysłowych oraz użyteczności publicznej. Zajmujemy się instalacją linii kablowych, stacji transformatorowych oraz innych elementów infrastruktury energetycznej, zapewniając niezawodne dostawy energii.</p>
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default Offer;