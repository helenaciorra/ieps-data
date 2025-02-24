import React, { useEffect, useState } from 'react';
import { theme as themes } from '../../../constants/theme';
import { Themes } from '../../../store/types';
import * as S from './CheckBox.css';

type Props = {
  theme?: Themes,
  checked?: boolean,
  onChange?: (checked: boolean)=> void;
  intermediate?: boolean;
};

const CheckBox = ({ checked, theme = 'panorama', onChange, intermediate }: Props) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(checked as boolean);
  }, [checked]);

  const handleToggleCheck = (checked: boolean) => () => {
    setCheck(checked);
    if(onChange){
      onChange(checked);
    }
  };

  if (intermediate && !check) {
    return (
      <S.Checkbox onClick={handleToggleCheck(true)}>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <rect
              x="0.5"
              y="0.5"
              width="12"
              height="12"
              rx="1.5"
              fill={themes.palette[theme].main}
              stroke={themes.palette[theme].main}
            />
            <rect
              x="2"
              y="5"
              width="9"
              height="3"
              fill="white"
            />
          </g>
          <defs>
            <rect width="13" height="13" fill="white"/>
          </defs>
        </svg>

      </S.Checkbox>
    );
  }

  if (check) {
    return (
      <S.Checkbox onClick={handleToggleCheck(false)}>
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
      </S.Checkbox>
    );
  }

  return (
    <S.Checkbox onClick={handleToggleCheck(true)}>
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
    </S.Checkbox>
  );
};
export default CheckBox;
