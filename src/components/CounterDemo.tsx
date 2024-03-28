import { Fragment, useEffect, useState } from "react";

type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type Planets = Planet[];

const CounterDemo = () => {
  const [planets, setPlanets] = useState<Planets>([]);

  const fetchPlanets = async () => {
    const response = await fetch("https://swapi.dev/api/planets/");
    const data = await response.json();
    console.log(data);
    setPlanets(data.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <>
      <h1>Planets</h1>
      {planets.map((planet) => {
        return (
          <Fragment key={planet.url}>
            <h2>{planet.name}</h2>
            <p>{planet.population}</p>
          </Fragment>
        );
      })}
    </>
  );
};

export default CounterDemo;
