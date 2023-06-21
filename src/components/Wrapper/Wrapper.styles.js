import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
  gap: ${({ gap }) => gap};
  height: ${({ height }) => height};
`;

export const Styled = { Wrapper };
