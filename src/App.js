import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles/_app.scss';
import PlanetList from "./components/PlanetList";
import PlanetInfo from "./components/PlanetInfo";
import PlanetInput from "./components/PlanetInput";

function App() {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [name, setName] = useState('');
  const [population, setPopulation] = useState(null);

  const getData = () => {
    axios.get('https://swapi.dev/api/planets/')
        .then(response => {
          setPlanets(response.data.results);
        });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
      <div>
          <div className='planets_info__container'>
              <PlanetList planets={planets} setPlanets={setPlanets} setSelectedPlanets={setSelectedPlanets}/>
              <PlanetInfo selectedPlanets={selectedPlanets}/>
          </div>
          <PlanetInput planets={planets} setPlanets={setPlanets} name={name} setName={setName} population={population} setPopulation={setPopulation} />
      </div>
  );
}

export default App;