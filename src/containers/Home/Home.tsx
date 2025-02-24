import React, { useState } from 'react';
import { NavLinksEnum, NAV_LINKS_MAP } from '../../store/ui/ui.types';
import Layout from '../../components/layout/HomeLayout';
import SideNavMenu from '../../components/layout/SideNavMenu/SideNavMenu';
import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import HomePresentation from './components/HomePresentation';
import * as S from './Home.css';

const HomePage = ({ location }) => {
  const [selectedUrl, setSelectedUrl] = useState(NavLinksEnum.HOME);
  const [clearSideNavSelection, setClearSideNavSelection] = useState(false);

  const [homeStyle, setHomeStyle] = useState(NAV_LINKS_MAP[NavLinksEnum.HOME]);

  const handleHoverSideNavLink = (url: NavLinksEnum) => {
    setHomeStyle(NAV_LINKS_MAP[url]);
    setSelectedUrl(url);
    setClearSideNavSelection(url === NavLinksEnum.HOME);
  };

  return (
    <Layout location={location}>
      <S.Home>
        <Header
          color={homeStyle.color}
          icon={homeStyle.highlightLogoIcon}
          onMouseEnter={handleHoverSideNavLink}
        />
        <S.Main>
          <S.Aside>
            <SideNavMenu
              location={location}
              collapsible={false}
              defaultCollapsed={false}
              clearSelection={clearSideNavSelection}
              onHoverSideNavLink={handleHoverSideNavLink}
            />
            <SocialMedia secondary={true} />
          </S.Aside>
          <S.Content>
            <HomePresentation selectedUrl={selectedUrl} />
          </S.Content>
        </S.Main>
      </S.Home>
    </Layout>
  );
};

export default HomePage;
