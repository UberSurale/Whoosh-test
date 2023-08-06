import React from "react";
import './style.css';

function Switch({ id, img, description }) {
    return (
        <button className={`switch ${id === 0 ? 'switch--first' : ''} ${id === 2 ? 'switch--third' : ''} ${id === 1 ? 'switch-pressed' : ''} `} type="button">
            <img className="switch__image" src={img} alt={description} />
            <p className="switch__description">
            {description}
            </p>
        </button>
    );
}

export default Switch;
