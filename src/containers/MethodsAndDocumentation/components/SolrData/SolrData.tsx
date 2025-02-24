import React from 'react';
import Section from '../Section';

import * as S from './styles';
import { ReferenciasLinkProps } from '../Referencia/Referencia';
import { FormulaContentProps } from '../Formula/Formula';
import { TableContentProps } from '../Table/Table';

export type GraphLevelContentProps = {
  title: string,
  content?: string | null,
};

export type Links = {
  text: string,
  url: string,
};

export type SolrDataProps = {
  pageTitle: string,
  indicadorTitle?: string,
  indicadorContent?: string,
  interpretacaoTitle?: string,
  interpretacaoContent?: string,
  usosTitle?: string,
  usosContent?: string,
  limitacoesTitle?: string,
  limitacoesContent?: string,
  dataSourceTitle?: string,
  dataSourceContent?: string,
  linkTitle?: string,
  linkUrl?: string,
  linksUrl?: Links[],
  periodTitle?: string,
  periodContent?: string,
  graphLevelTitle?: string,
  graphLevelContent?: GraphLevelContentProps[],
  formulaTitle?: string,
  tableTitle?: string,
  tableHeader?: string[],
  tableContent?: string[][],
  tableReference?: string,
  formulaContent?: FormulaContentProps[],
  referenciasTitle?: string,
  referenciasLinks?: ReferenciasLinkProps[],
};

const SolrData = ({
  pageTitle,
  indicadorTitle,
  indicadorContent,
  interpretacaoTitle,
  interpretacaoContent,
  usosTitle,
  usosContent,
  limitacoesTitle,
  limitacoesContent,
  dataSourceTitle,
  dataSourceContent,
  linkTitle,
  linkUrl,
  linksUrl,
  periodTitle,
  periodContent,
  graphLevelTitle,
  graphLevelContent,
  formulaTitle,
  formulaContent,
  tableTitle,
  tableHeader,
  tableContent,
  tableReference,
  referenciasTitle,
  referenciasLinks,
}: SolrDataProps) => {
  const getTableData = (): TableContentProps => {
    return {
      header: tableHeader ?? null,
      content: tableContent ?? null,
      reference: tableReference,
    };
  };

  return (
    <div>
      <div style={{ maxWidth: '600px' }}>
        <S.PageTitle>{pageTitle}</S.PageTitle>
      </div>

      {indicadorTitle && (
        <Section title={indicadorTitle} description={indicadorContent} />
      )}

      {interpretacaoTitle && (
        <Section
          title={interpretacaoTitle}
          description={interpretacaoContent}
        />
      )}

      {!!usosTitle && <Section title={usosTitle} description={usosContent} />}

      {!!limitacoesTitle && (
        <Section title={limitacoesTitle} description={limitacoesContent} />
      )}

      {!!dataSourceTitle && (
        <Section title={dataSourceTitle} description={dataSourceContent} />
      )}

      {!!linkTitle &&
        (linkUrl ? (
          <Section title={linkTitle} link={linkUrl} />
        ) : (
          <Section title={linkTitle} links={linksUrl} />
        ))}

      {!!periodTitle && (
        <Section title={periodTitle} description={periodContent} />
      )}

      {!!graphLevelTitle && (
        <Section
          title={graphLevelTitle}
          graphLevelContent={graphLevelContent}
        />
      )}

      {!!formulaTitle && (
        <Section title={formulaTitle} formulaContent={formulaContent} />
      )}

      {!!tableTitle && (
        <Section title={tableTitle} tableContent={getTableData()} />
      )}

      {!!referenciasTitle && (
        <Section title={referenciasTitle} referenciasLinks={referenciasLinks} />
      )}
    </div>
  );
};

export default SolrData;
