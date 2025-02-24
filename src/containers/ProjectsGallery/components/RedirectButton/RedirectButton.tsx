import React from 'react';
import { Link } from '../../../../components/icons';

import * as S from './RedirectButton.css';

interface Props {
  inversedColors?: boolean;
  projectUrl: string;
}

const RedirectButton = ({ inversedColors = false, projectUrl }: Props) => {
  return (
    <S.Button href={projectUrl} target="_blank" inversedColors={inversedColors}>
      <Link /> Visite o site do projeto
    </S.Button>
  );
};

export default RedirectButton;
