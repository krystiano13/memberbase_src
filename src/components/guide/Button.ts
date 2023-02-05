import styled from "styled-components";

type ButtonProps = {
  color: string;
  bgcolor: string;
  hovercolor: string;
  height: string;
  border: string;
  fontSize: string;
};

const Button = styled.button<ButtonProps>`
  width: 24vw;
  @media screen and (orientation: portrait) {
    width: 26vw;
    margin-left: 1vw;
  }
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ bgcolor }) => bgcolor};

  cursor: pointer;

  transition: background-color 250ms;
  will-change: background-color;
  box-sizing: border-box;
  border-radius: 1vh;

  :hover {
    background-color: ${({ hovercolor }) => hovercolor};
  }
`;

export default Button;
