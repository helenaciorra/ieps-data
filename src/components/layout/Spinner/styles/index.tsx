import styled, { keyframes } from 'styled-components';
import { theme as themes } from '../../../../constants/theme';
import { Themes } from '../../../../store/types';
export * from './Block.css';

type SpinnerProps = {
  size: string,
  mt: string,
  mb: string,
};

export const Spinner = styled.div`
  height: ${(props: SpinnerProps) => (props.size ? props.size : '5')}rem;
  position: relative;
  /* transform: translateY(-20%); */
  width: ${(props) => (props.size ? props.size : '5')}rem;
  margin-top: ${(props) => (props.mt ? props.mt : '0')}rem;
  margin-bottom: ${(props) => (props.mb ? props.mb : '0')}rem;
`;

// SVG animation.
const SVGKey = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

export const SVG = styled.svg`
  animation: 2s linear infinite both ${SVGKey};
`;

// Circle animation.
const CircleKey = keyframes`
  0%,
  25% {
    stroke-dashoffset: 274.26104271;
    transform: rotate(0);
  }
  50%,
  75% {
    stroke-dashoffset: 70.68583575;
    transform: rotate(45deg);
  }
  100% {
    stroke-dashoffset: 274.26104271;
    transform: rotate(360deg);
  }
`;

const setColor = ({ theme = 'visualization' }: { theme: Themes | 'white' }) => {
  if (theme === 'white') {
    return themes.palette.white;
  }

  return themes.palette?.[theme]?.main;
};

// Circle styles.
export const CircleSvg = styled.circle`
  animation: 1.4s ease-in-out infinite both ${CircleKey};
  fill: transparent;
  stroke: ${setColor};
  stroke-dasharray: 282.743343;
  stroke-linecap: round;
  stroke-width: 12;
  transform-origin: 50% 50%;
`;
