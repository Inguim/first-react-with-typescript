import styled from "styled-components";

type Props = {
  backgroundColor?: string;
};

export const ButtonLink = styled.a<Props>`
  text-decoration: none;
  color: var(--blue-mustang);
  padding: 10px;
  background: var(${(props) => props.backgroundColor});
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
    color: var(--form-left);
    background: var(--blue-mustang);
    cursor: pointer;
  }
`;
