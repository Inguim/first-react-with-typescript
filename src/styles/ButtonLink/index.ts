import styled from "styled-components";
import { Button } from "../Button";

export const ButtonLink = styled(Button)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black_1};
  padding: 10px;
  background: ${({ backgroundColor }) => backgroundColor};
  margin-bottom: 5px;
  margin: 5px 0;
  transition: all 0.15s ease-in;

  a {
    font: inherit;
    color: inherit;
    text-decoration: none;
    transition: none;
  }

  :hover {
    color: ${({ theme }) => theme.color.white_2};
    background: ${({ theme }) => theme.color.blue_3};
    cursor: pointer;
  }
`;
