import React, { useEffect } from "react";
import './style.css';
import Title, { TitleSize } from "../../UI/title/title";
import Glide from "@glidejs/glide";
import sprite from "../../../assets/images/partners-sprite.svg";

function Partners ({partners}) {

    useEffect(() => {
        new Glide('.partners__glide', { 
            type: 'slider',
            perView: 5,
            startAt: 2,
            focusAt: 'center',
            gap: 80,
            keyboard: true,
            breakpoints: {
                1200: {
                    perView: 4
                },

                800: {
                    perView: 2,
                    gap: 25
                }
            }
        }).mount();
    }, [])

    return (
        <section className="partners">
            <div className="partners__wrapper">
            <div className="partners__title-wrapper">
            <Title size={TitleSize.BIG}>Our Partners</Title>
            </div>
            <div className="partners__glide">
                <div className="partners__slider" data-glide-el="track">
                    <ul className="partners__list ">
                        {
                            partners.map((partner) => (
                                <li className="partners__item" key={partner.key}>
                                    <svg className="partners__image">
                                        <use xlinkHref={`${sprite}${partner.img}`} />
                                    </svg>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <a className="partners__link" href="pyrobyte.com">Let's collaborate</a>
            </div>
        </section>
    )
}

export default Partners;