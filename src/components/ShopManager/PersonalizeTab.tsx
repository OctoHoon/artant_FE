import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default function PersonalizeTab({
  isPersonalizationEnabled,
  setIsPersonalizationEnabled,
  personalization,
  setPersonalization,
  isOption,
  setIsOption,
}) {
  const handleSwitchChange = () => {
    setIsPersonalizationEnabled(!isPersonalizationEnabled); // Toggle the showDetail state
  };
  return (
    <Flex // 개인화
      display={"flex"}
      width={"1280px"}
      padding={"24px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"32px"}
      border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
    >
      <Flex display={"flex"} alignItems={"flex-start"} alignSelf={"stretch"}>
        <Flex
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"4px"}
        >
          <Text
            color="var(--maincolorstextblack-222222, #222)"
            fontFamily="Spoqa Han Sans Neo"
            fontSize="24px"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="normal"
            letterSpacing="-0.5px"
          >
            개인화
          </Text>
          <Text
            width={"330px"}
            color="var(--maincolorstextblack-222222, #222)"
            fontFamily="Spoqa Han Sans Neo"
            fontSize="14px"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="normal"
            letterSpacing="-0.042px"
          >
            이름을 세기거나 이니셜을 넣는 등 개인 맞춤 작품을 위해 이 작품에
            대한 개인 정보를 수집하세요.
          </Text>
        </Flex>
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent={"flex-end"}
        >
          <Switch
            id="individualization"
            size={"md"}
            onChange={handleSwitchChange} // Link the switch to the handler
            isChecked={isPersonalizationEnabled}
          />
        </FormControl>
      </Flex>
      {isPersonalizationEnabled && (
        <Flex alignSelf={"stretch"} gap={"60px"}>
          <Flex flexDirection={"column"} width={"600px"}>
            <Text>구매자를 위한 가이드</Text>
            <Text fontSize={"13px"}>
              구매자가 개인화를 원할 때 볼 수 있는 설명을 입력해주세요{" "}
            </Text>
            <Box height={"20px"} />
            <Input
              display="flex"
              padding="0px 16px"
              alignItems="center"
              width={"500px"}
              height={"40px"}
              alignSelf="stretch"
              borderRadius="5px"
              border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
              background="var(--maincolorsbg-white, #FFF)"
              placeholder="예시 : 팔찌에 새길 이름을 입력해주세요. 최대 12글자입니다."
              onChange={(e) => {
                setPersonalization(e.target.value);
              }}
            />
            <Box height={"20px"} />
            <Checkbox
              isChecked={isOption}
              onChange={(e) => setIsOption(e.target.checked)}
            >
              개인화는 옵션입니다
            </Checkbox>
          </Flex>
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"600px"}
          >
            <Text>구매자가 볼 가이드</Text>
            <Box height={"20px"} />
            <Box
              border={
                "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
              }
              padding={"12px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text>개인화 옵션을 추가하세요</Text>
              <Text fontSize={"13px"}>
                예시 :{" "}
                {personalization
                  ? personalization
                  : "팔찌에 새길 이름을 입력해주세요. 최대 12글자입니다."}
              </Text>
              <Input
                display="flex"
                padding="0px 16px"
                alignItems="center"
                width={"500px"}
                height={"40px"}
                alignSelf="stretch"
                borderRadius="5px"
                border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                background="var(--maincolorsbg-white, #FFF)"
                placeholder=""
                onChange={(e) => {}}
              />
            </Box>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
