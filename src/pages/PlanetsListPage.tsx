import { useQuery } from "@tanstack/react-query";
import { Fragment, useEffect, useState } from "react";
import { fetchPlanets } from "../services/planet.service";

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

const PlanetsListPage = () => {
  const [page, setPage] = useState<number>(1);
  const { data: planets, isLoading } = useQuery<PlanetRequest>({
    queryKey: ["planets", page],
    queryFn: () => fetchPlanets(page),
    staleTime: 5000,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Planets</h1>
      {planets?.results.map((planet) => {
        return (
          <Fragment key={planet.url}>
            <h2>{planet.name}</h2>
            <p>{planet.population}</p>
          </Fragment>
        );
      })}
      <button
        disabled={!planets?.next}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        next Planets
      </button>

      <button
        disabled={!planets?.previous}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Previous Planets
      </button>
    </>
  );
};

export default PlanetsListPage;
