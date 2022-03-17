import styled from "styled-components";

type Props = {
  error?: string;
};

export const Input = styled.input<Props>`
  height: calc(1.6em + 0.75rem + 2px);
  padding: 0 5px;
  width: 100%;
  font-weight: 400;
  line-height: 1.6;
  color: ${ props => props?.error ? props.theme.color.red :  props.theme.color.gray_2 };
  background-color: ${({ theme }) => theme.color.white};
  background-clip: padding-box;
  border: 1px solid ${ props => props.error !== '' ? props.theme.color.red :  props.theme.color.white_3 };
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  margin-bottom: 10px;
`;