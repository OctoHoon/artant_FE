import { Select } from "@chakra-ui/react";

const SelectOption = ({
  width = "auto",
  value,
  onChange,
  options,
  disabled,
  placeholder,
  isRequired = false,
}) => (
  <Select
    width={width}
    height="40px"
    flex="1 0 0"
    padding="10px 0px"
    gap="10px"
    flexDirection="column"
    justifyContent="center"
    alignItems="flex-start"
    colorScheme="white"
    color="#595959"
    textStyle={"B14R"}
    value={value}
    onChange={onChange}
    disabled={disabled}
    isRequired={isRequired}
  >
    <option value="">{placeholder}</option>
    {options.map((option) => (
      <option key={option.value ?? option} value={option.value ?? option}>
        {option.label ?? option}
      </option>
    ))}
  </Select>
);

export default SelectOption;
