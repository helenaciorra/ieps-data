import React, { useEffect, useState } from 'react';
import { ACCESS_DATA } from '../../../store/types';
import SocialMedia from '../../../containers/Home/components/SocialMedia';
import Header from '../Layout/components/Header';
import * as S from './Login.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const loginDisabled = process.env.GATSBY_LOGIN_ENABLED;

  const loginEnable = true; // process.env.REACT_LOGIN_ENABLED;
  useEffect(() => {
    if (loginDisabled) {
      window?.localStorage.setItem(ACCESS_DATA.tokenKey, ACCESS_DATA.token);
      onLogin();
    }
  }, []);

  const [hasLoginError, setLoginError] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    if (
      formData.username === ACCESS_DATA.username &&
      formData.password === ACCESS_DATA.password
    ) {
      window?.localStorage.setItem(ACCESS_DATA.tokenKey, ACCESS_DATA.token);
      onLogin();
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  return (
    <S.Layout>
      <Header isDataPage />
      <S.Body>
        <S.Hero>
          <S.Title>O IEPS Data está em construção</S.Title>
          <S.Text>
            O novo portal facilitará o acesso a dados e indicadores de saúde de
            todo Brasil
          </S.Text>
        </S.Hero>
        <S.TextLogin>
          Através do login abaixo, você poderá fazer uma vizualização prévia do
          IEPS Data
        </S.TextLogin>
        <S.Form>
          <S.Input
            type="text"
            placeholder="E-mail"
            name="username"
            onChange={handleChange}
          />
          <S.Input
            type="password"
            placeholder="Senha"
            name="password"
            onChange={handleChange}
          />
          <S.Button type="submit" onClick={handleLogin}>
            Acessar prévia
          </S.Button>
        </S.Form>
        {hasLoginError && <S.TextError>Email ou senha incorretos.</S.TextError>}
        <S.Footer>
          <SocialMedia secondary={false} />
        </S.Footer>
      </S.Body>
    </S.Layout>
  );
};

export default Login;
