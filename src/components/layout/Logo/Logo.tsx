import React from 'react';
import { LogoIcon, LogoCopyIcon } from '../../icons';
import * as S from './Logo.css';

type Props = {
  icon?: () => JSX.Element,
};

const Logo = ({ icon: Icon }: Props) => {
  return (
    <S.Logo>
      {Icon ? <Icon /> : <LogoIcon />}
      <S.Copy>
        <LogoCopyIcon />
      </S.Copy>
    </S.Logo>
  );
};

export default Logo;
