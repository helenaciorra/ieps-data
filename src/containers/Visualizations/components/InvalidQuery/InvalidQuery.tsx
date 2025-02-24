import React from 'react';
import * as S from './InvalidQuery.css';

type Props = {
  onClose: () => void,
};

const InvalidQuery = ({ onClose: onClose }: Props) => {
  return (
    <S.Container>
      <S.Title>Ops!</S.Title>
      <S.Text>
        Sentimos muito, mas não possuímos esses dados para o ano selecionado.
      </S.Text>
      <S.Text>Por gentileza, selecione outro ano.</S.Text>

      <S.CopyBlock>
        <S.CloseButton onClick={onClose}>Voltar para a pesquisa</S.CloseButton>
      </S.CopyBlock>
    </S.Container>
  );
};

export default InvalidQuery;
