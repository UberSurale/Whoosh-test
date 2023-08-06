import React from "react";
import './style.css';
import Title, { TitleSize } from "../../UI/title/title";

function CardService ({title, img, description}) {
    return (
        <div className="card__item">
            <img src={img} alt="" />
            <Title size={TitleSize.SMALL} >{title}</Title>
            <p className="card__description--services">{description}</p>
        </div>
    )
}

export default CardService;