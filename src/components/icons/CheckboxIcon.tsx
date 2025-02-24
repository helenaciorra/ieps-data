import React from 'react';
import { Themes } from '../../store/types';
import { theme as themes } from '../../constants/theme';

type Props = {
  theme?: Themes,
  checked?: boolean,
};

const CheckboxIcon = ({ theme = 'panorama', checked }: Props) => {
  if (checked) {
    return (
      <svg>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="12"
            height="12"
            rx="1.5"
            fill={themes.palette[theme].main}
            stroke={themes.palette[theme].main}
          />
          <path d="M3 7L5 9L10.5 3" stroke="white" strokeWidth="2" />
        </svg>
      </svg>
    );
  }

  return (
    <svg>
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="12"
          height="12"
          rx="1.5"
          fill="white"
          stroke="#CED4DA"
        />
      </svg>
    </svg>
  );
};

export default CheckboxIcon;
