import { Flex, Image, Text } from "@chakra-ui/react";

export default function CollectionKeyword({ width, height }) {
  return (
    <Flex flexDirection={"column"} gap={"40px"}>
      <Text fontSize={"24px"} fontWeight={"500"}>
        당신이 좋아할 컬렉션
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
        >
          <Image
            width={width}
            height={height}
            borderRadius={width}
            src="/assets/images/Ellipse_1.png"
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
        >
          <Image
            width={width}
            height={height}
            borderRadius={width}
            src="/assets/images/Ellipse_2.png"
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
        >
          <Image
            width={width}
            height={height}
            borderRadius={width}
            src="/assets/images/Ellipse_3.png"
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
        >
          <Image
            width={width}
            height={height}
            borderRadius={width}
            src="/assets/images/Ellipse_4.png"
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
        >
          <Image
            width={width}
            height={height}
            borderRadius={width}
            src="/assets/images/Ellipse_5.png"
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
        >
          <Image
            width={width}
            height={height}
            borderRadius={width}
            src="/assets/images/Ellipse_6.png"
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
