import { Checkbox } from "@chakra-ui/react";

export default function ArtantCheckBox({ isChecked, onChange, text }) {
  return (
    <Checkbox
      _checked={{
        "& .chakra-checkbox__control": {
          background: "#5400FD",
        },
      }}
    >
      {text}
    </Checkbox>
  );
}
