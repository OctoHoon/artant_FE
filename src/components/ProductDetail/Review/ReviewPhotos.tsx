import {
  Box,
  IconButton,
  Text,
  Image,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

export default function ReviewPhotos() {
  return (
    <Box>
      <Text
        color="#000"
        fontSize="16px"
        fontWeight="400"
        letterSpacing="-0.048px"
      >
        리뷰사진
      </Text>
      <Box height={"20px"} />
      <Box position="relative" width={"100%"}>
        <Flex>
          <AspectRatio width={"24%"} ratio={1 / 1}>
            <Image src={images[0]} />
          </AspectRatio>
          <Box width="16px" />
          <AspectRatio width={"24%"} ratio={1 / 1}>
            <Image src={images[0]} />
          </AspectRatio>
          <Box width="16px" />

          <AspectRatio width={"24%"} ratio={1 / 1}>
            <Image src={images[0]} />
          </AspectRatio>
          <Box width="16px" />

          <AspectRatio width={"24%"} ratio={1 / 1}>
            <Image src={images[0]} />
          </AspectRatio>
        </Flex>
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
            onClick={() => {}}
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
            onClick={() => {}}
            aria-label="Next"
          />
        </Box>
      </Box>
    </Box>
  );
}
