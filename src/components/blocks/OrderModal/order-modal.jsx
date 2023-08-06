import React from "react";
import './style.css';
import Title, { TitleSize } from "../../UI/title/title";
import Switch from "../switch/switch";
import Button, { buttonsFunction, buttonsTypes } from "../../UI/button/Button";

function OrderModal ({transports}) {
    return (
        <div className="order-modal">
            <form className="order-modal__form" action="/">
                <Title size={TitleSize.SMALL}>Send a parcel</Title>
                <span class="tooltip">
                <button class="tooltip-toggle" type="button" aria-labelledby="tooltip-label-date">
                    <svg className="tooltip-toggle__image" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g id="i">
                        <circle id="pad" cx="12" cy="12" r="12"/>
                        <g id="i_2">
                        <path d="M11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11Z" fill="white"/>
                        <path d="M11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7Z" fill="white"/>
                        </g>
                        </g>
                    </svg>
                </button>
                <span class="tooltip-text" role="tooltip" id="tooltip-label-date">A commission is a piece of work that someone is asked to do and is paid for.</span>
                </span>
                <ul className="order-modal__list">
                {
                        transports.map((transport, i) => (
                            <li className="order-modal__item" key={i}>
                                <Switch {...transport}/>
                            </li>
                        ))
                    }
                </ul>
                <div className="order-modal__inputs">
                    <label className="order-modal__label order-modal__label--pickup" htmlFor="pickup-location">
                        pickup location
                        <input name="pickup-location" className="order-modal__input order-modal__input--pickup" type="text" placeholder="location" />
                    </label>
                    <label className="order-modal__label order-modal__label--drop" htmlFor="drop-location">
                        drop location
                        <input name="drop-location" className="order-modal__input order-modal__input--drop" type="text" placeholder="502 86th St, Brooklyn, NY 11209" />
                    </label>
                </div>
                <Button className={buttonsFunction.SUBMIT} type={buttonsTypes.SUBMIT}>Order</Button>
                <Button className={buttonsFunction.RESET} type={buttonsTypes.RESET}>Clear All</Button>
            </form>
        </div>
    )
}

export default OrderModal;