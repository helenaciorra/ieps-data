import styled from 'styled-components';
import {
  emperor,
  shark,
  simpleGray,
  supernova,
  white,
} from '../../constants/theme';
import logo from './img/about-bg.png';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const About = styled.div`
  margin: -3rem auto 6.5rem auto;
`;

export const HeroBlock = styled.section`
  margin-top: 3rem;
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;
`;

export const HeroBackground = styled.div`
  position: absolute;
  right: -10rem;
  top: 30rem;
  z-index: -1;

  svg {
    width: 400px;
    height: 400px;
  }
`;

export const Hero = styled.section`
  background: ${white};
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 100% -50%;
  background-size: auto;
  border-radius: 10px;
  box-shadow: 0px 10px 40px rgb(0 0 0 / 21%);
  height: 480px;
  margin-top: 2rem;
  padding: 5rem;
  width: 800px;
`;

export const HeroTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 3rem;
  width: 450px;
  color: ${supernova};
`;

export const HeroParagraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  left: 177px;
  line-height: 24px;
  width: 450px;
  text-justify: inter-word;
  text-align: justify;

  a {
    color: ${supernova};
    cursor: pointer;
    text-decoration: none;
  }
`;

export const ContentBackground = styled.div`
  position: absolute;
  right: -5rem;
  top: 135rem;
`;

export const Content = styled.div`
  margin-top: 5rem;
  position: relative;
`;

export const ContentBlock = styled.div`
  width: 45rem;
`;

export const SubTitle = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 52px;
  color: ${shark};
`;

export const Paragraph = styled.p`
  color: ${emperor};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-left: 5rem;
  margin-top: 2rem;
  margin-bottom: 5rem;
  a {
    color: ${supernova};
    text-decoration: none;
  }
`;

export const Quote = styled.p`
  color: ${simpleGray};
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-left: 5rem;
`;

export const Members = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  max-width: 70rem;
  position: relative;
  z-index: 1;
`;

export const Member = styled.div`
  width: 17rem;
  margin: 2rem;
  position: relative;
`;

export const Role = styled.div`
  background: #ffc20e;
  border-radius: 100rem;
  flex: 0;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
  position: absolute;
  padding: 2.5px 10px;
  font-size: 12px;
  top: -5px;
  left: 5px;
`;

export const Img = styled.img`
  width: 154px;
  height: 157px;
`;

export const Name = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: ${shark};
`;

export const Expertise = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${simpleGray};
`;