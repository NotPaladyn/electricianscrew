import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';
import "./article.css";
import data from "../blog/blog.json";

const Article = () => {
    const { articleID } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const foundArticle = data.find(el => el.id.toString() === articleID.toString());
        
        if (foundArticle) {
            setArticle(foundArticle);
        }
    }, [articleID]);

    if (!article) {
        return <p>Ładowanie...</p>;
    }

    return (
        <div className="article">
            <div className="article-box">
                <div className="article-back">
                    <a href="/blog"> Powrót do bloga</a>
                </div>
                <div className="article-img">
                    <img src={`/images/offer/${articleID}.webp`} alt="" />
                </div>
                <div className="article-header">
                    <h1>{article.tytul}</h1>
                </div>
                <div className="article-content">
                    {article.teksty.map((text) => (
                        <p>{text}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Article;