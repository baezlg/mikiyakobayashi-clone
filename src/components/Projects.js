import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

const Projects = () => {
    const [images, setImages] = useState([
            {image: "img/photo4.jpg"},{image: "img/back.jpg"}, {image: "img/photo5.jpg"},
            {image: "img/back.jpg"},{image: "img/photo6.jpg"}, {image:"img/back.jpg"},
            {image: "img/photo7.jpg"},{image: "img/back.jpg"}, {image:"img/photo8.jpg"},
            {image: "img/back.jpg"},{image: "img/photo9.jpg"}, {image:"img/back.jpg"},
            {image: "img/photo10.jpg"},{image: "img/back.jpg"}, {image:"img/photo11.jpg"},
            {image: "img/back.jpg"},{image: "img/photo-1.jpg"}, {image:"img/back.jpg"},
            {image: "img/photo-2.jpg"},{image: "img/back.jpg"}, {image:"img/photo-3.jpg"},
            {image: "img/back.jpg"},{image: "img/back.jpg"}, {image:"img/back.jpg"},
    ])
    return (
        <div className="projects">
                {images.map(img => (
                    <div className="projects__container" key={uuid()}>
                        <img src={img.image} alt="avatar" className="projects__img"/>
                    </div>
                ))}
            <div className="projects__overlay"></div>
        </div>
    )
}

export default Projects;
