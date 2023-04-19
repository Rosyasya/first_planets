import React from "react";
import '../styles/_app.scss';

const planetInfo = ({ selectedPlanets }) => {

    return (
        <div className="planets_info">
            <h2>Name of Planet: {selectedPlanets.name}</h2>
            <h3>Diameter of Planet: {selectedPlanets.diameter}</h3>
            <h3>Rotarion period: {selectedPlanets.rotation_period}</h3>
            <h3>Planet climate: {selectedPlanets.climate}</h3>
            <h3>Planet terrain: {selectedPlanets.terrain}</h3>
        </div>
    );
};

export default planetInfo;