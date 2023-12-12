import React, { useEffect, useState } from "react";
import { Box, Image, AspectRatio, IconButton, Flex } from "@chakra-ui/react";
import { FaPlayCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../../services/productService";
import { toggleLikeProduct } from "../../services/userService";

export default function ProductImage(is_liked) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLength, setImageLength] = useState(0);
  const [isLiked, setIsLiked] = useState(is_liked);

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

  const mutation = useMutation(toggleLikeProduct, {
    onMutate: () => {
      console.log("mutation starting");
    },
    onSuccess: (data) => {
      console.log("success!");
    },
    onError: (error) => {
      console.log("mutation has an error");
    },
  });

  const onTapLike = (pk) => {
    setIsLiked(!isLiked);
    mutation.mutate(pk);
  };

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
                {/* <Fade in={isHovered || isLiked}>
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
                    onClick={() => {
                      onTapLike(pk);
                    }}
                  >
                    <Box cursor={"pointer"} color="black">
                      {isLiked ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <mask
                            id="mask0_1273_14461"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1273_14461)">
                            <path
                              d="M12 21.3269L10.8962 20.3346C9.23847 18.8308 7.86763 17.5384 6.78365 16.4577C5.69968 15.3769 4.84072 14.4151 4.20675 13.5721C3.57277 12.7292 3.12982 11.9602 2.8779 11.2654C2.62597 10.5705 2.5 9.86538 2.5 9.15C2.5 7.73078 2.97852 6.54265 3.93558 5.5856C4.89263 4.62855 6.08076 4.15002 7.49998 4.15002C8.37306 4.15002 9.19806 4.3542 9.97498 4.76255C10.7519 5.17088 11.4269 5.75646 12 6.51927C12.5731 5.75646 13.2481 5.17088 14.025 4.76255C14.8019 4.3542 15.6269 4.15002 16.5 4.15002C17.9192 4.15002 19.1073 4.62855 20.0644 5.5856C21.0214 6.54265 21.5 7.73078 21.5 9.15C21.5 9.86538 21.374 10.5705 21.1221 11.2654C20.8701 11.9602 20.4272 12.7292 19.7932 13.5721C19.1592 14.4151 18.3019 15.3769 17.2211 16.4577C16.1403 17.5384 14.7679 18.8308 13.1038 20.3346L12 21.3269Z"
                              fill="#BC0000"
                            />
                          </g>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <mask
                            id="mask0_823_10523"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_823_10523)">
                            <path
                              d="M12 21.3269L10.8962 20.3346C9.23847 18.8308 7.86763 17.5384 6.78365 16.4577C5.69968 15.3769 4.84072 14.4151 4.20675 13.5721C3.57277 12.7292 3.12982 11.9602 2.8779 11.2654C2.62597 10.5705 2.5 9.86538 2.5 9.15C2.5 7.73078 2.97852 6.54265 3.93558 5.5856C4.89263 4.62855 6.08076 4.15002 7.49998 4.15002C8.37306 4.15002 9.19806 4.3542 9.97498 4.76255C10.7519 5.17088 11.4269 5.75646 12 6.51927C12.5731 5.75646 13.2481 5.17088 14.025 4.76255C14.8019 4.3542 15.6269 4.15002 16.5 4.15002C17.9192 4.15002 19.1073 4.62855 20.0644 5.5856C21.0214 6.54265 21.5 7.73078 21.5 9.15C21.5 9.86538 21.374 10.5705 21.1221 11.2654C20.8701 11.9602 20.4272 12.7292 19.7932 13.5721C19.1592 14.4151 18.3019 15.3769 17.2211 16.4577C16.1403 17.5384 14.7679 18.8308 13.1038 20.3346L12 21.3269ZM12 19.3C13.6 17.8603 14.9166 16.6263 15.95 15.5981C16.9833 14.5699 17.8 13.6766 18.4 12.9183C19 12.1599 19.4166 11.4865 19.65 10.8981C19.8833 10.3096 20 9.72692 20 9.15C20 8.15 19.6666 7.31667 19 6.65C18.3333 5.98333 17.5 5.65 16.5 5.65C15.7102 5.65 14.9804 5.87404 14.3106 6.32213C13.6407 6.77019 13.1102 7.39359 12.7192 8.19233H11.2808C10.8833 7.38719 10.3513 6.76218 9.6846 6.3173C9.01793 5.87243 8.28973 5.65 7.49998 5.65C6.50639 5.65 5.67466 5.98333 5.00478 6.65C4.33491 7.31667 3.99998 8.15 3.99998 9.15C3.99998 9.72692 4.11664 10.3096 4.34998 10.8981C4.58331 11.4865 4.99998 12.1599 5.59998 12.9183C6.19998 13.6766 7.01664 14.5683 8.04998 15.5933C9.08331 16.6183 10.4 17.8539 12 19.3Z"
                              fill="#1C1B1F"
                            />
                          </g>
                        </svg>
                      )}
                    </Box>
                  </Box>
                </Fade> */}
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
