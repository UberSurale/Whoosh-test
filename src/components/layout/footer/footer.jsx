import React from "react";
import "./style.css";
import FooterSection, { aboutCompanySection, servicesSection } from "../../blocks/footer-section/footer-section";
import Copyright from "../../blocks/copyright/copyright";

function Header() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer-about about">
                    <h1 className="about__title">About whoosh</h1>
                    <p className="about__description">Express delivery of documents and<br/>
                    parcels for organizations, express<br/>
                    delivery of correspondence,<br/>
                    purchases and other goods</p>
                </div>
                <FooterSection title="Menu" items={aboutCompanySection}/>
                <FooterSection title="Services" items={servicesSection}/>
                <div className="address__section">
                    <h2 className="section__header">
                        Contact Us
                    </h2>
                    <p className="address__phone">8 800 934 5959</p>
                    <p className="address__location">2545 W. Diversey Ave.<br/>3rd Floor Chicago, IL 60647</p>
                    <ul className="social__list">
                        <li className="social__item">
                            <a className="social__link social__link--facebook" href="facebook.com">
                                <span className="visually-hidden">facebook</span>
                            </a>
                        </li>
                        <li className="social__item">
                            <a className="social__link social__link--vk" href="vk.com">
                                <span className="visually-hidden">vk</span>
                            </a>
                        </li>
                        <li className="social__item">
                            <a className="social__link social__link--youtube" href="youtube.com">
                                <span className="visually-hidden">youtube</span>
                            </a>
                        </li>
                        <li className="social__item">
                            <a className="social__link social__link--instagram" href="instagram.com">
                                <span className="visually-hidden">instagram</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Copyright/>
        </footer>
    );
}

export default Header;
