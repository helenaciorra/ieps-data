/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as d3 from 'd3';
import { HttpResponse } from '../../utils/HttpFetch';
import {
  DataToDispersion,
  CityVisualization,
  Indicators,
  CountryVisualization,
  StateVisualization,
  RegionVisualization,
  MacroRegionVisualization,
  CityQuery,
  DataToTimeLine,
  StateQuery,
  MapRankingResponse,
  DataToMapRanking,
  LocalToMapRanking,
  CirclePackingResponse,
  CirclePackingData,
  MapRankingBrazilResponse,
  DataToMapRankingBrazil,
  RegionQuery,
  MacroQuery
} from './visualizations.types';
import _ from 'lodash';
import { availableYears } from '../../utils/date-time/availableYears';

export function convertIndicatorCase(word: string) {
  const [str1, str2, str3, str4, str5, str6] = word.split('_');

  let stringFormatted = str1;

  if (str2) {
    stringFormatted =
      stringFormatted +
      str2.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
      });
  }

  if (str3) {
    stringFormatted =
      stringFormatted +
      str3.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
      });
  }

  if (str4) {
    stringFormatted =
      stringFormatted +
      str4.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
      });
  }

  if (str5) {
    stringFormatted =
      stringFormatted +
      str5.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
      });
  }

  if (str6) {
    stringFormatted =
      stringFormatted +
      str6.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
      });
  }

  return stringFormatted;
}

export const adaptVisualizationIndicators = (
  IndicatorResponse: HttpResponse<Indicators>
): { label: string, value: string }[] => {
  const indicators = IndicatorResponse.data.response.docs;

  return indicators.map((indicator) => ({
    value: indicator.id,
    label: indicator.nomeIndicadores,
    data: {
      variableName: indicator.variable,
      viz: indicator.viz,
      vizReg: indicator.vizReg,
      bloco: indicator.bloco,
      decPlaces: indicator.decPlaces,
      format: indicator.format,
      bloq_anos: indicator.bloqAnos,
      bloq_viz: indicator.bloqViz,
      abreviacoes: indicator.abreviacoes,
    },
  }));
};

export const adaptCityVisualization = (
  cityVisualizationResponse: HttpResponse<CityVisualization>,
  firstIndicator: string,
  secondIndicator: string
): DataToDispersion => {
  const city = cityVisualizationResponse.data.response.docs;

  const coordinates = city.map((item) => {
    return {
      id: item.idMunic7,
      category: 'city-selected',
      local: item.nomemun,
      microRegion: item.noRegiao,
      x: item[convertIndicatorCase(secondIndicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(secondIndicator)]}`.replace(',','.')),
      y: item[convertIndicatorCase(firstIndicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(firstIndicator)]}`.replace(',','.')),
    };
  });

  return coordinates[0];
};

export const adaptCitiesVisualization = (
  cityVisualizationResponse: HttpResponse<CityVisualization>,
  firstIndicator: string,
  secondIndicator: string
): DataToDispersion[] => {
  const city = cityVisualizationResponse.data.response.docs;

  return city.map((item) => {
    return {
      id: item.idMunic7,
      category: 'city',
      local: item.nomemun,
      microRegion: item.noRegiao,
      x: item[convertIndicatorCase(secondIndicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(secondIndicator)]}`.replace(',','.')),
      y: item[convertIndicatorCase(firstIndicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(firstIndicator)]}`.replace(',','.')),
    };
  });
};

export const adaptCountryVisualization = (
  countryVisualizationResponse: HttpResponse<CountryVisualization>,
  firstIndicator: string,
  secondIndicator: string
): DataToDispersion => {
  const country = countryVisualizationResponse.data.response.docs;

  const coordinates = country.map((item) => {
    return {
      id: item.id,
      category: 'country',
      local: 'Brasil',
      microRegion: '',
      x: item[convertIndicatorCase(secondIndicator)] === ' ' ? -1 :Number(`${item[convertIndicatorCase(secondIndicator)]}`.replace(',','.')),
      y: item[convertIndicatorCase(firstIndicator)] === ' ' ? -1 :Number(`${item[convertIndicatorCase(firstIndicator)]}`.replace(',','.')),
    };
  });

  return coordinates[0];
};

export const adaptStateVisualization = (
  stateVisualizationResponse: HttpResponse<StateVisualization>,
  firstIndicator: string,
  secondIndicator: string
): DataToDispersion => {
  const state = stateVisualizationResponse.data.response.docs;

  const coordinates = state.map((item) => {
    return {
      id: item.id,
      category: 'state',
      local: item.estado,
      microRegion: '',
      x: item[convertIndicatorCase(secondIndicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(secondIndicator)]}`.replace(',','.')),
      y: item[convertIndicatorCase(firstIndicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(firstIndicator)]}`.replace(',','.')),
    };
  });

  return coordinates[0];
};

export const adaptRegionVisualization = (
  regionVisualizationResponse: HttpResponse<RegionVisualization>,
  firstIndicator: string,
  secondIndicator: string
): DataToDispersion => {
  const region = regionVisualizationResponse.data.response.docs;

  const coordinates = region.map((item) => {
    return {
      id: item.id,
      category: 'health-region',
      local: item.noRegiao,
      microRegion: '',
      x: item[convertIndicatorCase(secondIndicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(secondIndicator)]}`.replace(',','.')),
      y: item[convertIndicatorCase(firstIndicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(firstIndicator)]}`.replace(',','.')),
    };
  });

  return coordinates[0];
};

export const adaptMacroRegionVisualization = (
  macroRegionVisualizationResponse: HttpResponse<MacroRegionVisualization>,
  firstIndicator: string,
  secondIndicator: string
): DataToDispersion => {
  const region = macroRegionVisualizationResponse.data.response.docs;

  const coordinates = region.map((item) => {
    return {
      id: item.macrorregiao,
      category: 'macro-region',
      local: item.noMacro,
      microRegion: '',
      x: item[convertIndicatorCase(secondIndicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(secondIndicator)]}`.replace(',','.')),
      y: item[convertIndicatorCase(firstIndicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(firstIndicator)]}`.replace(',','.')),
    };
  });

  return coordinates[0];
};

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
        year: city.ano,
      },
    }));
};

export const adaptRegionsOptions = (
  regionsResponse: HttpResponse<RegionQuery>
): {
  label: string,
  value: string,
  data: { uf: string, macrorregiao: string },
}[] => {
  const regions = regionsResponse.data.response.docs;

  return regions
    .sort((regionA, regionB) => {
      return regionA.noRegiao.localeCompare(regionB.noRegiao);
    })
    .map((region) => ({
      value: region.regiao,
      label: `${region.noRegiao} (${region.estadoAbrev})`,
      data: {
        uf: region.estadoAbrev,
        macrorregiao: region.macrorregiao,
        year: region.ano,
      },
    }));
};

export const adaptMacrosOptions = (
  macrosResponse: HttpResponse<MacroQuery>
): {
  label: string,
  value: string,
  data: { uf: string },
}[] => {
  const macros = macrosResponse.data.response.docs;

  return macros
    .sort((macroA, macroB) => {
      return macroA.noMacro.localeCompare(macroB.noMacro);
    })
    .map((macro) => ({
      value: macro.macrorregiao,
      label: `${macro.noMacro} (${macro.estadoAbrev})`,
      data: {
        uf: macro.estadoAbrev,
        year: macro.ano,
      },
    }));
};

export const adaptStatesOptions = (
  stateResponse: HttpResponse<StateQuery>
): {
  label: string,
  value: string,
}[] => {
  const states = stateResponse.data.response.docs;

  return states
    .sort((stateA, stateB) => {
      return stateA.estado.localeCompare(stateB.estado);
    })
    .map((state) => ({
      value: state.idEstado,
      label: state.estado,
      data: {
        uf: state.estadoAbrev,
        year: state.ano
      }
    }));
};

export const adaptDataToTimeLineVisualization = (
  countryVisualizationResponse: HttpResponse<CountryVisualization>,
  indicator: string,
  stateVisualizationResponse: HttpResponse<StateVisualization>,
  cityVisualizationResponse?: HttpResponse<CityVisualization>,
  regionVisualizationResponse?: HttpResponse<RegionVisualization>,
  macroVisualizationResponse?: HttpResponse<MacroRegionVisualization>,
): DataToTimeLine => {

  const country = countryVisualizationResponse.data.response.docs.map(item => {
    const value = item[convertIndicatorCase(indicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(indicator)]}`.replace(',','.'))
    const key = convertIndicatorCase(indicator)

    return({
      ...item,
      [key]: value,
    })
  });

  const state = stateVisualizationResponse.data.response.docs.map(item => {
    const value = item[convertIndicatorCase(indicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(indicator)]}`.replace(',','.'))
    const key = convertIndicatorCase(indicator)

    return({
      ...item,
      [key]: value,
    })
  });


  let city: CityVisualization[] | undefined = undefined;
  if(!_.isEmpty(cityVisualizationResponse))
  {
    city = cityVisualizationResponse.data.response.docs.map(item => {
      const value = item[convertIndicatorCase(indicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(indicator)]}`.replace(',','.'))
      const key = convertIndicatorCase(indicator)

      return({
        ...item,
        [key]: value,
      })
    });
  }

  let region: RegionVisualization[] | undefined = undefined
  if(!_.isEmpty(regionVisualizationResponse))
  {
    region = regionVisualizationResponse.data.response.docs.map(item => {
      const value = item[convertIndicatorCase(indicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(indicator)]}`.replace(',','.'))
      const key = convertIndicatorCase(indicator)
  
      return({
        ...item,
        [key]: value,
      })
    });
  }

  let macro: MacroRegionVisualization[] | undefined = undefined
  if(!_.isEmpty(macroVisualizationResponse))
  {
    macro = macroVisualizationResponse.data.response.docs.map(item => {
      const value = item[convertIndicatorCase(indicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(indicator)]}`.replace(',','.'))
      const key = convertIndicatorCase(indicator)
  
      return({
        ...item,
        [key]: value,
      })
    });
  }

  const data = createTimeLineSeries(
    country,
    indicator,
    state,
    city,
    region,
    macro,
  )

  return data;
};

export const adaptDataToMapRankingVisualization = (
  mapRankingVisualizationResponse: HttpResponse<MapRankingResponse>,
  indicator: string,
  granularity: string
): DataToMapRanking[] => {
  let resp
  let data;
  
  switch (true) {
    case granularity === 'viz':
      resp = mapRankingVisualizationResponse.data.response.docs
      data = resp.map((item) => {
        return {
          idMunic7: item.idMunic7,
          nomeMun: item.nomemun,
          value: item[convertIndicatorCase(indicator)] === ' ' ? '-1' :`${item[convertIndicatorCase(indicator)]}`.replace(',','.'),
        };
      });
      break;
    case granularity === 'vizReg':
      resp = mapRankingVisualizationResponse.data.response.docs
      data = resp.map((item) => {
        return {
          idMunic7: item.regiao,
          nomeMun: item.noRegiao,
          value: item[convertIndicatorCase(indicator)] === ' ' ? '-1' :`${item[convertIndicatorCase(indicator)]}`.replace(',','.'),
        };
      });
      break;
    case granularity === 'vizMacro':
      resp = mapRankingVisualizationResponse.data.response.docs
      data = resp.map((item) => {
        return {
          idMunic7: item.macrorregiao,
          nomeMun: item.noMacro,
          value: item[convertIndicatorCase(indicator)] === ' ' ? '-1' :`${item[convertIndicatorCase(indicator)]}`.replace(',','.'),
        };
      });
      break;
    default:
      break;
  }
  return data;
};

export const adaptDataToMapRankingBrazilVisualization = (
  mapRankingVisualizationResponse: HttpResponse<MapRankingBrazilResponse>,
  indicator: string,
): DataToMapRankingBrazil[] => {
  let resp
  let data;

  resp = mapRankingVisualizationResponse.data.response.docs
  data = resp.map((item : MapRankingBrazilResponse) => {
    return {
      idEstado: item.idEstado,
      estado: item.estado,
      ano: item.ano,
      estadoAbrev: item.estadoAbrev,
      value: item[convertIndicatorCase(indicator)] === ' ' ? '-1' :`${item[convertIndicatorCase(indicator)]}`.replace(',','.'),
    };
  });

  return data;
};

export const adaptStateToMapRankingVisualization = (
  stateVisualizationResponse: HttpResponse<StateVisualization>,
  indicator: string
): LocalToMapRanking => {
  const resp = stateVisualizationResponse.data.response.docs;

  
  const data = resp.map((item) => {
    return {
      id: item.id_estado,
      label: `Estado (${item.estadoAbrev})`,
      value: item[convertIndicatorCase(indicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(indicator)]}`.replace(',','.')),
    };
  });

  return data[0];
};

export const adaptCountryToMapRankingVisualization = (
  countryVisualizationResponse: HttpResponse<CountryVisualization>,
  indicator: string
): LocalToMapRanking => {
  const resp = countryVisualizationResponse.data.response.docs;

  const data = resp.map((item) => {
    return {
      id: item.id,
      label: 'Brasil',
      value: item[convertIndicatorCase(indicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(indicator)]}`.replace(',','.')),
    };
  });

  return data[0];
};

export const adaptDataToCirclePackingVisualization = (
  circlePackingVisualizationResponse: HttpResponse<CirclePackingResponse>,
  indicator: string,
): CirclePackingData => {
  const resp = circlePackingVisualizationResponse.data.response.docs;

  const data = createPackingNodes(resp, indicator)

  // eslint-disable-next-line prettier/prettier
  return data as unknown as CirclePackingData;
};

const createPackingNodes = (arr: CirclePackingResponse[], indicator) => {
  let childrenGroup1: [any] = [] as any;
  let childrenGroup2: [any] = [] as any;
  let childrenGroup3: [any] = [] as any;
  let childrenGroup4: [any] = [] as any;
  let childrenGroup5: [any] = [] as any;
  let childrenGroup6: [any] = [] as any;
  let childrenGroup7: [any] = [] as any;
  let childrenGroup8: [any] = [] as any;
  let childrenGroup9: [any] = [] as any;
  let childrenGroup10: [any] = [] as any;

  const arrParse = arr.map(item => item[convertIndicatorCase(indicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(indicator)]}`.replace(',', '.')))

  const range = Array.from({length: 10}).map((_, i) => i + 1)
  const domain = [
    Math.min(...arrParse.map(item => item).filter(item => item >= 0)),
    Math.max(...arrParse.map(item => item))
  ]

  const rangeSeparator = d3.scaleQuantize().domain(domain).range(range).nice()

  arr.map(item => {
    const value = item[convertIndicatorCase(indicator)] === ' ' ? -1 : Number(`${item[convertIndicatorCase(indicator)]}`.replace(',', '.'))
    const level = rangeSeparator(value)
    const key = convertIndicatorCase(indicator)

    switch (true) {
      case level === 10:
        childrenGroup1.push({...item, [key]: value})
        break;
      case level === 9:
        childrenGroup2.push({...item, [key]: value})
        break;
      case level === 8:
        childrenGroup3.push({...item, [key]: value})
        break;
      case level === 7:
        childrenGroup4.push({...item, [key]: value})
        break;
      case level === 6:
        childrenGroup5.push({...item, [key]: value})
        break;
      case level === 5:
        childrenGroup6.push({...item, [key]: value})
        break;
      case level === 4:
        childrenGroup7.push({...item, [key]: value})
        break;
      case level === 3:
        childrenGroup8.push({...item, [key]: value})
        break;
      case level === 2:
        childrenGroup9.push({...item, [key]: value})
        break;
      case level === 1:
        childrenGroup10.push({...item, [key]: value})
        break;
      default:
        break;
    }
  })

  const groupRange = (group: any[]) => {
    return [Math.min(...group.map(i => i[convertIndicatorCase(indicator)] === ' ' ? -1 : Number(`${i[convertIndicatorCase(indicator)]}`.replace(',','.'))).filter(item => item >= 0)),
    Math.max(...group.map(i => i[convertIndicatorCase(indicator)] === ' ' ? -1 :Number(`${i[convertIndicatorCase(indicator)]}`.replace(',','.'))))]
  }



  const [group1Min, group1Max] = groupRange(childrenGroup1)
  const group1 = {
    category: 10,
    name: `G-10: ${group1Min} - ${group1Max}`,
    fraction: childrenGroup1.length * 100 / arr.length,
    totalPopulation: childrenGroup1.length > 0 && childrenGroup1.map(item => (+item.pop.replace(',','.'))).reduce((some, i) => (some + i)),
    children: childrenGroup1
  }

  const [group2Min, group2Max] = groupRange(childrenGroup2)
  const group2 = {
    category: 9,
    name: `G-9: ${group2Min} - ${group2Max}`,
    fraction: childrenGroup2.length * 100 / arr.length,
    totalPopulation: childrenGroup2.length > 0 && childrenGroup2.map(item => (+item.pop.replace(',','.'))).reduce((some, i) => (some + i)),
    children: childrenGroup2
  }

  const [group3Min, group3Max] = groupRange(childrenGroup3)
  const group3 = {
    category: 8,
    name: `G-8: ${group3Min} - ${group3Max}`,
    fraction: childrenGroup3.length * 100 / arr.length,
    totalPopulation: childrenGroup3.length > 0 && childrenGroup3.map(item => (+item.pop.replace(',','.'))).reduce((some, i) => (some + i)),
    children: childrenGroup3
  }

  const [group4Min, group4Max] = groupRange(childrenGroup4)
  const group4 = {
    category: 7,
    name: `G-7: ${group4Min} - ${group4Max}`,
    fraction: childrenGroup4.length * 100 / arr.length,
    totalPopulation: childrenGroup4.length > 0 && childrenGroup4.map(item => (+item.pop.replace(',','.'))).reduce((some, i) => (some + i)),
    children: childrenGroup4
  }

  const [group5Min, group5Max] = groupRange(childrenGroup5)
  const group5 = {
    category: 6,
    name: `G-6: ${group5Min} - ${group5Max}`,
    fraction: childrenGroup5.length * 100 / arr.length,
    totalPopulation: childrenGroup5.length > 0 && childrenGroup5.map(item => (+item.pop.replace(',','.'))).reduce((some, i) => (some + i)),
    children: childrenGroup5
  }

  const [group6Min, group6Max] = groupRange(childrenGroup6)
  const group6 = {
    category: 5,
    name: `G-5: ${group6Min} - ${group6Max}`,
    fraction: childrenGroup6.length * 100 / arr.length,
    totalPopulation: childrenGroup6.length > 0 && childrenGroup6.map(item => (+item.pop.replace(',','.'))).reduce((some, i) => (some + i)),
    children: childrenGroup6
  }

  const [group7Min, group7Max] = groupRange(childrenGroup7)
  const group7 = {
    category: 4,
    name: `G-4: ${group7Min} - ${group7Max}`,
    fraction: childrenGroup7.length * 100 / arr.length,
    totalPopulation: childrenGroup7.length > 0 && childrenGroup7.map(item => (+item.pop.replace(',','.'))).reduce((some, i) => (some + i)),
    children: childrenGroup7
  }

  const [group8Min, group8Max] = groupRange(childrenGroup8)
  const group8 = {
    category: 3,
    name: `G-3: ${group8Min} - ${group8Max}`,
    fraction: childrenGroup8.length * 100 / arr.length,
    totalPopulation: childrenGroup8.length > 0 && childrenGroup8.map(item => (+item.pop.replace(',','.'))).reduce((some, i) => (some + i)),
    children: childrenGroup8
  }

  const [group9Min, group9Max] = groupRange(childrenGroup9)
  const group9 = {
    category: 2,
    name: `G-2: ${group9Min} - ${group9Max}`,
    fraction: childrenGroup9.length * 100 / arr.length,
    totalPopulation: childrenGroup9.length > 0 && childrenGroup9.map(item => (+item.pop.replace(',','.'))).reduce((some, i) => (some + i)),
    children: childrenGroup9
  }

  const [group10Min, group10Max] = groupRange(childrenGroup10)
  const group10 = {
    category: 1,
    name: `G-1: ${group10Min} - ${group10Max}`,
    fraction: childrenGroup10.length * 100 / arr.length,
    totalPopulation: childrenGroup10.length > 0 && childrenGroup10.map(item => (+item.pop.replace(',','.'))).reduce((some, i) => (some + i)),
    children: childrenGroup10
  }

  return {
    name: 'root',
    children: [
      group1,
      group2,
      group3,
      group4,
      group5,
      group6,
      group7,
      group8,
      group9,
      group10,
    ]
  }
}

const validateLastYearAvailable = (arr1: any[], arr2: any[], arr3: any[], arr4: any[], arr5: any[], indicator: string) => {
  let series1_LastYear;
  let series2_LastYear;
  let series3_LastYear;
  let series4_LastYear;
  let series5_LastYear;

  for(let i = 0; i < arr1.length; i++) {
      if(arr1[i][indicator] !== -1) {
        series1_LastYear = +arr1[i].ano;
      }
  }

  for(let i = 0; i < arr2.length; i++) {
      if(arr2[i][indicator] !== -1) {
        series2_LastYear = +arr2[i].ano;
      }
  }

  for(let i = 0; i < arr3.length; i++) {
      if(arr3[i][indicator] !== -1) {
        series3_LastYear = +arr3[i].ano;
      }
  }

  for(let i = 0; i < arr4.length; i++) {
      if(arr4[i][indicator] !== -1) {
        series4_LastYear = +arr4[i].ano;
      }
  }

  for(let i = 0; i < arr5.length; i++) {
      if(arr5[i][indicator] !== -1) {
        series5_LastYear = +arr5[i].ano;
      }
  }

  return Math.max(series1_LastYear, series2_LastYear, series3_LastYear, series4_LastYear, series5_LastYear);
};

const createTimeLineSeries = (
  country: CountryVisualization[],
  indicator: string,
  state: StateVisualization[],
  city?: CityVisualization[],
  region?: RegionVisualization[],
  macro?: MacroRegionVisualization[],
) => {
  let countrySeries: any[] = [];
  let stateSeries: any[] = [];
  let citySeries: any[] = [];
  let regionSeries: any[] = [];
  let macroSeries: any[] = [];

  let values: number[] = [];

  let cityName = '';
  let regionName = '';
  let macroName = '';
  let stateName = '';


  if(state.length === 0) 
    state = []
  else
    stateName = state[0].estado;

  if(!city || city.length === 0) 
    city = []
  else
    cityName = city[0].nomemun;

  if(!region || region.length === 0) 
    region = []
  else
    regionName = region[0].noRegiao;

  if(!macro || macro.length === 0) 
    macro = []
  else
    macroName = macro[0].noMacro;

  country.forEach(item => item[convertIndicatorCase(indicator)] !== -1 ? countrySeries.push({
    year: +item.ano,
    [indicator]: item[convertIndicatorCase(indicator)],
  }): {})

  values.push(...countrySeries.map(item => item[indicator]))


  state.forEach(item => item[convertIndicatorCase(indicator)] !== -1 ? stateSeries.push({
    year: +item.ano,
    [indicator]: item[convertIndicatorCase(indicator)]
  }): {})

  values.push(...stateSeries.map(item => item[indicator]))


  if(city.length) {
    city.forEach(item => item[convertIndicatorCase(indicator)] !== -1 ? citySeries.push({
      year: +item.ano,
      [indicator]: item[convertIndicatorCase(indicator)]
    }): {})

    values.push(...citySeries.map(item => item[indicator]))
  } 


  region?.forEach(item => item[convertIndicatorCase(indicator)] !== -1 ? regionSeries.push({
    year: +item.ano,
    [indicator]: item[convertIndicatorCase(indicator)]
  }): {})

  values.push(...regionSeries.map(item => item[indicator]))

  macro?.forEach(item => item[convertIndicatorCase(indicator)] !== -1 ? macroSeries.push({
    year: +item.ano,
    [indicator]: item[convertIndicatorCase(indicator)]
  }): {})

  values.push(...macroSeries.map(item => item[indicator]))


  return {
    country: {
      series: countrySeries,
      name: 'Brasil'
    },
    state: {
      series: stateSeries,
      name: stateName,
    },
    city: {
      series: citySeries,
      name: cityName,
    },
    region: {
      series: regionSeries,
      name: regionName,
    },
    macro_region: {
      series: macroSeries,
      name: macroName,
    },
    yMin: Math.min(...values.filter(v => v >= 0)),
    yMax: Math.max(...values.filter(v => v >= 0)),
    minYear: 2010,
    maxYear: availableYears[0]
  }
}
