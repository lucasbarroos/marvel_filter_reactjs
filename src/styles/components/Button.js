import styled, { css } from 'styled-components';

const filled = css`
  background: none;

  &:hover {
    background: none;
    opacity: 0.6;
  }
`;

const sizes = {
  small: css`
    height: 28px;
    font-size: 12px;
  `,
  default: css`
    height: 36px;
    font-size: 14px;
  `,
  big: css`
    height: 44px;
    font-size: 18px;
  `,
};
const colors = {
  default: css`
    background: ${(props) => props.theme.colors.primary};

    &:hover {
      background: ${(props) => props.theme.colors.primary_dark};
    }
  `,
  danger: css`
    background: #e04848;

    &:hover {
      background: #a43d3d;
    }
  `,
  gray: css`
    background: #b9bbbe;

    &:hover {
      background: #999;
    }
  `,
};

const Button = styled.button.attrs({
  type: 'button',
})`
  border-radius: 3px;
  transition: 0.15s ease;
  background: #7289ba;
  border: 0;
  color: ${(props) => props.theme.colors.text_primary};
  font-size: 12px;
  padding: 0 10px;
  font-weight: 700;

  ${({ size }) => sizes[size || 'default']}
  ${({ color }) => colors[color || 'default']}

  ${(props) => props.filled === false && filled}
  `;

export default Button;
