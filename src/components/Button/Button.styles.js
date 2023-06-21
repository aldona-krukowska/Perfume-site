import styled from "styled-components";

const Button = styled.button`
  width: stretch;
  margin: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: stretch;

  border: 0;
  border-radius: 0.5rem;
  padding: 0.75em 1.5em;
  background-color: var(--dark-cyan);
  color: var(--white);
  font-size: 0.925rem;

  &::before {
    content: "";
    background-image: url("src/images/icon-cart.svg");
    width: 15px;
    height: 16px;
  }

  &:hover {
    background-color: var(--very-dark-blue);
  }
`;

export const Styled = { Button };
