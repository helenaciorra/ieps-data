import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../../../components/layout/Logo/Logo';
import * as S from './Header.css';
import { NavLinksEnum } from '../../../../store/ui/ui.types';

type Props = {
  color: string,
  icon: () => JSX.Element,
  onMouseEnter: (url: NavLinksEnum) => void,
};

const Header = ({ icon, onMouseEnter }: Props) => {
  const handleMouseEnter = () => {
    onMouseEnter(NavLinksEnum.HOME);
  };

  return (
    <S.Header>
      <Link to="/" onMouseEnter={handleMouseEnter}>
        <Logo icon={icon} />
      </Link>
    </S.Header>
  );
};

export default Header;
