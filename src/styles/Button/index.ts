import styled from "styled-components";

type Props = {
  backgroundColor: string;
};

export const Button = styled.button<Props>`
  border: 2px solid transparent;
  border-radius: 5px;
  width: 100%;
  background: ${({ backgroundColor }) => backgroundColor};
  padding: 10px;
  color: ${({ theme }) => theme.color.white_1};
  text-transform: uppercase;
  font-weight: bold;
  margin: 5px 0;
  transition: all 0.15s ease-in;

  :hover {
    cursor: pointer;
    color: ${({ backgroundColor }) => backgroundColor};
    border: 2px solid ${({ backgroundColor }) => backgroundColor};
    background-color: transparent;
  }
`;
