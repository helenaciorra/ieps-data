import React from 'react';
import Logo from '../layout/Logo/Logo';

import * as S from './Watermark.style';

interface Props {
  showUp: boolean;
}

export default function Watermark({ showUp }: Props) {
  return (
    <S.Container showUp={showUp}>
      <Logo />
    </S.Container>
  );
}
