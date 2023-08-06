import React from "react";
import Title, { TitleSize } from "../../UI/title/title";
import './style.css';

function TrackModal () {
    return (
        <div className="track-modal">
            <Title size={TitleSize.SMALL}>Track a package</Title>
            <input className="track-modal__input" type="text" placeholder="Enter code"/>
        </div>
    )
}

export default TrackModal;