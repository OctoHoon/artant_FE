import { Button, Flex, Select, Text, Box, Image } from "@chakra-ui/react";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(297, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 291,
      },
      {
        x: "helicopter",
        y: 150,
      },
      {
        x: "boat",
        y: 143,
      },
      {
        x: "train",
        y: 247,
      },
      {
        x: "subway",
        y: 44,
      },
      {
        x: "bus",
        y: 100,
      },
      {
        x: "car",
        y: 45,
      },
      {
        x: "moto",
        y: 175,
      },
      {
        x: "bicycle",
        y: 31,
      },
      {
        x: "horse",
        y: 156,
      },
      {
        x: "skateboard",
        y: 166,
      },
      {
        x: "others",
        y: 254,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(78, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 274,
      },
      {
        x: "helicopter",
        y: 148,
      },
      {
        x: "boat",
        y: 26,
      },
      {
        x: "train",
        y: 33,
      },
      {
        x: "subway",
        y: 145,
      },
      {
        x: "bus",
        y: 265,
      },
      {
        x: "car",
        y: 218,
      },
      {
        x: "moto",
        y: 223,
      },
      {
        x: "bicycle",
        y: 163,
      },
      {
        x: "horse",
        y: 12,
      },
      {
        x: "skateboard",
        y: 50,
      },
      {
        x: "others",
        y: 100,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(351, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 93,
      },
      {
        x: "helicopter",
        y: 274,
      },
      {
        x: "boat",
        y: 232,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 76,
      },
      {
        x: "bus",
        y: 49,
      },
      {
        x: "car",
        y: 222,
      },
      {
        x: "moto",
        y: 140,
      },
      {
        x: "bicycle",
        y: 213,
      },
      {
        x: "horse",
        y: 32,
      },
      {
        x: "skateboard",
        y: 57,
      },
      {
        x: "others",
        y: 108,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(350, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 20,
      },
      {
        x: "helicopter",
        y: 69,
      },
      {
        x: "boat",
        y: 186,
      },
      {
        x: "train",
        y: 290,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 141,
      },
      {
        x: "car",
        y: 283,
      },
      {
        x: "moto",
        y: 247,
      },
      {
        x: "bicycle",
        y: 208,
      },
      {
        x: "horse",
        y: 51,
      },
      {
        x: "skateboard",
        y: 193,
      },
      {
        x: "others",
        y: 118,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(101, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 18,
      },
      {
        x: "helicopter",
        y: 268,
      },
      {
        x: "boat",
        y: 188,
      },
      {
        x: "train",
        y: 234,
      },
      {
        x: "subway",
        y: 243,
      },
      {
        x: "bus",
        y: 131,
      },
      {
        x: "car",
        y: 56,
      },
      {
        x: "moto",
        y: 89,
      },
      {
        x: "bicycle",
        y: 267,
      },
      {
        x: "horse",
        y: 177,
      },
      {
        x: "skateboard",
        y: 230,
      },
      {
        x: "others",
        y: 222,
      },
    ],
  },
];

export default function ShopManagerStats() {
  const today = new Date();
  return (
    <Flex width={"1340px"} padding={"32px 0px 120px 60px"}>
      <Flex flexDirection={"column"} gap={"60px"}>
        <Select
          placeholder={`오늘 ${today.getMonth() + 1}월 ${today.getDate()}일`}
          width={"412px"}
        />
        <Flex gap="40px" flexDirection={"column"}>
          <Flex flexDirection={"column"}>
            <Flex
              width={"1280px"}
              height={"70px"}
              borderBottom={"2px solid #F1F1F5"}
            >
              <Flex display={"inline-flex"}>
                <Tab title={"방문"} text={"0"} selected={true} />
                <Tab title={"주문"} text={"0"} selected={false} />
                <Tab title={"전환율"} text={"0%"} selected={false} />
                <Tab title={"수익"} text={"0원"} selected={false} />
              </Flex>
            </Flex>
            <Flex height={"500"} width={"1280px"}>
              <MyResponsiveLine data={data} />
            </Flex>
          </Flex>
          <Flex
            gap={"24px"}
            flexDirection={"column"}
            fontSize={"22px"}
            fontWeight={"500"}
          >
            쇼핑객이 스토어를 찾은 방법
            <Flex
              flexDirection={"column"}
              gap={"24px"}
              border={"1px solid  #D9D9D9"}
              borderRadius={"5px"}
              padding={"24px"}
            >
              <Flex flexDirection={"column"} gap={"24px"}>
                <Flex gap={"40px"}>
                  <Flex flexDirection={"column"} gap={"12px"}>
                    <Text
                      fontSize={"16px"}
                      fontWeight={"500"}
                      color={"#9E76BE"}
                    >
                      {" "}
                      ARTANT를 통한 방문
                    </Text>
                    <WayTab title={"ARTANT 검색"} text={"00"} />
                    <WayTab title={"기타 ARTANT 페이지"} text={"00"} />
                    <WayTab title={"ARTANT 마케팅 및 SEO"} text={"00"} />
                  </Flex>
                  <Flex flexDirection={"column"} gap={"12px"}>
                    <Text
                      fontSize={"16px"}
                      fontWeight={"500"}
                      color={"#5365AE"}
                    >
                      방문수
                    </Text>
                    <WayTab title={"직접 및 기타 트래픽"} text={"00"} />
                    <WayTab title={"소셜 미디어"} text={"00"} />
                    <WayTab title={"ARTANT 광고"} text={"00"} />
                  </Flex>
                </Flex>
              </Flex>
              <Text fontSize={"13px"} color={"#555"}>
                {" "}
                각 트래픽 소스에 대한 자세한 정보를 원하시나요? 간단한 요약보기
              </Text>
            </Flex>
            <Flex flexDirection={"column"} gap={"12px"}>
              <Text fontSize={"14px"} fontWeight={"500"}>
                오픈사이트 광고로 인한 트래픽 및 매춣 확인
              </Text>
              <Text fontSize={"13px"} fontWeight={"400"} lineHeight={"150%"}>
                Google, Instagram, Facebook, Pinterest, Bing 등 트래픽이 많은
                사이트에서 상품을 홍보하여 신규 구매자를 바로 갤러리로
                유도합니다. 위험 부담이 없는 광고로, 판매자의 아이템을 홍보하는
                데 필요한 선불 비용을 부담합니다. 판매에 성공할 때만 비용을
                지불하면 됩니다.{" "}
              </Text>
              <Button
                background={"white"}
                alignItems={"center"}
                gap={"8px"}
                width={"min"}
                padding={"0px"}
                fontSize={"13px"}
                fontWeight={"500"}
                color={"#777"}
                borderRadius={"0px"}
              >
                오프사이트 광고에 대한 자세한 정보 보기
                <Box padding={"8px"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.525548 12L6.55671e-08 11.25L6.54015 6L9.83506e-07 0.749999L0.52555 -6.53437e-07L8 6L0.525548 12Z"
                      fill="#777777"
                    />
                  </svg>
                </Box>
              </Button>
            </Flex>
          </Flex>
          <Flex gap={"12px"} flexDirection={"column"}>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"22px"} fontWeight={"500"}>
                스토어 실적 현황
              </Text>
              <Select
                placeholder="전체작품"
                width={"110px"}
                fontSize={"16px"}
              />
            </Flex>
            <Flex
              padding={"0px 24px 24px 24px"}
              gap={"24px"}
              flexDirection={"column"}
              border={"1px solid  #D9D9D9"}
              borderRadius={"5px"}
            >
              <Flex
                padding={"12px"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text width={"540px"}>작품</Text>

                <Select
                  placeholder="조회수"
                  border={"0px"}
                  padding={"10px 0px 10px 4px"}
                  width={"100px"}
                  color={"#666"}
                />
                <Box width={"60px"} />
                <Select
                  placeholder="즐겨찾기"
                  border={"0px"}
                  padding={"10px 0px 10px 4px"}
                  width={"100px"}
                  color={"#666"}
                />
                <Box width={"60px"} />
                <Select
                  placeholder="주문"
                  border={"0px"}
                  padding={"10px 0px 10px 4px"}
                  width={"100px"}
                  color={"#666"}
                />
                <Box width={"140px"} />
                <Select
                  placeholder="매출"
                  border={"0px"}
                  padding={"10px 0px 10px 4px"}
                  width={"100px"}
                  color={"#666"}
                />
              </Flex>
              <Flex
                alignItems={"center"}
                padding={"12px"}
                borderBottom={"1px solid #D9D9D9"}
              >
                <Flex gap={"24px"} width={"540px"}>
                  <Image
                    src="https://www.creativefabrica.com/wp-content/uploads/2022/10/06/Realistic-Sea-Turtle-Underwater-With-Sunlight-40460582-1-1.png"
                    width={"80px"}
                    height={"80px"}
                  />
                  <Flex
                    flexDirection={"column"}
                    gap={"8px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Text>바다거북</Text>
                    <Box
                      background="#F2F2F2"
                      padding={"4px 8px"}
                      borderRadius={"10px"}
                      fontSize={"12px"}
                    >
                      비활성화
                    </Box>
                  </Flex>
                </Flex>
                <Text width={"100px"} textAlign={"center"}>
                  00
                </Text>
                <Box width={"60px"} />
                <Text width={"100px"} textAlign={"center"}>
                  00
                </Text>
                <Box width={"60px"} />
                <Text width={"100px"} textAlign={"center"}>
                  00
                </Text>
                <Box width={"140px"} />
                <Text width={"100px"} textAlign={"center"}>
                  0원
                </Text>
              </Flex>
              <Flex
                alignItems={"center"}
                padding={"12px"}
                borderBottom={"1px solid #D9D9D9"}
              >
                <Flex gap={"24px"} width={"540px"}>
                  <Image
                    src="https://www.creativefabrica.com/wp-content/uploads/2022/10/06/Realistic-Sea-Turtle-Underwater-With-Sunlight-40460582-1-1.png"
                    width={"80px"}
                    height={"80px"}
                  />
                  <Flex
                    flexDirection={"column"}
                    gap={"8px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Text>바다거북</Text>
                    <Box
                      background="#F2F2F2"
                      padding={"4px 8px"}
                      borderRadius={"10px"}
                      fontSize={"12px"}
                    >
                      비활성화
                    </Box>
                  </Flex>
                </Flex>
                <Text width={"100px"} textAlign={"center"}>
                  00
                </Text>
                <Box width={"60px"} />
                <Text width={"100px"} textAlign={"center"}>
                  00
                </Text>
                <Box width={"60px"} />
                <Text width={"100px"} textAlign={"center"}>
                  00
                </Text>
                <Box width={"140px"} />
                <Text width={"100px"} textAlign={"center"}>
                  0원
                </Text>
              </Flex>
              <Text fontSize={"13px"} color={"#555"}>
                {" "}
                도움이 필요하거나 궁금한 점이 있으신가요? 저희가
                도와드리겠습니다. 답변을 얻거나 피드백을 보내주세요.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function WayTab({ title, text }) {
  return (
    <Flex
      width={"596px"}
      flexDirection={"column"}
      fontSize={"14px"}
      fontWeight={"400"}
      borderBottom={"1px solid #D9D9D9"}
    >
      <Flex
        padding={"20px 16px 20px 12px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text>{title}</Text>
        <Text>{text}</Text>
      </Flex>
    </Flex>
  );
}

function Tab({ title, text, selected }) {
  return (
    <Flex
      flexDirection={"column"}
      textAlign={"center"}
      gap={"12px"}
      fontWeight={"500"}
      width={"80px"}
      alignItems={"center"}
    >
      {title}
      <Flex
        padding={"0px 16px"}
        fontSize={"22px"}
        fontWeight={"400"}
        borderBottom={selected ? "1px solid black" : ""}
        textAlign={"center"}
        width={"80px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {text}
      </Flex>
    </Flex>
  );
}

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
