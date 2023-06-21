import { Styled } from "./Wrapper.styles";

export const Wrapper = ({
  children,
  flexDirection,
  justifyContent = "center",
  alignItems,
  padding,
  margin,
  maxWidth,
  width,
  gap,
  height,
}) => {
  return (
    <Styled.Wrapper
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      padding={padding}
      margin={margin}
      maxWidth={maxWidth}
      width={width}
      gap={gap}
      height={height}
    >
      {children}
    </Styled.Wrapper>
  );
};
