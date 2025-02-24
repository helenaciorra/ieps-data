import React from 'react';
import invalidValues from '../../../../utils/invalid-values';
import { round2 } from '../../../../utils/math/';
import { Country, State } from '../icons';
import * as S from './RegionResources.css';

type Props = {
  label: string,
  value: number,
  additionalInfo: string,
  valueState: number,
  valueCountry: number,
  icon?: () => JSX.Element,
};

const Resource = ({
  label,
  value,
  additionalInfo,
  valueState,
  valueCountry,
  icon: Icon,
}: Props) => {
  return (
    <div>
      {Icon && (
        <S.Icon>
          <Icon />
        </S.Icon>
      )}
      <S.TextHighlight>
        {`${invalidValues(round2(value))}`.replace('.', ',')}
      </S.TextHighlight>
      <S.Subtitle>
        <strong>{label}</strong> <br />({additionalInfo} hab.)
      </S.Subtitle>
      <S.AdditionalInfo>
        <span>
          <State /> {`${invalidValues(round2(valueState))}`.replace('.', ',')}
        </span>
        <span>
          <Country />{' '}
          {`${invalidValues(round2(valueCountry))}`.replace('.', ',')}
        </span>
      </S.AdditionalInfo>
    </div>
  );
};

export default Resource;
