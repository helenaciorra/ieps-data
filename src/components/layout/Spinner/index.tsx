import React from 'react';
import { Themes } from '../../../store/types';
import * as S from './styles';

type Props = {
  block?: boolean,
  mt?: string,
  mb?: string,
  secondary?: string,
  size?: string,
  theme?: Themes | 'white',
};
const Spinner = ({
  block = false,
  mt,
  mb,
  size,
  theme = 'visualization',
}: Props) => {
  return (
    <S.Block block={block}>
      <S.Spinner size={size || '5'} mt={mt || '0'} mb={mb || '0'}>
        <S.SVG viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <S.CircleSvg theme={theme} cx="50" cy="50" r="40" />
        </S.SVG>
      </S.Spinner>
    </S.Block>
  );
};

export default Spinner;
