/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { RegionHealthResourcesPanorama } from '../../../../store/health-panorama/health-panorama.types';
import { HealthRegion, People, PlusCircle } from '../icons';
import ChartHeader from '../ChartHeader';
import Resource from './Resource';
import * as S from './RegionResources.css';

type Props = {
  data: RegionHealthResourcesPanorama,
};

const RegionResources = ({ data }: Props) => {
  const key = 'region';

  return (
    <S.Container>
      <ChartHeader>
        recursos da região de saúde{' '}
        <HealthRegion />
      </ChartHeader>
      <S.Content>
        <S.Column>
          <S.TopBox>
            <Resource
              label="Médicos"
              icon={PlusCircle}
              additionalInfo={'1.000'}
              value={data[key].txMed}
              valueState={data.state.txMed}
              valueCountry={data.country.txMed}
            />
          </S.TopBox>
          <S.BottomBox>
            <Resource
              label="Leitos SUS"
              additionalInfo={'100.000'}
              value={data[key].txLeitoSus}
              valueState={data.state.txLeitoSus}
              valueCountry={data.country.txLeitoSus}
            />
          </S.BottomBox>
        </S.Column>
        <S.Column>
          <S.TopBox>
            <Resource
              label="Enfermeiros"
              icon={People}
              additionalInfo={'1.000'}
              value={data[key].txEnf}
              valueState={data.state.txEnf}
              valueCountry={data.country.txEnf}
            />
          </S.TopBox>
          <S.BottomBox>
            <Resource
              label="Leitos Não-SUS"
              additionalInfo={'100.000'}
              value={data[key].txLeitoNsus}
              valueState={data.state.txLeitoNsus}
              valueCountry={data.country.txLeitoNsus}
            />
          </S.BottomBox>
        </S.Column>
      </S.Content>
      <S.Separator />
    </S.Container>
  );
};

export default RegionResources;
