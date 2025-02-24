import React from 'react';
import Clipboard from '../../../../components/Clipboard';
import * as S from './ReportError.css';

type Props = {
  pageUrl: string,
  email: string,
};

const ReportError = ({ email, pageUrl }: Props) => {
  return (
    <S.ReportError>
      <S.Title>Reportar erro ou inconsistências</S.Title>
      <S.Text>
        Caso deseje notificar algum dado errado ou inconsistente, basta entrar
        em contato através do nosso email{' '}
        <strong>iepsdata&#64;ieps.org.br</strong>.
      </S.Text>
      <S.Text>
        Para facilitar nosso processo de correção, por favor, informe no corpo
        do email a URL da página do erro.
      </S.Text>

      <S.CopyBlock>
        <Clipboard copyValue={pageUrl}>
          <S.CopyButton>Copiar URL da página</S.CopyButton>
        </Clipboard>
        <Clipboard copyValue={email}>
          <S.CopyButton>Copiar Nosso e-mail</S.CopyButton>
        </Clipboard>
      </S.CopyBlock>

      <S.Footer>
        <S.Text>Agradecemos sua contribuição!</S.Text>
      </S.Footer>
    </S.ReportError>
  );
};

export default ReportError;
