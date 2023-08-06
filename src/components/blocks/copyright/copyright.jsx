import React from "react";
import './style.css';
import pyroLogo from "../../../assets/images/pyrobyte-logo.svg";

function Copyright () {
    return (
        <div className="footer__copyright copyright">
            <div className="copyright__wrapper">
                <div className="footer__divider-wrapper">
                    <span className="footer__divider">
                        Made by
                    </span>
                </div>
                <p className="copyright__info">© 2022. All rights reserved.</p>
                <a className="copyright__link" href="pyrobyte.com">
                    <img className="copyright__logo" src={pyroLogo} alt="Pyrobyte logo" />
                </a>
                <p className="copyright__policy">Privacy policy</p>
            </div>
        </div>
    )
}

export default Copyright;