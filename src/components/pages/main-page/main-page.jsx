import React from "react";
import './style.css';
import Hero from "../../blocks/hero/hero";
import Advantages from "../../blocks/advantages/advantages";
import Partners from "../../blocks/partners/partners";
import Services from "../../blocks/services/services";
import Payment from "../../blocks/payment/payment";
import Other from "../../blocks/other/other";

function MainPage ({cards, services, transports, partners, payments}) {
    return (
        <>
        <Hero transports={transports}/>
        <Advantages cards={cards}/>
        <Partners partners={partners}/>
        <Services services={services}/>
        <Payment payments={payments}/>
        <Other/>
        </>
    )
}

export default MainPage;