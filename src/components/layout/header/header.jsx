import React from "react";
import Nav from "../nav/nav";
import "./style.css";
import Logo from "../../UI/logo/Logo";
import Button, { buttonsFunction, buttonsTypes } from "../../UI/button/Button";

function Header() {
    const toggleNav = () => {
        const nav = document.querySelector('.header__nav');
        nav.classList.toggle('nav--closed');
    };

    return (
        <header className="header">
            <div className="header__wrapper">
            <Logo />
            <Nav /> 
            <Button className={buttonsFunction.LOGIN} type={buttonsTypes.DEFAULT}></Button>
            <button className="nav__burger-button" onClick={toggleNav} type="button">
                <span className="visually-hidden">Open menu</span>
            </button>
            </div>
        </header>
    );
}

export default Header;
