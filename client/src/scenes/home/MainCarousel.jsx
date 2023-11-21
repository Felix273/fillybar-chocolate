import { Box, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// imports all images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      
      
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "1800px",
              height: "700px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;