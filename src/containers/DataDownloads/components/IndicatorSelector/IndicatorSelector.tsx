import React from 'react';
import Checkbox from '../../../../components/layout/Checkbox';
import * as S from './IndicatorSelector.css';

type Props = {
  indicatorsMap: { [key: string]: boolean },
  indicators: { name: string, variable: string }[],
  onSelect: (indicator: { name: string, variable: string }) => void,
};

const IndicatorSelector = ({ indicators, indicatorsMap, onSelect }: Props) => {
  const handleSelect =
    (indicator: { name: string, variable: string }) =>
    (e: React.FormEvent<HTMLLabelElement>) => {
      e.preventDefault();
      onSelect(indicator);
    };

  return (
    <S.IndicatorSelector>
      {indicators.map((indicator) => (
        <li key={indicator.name}>
          <S.IndicatorItem onClick={handleSelect(indicator)}>
            <Checkbox
              theme="downloads"
              checked={indicatorsMap?.[indicator.variable]}
            />
            {indicator.name}
          </S.IndicatorItem>
        </li>
      ))}
    </S.IndicatorSelector>
  );
};

export default IndicatorSelector;
