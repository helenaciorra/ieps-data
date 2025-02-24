import React from 'react';

import * as S from './styles';
import { textColor } from '../../../../constants/theme';

export type ReferenciasLinkProps = {
  text: string,
  url: string,
};

type ReferenciaProps = {
  items: ReferenciasLinkProps[],
};

const Referencia = ({ items }: ReferenciaProps) => {
  const getLinks = () => {
    const listItems = items?.map((item, i) => (
      <S.ReferenciaLink key={i}>
        {item.text}{' '}
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          style={{ color: `${textColor}`, textDecoration: 'none' }}
        >
          {item.url}
        </a>
      </S.ReferenciaLink>
    ));
    return listItems;
  };

  return (
    <div>
      <div className="alert alert-reference">
        <div className="alert-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9V9ZM9 4.5C8.85781 4.50008 8.71721 4.52994 8.58726 4.58767C8.45731 4.64539 8.3409 4.7297 8.24551 4.83515C8.15013 4.9406 8.07789 5.06487 8.03345 5.19994C7.98901 5.33501 7.97336 5.47789 7.9875 5.61937L8.38125 9.56475C8.39448 9.71974 8.4654 9.86413 8.57997 9.96934C8.69455 10.0746 8.84444 10.1329 9 10.1329C9.15556 10.1329 9.30545 10.0746 9.42003 9.96934C9.5346 9.86413 9.60552 9.71974 9.61875 9.56475L10.0125 5.61937C10.0266 5.47789 10.011 5.33501 9.96655 5.19994C9.92211 5.06487 9.84987 4.9406 9.75449 4.83515C9.6591 4.7297 9.54269 4.64539 9.41274 4.58767C9.28279 4.52994 9.14219 4.50008 9 4.5V4.5ZM9.00225 11.25C8.70388 11.25 8.41773 11.3685 8.20675 11.5795C7.99578 11.7905 7.87725 12.0766 7.87725 12.375C7.87725 12.6734 7.99578 12.9595 8.20675 13.1705C8.41773 13.3815 8.70388 13.5 9.00225 13.5C9.30062 13.5 9.58677 13.3815 9.79774 13.1705C10.0087 12.9595 10.1272 12.6734 10.1272 12.375C10.1272 12.0766 10.0087 11.7905 9.79774 11.5795C9.58677 11.3685 9.30062 11.25 9.00225 11.25Z"
              fill="#34679A"
            ></path>
          </svg>
        </div>
        <div className="alert-text">
          <strong className="alert-text-paragraph">
            Toda a documentação do IEPS Data é baseada em documentos oficiais e
            referências acadêmicas. Aqui está a lista das principais referências
            utilizadas na redação deste documento.
          </strong>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>{getLinks()}</div>
    </div>
  );
};

export default Referencia;
