import React from 'react';
import { Themes } from '../../../store/types';
import * as S from './Button.css';

type Props = {
  theme: Themes,
  onClick?: () => void,
};

const Button = ({
  children,
  theme,
  onClick,
  ...props
}: React.PropsWithChildren<Props>) => {
  return (
    <S.Button theme={theme} {...props} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
