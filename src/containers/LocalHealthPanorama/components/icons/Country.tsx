import React from 'react';

type Props = {
  hasOpacity?: boolean,
};

function Country({ hasOpacity }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="9"
      fill="none"
      viewBox="0 0 9 9"
    >
      <path fill={hasOpacity ? '#CED4DA80' : '#CED4DA'} d="M0 0H9V9H0z"></path>
    </svg>
  );
}

export default Country;
