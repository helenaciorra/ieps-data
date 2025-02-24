import React, { useCallback, useEffect, useState } from 'react';
import * as S from './Pagination.css';

interface Props {
  page: number;
  perPage: number;
  data: Array<any>;
  onPage: (page: number) => void;
  onData: (data: Array<any>) => void;
}

const Pagination = ({ page, perPage, data, onPage, onData }: Props) => {
  const [totalPage, setTotalPage] = useState(3);
  const [sliceStart, setSliceStart] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(perPage);
  const [pageSelector, setPageSelector] = useState<JSX.Element[]>([])
  const maxVisibleButtons = 3;

  const changePage = (pageSelected: number) => {
    const start = perPage * pageSelected - perPage;
    const end = perPage * pageSelected;

    setSliceStart(start);
    setSliceEnd(end);

    onPage(pageSelected);
    onData(data.slice(start, end));
  };

  const goToBeginning = () => {
    const limit = page > 1;
    limit && onPage(1);

    changePage(1);
  };

  const goTo = (target: number) => {
    changePage(target);
  };

  const goToEnd = () => {
    const limit = page < totalPage;
    limit && onPage(totalPage);

    changePage(totalPage);
  };

  const calculateMaxVisible = () => {
    let maxLeft = (page - Math.floor(maxVisibleButtons / 2));
    let maxRight = (page + Math.floor(maxVisibleButtons / 2));

    if(maxLeft < 1) {
      maxLeft = 1
      maxRight = maxVisibleButtons
    }

    if(maxRight > totalPage) {
      maxLeft = totalPage - ( maxVisibleButtons - 1);
      maxRight = totalPage;


      if (maxLeft < 1) maxLeft = 1;
    }

    return {
      maxLeft, maxRight
    }
  }

  const generateButtons = () => {
    const {maxLeft, maxRight} = calculateMaxVisible()
    const buttons: JSX.Element[] = [];

    for(let p = maxLeft; p <= maxRight; p++) {
      buttons.push(
        <S.Page key={p} onClick={() => goTo(p)}>
          {p}
        </S.Page>
      )
    }

    setPageSelector(buttons)
  };

  useEffect(() => {
    setTotalPage(Math.ceil(data.length / perPage));
    onData(data.slice(sliceStart, sliceEnd));
  }, [data]);

  useEffect(() => {
    generateButtons()
  }, [page])

  return (
    <S.Container>
      <S.FirstPage onClick={goToBeginning}>Primeira</S.FirstPage>
      {pageSelector}
      <S.LastPage onClick={goToEnd}>Última</S.LastPage>
    </S.Container>
  );
};

export default Pagination;
