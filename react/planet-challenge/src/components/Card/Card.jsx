import React from "react";
import style from "./Card.module.scss";

const Card = ({ planet }) => {
    const {
        planetName,
        image,
        distanceFromSun,
        diameterInKm,
        numberOfMoons,
        lengthOfYear,
    } = planet;

    const containsMoon = numberOfMoons > 0;

    return (
        <article
            className={`${style.card} ${
                containsMoon
                    ? style.black__background
                    : style.lightgray__background
            }`}
        >
            <h2>{planetName}</h2>
            <p>Distance from the sun: {distanceFromSun}</p>
            <p>Diameter (km): {diameterInKm}</p>
            <p>Number of moons: {numberOfMoons}</p>
            <p>Length of year: {lengthOfYear}</p>
            <img src={image} />
        </article>
    );
};

export default Card;
