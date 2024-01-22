import { Radio, Text } from "@chakra-ui/react";

// TODO: style 수정 https://chakra-ui.com/docs/components/radio/theming
export default function ArtantRadio({ value, text }) {
  return (
    <Radio
      size={"lg"}
      value={value}
      _checked={{
        bg: "#5400FD",
        color: "white",
        borderColor: "gray",
      }}
    >
      <Text textStyle={"B16R"}>{text}</Text>
    </Radio>
  );
}
