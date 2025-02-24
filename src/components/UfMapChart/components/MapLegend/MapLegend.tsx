import React from 'react';
import {
  HealthRegion,
  Country,
  MacroRegion,
  State,
  City,
} from '../../../../containers/LocalHealthPanorama/components/icons';
import { HealthPanorama } from '../../../../store/health-panorama/health-panorama.types';
import * as S from './MapLegend.css';

type PropsLegend = {
  legend: string,
  value: string,
  icon: 'country' | 'estado' | 'noMacro' | 'noRegiao' | 'nomemun',
};

type Props = {
  healthPanorama?: HealthPanorama,
};

const Legend = ({ legend, value, icon }: PropsLegend) => {
  return (
    <S.Legend>
      <S.Label>{legend}</S.Label>
      <S.Value>
        {icon === 'country' && <Country />}
        {icon === 'estado' && <State />}
        {icon === 'noMacro' && <MacroRegion />}
        {icon === 'noRegiao' && <HealthRegion />}
        {icon === 'nomemun' && <City />}
        <S.ValueText icon={icon}>{value}</S.ValueText>
      </S.Value>
    </S.Legend>
  );
};

const MapLegend = ({ healthPanorama }: Props) => {
  return (
    <S.MapLegend>
      <Legend
        legend="País"
        value={healthPanorama?.codmun ? 'Brasil' : ''}
        icon="country"
      />
      <Legend
        legend="Estado"
        value={healthPanorama?.estado || ''}
        icon="estado"
      />
      <Legend
        legend="Macrorregião"
        value={healthPanorama?.noMacro || ''}
        icon="noMacro"
      />
      <Legend
        legend="Região de Saúde"
        value={healthPanorama?.noRegiao || ''}
        icon="noRegiao"
      />
      <Legend
        legend="Município"
        value={healthPanorama?.nomemun || ''}
        icon="nomemun"
      />
    </S.MapLegend>
  );
};

export default MapLegend;
