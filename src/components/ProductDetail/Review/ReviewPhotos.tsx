import {
  Box,
  IconButton,
  Text,
  Image,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getReviewPhotos } from "../../../services/productService";

export default function ReviewPhotos() {
  const { pk } = useParams();
  const [page, setPage] = useState(1);

  const { isLoading, data } = useQuery([pk, page], getReviewPhotos);
  console.log("리뷰사진");
  console.log(data);

  return (
    <Box>
      {!isLoading && data.length != 0 ? (
        <>
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
            <Flex alignItems={"center"} width={"100%"} gap={"16px"}>
              <IconButton
                icon={<SvgChevronLeft />}
                onClick={() => {}}
                aria-label="Previous"
                variant={"none"}
              />
              {data &&
                data.slice(0, 4).map((image, index) => (
                  <React.Fragment key={index}>
                    <AspectRatio width={"20%"} ratio={1 / 1}>
                      <Image
                        src={image.image}
                        alt={`Review Image ${index + 1}`}
                      />
                    </AspectRatio>
                    {index < data.length - 1 && <Box width="16px" />}
                  </React.Fragment>
                ))}
              <Box marginLeft="auto">
                <IconButton
                  icon={<SvgChevronRight />}
                  onClick={() => {}}
                  aria-label="Next"
                  variant="none"
                />
              </Box>
            </Flex>
            {/* Button */}
          </Box>
        </>
      ) : null}
    </Box>
  );
}

const SvgChevronLeft = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" fill="none">
      <path
        fill="#000"
        fill-rule="evenodd"
        d="M19.365 0 20 .728 1.418 18 20 35.272l-.635.728L0 18 19.365 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

const SvgChevronRight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" fill="none">
      <path
        fill="#000"
        fill-rule="evenodd"
        d="M.635 36 0 35.272 18.582 18 0 .728.635 0 20 18 .635 36Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};
