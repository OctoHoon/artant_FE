import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  AspectRatio,
  IconButton,
  Fade,
  Flex,
} from "@chakra-ui/react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlayCircle,
  FaRegHeart,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../../api";

export default function ProductImage() {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLength, setImageLength] = useState(0);

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
    if (activeIndex != imageLength - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const handlePrevIndex = () => {
    if (activeIndex != 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(imageLength - 1);
    }
  };

  const { pk } = useParams();
  const { isLoading, data } = useQuery(["products", pk], getProductDetails);

  let imageAndVideoUrls: any[] = [];
  if (!isLoading && data) {
    // 이미지 목록을 추가
    if (data.images) {
      imageAndVideoUrls = data.images.map((image) => image.image);
    }

    // 비디오를 추가
    if (data.video) {
      imageAndVideoUrls.splice(1, 0, data.video.video);
    }
  }

  useEffect(() => {
    if (!isLoading && imageAndVideoUrls) {
      setImageLength(imageAndVideoUrls.length);
    }
  }, [isLoading, imageAndVideoUrls]);

  console.log(data);
  return (
    <>
      {isLoading ? (
        <Box alignSelf={"stretch"} height={"500px"} />
      ) : (
        <Box>
          <Flex gap={"20px"}>
            <Box maxH="550px" width="65px">
              <Flex gap="8px" align={"start"} flexDirection="column">
                {imageAndVideoUrls.length == 0
                  ? null
                  : imageAndVideoUrls.map((url, index) => (
                      <Box
                        key={index}
                        borderColor={
                          index === activeIndex ? "black" : "transparent"
                        }
                        borderWidth={"1px"}
                        borderRadius="4"
                        position="relative"
                      >
                        <AspectRatio w="60px" ratio={1 / 1}>
                          <Image
                            maxW="60px"
                            maxH="60px"
                            key={index}
                            src={
                              url.includes(".mp4?")
                                ? url.replace(
                                    /\.mp4(.*)$/,
                                    ".jpg?time=0s&height=270"
                                  )
                                : url
                            }
                            alt={`Thumbnail ${index + 1}`}
                            cursor="pointer"
                            borderColor={"black"}
                            borderRadius="4"
                            objectFit="fill"
                            onClick={() => handleThumbnailClick(index)}
                          />
                        </AspectRatio>
                        {url.includes(".mp4?") ? (
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
              </Flex>
            </Box>
            <Box position="relative" maxW="740px" maxH="620px">
              {/* Image */}
              <Box
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {imageAndVideoUrls.length == 0 ? (
                  <Box width={"760px"} height={"620px"}>
                    사진이 없습니다
                  </Box>
                ) : imageAndVideoUrls[activeIndex].includes(".mp4") ? (
                  <Flex width={"740px"} height="620px">
                    {" "}
                    <video
                      autoPlay
                      muted
                      loop
                      width="100%"
                      height="100%"
                      src={imageAndVideoUrls[activeIndex]}
                    />{" "}
                  </Flex>
                ) : (
                  <Image
                    src={imageAndVideoUrls[activeIndex]}
                    alt={`Image ${activeIndex}`}
                    width={"740px"}
                    height="620px"
                    fit={"contain"}
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
                  icon={<SvgChevronLeft />}
                  onClick={() => handlePrevIndex()}
                  aria-label="Previous"
                  variant={"none"}
                  mr={"40px"}
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
                  icon={<SvgChevronRight />}
                  onClick={() => handleNextIndex()}
                  aria-label="Next"
                  variant={"none"}
                  ml={"-40px"}
                />
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
    </>
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
