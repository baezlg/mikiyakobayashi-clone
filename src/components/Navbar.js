import React from 'react';
import { Link } from "react-router-dom";
const Navbar = ({ title }) => {
    const toggleNav = e => {
        document.querySelector(".sideBarLeft").classList.toggle("active");
        let projects = document.querySelector(".projects"); 
        let overlay = document.querySelector(".projects__overlay");
        if (projects) {
            projects.classList.toggle("active");
            overlay.classList.toggle("active");     
        }
    }
    return (
        <nav className="nav">
            <div className="nav__left">
                <div className="nav__icon" onClick={toggleNav}>
                    <i className="fas fa-bars"></i>
                    <i className="fas fa-bars"></i>
                </div>
                <h4>{ title}</h4>
            </div>
            <h3 className="nav__logo"><Link to="/" className="nav__logo__link">mikiya kobayashi</Link></h3>
            <div className="nav__right">
                <div className="nav__search">
                    <i className="fas fa-search"></i>
                    <i className="fas fa-search"></i>
                </div>
                <div className="nav__all">ALL</div>
            </div>
        </nav>
    )
}

export default Navbar
