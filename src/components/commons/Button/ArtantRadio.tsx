import { Radio } from "@chakra-ui/react";

export default function ArtantRadio({ value, text }) {
  return (
    <Radio
      value={value}
      _checked={{
        bg: "#5400FD",
        color: "white",
        borderColor: "gray",
      }}
    >
      {text}
    </Radio>
  );
}
