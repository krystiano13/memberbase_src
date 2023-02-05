import styled from "styled-components";

type Props = {
    bgcolor : string
}

const ColorBlock = styled.div<Props>`
    width : 9vw;
    height : 5.5vh;
    display: block;
    border-radius: 1vh;
    background-color: ${({ bgcolor }) => bgcolor};
    margin-top: 3vh;
    margin-bottom: 3vh;
    margin-right : 2vh;
`;

export default ColorBlock;