/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import {
  azure,
  geyser,
  orange,
  outerSpace,
  paradiso,
  scrollSilver,
  silver,
  trout,
  white,
  purple,
  zIndexOverlay,
  purpleDark,
} from '../../constants/theme';
import { Themes } from '../../store/types';

interface Props {
  themeColor: Themes;
}

type DropdownContainerProps = {
  showUp: boolean,
};

const colorPallet = {
  panorama: {
    color: trout,
    hover: orange,
  },
  visualization: {
    color: white,
    hover: paradiso,
  },
  methods: {
    color: azure,
    hover: azure,
  },
  downloads: {
    color: purple,
    hover: purpleDark,
  },
};

export const Container = styled.div`
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 100%;
`;

export const Label =
  styled.label <
  Props >
  `
  color: ${({ themeColor }) => colorPallet[themeColor].color};
  font-size: 10px;
  line-height: 2;
  text-transform: uppercase;
`;

export const ItemBox = styled.div`
  border-bottom: 1px dashed ${geyser};
  display: flex;
`;

export const Item =
  styled.input <
  Props >
  `
  background: transparent;
  border: none;
  color: ${({ themeColor }) => colorPallet[themeColor]?.color};
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.9rem;
  outline: transparent;
  overflow: hidden;
  padding-left: 2.5px;
  padding-right: 40px;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
  &::placeholder {
    color: ${geyser};
  }
`;

export const IconBox = styled.button`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  outline: transparent;
  margin-left: -40px;
`;

export const DropdownContainer =
  styled.div <
  DropdownContainerProps >
  `
  background: ${white};
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.22);
  display: ${({ showUp }) => (showUp ? 'inherit' : 'none')};
  max-height: 246px;
  overflow-y: auto;
  padding: 4px;
  position: absolute;
  top: 100%;
  width: calc(100% - 18px);
  z-index: ${zIndexOverlay};

  &::-webkit-scrollbar {
    width: 18px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${scrollSilver};
    border-radius: 16px;
    border: 8px solid ${white};
  }


  > ul {
    list-style: none;
    width: 100%;
    > li {
      width: 100%;
    }
  }
`;

export const Option =styled.button<Props>`
  background: transparent;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: ${outerSpace};
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  height: 34px;
  padding: 7px;
  text-align: left;
  transition: 0.2s background;
  width: 100%;
  position: relative;
  z-index: 200;
  &:hover {
    background: ${({ themeColor }) => colorPallet?.[themeColor]?.hover};;
    color: ${white};
  }
  button{
    margin-right: 5px;
  }
  
`;

export const EmptyOption = styled.div`
  background: transparent;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: ${silver};
  font-size: 1.1rem;
  height: 34px;
  padding: 7px;
  text-align: left;
  width: 100%;
  position: relative;
  z-index: 200;
`;
