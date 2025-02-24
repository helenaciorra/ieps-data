import React from 'react';

type Props = {
  hasOpacity?: boolean,
};

function State({ hasOpacity }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        fill={hasOpacity ? '#34679A80' : '#34679A'}
        d="M6 0H14.485V8.485H6z"
        transform="rotate(45 6 0)"
      ></path>
    </svg>
  );
}

export default State;
