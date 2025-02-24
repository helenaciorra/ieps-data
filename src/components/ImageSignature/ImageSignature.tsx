import React from 'react';
import Logo from '../layout/Logo';

import * as S from './ImageSignature.style';

interface Props {
  showUp: boolean;
  textAlign?: 'center' | 'flex-start';
  isBgColor?: boolean;
  paddingLeft?: string;
}

export default function ImageSignature({
  showUp,
  isBgColor = true,
  textAlign = 'flex-start',
  paddingLeft = '2.5rem',
}: Props) {
  return (
    <S.Container
      showUp={showUp}
      isBgColor={isBgColor}
      textAlign={textAlign}
      paddingLeft={paddingLeft}
    >
      <Logo />
    </S.Container>
  );
}
