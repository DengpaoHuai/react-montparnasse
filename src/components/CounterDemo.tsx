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

type PlanetRequest = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

const CounterDemo = () => {
  const [planets, setPlanets] = useState<PlanetRequest>({
    count: 0,
    next: "",
    previous: "",
    results: [],
  });

  const fetchPlanets = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setPlanets(data);
  };

  useEffect(() => {
    fetchPlanets("https://swapi.dev/api/planets/");
  }, []);

  return (
    <>
      <h1>Planets</h1>
      {planets.results.map((planet) => {
        return (
          <Fragment key={planet.url}>
            <h2>{planet.name}</h2>
            <p>{planet.population}</p>
          </Fragment>
        );
      })}
      <button
        disabled={!planets.next}
        onClick={() => {
          planets.next && fetchPlanets(planets.next);
        }}
      >
        next Planets
      </button>

      <button
        disabled={!planets.previous}
        onClick={() => {
          planets.previous && fetchPlanets(planets.previous);
        }}
      >
        Previous Planets
      </button>
    </>
  );
};

export default CounterDemo;
