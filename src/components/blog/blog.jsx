import React from "react";
import DOMPurify from 'dompurify';
import "./blog.css";
import data from "./blog.json";

const Blog = () => {
    return (
        <div className="blog">
            <div className="blog-box">
                {data.map((article) => (
                    <div className="blog-article" key={article.id}>
                        <img src={`images/offer/${article.id}.webp`} alt="" />
                        <div className="b-article-text">
                            <h2 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.tytul) }}></h2>
                            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.tresc) }}></p>
                        </div>
                        <a href="#">Czytaj dalej...</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
