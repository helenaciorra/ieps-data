import styled from 'styled-components';
import { accent, olivine, olivineDark, white } from '../../../constants/theme';

export const Layout = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Hero = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  margin-top: 30px;
`;

export const Text = styled.p``;

export const TextLogin = styled.p`
  font-size: 12px;
  display: none;
`;

export const Form = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  border: none;
  border-radius: 2.5px;
  margin-right: 10px;
  outline: none;
  padding: 10px 5px;
  display: none;
`;

export const Button = styled.button`
  background-color: ${olivineDark};
  border: none;
  border-radius: 2.5px;
  color: ${white};
  outline: none;
  padding: 10px 20px;
  &:hover {
    background-color: ${olivine};
    cursor: pointer;
  }
  display: none;
`;

export const TextError = styled.p`
  color: ${accent};
  font-size: 12px;
  margin-top: 10px;
`;

export const Footer = styled.footer``;
