import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 1rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  background-color: var(--white);
  height: fit-content;
  margin: 0.6rem;
  max-width: 38rem;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    border-radius: 1rem;
  }
`;

export const Styled = { Container };
