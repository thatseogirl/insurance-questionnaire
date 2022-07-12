import styled from "styled-components";

export const QuestionStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.question};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: absolute;
  right: 2%;
  width: 63%;
  height: 90%;
  margin-top: 20px;
`;

export const ProgressBar = styled.div`
  background-color: ${({ theme }) => theme.colors.sideNav};
  position: absolute;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 5%;
  transform: 0.4s ease;
`;

export const ProgressContainer = styled.div`
  &::before {
    content: "";
    background-color: ${({ theme }) => theme.colors.before};
    position: absolute;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
  }
`;

export const QuestionnaireSection = styled.div`
  padding: 5em 3em;
`;

export const Text = styled.h3`
  display: flex;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.4;
  margin: 0 0 25px;
  overflow-wrap: break-word;
  word-spacing: 1px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 35px;
  padding: 1em 0.25em;
`;

export const Border = styled.div`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #dddddd;
  padding: 0.75em 0.25em;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  gap: 10px;
  position: absolute;
  bottom: 10%;
`;

export const ButtonPrev = styled.button`
  border: none;
  padding: 1em 3em;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e8e8e8;
  color: grey;
  font-weight: bold;

  &:hover {
    background-color: #222;
    color: #fff;
  }
`;

export const ButtonNext = styled.button`
  border: none;
  padding: 1em 3em;
  border-radius: 5px;
  cursor: pointer;
  background-color: #2955a8;
  color: #fff;
  font-weight: bold;

  &:hover {
    background-color: #222;
  }
`;
