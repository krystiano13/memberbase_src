import styled from "styled-components";

type Props = {
    multiplier : number
}

const Column = styled.div<Props>`
  width : ${(props) => (6 * props.multiplier).toString()}vw;
  height: 3.5vh;
  background-color: #e7ecf0;
  margin-top : 1.5vh;
`;

export default Column;