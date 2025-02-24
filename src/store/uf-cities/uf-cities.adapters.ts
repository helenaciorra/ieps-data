import { HttpResponse } from '../../utils/HttpFetch';
import { CityQuery, UfMapData } from './uf-cities.types';

export const adaptCitiesOptions = (
  citiesResponse: HttpResponse<CityQuery>
): {
  label: string,
  value: string,
  data: { uf: string, regiao: string, macrorregiao: string },
}[] => {
  const cities = citiesResponse.data.response.docs;

  return cities
    .sort((cityA, cityB) => {
      return cityA.nomemun.localeCompare(cityB.nomemun);
    })
    .map((city) => ({
      value: city.codmun,
      label: `${city.nomemun} (${city.estadoAbrev})`,
      data: {
        uf: city.estadoAbrev,
        regiao: city.regiao,
        macrorregiao: city.macrorregiao,
      },
    }));
};

export const adaptUfMapData = (
  healthPanoramaResponse: HttpResponse<UfMapData>
): UfMapData[] => {
  return healthPanoramaResponse.data.response.docs;
};
