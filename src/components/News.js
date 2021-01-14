import React, { useState, useEffect } from 'react';
import db from "./../firebase";
import { v4 as uuid } from "uuid";

const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        db.collection("news").onSnapshot(snapshot => setNews(snapshot.docs.map(doc => doc.data())));
        console.log(news);
    }, []);
    console.log(news);
    return (
        <div className="news">
             {news.map(n => (
                <div className="news__container" key={uuid()}>
                     <img src={`img/${n.image}`} alt="avatar" className="news__img" />
                     <div className="news__box">
                         <h3 className="news__heading">{ n.heading}</h3>
                         <p className="news__text">{ n.text}</p>
                     </div>
                     <div className="news__overlay">
                         <h4 className="news__overview">{n.heading}</h4>
                         <span className="news__date">{n.date}</span>
                     </div>
                </div>
            ))}
        </div>
    )
}

export default News;
