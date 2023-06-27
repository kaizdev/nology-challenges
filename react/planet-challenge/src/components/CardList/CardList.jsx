import React from "react";
import Card from "../Card/Card";
import style from "./CardList.module.scss";

const CardList = ({ planets }) => {
    return (
        <section className={style.list}>
            {planets.map((planet, index) => (
                <Card key={index} planet={planet} />
            ))}
        </section>
    );
};

export default CardList;
