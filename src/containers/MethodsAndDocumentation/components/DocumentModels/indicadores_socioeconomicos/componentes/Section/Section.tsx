import React, { useState, ReactNode } from 'react';

import * as S from './styles';

type SectionProps = {
  title: string,
  children: ReactNode,
};

const Section = ({
  title,
  children
}: SectionProps) => {
  const [show, setShow] = useState(true);

  const toogle = () => {
    setShow(!show);
  };

  return (
    <div>
      <h2 onClick={toogle}>
        <S.Title showContent={show}>{title}</S.Title>
      </h2>
      <S.Wrapper>
        {show && (<>{children}</>)}
      </S.Wrapper>
    </div>
  );
};

export default Section;
