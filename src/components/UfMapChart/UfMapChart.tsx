/* eslint-disable prettier/prettier */
import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as S from './UfMapChart.css';
import { DATA } from './data';
import {
  cityDefault,
  citySelected,
  citySelectedRegion,
} from '../../constants/theme';
import { HealthPanorama } from '../../store/health-panorama/health-panorama.types';
import UfState from './components/UfState';
import MapLegend from './components/MapLegend';
import Pin from './assets/Pin';

interface IParams {
  stateId: number;
  year: string;
}

interface IPosition {
  x: number;
  y: number;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const ARBITRARY_CITY_COLORS = {
  0: '#e2dfdf',
  1: '#dfdbdb',
  2: '#cecbcb',
  3: '#bebebe',
  4: '#afafaf',
};

const REGION_CITY_COLORS = {
  0: '#32887c',
  1: '#2e8074',
  2: '#2B7B6F',
  3: '#297469',
  4: '#276e64',
};

function cityColor(colors: { [key: number]: string }): string {
  return colors[parseInt(getRandomArbitrary(0, 4))];
}

type Props = {
  data: HealthPanorama,
  ufData: HealthPanorama[],
  isLoadingUfMapData?: boolean,
  shouldUseRegionData: boolean,
};

export const UfMapChart = ({
  data,
  ufData,
  isLoadingUfMapData,
  shouldUseRegionData,
}: Props) => {
  const [position, setPosition] = useState<IPosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    handleRenderMaps();
  }, [shouldUseRegionData]);

  const setTarget = () => {
    const city = document.getElementById(`${data.idMunic7}`);

    if(!city) {
      return
    }

    let [ x , y ] = [ 0, 0 ];

    const dimensions = city.getBoundingClientRect()

    x = dimensions.x - 110 + (dimensions.width / 2)
    y = dimensions.y - 250 + (dimensions.height / 2)

    setPosition({ x, y })
  }

  const handleRenderMaps = () => {
    // Let's use this conditional to prevent old browser which dont support requestAnimationFrame
    if (requestAnimationFrame) {
      requestAnimationFrame(renderUfMaps);
    } else {
      setTimeout(renderUfMaps, 1000);
    }
  };

  const getUfStatesSvgPaths = () => {
    const UfWrapper = document.getElementById('UfWrapper');

    if (!UfWrapper) {
      return [];
    }

    return Array.from(UfWrapper.getElementsByTagName('path'));
  };

  const renderUfMaps = () => {
    if (!data || !data.id) {
      return;
    }

    setTarget()
    const svgPaths = getUfStatesSvgPaths();

    if (svgPaths) {
      const sameRegionCities = ufData
        .filter((mun) => mun.regiao === data?.regiao)
        .map((mun) => `${mun.idMunic7}`);

      svgPaths.forEach((path) => {
        if (path.id === data.idMunic7) {
          path.setAttribute(
            'fill',
            shouldUseRegionData ? cityColor(REGION_CITY_COLORS) : citySelected
          );
        } else {
          path.setAttribute('fill', cityColor(ARBITRARY_CITY_COLORS));
        }

        sameRegionCities?.forEach((pathId) => {
          if (pathId !== data.idMunic7) {
            document
              .getElementById(pathId)
              ?.setAttribute('fill', cityColor(REGION_CITY_COLORS));
          }
        });
      });
    }
  };

  if (data == null || !data?.codmun) {
    return (
      <S.UfMapChart>
        <S.MapBlock>
          <S.EmptyText>
            Selecione uma cidade no campo de busca acima
          </S.EmptyText>
        </S.MapBlock>
        <MapLegend healthPanorama={data} />
      </S.UfMapChart>
    );
  }

  return (
    <S.UfMapChart>
      <S.MapBlock id="UfWrapper">
        <UfState
          codmun={data?.codmun}
          uf={data?.idEstado}
          isLoadingUfMapData={isLoadingUfMapData}
          onRender={handleRenderMaps}
        />
        <S.PinWrapper x={position.x} y={position.y} isLoadingUfMapData={isLoadingUfMapData || shouldUseRegionData}>
          {/* <Pin /> */}
        </S.PinWrapper>
      </S.MapBlock>
      <MapLegend healthPanorama={data} />
    </S.UfMapChart>
  );
};

export default UfMapChart;
