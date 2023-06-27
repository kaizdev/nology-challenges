import React from "react";
import CardList from "./components/CardList/CardList";
import { planetData } from "../../planet-challenge/src/data";

const App = () => {
    return (
        <>
            <h1>Planets of the Solar System</h1>
            <CardList
                planets={planetData.sort(
                    (a, b) => a.diameterInKm - b.diameterInKm
                )}
            />
        </>
    );
};

export default App;
