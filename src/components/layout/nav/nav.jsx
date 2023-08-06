import React from "react";
import './style.css';
import Location from "../../blocks/location/location";
import Search from "../../UI/search/search";

function Nav() {
    const toggleNav = () => {
        const nav = document.querySelector('.header__nav');
        nav.classList.toggle('nav--closed');
    };

    return (
        <nav className="header__nav nav nav--closed">
            <Location/>
            <Search/>
            <ul className="nav__list">
                <li className="nav__item">
                    <a className="nav__link" href="/">
                        Send a Parcel
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="/">
                        Become a Courier
                    </a>
                </li>
                <li className="nav__item nav__item--hidden">
                    <a className="nav__link" href="/">
                        Affiliate Program
                    </a>
                </li>
                <li className="nav__item nav__item--hidden">
                    <a className="nav__link" href="/">
                        Help & Support
                    </a>
                </li>
                <button className="nav__button nav__button--hidden">
                    Take complex order
                </button>
            </ul>
            <button className="nav__toggle-close" onClick={toggleNav}>
                <span className="visually-hidden">Close menu</span>
            </button>
        </nav>
    );
}

export default Nav;