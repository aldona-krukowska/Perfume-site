import { Styled } from "./Typography.styles";

export const Typography = ({ variant, children }) => {
  return variant === "Category" ? (
    <Styled.Category>{children}</Styled.Category>
  ) : variant === "Title" ? (
    <Styled.Title>{children}</Styled.Title>
  ) : variant === "Paragraph" ? (
    <Styled.Paragraph>{children}</Styled.Paragraph>
  ) : variant === "Price" ? (
    <Styled.Price>{children}</Styled.Price>
  ) : variant === "OriginalPrice" ? (
    <Styled.OriginalPrice>{children}</Styled.OriginalPrice>
  ) : (
    <span>{children}</span>
  );
};
