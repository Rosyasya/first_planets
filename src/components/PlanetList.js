import React, { useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import '../styles/_app.scss';

const PlanetList = ({ planets, setPlanets, setSelectedPlanets }) => {
    const choosePlanet = url => {
            axios.get(`${url}`)
                .then(response => {
                    setSelectedPlanets(response.data);
                });
    };

    const removePlanet = name => {
        setPlanets(() => planets.filter(planet => planet.name !== name));
    };

    return (
        <div className="planets_list">
            {planets ? <ul>{planets.map(planet => {return <li key={uuidv4()}><a onClick={() => choosePlanet(planet.url)} href='#'>{planet.name}</a> <button onClick={() => removePlanet(planet.name)}>Delete</button></li>})}</ul> : <div>Loading...</div>}
        </div>
    );
};

export default PlanetList;