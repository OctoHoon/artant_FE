import {
  Box,
  IconButton,
  Text,
  Image,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getReviewPhotos } from "../../../api";
import React from "react";

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
  const { pk } = useParams();

  const { isLoading, data } = useQuery([pk], getReviewPhotos);

  return (
    <Box>
      <Text
        color="#000"
        fontSize="24px"
        fontWeight="500"
        letterSpacing="-0.048px"
      >
        리뷰사진
      </Text>
      <Box height={"20px"} />
      <Box position="relative" width={"100%"}>
        <Flex>
          {data &&
            data.slice(0, 4).map((image, index) => (
              <React.Fragment key={index}>
                <AspectRatio width={"24%"} ratio={1 / 1}>
                  <Image src={image.image} alt={`Review Image ${index + 1}`} />
                </AspectRatio>
                {index < data.length - 1 && <Box width="16px" />}
              </React.Fragment>
            ))}
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
