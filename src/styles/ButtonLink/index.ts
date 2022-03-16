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

  :hover {
    color: var(--form-left);
    background: var(--blue-mustang);
    cursor: pointer;
  }
`;
