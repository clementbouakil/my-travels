import React from "react";
import './Travel.css';

const Travel = ({ destination, country, photo, distance }) => (
    <section className="travel_section">
        <div className="img_container">
            <img src={photo} alt={destination} className="destination_img" />
        </div>
        <p>Wecolme to {destination} in {country} at {distance}</p>
    </section>
);

export default Travel;