import React from "react";
import "./gallery.css";

const images = [
    "1.webp", "5.webp", "8.webp", "2.webp", "3.webp",
    "9.webp", "4.webp", "10.webp", "6.webp", "7.webp"
];

const Gallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery-header">
                <h2>Galeria firmy Electricians Crew</h2>
            </div>
            <div className="gallery-items">
                {images.map((src, index) => (
                    <a key={index} className="gallery-item anim-appear"
                       href={`images/gallery/${src}`}
                       data-lightbox="gallery"
                       data-title="Zdjęcie z galerii Electricians Crew">
                        <img src={`images/gallery/${src}`} 
                             alt="Zdjęcie z galerii Electricians Crew"/>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
