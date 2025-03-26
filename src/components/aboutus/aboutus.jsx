import React from "react";
import "./aboutus.css";

const Aboutus = () => {
    return (
        <div className="aboutus ">
            <div className="aboutus-box anim-appear">
                <div className="aboutus-text">
                    <h2>O Nas</h2>
                    <p>Firma <strong>Electricians Crew</strong> działa na rynku od <strong>2001 roku</strong>, dostarczając <strong>profesjonalne usługi elektryczne i teletechniczne</strong>. Specjalizujemy się w <strong>projektowaniu, doradztwie technicznym, kosztorysowaniu</strong> oraz realizacji inwestycji dla <strong>budownictwa mieszkaniowego, komercyjnego i infrastrukturalnego</strong>.</p>
                    <p>Dzięki <strong>wieloletniemu doświadczeniu</strong> oraz współpracy z klientami z całej Polski, zdobyliśmy szeroką wiedzę i umiejętności, które pozwalają nam realizować nawet najbardziej wymagające projekty. Nasz <strong>zespół elektryków i inżynierów</strong> to wykwalifikowani specjaliści, dla których <strong>jakość, bezpieczeństwo i innowacyjność</strong> są priorytetem.</p>
                    <p>Zaufało nam już wielu inwestorów, a nasze realizacje cechują się <strong>niezawodnością i funkcjonalnością</strong>. Stawiamy na <strong>długofalowe relacje biznesowe</strong>, dostosowując rozwiązania do indywidualnych potrzeb każdego klienta.</p>
                    <p><strong>Zapraszamy do współpracy</strong> zarówno <strong>firmy prywatne</strong>, jak i <strong>instytucje publiczne</strong>. Z <strong>Electricians Crew</strong> możesz być pewien <strong>profesjonalizmu i rzetelności</strong>!</p>
                </div>
                <div className="aboutus-imgs">
                    <img src="/images/aboutus1.webp" alt="" />
                    <img src="/images/aboutus2.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Aboutus;