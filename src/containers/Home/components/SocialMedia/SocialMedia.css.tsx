import styled, { css } from 'styled-components';

type Props = {
  isFooterVersion?: boolean,
};

const setDisplayStyle = ({ isFooterVersion }: Props) => {
  if (isFooterVersion) {
    return css`
      align-items: flex-end;
      align-self: stretch;
      height: 100%;
      justify-content: flex-start;
      padding: 0;
      margin: 0;
      a {
        margin-right: 2rem;
      }
    `;
  }

  return css`
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    margin-bottom: 55px;
    margin-top: 55px;
    margin-left: auto;
    margin-right: auto;
  `;
};

export const SocialMedia = styled.div`
  display: flex;
  ${setDisplayStyle}
`;
