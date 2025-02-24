import styled from 'styled-components';
import { osloGray, white } from '../../../../../constants/theme';

export const Footer = styled.footer`
  background-color: ${white};
  padding: 6.5rem 5.5rem 3rem 5.5rem;
`;

export const Block = styled.div`
  flex: 1;
`;

export const Addresses = styled.div`
  display: flex;
  flex: 1;
`;

export const Hero = styled.div`
  display: flex;
  margin-bottom: 4rem;
  max-width: 130rem;
`;

export const Main = styled.div`
  display: flex;
  margin-bottom: 4rem;
  max-width: 130rem;
`;

export const Contacts = styled.div`
  display: flex;
`;

export const Contact = styled.div``;

export const ContactTitle = styled.h3`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const ContactText = styled.p`
  color: ${osloGray};
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const Rights = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 16fr 0fr;
  padding: 2rem 5px 0 5px;
  border-top: 2px solid ${osloGray};

  a {
    text-decoration: none;
  }
`;

export const Right = styled.p`
  white-space: nowrap;
  color: ${osloGray};
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 0;
  margin-right: 3rem;
`;

export const CreateBy = styled.p`
  white-space: nowrap;
  color: ${osloGray};
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 0;
  margin-right: 3rem;

  a {
    color: ${osloGray};
    text-decoration: none;
  }
`;
