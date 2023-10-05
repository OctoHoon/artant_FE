import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function EventDetail() {
  const { id } = useParams();

  const contents = [
    {
      title: "젊음과 반항의 예술전",
      assets: "assets/images/Rectangle_284.png",
    },
    {
      title: "젊음과 반항의 예술전",
      assets: "assets/images/Rectangle_284.png",
    },
    {
      title: "공감",
      assets: "assets/images/Rectangle_285.png",
    },
    {
      title: "앉음과 일어섬의 상에 대하여",
      assets: "assets/images/Rectangle_286.png",
    },
    {
      title: "쿨라 링: 이야기 군도",
      assets: "assets/images/Rectangle_287.png",
    },
    {
      title: "Close-up",
      assets: "assets/images/Rectangle_288.png",
    },
    {
      title: "정연두 백년 여행기",
      assets: "assets/images/Rectangle_289.png",
    },
  ];

  return (
    <Flex
      mt={"60px"}
      mb={"104px"}
      height={"1972px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"20px"}
    >
      {" "}
      <Flex flexDirection={"column"} alignItems={"center"} gap={"20px"}>
        {" "}
        <Text
          color="var(--maincolorstextblack-222222, #222)"
          textAlign="center"
          fontFamily="Roboto"
          fontSize="30px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="normal"
          textTransform="capitalize"
        >
          News Event
        </Text>
        <svg width="1280" height="2" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="1" x2="1280" y2="1" stroke="#000" strokeWidth="2" />
        </svg>
      </Flex>
      <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"16px"}>
        {" "}
        <Text
          color="#000"
          fontFamily="Spoqa Han Sans Neo"
          fontSize="18px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="normal"
          letterSpacing="-0.3px"
        >
          {contents[id!].title}
        </Text>
        <Flex flexDirection={"column"} alignItems={"center"} gap={"40px"}>
          <Image src={contents[id!].assets}></Image>
          <Button
            height={"42px"}
            padding={"4px 60px"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"100px"}
            background={" var(--maincolorsbgblack-222222, #222);"}
            fontSize={"14px"}
            fontWeight={"500"}
            fontFamily="Spoqa Han Sans Neo"
            letterSpacing={"-0.3px"}
            textAlign={"center"}
            color={"var(--maincolorstext-white, #FFF)"}
            _hover={{
              background: "var(--maincolorsbggray-555555, #555)",
            }}
          >
            자세히 보기
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
