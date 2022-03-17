import styled from "styled-components";
import { Container as Box } from "../../../styles/Container";

export const TextMessage = styled.h1`
  height: min-content;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Container = styled(Box)`
  flex-direction: column;
`;

export const Navbar = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.color.black_1};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Items = styled.ul`
  display: block;
  li,
  a {
    display: inline-block;
  }
  
  li {
    margin: 0 5px;
    a {
      text-decoration: none;
      color: inherit;
      border: 3px solid transparent;
      padding: 10px 20px;
      border-bottom-color: ${({ theme }) => theme.color.blue_2};
    }
  }
`;
