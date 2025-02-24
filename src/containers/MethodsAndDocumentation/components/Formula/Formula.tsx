import React from 'react';

import * as S from './styles';

export type FormulaContentProps = {
  item: string,
  image?: string,
  explain: string[],
};

type FormulaProps = {
  items: FormulaContentProps[],
};

const Formula = ({ items }: FormulaProps) => {
  const detailFormula = (details) => {
    return details?.map((item, i) => <S.Detail key={i}>{item}</S.Detail>);
  };

  const listItems = items?.map((data, i) => (
    <li key={i}>
      <p>{data.item}</p>
      {!!data.image && (
        <div style={{ textAlign: 'center' }}>
          <img src={data.image} alt="Fórmula" />
        </div>
      )}
      {data.explain.length > 0 && <p>em que:</p>}
      {data.explain.length > 0 && (
        <ul style={{ marginBottom: '20px' }}>{detailFormula(data.explain)}</ul>
      )}
    </li>
  ));

  return <S.Formula>{listItems}</S.Formula>;
};

export default Formula;
