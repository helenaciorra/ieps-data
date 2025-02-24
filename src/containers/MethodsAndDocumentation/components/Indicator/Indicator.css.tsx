/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import {
  athensGray2,
  azure,
  azureLight,
  ghost,
  textColor,
  white,
} from '../../../../constants/theme';

export const Indicator = styled.div`
  background-color: ${white};
  border-radius: 10px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  padding: 2rem 4rem;
  width: 100%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);

  #indicator-group {
    width: 280px;
    margin-right: 32px;
  }

  #indicator {
    width: 400px;
  }
`;

const h1 = css`
  color: ${azure};
  font-size: 2.4rem;
  line-height: 2.8rem;
  margin-bottom: 3rem;
  display: block;
`;

const collapseTitle = css`
  position: relative;
  color: ${azure};
  font-size: 10px;
  line-height: 18px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;

const collapseBody = css`
  color: ${textColor};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

const collapseBodyReferences = css`
  color: ${textColor};
  font-style: normal;
  font-weight: normal;
  font-size: 11.8px;
  line-height: 18.2px;
`;

const table = css`
  font-size: 1.4rem;
  line-height: 2rem;
  margin: 0 auto;
  margin-top: 1rem;

  td {
    width: 200px;
  }

  > thead {
    tr {
      background: ${azureLight};
    }
    td {
      padding: 5px 15px;
      font-weight: 700;
      color: ${white};
    }
  }

  > tbody {
    tr:nth-child(2n+1) {
      background: ${athensGray2};
    }
    td {
      padding: 5px 15px;
    }
  }
`;

export const Body = styled.div`
  padding: 5rem 6rem 13.5rem 6rem;
  .indicatorBody {
    .c14.c9.c29 {
      ${h1}
    }
    h2 .c0 {
      ${collapseTitle}
    }
    p.c3 {
      ${collapseBody}
    }
    p.c3.c8 {
      display: inline-block;
      margin-left: 25px;
      font-style: italic;
    }
    div.c3 {
      display: inline;
      ${collapseBody}
    }
    p.c10 {
      ${collapseBodyReferences}
    }
    a {
      ${collapseBody}
      text-decoration: none;
    }
    a.c6 {
      ${collapseBodyReferences}
      text-decoration: none;
    }
    div.c7 {
      padding-left: 15px;
    }
    span.c1 {
      display: inline-block;
      margin-bottom: 12px;
    }
    ul.c18,
    p.c23 {
      padding-left: 35px;
    }
    ol.c19,
    ul.c19 {
      display: inline-block;
      padding-left: 20px;
    }
    li.c2 {
      font-weight: 700;
    }
    div.c14 {
      display: inline-block;
      max-width: 600px;
    }
    table.c26 {
      ${table};
    }
  }

  input[type='checkbox'] {
    display: none;
  }
  .label-toggle {
    display: block;
    cursor: pointer;
    transition: all 0.25s ease-out;
  }

  .label-toggle::before {
    content: '△';
    display: inline-block;
    vertical-align: middle;
    color: #34679a;
    margin-right: 7px;
    transform: rotate(180deg) translateX(0px);
    transition: transform 0.2s ease-out;
  }
  .toggle:checked + h2 > .label-toggle::before {
    transform: rotate(0deg) translateX(0px);
  }
  .collapsible-content {
    max-height: 0px;
    visibility: collapse;
    transition: max-height 0.25s ease-in-out;
  }
  .toggle:checked + h2 + .collapsible-content {
    max-height: 2500px;
    visibility: visible;
  }

  h2 {
    position: relative;

    &::before {
      content: '';
      display: block;
      height: 1px;
      width: 174px;
      border-bottom: 1px solid ${ghost};
      rotate: 0deg;
      position: absolute;
      bottom: 0;
    }
  }

  .alert {
    background: ${athensGray2};
    border-radius: 5px;
    display: flex;
    height: 90px;
    padding: 18px 41px 14px 27px;
  }

  .alert.alert-reference{
    height: auto;
  }

  .alert-icon{
    margin-right: 2.2rem;
  }

  .alert-text{}

  .alert-text-title{
    font-size: 1.1rem;
    line-height: 1.6rem;
    font-weight: 700;
    color: ${azure}
  }

  .alert-text-paragraph{
    font-size: 1.1rem;
    line-height: 1.8rem;
    font-weight: 400;
    color: ${azure}
  }
  .alert-reference{
    margin: 10px 0;
  }
`;

export const BodyEmptyMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  > p {
    color: ${ghost};
    font-size: 2rem;
  }
`;
