import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import GlobalStyle from '../../../global.css';
import { ACCESS_DATA } from '../../../store/types';
import Head from '../../Head';
import Login from '../Login';
import * as S from './HomeLayout.css';
import Footer from './components/Footer';
import { PathLocation } from '../../../store/types';
import { any } from 'core-js/fn/promise';


const Layout = ({ children, location }) => {
  const loginDisabled = process.env.GATSBY_LOGIN_ENABLED;
  const [isLoggedIn, setLoggedIn] = useState(loginDisabled);

  useEffect(() => {
    setLoggedIn(
      window?.localStorage?.getItem(ACCESS_DATA.tokenKey) === ACCESS_DATA.token
    );
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <>
        <GlobalStyle />
        <Head siteTitle="IEPS"></Head>
        <Login onLogin={handleLogin} />
      </>
    );
  }

  return (
    <S.Layout>
      <GlobalStyle />
      <Head siteTitle="IEPS"></Head>
      {children}
      <Footer location={location} />
    </S.Layout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const GeneralLayout = (props) => (
  <StaticQuery
    query={graphql`
      query HomeLayoutQuery {
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
