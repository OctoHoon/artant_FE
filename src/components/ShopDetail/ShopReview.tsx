import { Flex, Avatar, Box, Text, Image } from "@chakra-ui/react";
import StarRating from "../commons/StarRating";

export default function ShopReview() {
  return (
    <Box>
      <Box bg="#D9D9D9" width="100%" height={"1px"} />
      <Box height={"16px"} />
      <Flex alignItems={"center"}>
        <Avatar
          width="48px"
          height="48px"
          name="Catherine Kuzyk"
          marginRight={"12px"}
          src={
            "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg"
          }
        />
        <Text
          color="#595959"
          fontFamily="Spoqa Han Sans Neo"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="28px"
          letterSpacing="-0.042px"
          textDecoration="underline"
          textDecor="underline"
          marginEnd={"10px"}
        >
          Catherine Kuzyk
        </Text>
        <Text
          color="#595959"
          fontFamily="Spoqa Han Sans Neo"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="28px"
          letterSpacing="-0.042px"
        >
          2023.08.27
        </Text>
      </Flex>
      <Box px={"60px"}>
        <StarRating star={5} reviews={0} include_count={false} />
        <Box height={"2px"} />
        <Text color="#595959">
          이 미술품 구매에 대한 전체 경험은 처음부터 끝까지 인상적이었습니다.
          프로세스를 통한 탁월한 의사 소통. 기쁘게 하려는 진정한 열의와 의지.
          그는 나를 위해 맞춤형 크기를 만들었습니다. 그의 의사 소통에 항상
          응답하고 철저했습니다. 그리고 예쁜 작품이 생각보다 일찍 도착했습니다 .
          정말 멋져요!! 침실 디자인을 다시 할 때 확실히 다시 사용할 것입니다.
          완벽한 경험!
        </Text>
        <Box height="16px" />
        <Flex alignItems={"center"}>
          <Image
            width="128px"
            height="100px"
            src="https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg"
          />
          <Box width="12px" />
          <Text>마리 헐(1890~2980) 유화</Text>
        </Flex>
        <Box height="32px" />
        <Flex padding="4px 8px" alignItems={"center"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_544_3360"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_544_3360)">
              <path
                d="M6 20.5V5H13.1923L13.5923 7H19V15H13.8077L13.4077 13H7V20.5H6Z"
                fill="#595959"
              />
            </g>
          </svg>
          <Box width="2px" />
          리뷰신고
        </Flex>
      </Box>
      <Box height="32px" />
    </Box>
  );
}
