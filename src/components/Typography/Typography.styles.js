import styled from "styled-components";

const Category = styled.h2`
  line-height: 1;
  font-size: 0.8rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--dark-grayish-blue);
  padding: 1.2rem 0 0 1.2rem;
`;
const Title = styled.h3`
  font-size: 2rem;
  font-family: "Fraunces", serif;
  font-weight: 700;
  color: var(--very-dark-blue);
  line-height: normal;
  padding: 1.2rem;
`;

const Paragraph = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: var(--dark-grayish-blue);
  padding: 0 0 0 1.2rem;
`;

const Price = styled.span`
  font-size: 2rem;
  color: var(--dark-cyan);
  font-family: "Fraunces", serif;
  font-weight: 700;
  padding: 0 1.2rem;
`;

const OriginalPrice = styled.span`
  font-size: 1rem;
  text-decoration: line-through;
  color: var(--dark-grayish-blue);
`;

export const Styled = { Category, Title, Paragraph, Price, OriginalPrice };
