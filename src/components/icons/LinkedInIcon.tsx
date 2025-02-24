import React from 'react';
import setHighlightColor from '../../utils/setHighlightColor';

type Props = {
  secondary?: boolean,
};

const LinkedInIcon = ({ secondary }: Props) => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 0C9.22555 0 7.00214 0.674464 5.11098 1.9381C3.21981 3.20174 1.74583 4.99779 0.875421 7.09914C0.00501329 9.20049 -0.222725 11.5128 0.221005 13.7435C0.664735 15.9743 1.76 18.0234 3.36831 19.6317C4.97661 21.24 7.02571 22.3353 9.2565 22.779C11.4873 23.2228 13.7995 22.995 15.9009 22.1246C18.0022 21.2542 19.7983 19.7802 21.0619 17.8891C22.3256 15.9979 23 13.7745 23 11.5C23 8.45001 21.7884 5.52494 19.6318 3.36827C17.4751 1.2116 14.55 0 11.5 0ZM8.62304 16.941H6.18504V9.104H8.62304V16.941ZM7.40504 8.032C7.12564 8.032 6.85253 7.94911 6.62026 7.79383C6.38799 7.63854 6.20702 7.41784 6.10023 7.15965C5.99345 6.90147 5.96566 6.61741 6.02039 6.34343C6.07512 6.06944 6.20989 5.81786 6.40767 5.6205C6.60544 5.42315 6.85731 5.28891 7.13141 5.23477C7.40551 5.18062 7.68951 5.20901 7.94747 5.31635C8.20542 5.42368 8.42574 5.60512 8.58053 5.83772C8.73532 6.07032 8.81763 6.34361 8.81704 6.623C8.81624 6.99697 8.66713 7.35534 8.40241 7.6195C8.1377 7.88365 7.779 8.032 7.40504 8.032ZM17.745 16.941H15.312V13.13C15.312 12.221 15.294 11.051 14.046 11.051C12.778 11.051 12.585 12.041 12.585 13.064V16.941H10.152V9.104H12.487V10.175H12.523C12.7564 9.77599 13.0934 9.44761 13.4984 9.22471C13.9033 9.00181 14.3611 8.89272 14.823 8.909C17.287 8.909 17.743 10.532 17.743 12.643L17.745 16.941Z"
      fill={setHighlightColor(secondary, '#343A40', '#CED4DA')}
    />
  </svg>
);

export default LinkedInIcon;
