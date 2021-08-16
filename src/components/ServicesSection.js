import React from 'react';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import home2 from '../img/home2.png';
const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>high <span>quality</span>Services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="" />
                            <h3>effecient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="" />
                            <h3>effecient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="" />
                            <h3>effecient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="" />
                            <h3>effecient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                </div>

            </div>

            <img src={home2} alt="" />

        </div>
    );
};
export default ServicesSection;