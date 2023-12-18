import { Flex, Input, Text } from "@chakra-ui/react";
import BlackButton from "../../commons/Button/BlackButton";
import { updateShop } from "../../../services/shopService";

export default function EditAnnouncement({
  shop_pk,
  announcement,
  setAnnouncement,
}) {
  console.log(announcement);
  return (
    <Flex gap={"160px"} alignSelf={"stretch"}>
      <Flex flexDirection={"column"}>
        <Text fontSize={"16px"}>공지사항</Text>
        <Text color={"#666"} fontSize={"13px"}>
          2023.08.24 업데이트
        </Text>
      </Flex>
      <Flex
        padding={"24px"}
        flexDirection={"column"}
        gap={"8px"}
        alignSelf={"stretch"}
        borderRadius={"5px"}
        background={"#FAFAFA"}
      >
        <Flex gap={"2px"}>
          <PlusSVG />
          공지 추가
        </Flex>
        <Input
          value={announcement}
          placeholder="이 공간을 사용하여 중요한 최신 정보를 구매자와 공유하세요. 새로운 제품과 특별 프로모션을 언급 할수 있습니다."
          width={"944px"}
          height={"60px"}
          onChange={(e) => {
            setAnnouncement(e.target.value);
          }}
        />
        <Flex gap={"4px"} justifyContent={"flex-end"}>
          <BlackButton
            title={"저장"}
            borderRadius={"100px"}
            width="min"
            onClick={async () => {
              try {
                const updateData = {
                  announcement: announcement,
                };
                const result = await updateShop(shop_pk, updateData);
                return result;
              } catch (error) {
                console.error("업데이트 실패", error);
                throw error;
              }
            }}
          />
          <BlackButton
            title={"취소"}
            borderRadius={"100px"}
            type={true}
            width="min"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

const PlusSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask
        id="mask0_1193_14934"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1193_14934)">
        <path
          d="M11.5 12.5H6V11.5H11.5V6H12.5V11.5H18V12.5H12.5V18H11.5V12.5Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
};
