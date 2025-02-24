import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Head from '../../Head';
import GlobalStyle from '../../../global.css';
import SideNavMenu from '../../../components/layout/SideNavMenu';
import { ACCESS_DATA } from '../../../store/types';
import { theme } from '../../../constants/theme';
import Header from './components/Header';
import Login from '../Login';
import Footer from './components/Footer';
import * as S from './Layout.css';

const Layout = ({ children, location }) => {
  const loginDisabled = process.env.GATSBY_LOGIN_ENABLED;
  const [isLoggedIn, setLoggedIn] = useState(false);

  const isBrowser = () => {
    if (typeof window !== 'undefined') {
      return (
        window?.localStorage?.getItem(ACCESS_DATA.tokenKey) ===
        ACCESS_DATA.token
      );
    }
  };

  const token = isBrowser();

  useEffect(() => {
    if (loginDisabled || token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <ThemeProvider theme={theme}>
        <S.Layout location={location}>
          <Login onLogin={handleLogin} />
        </S.Layout>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <S.Layout location={location}>
        <GlobalStyle />
        <Head siteTitle="IEPS"></Head>
        <Header isDataPage />
        <S.Body>
          <S.Aside>
            <SideNavMenu location={location} collapsible defaultCollapsed />
          </S.Aside>
          <S.Main className="print-main">{children}</S.Main>
        </S.Body>
        <Footer location={location} />
      </S.Layout>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const GeneralLayout = (props) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={(data) => <Layout data={data} {...props} />}
  />
);

export default GeneralLayout;
