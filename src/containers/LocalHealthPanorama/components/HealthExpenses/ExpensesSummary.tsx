import React from 'react';
import { currency } from '../../../../utils/math/measurements-units';
import { round } from '../../../../utils/math';
import { Country, State } from '../icons';
import * as S from './HealthExpenses.css';
import invalidValues from '../../../../utils/invalid-values';

type Props = {
  id: string,
  title: string,
  totalValue: number,
  stateValue: number,
  countryValue: number,
  shouldUseRegionData: boolean,
  secondary?: boolean,
};

const ExpensesSummary = ({
  id,
  title,
  totalValue,
  stateValue,
  countryValue,
  shouldUseRegionData,
  secondary,
}: Props) => {
  return (
    <S.ExpensesSummary id={id}>
      <S.Title>{title}</S.Title>
      <S.TextHighlightOwners shouldUseRegionData={shouldUseRegionData}>
        {currency(invalidValues(round(totalValue)))}
      </S.TextHighlightOwners>
      <S.AdditionalInfoOwners>
        <span>
          <State /> {`${invalidValues(round(stateValue))}`.replace('.', ',')}
        </span>
        <span>
          <Country />{' '}
          {`${invalidValues(round(countryValue))}`.replace('.', ',')}
        </span>
      </S.AdditionalInfoOwners>
    </S.ExpensesSummary>
  );
};

export default ExpensesSummary;
