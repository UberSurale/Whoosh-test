import React from "react";
import './style.css';
import Title, { TitleSize } from "../../UI/title/title";
import videoSrc from "../../../assets/images/video.jpg";
import videoSrcSmall from "../../../assets/images/video-small.jpg";
import OrderModal from "../../blocks/OrderModal/order-modal";
import TrackModal from "../../blocks/track-modal/track-modal";

function Hero ({transports}) {
    return (
        <section className="hero-section">
            <div className="hero-wrapper">
                <div className="hero-section__about">
                    <Title size={TitleSize.BIG}>Our service started<br/>work in New York</Title>
                    <p className="hero-section__description">
                    We make delivery exactly at the time you need - 
                    we can start to fulfill the order a few minutes
                    after it arrives, or we can deliver on a specific
                    day and hour.
                    </p>
                    <a className="hero-section__link-more" href="/">
                        <p className="hero-section__text-more">Read more &gt;</p>
                    </a>
                    <Title size={TitleSize.SMALL}>How it works</Title>
                    <picture>
                        <source media="(max-width: 1082px)" srcset={videoSrcSmall} width="328" height="200" />
                        <img className="hero-section__video" src={videoSrc} alt="Video preview" width="372" height="232" />
                    </picture>
                    <ul className="hero-section__slider-list">
                        <li className="hero-section__slider-item">
                            <button className="slider-button slider-button--active" type="button"></button>
                        </li>
                        <li className="hero-section__slider-item">
                            <button className="slider-button" type="button"></button>
                        </li>
                        <li className="hero-section__slider-item">
                            <button className="slider-button" type="button"></button>
                        </li>
                        <li className="hero-section__slider-item">
                            <button className="slider-button" type="button"></button>
                        </li>
                    </ul>
                </div>
                <div className="hero-section__make-order">
                    <OrderModal transports={transports}/>
                    <TrackModal />
                </div>
            </div>
        </section>
    )
}

export default Hero;