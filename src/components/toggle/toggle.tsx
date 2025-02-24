import React from 'react';

import * as S from './toggle.css';

type Props = {
  shouldUseRegionData: boolean,
  onToggle: (checked: boolean) => void,
};
const Toggle = ({ shouldUseRegionData, onToggle }: Props) => {
  const handleToggle = (e: React.FormEvent<HTMLInputElement>) => {
    onToggle(e.currentTarget.checked);
  };

  return (
    <S.Container>
      <input
        id="switch"
        type="checkbox"
        name="theme"
        checked={shouldUseRegionData}
        onChange={handleToggle}
      />
      <label htmlFor="switch">Toggle</label>
    </S.Container>
  );
};

export default Toggle;
