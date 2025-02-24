import React, { useEffect, useState } from 'react';
import * as S from './PopUp2023.css';

type Props = {
  isHidden: boolean;
}

const PopUp2023 = ({isHidden}: Props) => {
  const[hidding, setHidding] = useState<boolean>(true);

  const handleClose = () => {
    setHidding(true)
  };

  useEffect(()=>{
    setHidding(isHidden)
  }, [isHidden])

  return (
    <S.Container isHidden={hidding}>
      <S.Text>Adicionamos os dados preliminares de 2023 utilizando a população do Censo 2022. Para anos anteriores utilizamos a população estimada pelo Ministério da Saúde.</S.Text>
      <S.Close onClick={handleClose}>X</S.Close>
    </S.Container>
  );
}

export default PopUp2023;