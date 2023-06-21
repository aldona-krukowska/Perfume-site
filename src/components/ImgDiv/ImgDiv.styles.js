import styled from "styled-components";

const ImgDiv = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 1rem 1rem 0 0;

  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    height: 29rem;
    width: 100%;
    border-radius: 1rem 0 0 1rem;
  }
`;

export const Styled = { ImgDiv };
