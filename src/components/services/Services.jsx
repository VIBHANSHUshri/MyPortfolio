import {  useState } from "react";
import "./service.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const [showMore, setShowMore] = useState(false);
    
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const toggleShowMore = () => {
        if (showMore) {
            window.scrollBy({ top: -520, behavior: 'smooth' });
        }
        setShowMore(!showMore);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">What I created</span>
            <div className="services__container container grid">
               
                
                
                
                        <div className="services__content">
                            <div>
                                <i className="uil uil-restaurant services__icon"></i>
                                <h3 className="services__title">Mern food  <br/> ordering app</h3>
                            </div>
                            <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                                <div className="services__modal-content">
                                    <i className="uil uil-times services__modal-close" onClick={() => setToggleState(0)}></i>
                                    <h3 className="services__modal-title">Mern food ordering app</h3>
                                    <p className="services__modal-description">Skills Used : React,Javascript,Typescript,Mern</p>
                                    <ul className="services__modal-services grid">
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">Develop the user interface.</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">Web Page Development</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">I created UX element interactions</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">I created UX element interactions</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info"><a href="https://github.com/VIBHANSHUshri/mern-food-frontend" target="blank" className="huuuu"><u>Repo</u></a></p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info"><a href= "https://mern-food-frontend-sm1v.onrender.com/" target="blank" className="huuuu"><u>Demo</u></a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="services__content">
                            <div>
                                <i className="uil uil-house-user services__icon"></i>
                                <h3 className="services__title">Booking and Renting  <br/> Web app</h3>
                            </div>
                            <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                                <div className="services__modal-content">
                                    <i className="uil uil-times services__modal-close" onClick={() => setToggleState(0)}></i>
                                    <h3 className="services__modal-title">Mern food ordering app</h3>
                                    <p className="services__modal-description">Skills Used : React,Javascript,Typescript,Mern</p>
                                    <ul className="services__modal-services grid">
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">Develop the user interface.</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">Web Page Development</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">I created UX element interactions</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">I created UX element interactions</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info"><a href="https://github.com/VIBHANSHUshri/mern-food-frontend" target="blank" className="huuuu"><u>Repo</u></a></p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info"><a href= "https://mern-food-frontend-sm1v.onrender.com/" target="blank" className="huuuu"><u>Demo</u></a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        {showMore && (
                            <>
                          <div className="services__content">
                            <div>
                                <i className="uil uil-restaurant services__icon"></i>
                                <h3 className="services__title">Mern food  <br/> ordering app</h3>
                            </div>
                            <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                                <div className="services__modal-content">
                                    <i className="uil uil-times services__modal-close" onClick={() => setToggleState(0)}></i>
                                    <h3 className="services__modal-title">Mern food ordering app</h3>
                                    <p className="services__modal-description">Skills Used : React,Javascript,Typescript,Mern</p>
                                    <ul className="services__modal-services grid">
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">Develop the user interface.</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">Web Page Development</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">I created UX element interactions</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">I created UX element interactions</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info"><a href="https://github.com/VIBHANSHUshri/mern-food-frontend" target="blank" className="huuuu"><u>Repo</u></a></p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info"><a href= "https://mern-food-frontend-sm1v.onrender.com/" target="blank" className="huuuu"><u>Demo</u></a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="services__content">
                            <div>
                                <i className="uil uil-house-user services__icon"></i>
                                <h3 className="services__title">Mern food  <br/> ordering app</h3>
                            </div>
                            <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                                <div className="services__modal-content">
                                    <i className="uil uil-times services__modal-close" onClick={() => setToggleState(0)}></i>
                                    <h3 className="services__modal-title">Mern food ordering app</h3>
                                    <p className="services__modal-description">Skills Used : React,Javascript,Typescript,Mern</p>
                                    <ul className="services__modal-services grid">
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">Develop the user interface.</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">Web Page Development</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">I created UX element interactions</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">I created UX element interactions</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info"><a href="https://github.com/VIBHANSHUshri/mern-food-frontend" target="blank" className="huuuu"><u>Repo</u></a></p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info"><a href= "https://mern-food-frontend-sm1v.onrender.com/" target="blank" className="huuuu"><u>Demo</u></a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="services__content">
                            <div>
                                <i className="uil uil-restaurant services__icon"></i>
                                <h3 className="services__title">Mern food  <br/> ordering app</h3>
                            </div>
                            <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                                <div className="services__modal-content">
                                    <i className="uil uil-times services__modal-close" onClick={() => setToggleState(0)}></i>
                                    <h3 className="services__modal-title">Mern food ordering app</h3>
                                    <p className="services__modal-description">Skills Used : React,Javascript,Typescript,Mern</p>
                                    <ul className="services__modal-services grid">
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">Develop the user interface.</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">Web Page Development</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">I created UX element interactions</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">I created UX element interactions</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info"><a href="https://github.com/VIBHANSHUshri/mern-food-frontend" target="blank" className="huuuu"><u>Repo</u></a></p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info"><a href= "https://mern-food-frontend-sm1v.onrender.com/" target="blank" className="huuuu"><u>Demo</u></a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="services__content">
                            <div>
                                <i className="uil uil-restaurant services__icon"></i>
                                <h3 className="services__title">Mern food  <br/> ordering app</h3>
                            </div>
                            <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                                <div className="services__modal-content">
                                    <i className="uil uil-times services__modal-close" onClick={() => setToggleState(0)}></i>
                                    <h3 className="services__modal-title">Mern food ordering app</h3>
                                    <p className="services__modal-description">Skills Used : React,Javascript,Typescript,Mern</p>
                                    <ul className="services__modal-services grid">
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">Develop the user interface.</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">Web Page Development</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">I created UX element interactions</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">I created UX element interactions</p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info"><a href="https://github.com/VIBHANSHUshri/mern-food-frontend" target="blank" className="huuuu"><u>Repo</u></a></p>
                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info"><a href= "https://mern-food-frontend-sm1v.onrender.com/" target="blank" className="huuuu"><u>Demo</u></a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="services__view-more">
                <button className="services__view-more-btn"  onClick={toggleShowMore}>
                    {showMore ? "View Less" : "View More"}
                </button>
            </div>
        </section>
    );
}

export default Services;
