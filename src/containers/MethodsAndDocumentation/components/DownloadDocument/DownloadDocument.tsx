import React from 'react';
import { DownloadsIcon } from '../../../../components/icons';
import * as S from './DownloadDocument.css';

interface Props {
  onDownloadDocument: (event: any) => void;
  indicator: string;
}

const DownloadDocument = ({ onDownloadDocument, indicator }: Props) => {
  return (
    <S.DownloadDocument className="print-hidden">
      <S.SubTitle>
        Selecione o Grupo e o Indicador que você deseja visualizar ou faça o
        download da documentação completa em PDF
      </S.SubTitle>
      <S.DownloadBlock>
        <S.DownloadButton
          onClick={onDownloadDocument}
          isDisabled={indicator ? false : true}
          disabled={indicator ? false : true}
        >
          Download <DownloadsIcon />
        </S.DownloadButton>
      </S.DownloadBlock>
    </S.DownloadDocument>
  );
};

export default DownloadDocument;
0;
