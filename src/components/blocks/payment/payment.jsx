import React, { useEffect } from "react";
import './style.css';
import Title, { TitleSize } from "../../UI/title/title";
import Glide from "@glidejs/glide";


function Payment ({payments}) {

    useEffect(() => {
        new Glide('.payment__glide', { 
            type: 'slider',
            perView: 5,
            gap: 40,
            startAt: 3,
            focusAt: 'center',
            breakpoints: {
                1200: {
                    perView: 4
                },

                800: {
                    perView: 3
                }
            }
        }).mount();
    }, [])

    return (
        <div className="payment">
            <div className="payment__title-wrapper">
                <Title size={TitleSize.BIG}>Payment methods</Title>
            </div>
            <div className="payment__glide">
                <div className="payment__slider" data-glide-el="track">
                    <ul className="payment__list">
                        {
                            payments.map((payment) => (
                                <li className="payment__item" key={payment.id}>
                                    <img src={payment.img} alt="" />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Payment;