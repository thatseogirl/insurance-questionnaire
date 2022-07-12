import styled from "styled-components";

export const QuestionStyle = styled.div`
    background-color: ${(({ theme }) => theme.colors.question)};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: absolute;
    right: 2%;
    width: 63%;
    height: 90%;
    margin-top: 20px;

`;
export const ProgressBar = styled.div`
  background-color: ${(({ theme }) => theme.colors.sideNav)};
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0%;
  z-index: -1;
  transform: 0.4s ease;
`

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    gap: 10px;
    position: absolute;
    bottom: 10%;
`

export const ButtonPrev = styled.button`
    border: none;
    padding: 1em 3em;
    border-radius: 5px;
    cursor: pointer;
    background-color: #E8E8E8;
    color: grey;
    font-weight: bold;

    &:hover{
        background-color: #222;
        color: #fff;
    }
`

export const ButtonNext = styled.button`
    border: none;
    padding: 1em 3em;
    border-radius: 5px;
    cursor: pointer;
    background-color: #2955A8;
    color: #fff;
    font-weight: bold;

    &:hover{
        background-color: #222;
    }
`