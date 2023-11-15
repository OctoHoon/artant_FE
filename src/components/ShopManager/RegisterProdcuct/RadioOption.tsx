import { RadioGroup, Flex, Radio, Text } from "@chakra-ui/react";

export default function RadioOption({
  setOptionValue,
  OptionValue,
  option1,
  description1,
  option2,
  description2,
}) {
  return (
    <RadioGroup onChange={setOptionValue} value={OptionValue}>
      <Flex display={"flex"} alignItems={"flex-start"} gap={"40px"}>
        <Flex
          display={"flex"}
          alignItems={"flex-start"}
          gap={"40px"}
          width={"270px"}
        >
          <Radio alignItems={"flex-start"} gap={"8px"} value="1">
            <Flex
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"4px"}
            >
              <Text textStyle={"B14R"}>{option1}</Text>
              <Text
                color="var(--maincolorstextgray-595959, #666)"
                textStyle={"B13R"}
                css={`
                  line-height: 140%; /* 18.2px */
                `}
              >
                {description1}.
              </Text>
            </Flex>
          </Radio>
        </Flex>
        <Flex
          display={"flex"}
          alignItems={"flex-start"}
          gap={"40px"}
          width={"270px"}
        >
          <Radio alignItems={"flex-start"} gap={"8px"} value="2">
            <Flex
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"4px"}
            >
              <Text textStyle={"B14R"}>{option2}</Text>
              <Text
                color="var(--maincolorstextgray-595959, #666)"
                textStyle={"B13R"}
                css={`
                  line-height: 140%; /* 18.2px */
                `}
              >
                {description2}
              </Text>
            </Flex>
          </Radio>
        </Flex>
      </Flex>
    </RadioGroup>
  );
}
