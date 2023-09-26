import { Flex, Image, Text } from "@chakra-ui/react";

export default function CollectionKeyword({ width, height }) {
  return (
    <Flex flexDirection={"column"} gap={"40px"}>
      <Text fontSize={"24px"} fontWeight={"500"}>
        추천 검색어
      </Text>
      <Flex
        width="1280px"
        padding={"0px 36px"}
        alignItems={"flex-start"}
        gap={"95px"}
      >
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          cursor={"pointer"}
          gap={"12px"}
          _hover={{
            textDecoration: "underline", // 마우스 오버 시 텍스트에 밑줄 추가
          }}
        >
          <Image
            width={width}
            height={height}
            borderRadius={width}
            src="/assets/images/Ellipse_1.png"
            _hover={{
              border: "1px solid #222", // Add a border on hover
              boxShadow: "0px 2px 8px 0px rgba(34, 34, 34, 0.15)",
            }}
          />
          <Text
            color="var(--maincolorstextblack-222222, #222)"
            textAlign="center"
            fontFamily="Spoqa Han Sans Neo"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
            letterSpacing="-0.3px"
            textTransform="capitalize"
          >
            가죽 공예 예술
          </Text>
        </Flex>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          cursor={"pointer"}
          gap={"12px"}
          _hover={{
            textDecoration: "underline", // 마우스 오버 시 텍스트에 밑줄 추가
          }}
        >
          <Image
            width={width}
            height={height}
            borderRadius={width}
            src="/assets/images/Ellipse_2.png"
            _hover={{
              border: "1px solid #222", // Add a border on hover
              boxShadow: "0px 2px 8px 0px rgba(34, 34, 34, 0.15)",
            }}
          />
          <Text
            color="var(--maincolorstextblack-222222, #222)"
            textAlign="center"
            fontFamily="Spoqa Han Sans Neo"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
            letterSpacing="-0.3px"
            textTransform="capitalize"
          >
            목걸이 공예 선물
          </Text>
        </Flex>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          cursor={"pointer"}
          gap={"12px"}
          _hover={{
            textDecoration: "underline", // 마우스 오버 시 텍스트에 밑줄 추가
          }}
        >
          <Image
            width={width}
            height={height}
            borderRadius={width}
            src="/assets/images/Ellipse_3.png"
            _hover={{
              border: "1px solid #222", // Add a border on hover
              boxShadow: "0px 2px 8px 0px rgba(34, 34, 34, 0.15)",
            }}
          />
          <Text
            color="var(--maincolorstextblack-222222, #222)"
            textAlign="center"
            fontFamily="Spoqa Han Sans Neo"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
            letterSpacing="-0.3px"
            textTransform="capitalize"
          >
            벽걸이 예술 사진
          </Text>
        </Flex>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          cursor={"pointer"}
          gap={"12px"}
          _hover={{
            textDecoration: "underline", // 마우스 오버 시 텍스트에 밑줄 추가
          }}
        >
          <Image
            width={width}
            height={height}
            borderRadius={width}
            src="/assets/images/Ellipse_4.png"
            _hover={{
              border: "1px solid #222", // Add a border on hover
              boxShadow: "0px 2px 8px 0px rgba(34, 34, 34, 0.15)",
            }}
          />
          <Text
            color="var(--maincolorstextblack-222222, #222)"
            textAlign="center"
            fontFamily="Spoqa Han Sans Neo"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
            letterSpacing="-0.3px"
            textTransform="capitalize"
          >
            유화 그림
          </Text>
        </Flex>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          cursor={"pointer"}
          gap={"12px"}
          _hover={{
            textDecoration: "underline", // 마우스 오버 시 텍스트에 밑줄 추가
          }}
        >
          <Image
            width={width}
            height={height}
            borderRadius={width}
            src="/assets/images/Ellipse_5.png"
            _hover={{
              border: "1px solid #222", // Add a border on hover
              boxShadow: "0px 2px 8px 0px rgba(34, 34, 34, 0.15)",
            }}
          />
          <Text
            color="var(--maincolorstextblack-222222, #222)"
            textAlign="center"
            fontFamily="Spoqa Han Sans Neo"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
            letterSpacing="-0.3px"
            textTransform="capitalize"
          >
            인물 정밀 유화
          </Text>
        </Flex>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          cursor={"pointer"}
          gap={"12px"}
          _hover={{
            textDecoration: "underline", // 마우스 오버 시 텍스트에 밑줄 추가
          }}
        >
          <Image
            width={width}
            height={height}
            borderRadius={width}
            src="/assets/images/Ellipse_6.png"
            _hover={{
              border: "1px solid #222", // Add a border on hover
              boxShadow: "0px 2px 8px 0px rgba(34, 34, 34, 0.15)",
            }}
          />
          <Text
            color="var(--maincolorstextblack-222222, #222)"
            textAlign="center"
            fontFamily="Spoqa Han Sans Neo"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
            letterSpacing="-0.3px"
            textTransform="capitalize"
          >
            어린이 일러스트
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
