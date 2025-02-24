import React from 'react';
import * as S from './styles';

export type TableContentProps = {
  header: string[] | null,
  content: string[][] | null,
  reference?: string,
};

type TableProps = {
  data: TableContentProps,
};

const Table = ({ data }: TableProps) => {
  const getHeaders = () => {
    const headers = data.header?.map((item, i) => {
      return <th key={i}>{item}</th>;
    });
    return (
      <S.TableHeader>
        <tr>{headers}</tr>
      </S.TableHeader>
    );
  };

  const getContentRow = (row: string[]) => {
    return row.map((item, i) => {
      return (
        <td key={i}>
          <p>{item}</p>
        </td>
      );
    });
  };

  const getRows = () => {
    let grayColor = true;
    const rows = data.content?.map((item, i) => {
      grayColor = !grayColor;
      return (
        <S.TableRow key={i} grayColor={grayColor}>
          {getContentRow(item)}
        </S.TableRow>
      );
    });
    return <S.TableBody>{rows}</S.TableBody>;
  };

  return (
    <div>
      <S.Table>
        {getHeaders()}
        {getRows()}
      </S.Table>
      <p style={{ fontSize: '11.8px', marginTop: '5px' }}>{data.reference}</p>
    </div>
  );
};

export default Table;
