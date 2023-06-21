import { Styled } from "./Button.styles";

export const Button = ({ icon }) => {
  return (
    <Styled.Button className="button" data-icon={icon}>
      Add to cart
    </Styled.Button>
  );
};
