import React from "react";
import './style.css';

export const TitleSize = {
    BIG: "big",
    SMALL: "small"
};

function Title({ children, size }) {
    return <h2 className={`title${size ? ` title_${size}` : ""}`}>{children}</h2>;
}

export default Title;