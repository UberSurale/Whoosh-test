import React from "react";
import './style.css';

export const aboutCompanySection = [
    "About company",
    "Contact",
    "Rules",
    "FAQ",
    "Reviews",
    "Cargo transportation",
    "Tarrifs"
];

export const servicesSection = [
    "Online stores",
    "Legal entity",
    "API Integration",
    "Contract",
    "Jobs",
    "Courier job",
    "The blog"
]

function FooterSection ({items, title, children}) {
    return (
        <div className="section">
            <h2 className="section__header">
                {title}
            </h2>
            <ul className="section__list">
                {items.map((item, index) => (
                    <li className="section__item" key={index}>
                        {item}
                    </li>
                ))}
                {children}
            </ul>
        </div>
    )
}

export default FooterSection;