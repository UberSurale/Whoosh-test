import React from "react";
import logoImage from "../../../assets/images/Logo.svg";
import logoImageBig from "../../../assets/images/logo-big.svg";
import "./style.css";

function Logo() {
    return (
        <a className="logo" href="/">
            <picture>
                <source media="(min-width: 1200px)" srcSet={logoImageBig} width="192" height="64"/>
                <img className="logo__image" src={logoImage} alt="Логотип сайта" />
            </picture>
        </a>
    );
}

export default Logo;