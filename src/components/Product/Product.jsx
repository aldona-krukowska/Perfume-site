import { Button } from "../Button/Button";
import { Wrapper } from "../Wrapper/Wrapper";
import { Typography } from "../Typography/Typography";
import { ImgDiv } from "../ImgDiv/ImgDiv";
import { Container } from "../Container/Container";

export const Product = () => {
  const isMobile = window.innerWidth < 600;

  return (
    <>
      <Container>
        <ImgDiv
          desktopSrc="src/images/image-product-desktop.jpg"
          mobileSrc="src/images/image-product-mobile.jpg"
          altText="Gabrielle Essense perfume bottle laying flat on a table with green leaves above and below it"
        />
        <Wrapper flexDirection="column" alignItems="flex-start">
          <Typography variant="Category">Perfume</Typography>
          <Typography variant="Title">
            Gabrielle Essence Eau De Parfum
          </Typography>
          <Typography variant="Paragraph">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </Typography>
          <Wrapper alignItems="center">
            <Typography variant="Price">$149.99</Typography>
            <Typography variant="OriginalPrice">$169.99</Typography>
          </Wrapper>

          <Button icon="shopping-cart">Add to Cart</Button>
        </Wrapper>
      </Container>
    </>
  );
};
