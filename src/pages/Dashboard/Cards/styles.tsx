import styled from "styled-components";

type CardProps = {
  backgroudColor: string;
  color: string;
};

const Box = styled.div`
  min-width: 260px;
  max-width: 270px;
  min-height: 290px;
  height: inherit;
  border-radius: 5px;
  transition: all ease-in-out 0.35s;
  transform: scale(80%);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.1rem;
  &:hover {
    transform: scale(95%);
    box-shadow: 0px 0px 15px 3px #00000080;
  }
`;

export const Cards = styled.div`
  display: grid;
  align-self: center;
  min-width: 30%;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 270px);
`;

export const Card = styled(Box)<CardProps>`
  padding: 20px;
  font-size: 2rem;

  &:hover {
    background-color: ${({ backgroudColor }) => backgroudColor};
    div {
      background-color: ${({ theme }) => theme.color.white};
    }
    button {
        background-color: ${({ backgroudColor }) => backgroudColor};
        width: min-content;
        align-self: center;
        margin-bottom: -10px;
    }
  }

  div {
    background-color: ${({ backgroudColor }) => backgroudColor};
    color: ${({ color }) => color};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.color.white_2};

    small {
      font-style: italic;
    }
  }
`;
