import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  border-radius: 4px;
  position: relative;

  transition: background-color 0.2s;
  color: #fff;

  ${props => {
    if (props.red) {
      return css`
        background: #e64241;
      `;
    }
    return css`
      background: #6365af;
    `;
  }}

  ${props => {
    if (props.small) {
      return css`
        font-size: 18px;
        padding: 5px 8px;
        border: 2px solid #000;
      `;
    }
    return css`
      font-size: 25px;
      padding: 5px 16px;
      border: 4px solid #000;
    `;
  }}

  &:hover {
    ${props => {
      if (props.red) {
        return css`
          background: ${shade(0.2, '#e64241')};
        `;
      }
      return css`
        background: ${shade(0.2, '#6365af')};
      `;
    }}
  }
`;
