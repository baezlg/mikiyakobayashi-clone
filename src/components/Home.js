import React from 'react';


const Home = () => {
    const changePage = (e) => {
        e.preventDefault();
        if (e.target) {
            document.location.href = "/projects";
        }
    }
    return (
        <div className="home" onWheel={changePage}>
            <img src="img/ground.jpg" alt="cover" className="home__img" />
            <div className="home__content">
                <h1 className="home__heading">MIKIYAKOBAYASHI</h1>
                <a href="#" className="home__btn">scroll</a>
            </div>
        </div>
    )
}

export default Home; 
