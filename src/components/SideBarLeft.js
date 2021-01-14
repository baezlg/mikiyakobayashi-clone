import React from 'react';
import { Link } from "react-router-dom";

const SideBarLeft = () => {
    const removeNav = e => {
        document.querySelector(".sideBarLeft").classList.remove("active");
        let projects = document.querySelector(".projects");
        if (projects) {
            projects.classList.remove("active");
        }
    }
    return (
        <nav className="sideBarLeft">
            <div className="sideBarLeft__items">
                <Link to="/projects" onClick={removeNav}>PROJECTS </Link>
                <Link to="/news" onClick={removeNav}>NEWS</Link>
                <Link to="/profile" onClick={removeNav}>PROFILE</Link>
                <Link to="/press" onClick={removeNav}>PRESS</Link>
                <a href="#">TAIYOU&C.</a>
                <a href="#">IMPLEMENTS</a>
                <a href="#">FACEBOOK</a>
                <a href="#">INSTAGRAM</a>
            </div>
        </nav>
    )
}

export default SideBarLeft
