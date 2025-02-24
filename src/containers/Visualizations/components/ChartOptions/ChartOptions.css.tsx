/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { black, outerSpace, paradiso, white, zIndexOverlay } from '../../../../constants/theme';

interface DropdownContainerProps {
  showUp: boolean;
}

interface ColorByZoom {
  zoomOut: boolean;
}

export const Container = styled.div`
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 160px;
`;

export const Item = styled.input<ColorByZoom>`
  background: transparent;
  border: none;
  color: ${({ zoomOut = false }) => ( zoomOut ?  outerSpace : white)};
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 2.9rem;
  outline: transparent;
  overflow: hidden;
  padding-left: 2.5px;
  padding-right: 40px;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
`;

export const Label = styled.label<ColorByZoom>`
  color: ${({ zoomOut = false }) => ( zoomOut ?  outerSpace : white)};
  font-size: 10px;
  line-height: 2;
  text-transform: uppercase;
`;

export const ItemBox = styled.div`
  align-items: center;
  border-bottom: 1px dashed ${white};
  display: flex;
`;

export const IconBox = styled.div<ColorByZoom>`
  margin-right: 12px;

  > svg {
    stroke: ${({ zoomOut = false }) => ( zoomOut ? outerSpace : white)};
    fill: transparent;
  }
`;

export const IconBoxDropDown = styled.div`
  margin-right: 12px;

  > svg {
    stroke: ${outerSpace};
    fill: transparent;
  }
`;

export const ArrowBox = styled.button`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  outline: transparent;
  margin-left: -40px;

  > svg {
    fill: ${black};
  }
`;

export const DropdownContainer = styled.div < DropdownContainerProps > `
  background: ${white};
  border-radius: 5px;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.22);
  display: ${({ showUp }) => (showUp ? 'inherit' : 'none')};
  max-height: 246px;
  overflow-y: hidden;
  padding: 4px;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: ${zIndexOverlay};

  > ul {
    list-style: none;
    width: 100%;
    > li {
      width: 100%;
    }
  }
`;

export const Option = styled.div`
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 2px;
  display: flex;
  cursor: pointer;
  color: ${outerSpace};
  font-size: 1.1rem;
  height: 34px;
  padding: 7px;
  text-align: left;
  transition: 0.2s background;
  width: 100%;
  position: relative;
  z-index: 200;

  &:hover {
    background: ${paradiso};;
    color: ${white};

    > div {
      > svg {
        stroke: ${white};
      }
    }
  }
`;
