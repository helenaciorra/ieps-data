import styled from 'styled-components';
import { osloGray, paradiso } from '../../constants/theme';

export const Container = styled.div`
  input[type='checkbox'] {
    height: 0;
    visibility: hidden;
    width: 0;
  }

  label {
    border: 2px solid ${osloGray};
    border-radius: 100px;
    cursor: pointer;
    float: right;
    height: 14px;
    position: relative;
    text-indent: -9999px;
    width: 25px;
  }

  label::after {
    background-color: white;
    border: 2px solid ${osloGray};
    border-radius: 50%;
    box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.25);
    content: '';
    height: 14px;
    left: -2px;
    position: absolute;
    top: -2px;
    transition: 0.3s;
    width: 14px;
  }

  input:checked + label {
    background-color: ${paradiso};
  }

  input:checked + label::after {
    left: calc(100% + 1px);
    transform: translateX(-100%);
  }

  label:active:after {
    box-shadow: -1px 0px 3px rgba(0, 0, 0, 0.25);
    width: 14px;
  }
`;
