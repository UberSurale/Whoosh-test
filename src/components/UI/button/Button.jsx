import React from "react";
import './style.css';

export const buttonsFunction = {
    LOGIN: "header__button",
    SUBMIT: "order-modal__button",
    RESET: "order-modal__button--reset",
    SERVISES: "services__button"
}

export const buttonsTypes = {
    SUBMIT: "submit",
    DEFAULT: "button",
    RESET: "reset"
}

function Button ({className, type, children}) {
    return (
        <button className={`button ${className}`} type={type}>
            {children}
        </button>
    )
}

export default Button;