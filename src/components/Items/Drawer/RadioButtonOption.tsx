import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function RadioButtonOption({}) {
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  const options = [
    { value: "option1", label: "모든 아이템" },
    { value: "option2", label: "수제" },
    { value: "option3", label: "고풍스러운" },
  ];

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <RadioGroup value={selectedOption} defaultValue="option1">
      <Stack>
        {options.map((option) => (
          <Radio
            key={option.value}
            value={option.value}
            onChange={() => handleRadioChange(option.value)}
            color="#666666"
          >
            {option.label}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
}
