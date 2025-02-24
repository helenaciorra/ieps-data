import React, { useState, useEffect } from 'react';
import { PathLocation } from '../../../store/types';
import {
  NavLinksEnum,
  SideNavLink,
  SIDE_NAV_LINKS,
} from '../../../store/ui/ui.types';

import * as S from './SideNavMenu.css';

type Props = {
  location: PathLocation,
  collapsible?: boolean,
  defaultCollapsed?: boolean,
  clearSelection?: boolean,
  onHoverSideNavLink?: (url: NavLinksEnum) => void,
};

const SideNavMenu = ({
  defaultCollapsed,
  collapsible = true,
  clearSelection,
  location,
  onHoverSideNavLink,
}: Props) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [selectedUrl, setSelectedUrl] = useState('');

  useEffect(() => {
    if (clearSelection) {
      setSelectedUrl('');
    }
  }, [clearSelection]);

  const handleOpenSideNav = () => {
    if (collapsible) {
      setCollapsed(false);
    }
  };

  const handleCloseSideNav = () => {
    if (collapsible) {
      setCollapsed(true);
      setSelectedUrl('');
    }
  };

  const handleMouseEnterLink =
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (url: NavLinksEnum, highlightLogoIcon: () => JSX.Element) => () => {
      if (onHoverSideNavLink) {
        onHoverSideNavLink(url);
      }
      setSelectedUrl(url);
    };

  const renderLink = (
    { text, url, color, icon: Icon, highlightLogoIcon }: SideNavLink,
    last: boolean
  ) => {
    return (
      <li key={url}>
        <S.Link
          to={url}
          key={url}
          onMouseEnter={handleMouseEnterLink(url, highlightLogoIcon)}
        >
          <S.NavLink
            key={text}
            last={last}
            color={color}
            highlightOnHover={url === selectedUrl || url === location.pathname}
          >
            <S.NavLinkIcon>
              <Icon
                highlightOnHover={
                  url === selectedUrl || url === location.pathname
                }
              />
            </S.NavLinkIcon>
            <S.NavLinkText
              color={color}
              collapsed={collapsed}
              highlightOnHover={
                url === selectedUrl || url === location.pathname
              }
            >
              {text}
            </S.NavLinkText>
          </S.NavLink>
        </S.Link>
      </li>
    );
  };

  return (
    <nav
      className="print-hidden"
      onMouseEnter={handleOpenSideNav}
      onMouseLeave={handleCloseSideNav}
    >
      <S.Ul collapsed={collapsed}>
        {SIDE_NAV_LINKS.map((link, index) =>
          renderLink(link, index === SIDE_NAV_LINKS.length - 1)
        )}
      </S.Ul>
    </nav>
  );
};

export default SideNavMenu;
