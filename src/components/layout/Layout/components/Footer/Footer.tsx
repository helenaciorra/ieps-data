import React from 'react';
import moment from 'moment';
import SocialMedia from '../../../../../containers/Home/components/SocialMedia';
import LogoHighlight from '../../../LogoHighlight';
import { PathLocation } from '../../../../../store/types';
import * as S from './Footer.css';

type Props = {
  location: PathLocation,
};
const Footer = ({ location }: Props) => {
  const renderContactAndAddress = (...args: string[]) => {
    const [title, ...texts] = args;
    return (
      <S.Contact>
        <S.ContactTitle>{title}</S.ContactTitle>
        {texts.map((text: string) => (
          <S.ContactText key={text}>{text}</S.ContactText>
        ))}
      </S.Contact>
    );
  };

  return (
    <S.Footer className="print-hidden">
      <S.Hero>
        <S.Block>
          <LogoHighlight />
        </S.Block>
        <S.Block>
          <SocialMedia secondary showIepsLink={false} isFooterVersion />
        </S.Block>
      </S.Hero>
      <S.Main>
        <S.Addresses>
          <S.Block>
            {renderContactAndAddress(
              'são paulo',
              'Rua Itapeva 286',
              'Conjunto 81-84',
              'Bela Vista',
              '01332-000'
            )}
          </S.Block>
          <S.Block>
            {renderContactAndAddress(
              'rio de janeiro',
              'Rua Lauro Müller 116',
              'Sala 3704 - 37º Andar',
              'Botafogo',
              '22290-160'
            )}
          </S.Block>
          <S.Block>
            {renderContactAndAddress(
              'Brasília',
              'SBS Q.2-Edifício Prime',
              'Business Convenience. Sobreloja, Sala 206',
              'Asa Sul',
              '70070-120'
            )}
          </S.Block>
          <S.Block>
            {renderContactAndAddress(
              'Imprensa',
              'Natasha Mastrangelo',
              'e Letícia Pires',
              'imprensa@ieps.org.br',
              '+55 21 97082 4938'
            )}
          </S.Block>
          <S.Block>
            {renderContactAndAddress(
              'contato',
              'iepsdata@ieps.org.br',
              '+55 11 4550-2556'
            )}
          </S.Block>
        </S.Addresses>
      </S.Main>
      <S.Rights>
        <S.Right>{moment().year()} IEPS©</S.Right>
        <a href={`${location.origin}/about#conditionTerms`}>
          <S.Right>POLÍTICA DE PRIVACIDADE</S.Right>
        </a>
        <S.CreateBy>
          Desenvolvido com apoio da{' '}
          <a href="https://odd.studio/" target="_blank" rel="noreferrer">
            odd.studio{' '}
          </a>
          e{' '}
          <a
            href="https://www.conceptu.ind.br/"
            target="_blank"
            rel="noreferrer"
          >
            Conceptu{' '}
          </a>
        </S.CreateBy>
      </S.Rights>
    </S.Footer>
  );
};

export default Footer;
