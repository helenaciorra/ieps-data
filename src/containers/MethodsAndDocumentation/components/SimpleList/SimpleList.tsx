import React from 'react';
import { GraphLevelContentProps } from '../SolrData/SolrData';

import * as S from './styles';

type SimpleListProps = {
  items: GraphLevelContentProps[],
  ordered: boolean,
};

const SimpleList = ({ items, ordered }: SimpleListProps) => {
  const listItems = items?.map((item, i) => (
    <li key={i}>
      <S.SimpleListItem>
        <span>{item.title}</span>
        {!!item.content && (
          <ul style={{ marginTop: '2px' }}>
            <li style={{ marginLeft: '18px' }}>{item.content}</li>
          </ul>
        )}
      </S.SimpleListItem>
    </li>
  ));

  const simpleList = ordered ? <ol>{listItems}</ol> : <ul>{listItems}</ul>;

  return <S.SimpleListWrapper>{simpleList}</S.SimpleListWrapper>;
};

export default SimpleList;
