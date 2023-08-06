import React from "react";
import './style.css';
import Title, { TitleSize } from "../../UI/title/title";
import CardService from "../card-service/card-service";
import Button, { buttonsFunction, buttonsTypes } from "../../UI/button/Button";

function Services ({services}) {
    return (
        <section className="services">
            <div className="services__wrapper">
                <div className="services__title-wrapper">
                    <Title size={TitleSize.BIG}>What we do</Title>
                </div>
                <p className="services__description">
                    Express courier service in the city. We are a reliable logistics partner for<br/>delivery services for online stores and restaurants!
                </p>
                <ul className="services__list">
                    {
                        services.map((service) => (
                            <li className="services__item">
                                <CardService {...service}/>
                            </li>
                        ))
                    }
                </ul>
                <div className="services__button-wrapper">
                    <Button className={buttonsFunction.SERVISES} type={buttonsTypes.DEFAULT}>Get Started!</Button>
                </div>
            </div>
        </section>
    )
}

export default Services;