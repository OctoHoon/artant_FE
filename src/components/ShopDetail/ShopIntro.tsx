import { Image, Box, Flex, Text, IconButton, Avatar } from "@chakra-ui/react";
import { useState } from "react";
import ArtantButton from "../commons/ArtantButton";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getShopDetails } from "../../api";

const images = [
  "https://i.etsystatic.com/isa/259811/1059261681376/isa_760xN.1059261681376_92ku.jpg?version=0.jpg",
];

export default function ShopIntro() {
  const { pk } = useParams();
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery(
    ["shopProductDetail", pk, page],
    getShopDetails
  );
  console.log(data);

  const [showAll, setShowAll] = useState(false);
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
    if (
      activeIndex !==
      (data && data.images.length > 0 ? data.images : images).length - 1
    ) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const handlePrevIndex = () => {
    if (activeIndex != 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(
        (data && data.images.length > 0 ? data.images : images).length - 1
      );
    }
  };
  const defaultDescription = "";

  const intro = showAll ? defaultDescription : defaultDescription.slice(0, 400);

  return (
    <Box>
      <Flex gap={10}>
        <Box maxW="258px">
          <Text textStyle={"H6M"} width={"252px"}>
            {data && data!["shop_name"]} 소개
          </Text>
          <Box height="45px" />
          <Flex>
            <Box>
              <Text textStyle={"B13R"}>판매량</Text>
              <Text fontSize="22px" fontWeight={"500"}>
                21,967
              </Text>
            </Box>
            <Box width="36px" />
            <Box>
              <Text textStyle={"B13R"}>On ArtAnt Since</Text>
              <Text fontSize="22px" fontWeight={"500"}>
                2023
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box maxW="958px">
          <Box position="relative" width="760px" height="468px">
            {/* Image */}
            <Box
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {(data && data.images.length > 0 ? data.images : images)[
                activeIndex
              ].endsWith(".mp4") ? (
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
                  objectFit={"cover"}
                  src={
                    (data && data.images.length > 0 ? data.images : images)[
                      activeIndex
                    ]
                  }
                  width="760px"
                  height="468px"
                  alt={`Image ${activeIndex}`}
                />
              )}
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
                sx={{
                  "&:hover": {
                    backgroundColor: "grey",
                  },
                }}
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
                sx={{
                  "&:hover": {
                    backgroundColor: "grey",
                  },
                }}
              />
            </Box>
          </Box>
          <Box height={"40px"} />
          <Text fontSize="30px" fontWeight="500">
            {(data && data.description_title) ?? ""}
          </Text>
          <Box height="24px" />
          <Box
            whiteSpace="pre-line"
            fontSize="16px"
            lineHeight="180%"
            //height={"100%"}
          >
            {data && data.description != null
              ? showAll
                ? data.description
                : data.description.split("\n").slice(0, 10).join("\n")
              : intro}
            {data &&
              data.description &&
              data.description.split("\n").length > 10 && (
                <Box display="flex" alignItems="center" justifyContent="center">
                  <ArtantButton
                    title={showAll ? "간략히 보기 " : "자세히 보기"}
                    width="auto"
                    onClick={() => setShowAll(!showAll)}
                  />
                </Box>
              )}
          </Box>
          <Box width="100%" justifyContent={"center"}></Box>
          <Box height="48px" />
          <Flex>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M0 8.05C0 5.20255 0 3.77882 0.562933 2.69513C1.03731 1.78191 1.78191 1.03731 2.69513 0.562933C3.77882 0 5.20255 0 8.05 0H15.95C18.7975 0 20.2212 0 21.3049 0.562933C22.2181 1.03731 22.9627 1.78191 23.4371 2.69513C24 3.77882 24 5.20255 24 8.05V15.95C24 18.7975 24 20.2212 23.4371 21.3049C22.9627 22.2181 22.2181 22.9627 21.3049 23.4371C20.2212 24 18.7975 24 15.95 24H8.05C5.20255 24 3.77882 24 2.69513 23.4371C1.78191 22.9627 1.03731 22.2181 0.562933 21.3049C0 20.2212 0 18.7975 0 15.95V8.05Z"
                fill="url(#paint0_linear_526_6444)"
              />
              <path
                d="M16.6667 15.3332L17.2 11.9998H14V9.6665C14 8.73317 14.3333 7.99984 15.8 7.99984H17.3333V4.93317C16.4667 4.79984 15.5333 4.6665 14.6667 4.6665C11.9333 4.6665 10 6.33317 10 9.33317V11.9998H7V15.3332H10V23.9998C11.3333 23.9998 12.6667 23.9998 14 23.9998V15.3332H16.6667Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_526_6444"
                  x1="12"
                  y1="23.2988"
                  x2="12"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0062E0" />
                  <stop offset="1" stop-color="#19AFFF" />
                </linearGradient>
              </defs>
            </svg>
            <Box width="4px" />
            페이스북
            <Box width="24px" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_526_6455)">
                <path
                  d="M0.0136719 8.05C0.0136719 5.20255 0.0136719 3.77882 0.576605 2.69513C1.05098 1.78191 1.79558 1.03731 2.7088 0.562933C3.79249 0 5.21622 0 8.06367 0H15.9637C18.8111 0 20.2349 0 21.3185 0.562933C22.2318 1.03731 22.9764 1.78191 23.4507 2.69513C24.0137 3.77882 24.0137 5.20255 24.0137 8.05V15.95C24.0137 18.7975 24.0137 20.2212 23.4507 21.3049C22.9764 22.2181 22.2318 22.9627 21.3185 23.4371C20.2349 24 18.8111 24 15.9637 24H8.06367C5.21622 24 3.79249 24 2.7088 23.4371C1.79558 22.9627 1.05098 22.2181 0.576605 21.3049C0.0136719 20.2212 0.0136719 18.7975 0.0136719 15.95V8.05Z"
                  fill="url(#paint0_radial_526_6455)"
                />
                <path
                  d="M0.0136719 8.05C0.0136719 5.20255 0.0136719 3.77882 0.576605 2.69513C1.05098 1.78191 1.79558 1.03731 2.7088 0.562933C3.79249 0 5.21622 0 8.06367 0H15.9637C18.8111 0 20.2349 0 21.3185 0.562933C22.2318 1.03731 22.9764 1.78191 23.4507 2.69513C24.0137 3.77882 24.0137 5.20255 24.0137 8.05V15.95C24.0137 18.7975 24.0137 20.2212 23.4507 21.3049C22.9764 22.2181 22.2318 22.9627 21.3185 23.4371C20.2349 24 18.8111 24 15.9637 24H8.06367C5.21622 24 3.79249 24 2.7088 23.4371C1.79558 22.9627 1.05098 22.2181 0.576605 21.3049C0.0136719 20.2212 0.0136719 18.7975 0.0136719 15.95V8.05Z"
                  fill="url(#paint1_radial_526_6455)"
                />
                <path
                  d="M12.0012 3.27295C9.63106 3.27295 9.33362 3.28331 8.40274 3.32568C7.47367 3.36822 6.83951 3.51531 6.28462 3.73113C5.71064 3.95404 5.22374 4.25222 4.73867 4.73749C4.25323 5.22259 3.95505 5.70949 3.73142 6.28331C3.51507 6.8384 3.3678 7.47277 3.32598 8.40149C3.28435 9.3324 3.27344 9.63004 3.27344 12.0002C3.27344 14.3704 3.28398 14.6669 3.32616 15.5979C3.36889 16.5269 3.51598 17.1611 3.73161 17.716C3.95469 18.29 4.25286 18.7769 4.73812 19.262C5.22301 19.7475 5.70991 20.0464 6.28353 20.2693C6.83878 20.4851 7.47313 20.6322 8.40201 20.6748C9.33289 20.7171 9.63015 20.7275 12.0001 20.7275C14.3704 20.7275 14.6669 20.7171 15.5978 20.6748C16.5269 20.6322 17.1617 20.4851 17.717 20.2693C18.2908 20.0464 18.777 19.7475 19.2619 19.262C19.7473 18.7769 20.0455 18.29 20.2691 17.7162C20.4836 17.1611 20.6309 16.5268 20.6745 15.598C20.7164 14.6671 20.7273 14.3704 20.7273 12.0002C20.7273 9.63004 20.7164 9.33259 20.6745 8.40168C20.6309 7.47259 20.4836 6.8384 20.2691 6.28349C20.0455 5.70949 19.7473 5.22259 19.2619 4.73749C18.7764 4.25204 18.291 3.95386 17.7165 3.73113C17.1601 3.51531 16.5256 3.36822 15.5965 3.32568C14.6656 3.28331 14.3693 3.27295 11.9984 3.27295H12.0012ZM11.2183 4.84568C11.4506 4.84531 11.7099 4.84568 12.0012 4.84568C14.3313 4.84568 14.6075 4.85404 15.5276 4.89586C16.3785 4.93477 16.8403 5.07695 17.1479 5.1964C17.5552 5.35459 17.8455 5.54368 18.1508 5.84913C18.4563 6.15459 18.6453 6.44549 18.8039 6.85277C18.9233 7.16004 19.0657 7.62186 19.1044 8.47277C19.1462 9.39277 19.1553 9.66913 19.1553 11.9982C19.1553 14.3273 19.1462 14.6037 19.1044 15.5237C19.0655 16.3746 18.9233 16.8364 18.8039 17.1437C18.6457 17.5509 18.4563 17.8409 18.1508 18.1462C17.8454 18.4517 17.5554 18.6408 17.1479 18.7989C16.8407 18.9189 16.3785 19.0608 15.5276 19.0997C14.6076 19.1415 14.3313 19.1506 12.0012 19.1506C9.67088 19.1506 9.39471 19.1415 8.47473 19.0997C7.62385 19.0604 7.16205 18.9182 6.85424 18.7988C6.44698 18.6406 6.15608 18.4515 5.85063 18.146C5.54519 17.8406 5.3561 17.5504 5.19756 17.1429C5.07811 16.8357 4.93575 16.3739 4.89702 15.5229C4.85521 14.6029 4.84684 14.3266 4.84684 11.996C4.84684 9.66549 4.85521 9.39059 4.89702 8.47059C4.93593 7.61968 5.07811 7.15786 5.19756 6.85022C5.35574 6.44295 5.54519 6.15204 5.85063 5.84659C6.15608 5.54113 6.44698 5.35204 6.85424 5.19349C7.16186 5.07349 7.62385 4.93168 8.47473 4.89259C9.2798 4.85622 9.59179 4.84531 11.2183 4.84349V4.84568ZM16.6596 6.29477C16.0814 6.29477 15.6123 6.76331 15.6123 7.34168C15.6123 7.91986 16.0814 8.38895 16.6596 8.38895C17.2377 8.38895 17.7068 7.91986 17.7068 7.34168C17.7068 6.76349 17.2377 6.2944 16.6596 6.2944V6.29477ZM12.0012 7.5184C9.52616 7.5184 7.51949 9.52513 7.51949 12.0002C7.51949 14.4753 9.52616 16.4811 12.0012 16.4811C14.4762 16.4811 16.4821 14.4753 16.4821 12.0002C16.4821 9.52513 14.476 7.5184 12.001 7.5184H12.0012ZM12.0012 9.09113C13.6077 9.09113 14.9102 10.3935 14.9102 12.0002C14.9102 13.6068 13.6077 14.9093 12.0012 14.9093C10.3945 14.9093 9.09217 13.6068 9.09217 12.0002C9.09217 10.3935 10.3945 9.09113 12.0012 9.09113Z"
                  fill="white"
                />
              </g>
              <defs>
                <radialGradient
                  id="paint0_radial_526_6455"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(6.3887 25.8485) rotate(-90) scale(23.7858 22.1226)"
                >
                  <stop stop-color="#FFDD55" />
                  <stop offset="0.1" stop-color="#FFDD55" />
                  <stop offset="0.5" stop-color="#FF543E" />
                  <stop offset="1" stop-color="#C837AB" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_526_6455"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-4.00646 1.72892) rotate(78.6806) scale(10.6323 43.827)"
                >
                  <stop stop-color="#3771C8" />
                  <stop offset="0.128" stop-color="#3771C8" />
                  <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                </radialGradient>
                <clipPath id="clip0_526_6455">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Box width="4px" />
            인스타그램
          </Flex>
          {/* <Box height="60px" /> */}
          {/* <Box
            display={"flex"}
            alignItems={"flex-start"}
            alignContent={"flex-start"}
            gap="30px"
            flexWrap={"wrap"}
          >
            <ShopMember />
            <ShopMember />
            <ShopMember />
            <ShopMember />
          </Box> */}
          <Box height="60px" />
        </Box>
      </Flex>
    </Box>
  );
}

function ShopMember() {
  return (
    <Flex>
      <Avatar
        width="48px"
        height="48px"
        name="Catherine Kuzyk"
        marginRight={"12px"}
        src={
          "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg"
        }
      />
      <Box width="12px" />
      <Box>
        <Text fontWeight={"500"}>판리</Text>
        <Text color="#595959">아티스트</Text>
        <Box height={"12px"} />
        <Box width="305px" color="#595959">
          어렸을 때부터 그림으로 멋진 세계를 탐험해 왔습니다. 모든 그림은 삶에
          대한 사랑으로 가득 차 있습니다. 색상 팔레트는 내가 가장 좋아하는
          것입니다. 색상의 조합은 다른 분위기를 보여줍니다. 내 꿈의 아름다움을
          가져다 드리겠습니다.
        </Box>
      </Box>
    </Flex>
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
