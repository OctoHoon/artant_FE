import { Box, Flex, Text } from "@chakra-ui/react";

export default function RegisterProcess({ currentPage }) {
  return (
    <Flex width={"1280px"} height={"58px"}>
      <Flex
        display={"flex"}
        width={"1280px"}
        alignItems={"flex-start"}
        position={"relative"}
      >
        <Flex
          flex="1 0 0"
          display={"inline-flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"6px"}
        >
          {currentPage === 1 ? (
            <CurrentCircle />
          ) : currentPage > 1 ? (
            <AfterCircle />
          ) : (
            <NotCurrentCircle />
          )}

          <Text textAlign="center" textStyle={"B14R"}>
            상점 이름을 지정하세요
          </Text>
        </Flex>
        <Flex
          flex="1 0 0"
          display={"inline-flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"6px"}
        >
          {currentPage === 2 ? (
            <CurrentCircle />
          ) : currentPage > 2 ? (
            <AfterCircle />
          ) : (
            <NotCurrentCircle />
          )}
          <Text textAlign="center" textStyle={"B14R"}>
            상품 등록 하기
          </Text>
        </Flex>
        <Flex
          flex="1 0 0"
          display={"inline-flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"6px"}
        >
          {currentPage === 3 ? (
            <CurrentCircle />
          ) : currentPage > 3 ? (
            <AfterCircle />
          ) : (
            <NotCurrentCircle />
          )}
          <Text textAlign="center" textStyle={"B14R"}>
            지급 방식
          </Text>
        </Flex>
        <Flex
          flex="1 0 0"
          display={"inline-flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"6px"}
        >
          {currentPage === 4 ? (
            <CurrentCircle />
          ) : currentPage > 4 ? (
            <AfterCircle />
          ) : (
            <NotCurrentCircle />
          )}
          <Text textAlign="center" textStyle={"B14R"}>
            결제 설정
          </Text>
        </Flex>
        <Flex
          alignItems={"center"}
          position={"absolute"}
          top={"17px"}
          left={"159.75px"}
          zIndex={-1}
        >
          <Rectangle />
        </Flex>
      </Flex>
    </Flex>
  );
}

const CurrentCircle = () => {
  return (
    <Flex display={"flex"} padding="3px" alignItems={"flex-start"} gap={"8px"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
      >
        <circle cx="14" cy="14" r="14" fill="#222" />
      </svg>
    </Flex>
  );
};

const NotCurrentCircle = () => {
  return (
    <Flex display={"flex"} padding="11px" alignItems={"flex-start"} gap={"8px"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="none"
      >
        <circle cx="6" cy="6" r="6" fill="#EAEAEA" />
      </svg>
    </Flex>
  );
};

const AfterCircle = () => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="17" cy="17" r="13.5" fill="white" stroke="#222222" />
      <mask
        id="mask0_1005_4447"
        maskUnits="userSpaceOnUse"
        x="5"
        y="5"
        width="24"
        height="24"
      >
        <rect x="5" y="5" width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1005_4447)">
        <path
          d="M14.5513 22.3077L9.58203 17.3385L10.2955 16.625L14.5513 20.8808L23.707 11.725L24.4205 12.4385L14.5513 22.3077Z"
          fill="#222222"
        />
      </g>
    </svg>
  );
};

const Rectangle = () => {
  return (
    <Box
      width="960px"
      height="2px"
      bg="var(--maincolorsbggrayeaeaea, #EAEAEA)" // 배경색 적용
      position="absolute"
    />
  );
};
