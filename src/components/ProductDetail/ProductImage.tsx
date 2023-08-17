import React, { useState } from "react";
import {
  Box,
  Grid,
  Image,
  VStack,
  Text,
  AspectRatio,
  HStack,
  IconButton,
  Fade,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlayCircle,
  FaRegHeart,
  FaRegStar,
} from "react-icons/fa";

const images = [
  "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg",
  "https://i.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/poster_movie_vxlej8.mp4",
  "https://i.etsystatic.com/38936109/r/il/885c66/5074138856/il_1588xN.5074138856_o7f8.jpg",
  "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg",
  "https://i.etsystatic.com/38936109/r/il/885c66/5074138856/il_1588xN.5074138856_o7f8.jpg",
  "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg",
  "https://i.etsystatic.com/38936109/r/il/885c66/5074138856/il_1588xN.5074138856_o7f8.jpg",
  "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg",
  "https://i.etsystatic.com/38936109/r/il/885c66/5074138856/il_1588xN.5074138856_o7f8.jpg",
  "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg",
];

const videos = [
  "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/poster_movie_vxlej8.mp4",
];

export default function ProductImage() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const handleNextIndex = () => {
    if (activeIndex != images.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const handlePrevIndex = () => {
    if (activeIndex != 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(images.length - 1);
    }
  };

  return (
    <Box>
      <HStack>
        <Box maxH="550px" width="65px" overflowY="scroll">
          <VStack spacing={2} align={"start"}>
            {images.map((image, index) => (
              <Box
                key={index}
                borderColor={index === activeIndex ? "black" : "transparent"}
                borderWidth={"1px"}
                borderRadius="4"
                position="relative"
              >
                <AspectRatio w="60px" ratio={1 / 1}>
                  <Image
                    maxW="60px"
                    maxH="60px"
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    cursor="pointer"
                    borderColor={"black"}
                    borderRadius="4"
                    objectFit="fill"
                    onClick={() => handleThumbnailClick(index)}
                  />
                </AspectRatio>
                {image.endsWith(".mp4") ? (
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    zIndex="1"
                  >
                    <FaPlayCircle size={24} color="white" />
                  </Box>
                ) : null}
              </Box>
            ))}
          </VStack>
        </Box>
        <Box position="relative" maxW="700px" maxH="635.19px">
          {/* Image */}
          <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {images[activeIndex].endsWith(".mp4") ? (
              <video
                autoPlay
                muted
                loop
                width="100%"
                height="100%"
                src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/poster_movie_vxlej8.mp4"
              />
            ) : (
              <Image
                src={images[activeIndex]}
                width="100%"
                height="100%"
                alt={`Image ${activeIndex}`}
              />
            )}
            <Fade in={isHovered}>
              <Box
                position="absolute"
                top={2}
                right={2}
                w="36px"
                h="36px"
                rounded="full"
                bg="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box cursor={"pointer"} color="black">
                  <FaRegHeart size="20px" />
                </Box>
              </Box>
            </Fade>
          </Box>

          {/* Button */}
          <Box
            position="absolute"
            top="50%"
            left="5%"
            transform="translate(-50%, -50%)"
            zIndex="1" // Ensure the button appears on top of the image
          >
            <IconButton
              icon={<FaChevronLeft />}
              onClick={() => handlePrevIndex()}
              aria-label="Previous"
            />
          </Box>
          <Box
            position="absolute"
            top="50%"
            right="0%"
            transform="translate(-50%, -50%)"
            zIndex="1" // Ensure the button appears on top of the image
          >
            <IconButton
              icon={<FaChevronRight />}
              onClick={() => handleNextIndex()}
              aria-label="Next"
            />
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}
