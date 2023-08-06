import React from "react";
import './style.css';
import Title, { TitleSize } from "../../UI/title/title";
import Card from "../card/card";

function Advantages ({ cards }) {
    return (
        <section className="advantages">
            <div className="advantages__wrapper">
                <div className="advantages__title-wrapper">
                <Title size={TitleSize.BIG}>Express delivery market revolution</Title>
                </div>
                <p className="advantages__description">
                    Express courier service in the city. We are a reliable logistics partner for <br/> delivery services for online stores and restaurants!
                </p>
                <ul className="advantages__list">
                    {cards.map((card) => (
                        <li className="advantages__item" key={card.id}>
                            <Card {...card}/>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Advantages;