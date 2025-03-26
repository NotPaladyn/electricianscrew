import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Body from "./components/body/body.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Slider from "./components/slider/slider.jsx";
import Aboutus from "./components/aboutus/aboutus.jsx";
import Footer from "./components/footer/footer.jsx";
import Fields from "./components/fields/fields.jsx";
import Counters from "./components/counters/counters.jsx";
import Offer from "./components/offer/offer.jsx";
import Contact from "./components/contact/contact.jsx";
import Gallery from "./components/gallery/gallery.jsx";
import Blog from "./components/blog/blog.jsx";
import Article from "./components/article/article.jsx";

const App = () => {
    return (
        <Router basename="/electricianscrew">
            <Body/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<> <Slider/> <Aboutus/> <Fields/> <Counters/> <Footer/> </>} />
                <Route path="/oferta" element={<> <Slider/> <Offer/> <Counters/> <Footer/> </>} />
                <Route path="/kontakt" element={<> <Slider/> <Contact/> <Counters/> <Footer/> </>} />
                <Route path="/galeria" element={<> <Slider/> <Gallery/> <Counters/> <Footer/> </>} />
                <Route path="/blog" element={<> <Blog/> <Footer/> </>} />
                <Route path="/artykul/:articleID" element={<> <Article/> <Footer/> </>} />
            </Routes>

        </Router>
    )
}

export default App;