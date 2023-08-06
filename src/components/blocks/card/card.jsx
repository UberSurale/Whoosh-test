import React from "react";
import './style.css';
import Title, { TitleSize } from "../../UI/title/title";

function Card ({title, img, description}) {
    return (
        <div className="card-item">
            <Title size={TitleSize.SMALL}>{title}</Title>
            <img src={img} alt="" />
            <p dangerouslySetInnerHTML={ {__html:description} } className="card__description"></p>
        </div>
    )
}

export default Card;