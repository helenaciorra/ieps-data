import React, { useEffect, useState } from 'react';

import { GraphLevelContentProps, Links } from '../SolrData/SolrData';
import SimpleList from '../SimpleList';
import Referencia from '../Referencia';
import { ReferenciasLinkProps } from '../Referencia/Referencia';
import * as S from './styles';
import Formula, { FormulaContentProps } from '../Formula/Formula';
import Table, { TableContentProps } from '../Table/Table';

type SectionProps = {
  title: string,
  description?: string,
  link?: string,
  links?: Links[],
  graphLevelContent?: GraphLevelContentProps[],
  formulaContent?: FormulaContentProps[],
  tableContent?: TableContentProps,
  referenciasLinks?: ReferenciasLinkProps[],
};

const Section = ({
  title,
  description,
  link,
  links,
  graphLevelContent,
  formulaContent,
  tableContent,
  referenciasLinks,
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
      {!!description && (
        <S.Wrapper>
          {show && (
            <div
              style={{ lineHeight: '24px' }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </S.Wrapper>
      )}

      {!!link && (
        <S.Wrapper>{show && <S.Link href={link}>{link}</S.Link>}</S.Wrapper>
      )}

      {!!links && (
        <S.Wrapper>
          {links.map(
            (e) =>
              show && (
                <>
                  <span style={{ lineHeight: '24px' }}>{e.text}</span>
                  <S.Link href={e.url}>{e.url}</S.Link>
                  <br />
                </>
              )
          )}
        </S.Wrapper>
      )}

      {!!graphLevelContent && (
        <S.Wrapper>
          {show && <SimpleList items={graphLevelContent} ordered={true} />}
        </S.Wrapper>
      )}

      {!!formulaContent && (
        <S.Wrapper>{show && <Formula items={formulaContent} />}</S.Wrapper>
      )}

      {!!tableContent && (
        <S.Wrapper>{show && <Table data={tableContent} />}</S.Wrapper>
      )}

      {!!referenciasLinks && (
        <S.Wrapper>{show && <Referencia items={referenciasLinks} />}</S.Wrapper>
      )}
    </div>
  );
};

export default Section;
