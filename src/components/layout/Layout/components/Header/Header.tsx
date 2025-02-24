import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../../../../components/layout/Logo/Logo';
import * as S from './Header.css';

type Props = {
  collapsible?: boolean,
  isDataPage?: boolean,
};

const Header = ({ isDataPage }: Props) => {
  return (
    <S.Header isDataPage={isDataPage}>
      <Link to="/">
        <Logo />
      </Link>
    </S.Header>
  );
};

export default Header;
