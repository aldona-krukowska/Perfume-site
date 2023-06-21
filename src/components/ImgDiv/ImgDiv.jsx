import { Styled } from "./ImgDiv.styles";

export const ImgDiv = ({ desktopSrc, mobileSrc, altText }) => {
  const isMobile = window.innerWidth < 600;

  return (
    <Styled.ImgDiv src={isMobile ? mobileSrc : desktopSrc} alt={altText} />
  );
};
