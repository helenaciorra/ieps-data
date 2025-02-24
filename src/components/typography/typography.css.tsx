import styled from 'styled-components';
import { black, white } from '../../constants/theme';
import { Theme } from '../../store/types';

type Props = {
  contrast?: boolean,
  useContrast?: boolean,
  themeKey?:
    | 'home'
    | 'visualization'
    | 'panorama'
    | 'orange'
    | 'projects_gallery'
    | 'downloads'
    | 'methods'
    | 'about'
    | 'productions'
};

type HomeTitleProps = {
  isHome: boolean,
}

export const HomeTitle = styled.h1<HomeTitleProps>`
  color: ${white};
  font-style: normal;
  font-weight: 300;
  font-size: ${({isHome}) => !isHome ? "10rem" : "7rem"};
  line-height: ${({isHome}) => !isHome ? "10rem" : "7rem"};
  max-width: ${({isHome}) => !isHome ? "110rem" : "80rem"};
  margin-bottom: 4rem;
`;

const setColor = ({ themeKey = 'home', useContrast, theme }: Props & Theme) => {
  if (useContrast) {
    return theme.palette[themeKey].contrastText;
  }

  return theme.palette.white;
};

export const Title = styled.h1`
  color: ${setColor};
  font-weight: 300;
  font-size: 56px;
  line-height: 67px;
`;

export const SectionTitle = styled.h3`
  color: ${setColor};
  font-weight: 300;
  font-size: 56px;
  line-height: 67px;
`;

export const SubTitle = styled.h2`
  color: ${setColor};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const Text = styled.h1`
  color: ${black};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
