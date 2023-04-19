import React from "react";
import { v4 as uuidv4 } from 'uuid';

const PlanetInput = ( { planets, setPlanets, name, setName, population, setPopulation } ) => {

    const submitNameHandler = e => {
        setName(e.target.value);
    }

    const submitPopulationHandler = e => {
        setPopulation(e.target.value);
    }
    const createPlanet = e => {
        e.preventDefault();
        setPlanets([...planets, {name: name, population: population, url: `https://swapi.dev/api/planets/${planets.length + 1}/`}]); // url-ка фігня, знаю, але було інтересно попробувати))))))))
    }

    return (
        <div>
            <form action="" className='planet_input' onSubmit={createPlanet}>
                <input onChange={submitNameHandler} type="text" placeholder='name'/>
                <input onChange={submitPopulationHandler} type="number" placeholder='population'/>
                <button>Create Planet</button>
            </form>
        </div>
    );
};

export default PlanetInput;