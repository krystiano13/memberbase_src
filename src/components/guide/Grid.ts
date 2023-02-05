import styled from "styled-components";

type Props = {
    template : string
}

const Grid = styled.section<Props>`
  padding-right: 5vh;
  display: grid;
  width: 78vw;
  height: 8vh;
  grid-template-columns: ${(props) => props.template};
  justify-items: left;
  align-items: center;
  grid-gap: 2vh;
  margin-top: 1vh;

  @media screen and (orientation: portrait) {
    width : 90vw;
  }
`;

export default Grid;