import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles/_app.scss';

function App() {
  const [planets, setPlanets] = useState([]);
  const [planets1, setPlanets1] = useState([]);

  const getData = () => {
    axios.get('https://swapi.dev/api/planets/')
        .then(data => {
          setPlanets(data.data);
        });

  };

  useEffect(() => {
    getData();
  }, []);

  const choosePlanet = e => {
    planets.results.map(i => {
      if(e.target.innerHTML === i.name) {
        axios.get(`${i.url}`)
            .then(data => {
              setPlanets1(data.data);
            });
      }
    });
  };


  return (
      <>
        <div className="planets_list">
          <ul>
            <li><a onClick={choosePlanet} href="#">Tatooine</a></li>
            <li><a onClick={choosePlanet} href="#">Alderaan</a></li>
            <li><a onClick={choosePlanet} href="#">Yavin IV</a></li>
            <li><a onClick={choosePlanet} href="#">Hoth</a></li>
            <li><a onClick={choosePlanet} href="#">Dagobah</a></li>
            <li><a onClick={choosePlanet} href="#">Bespin</a></li>
            <li><a onClick={choosePlanet} href="#">Endor</a></li>
            <li><a onClick={choosePlanet} href="#">Naboo</a></li>
            <li><a onClick={choosePlanet} href="#">Coruscant</a></li>
            <li><a onClick={choosePlanet} href="#">Kamino</a></li>
          </ul>
        </div>
        <div className="planets_info">
          <h2>Name of Planet: {planets1.name}</h2>
          <h3>Diameter of Planter: {planets1.diameter}</h3>
          <h3>Rotarion period: {planets1.rotation_period}</h3>
          <h3>Planet climate: {planets1.climate}</h3>
          <h3>Planet terrain: {planets1.terrain}</h3>
        </div>
      </>
  );
}

export default App;