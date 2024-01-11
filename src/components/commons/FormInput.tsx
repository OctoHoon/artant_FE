import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

const FormInput = ({
  label,
  id,
  type,
  value,
  onChange,
  onBlur,
  isInvalid,
  errorMessage,
}) => (
  <FormControl isRequired>
    <FormLabel htmlFor={id} textStyle={"B14R"}>
      {label}
    </FormLabel>
    <Input
      variant="flushed"
      width={"full"}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      isInvalid={isInvalid}
    />
    <Text
      marginTop={"3px"}
      textStyle="B13R"
      color={isInvalid ? "red.300" : "blue.300"}
    >
      {errorMessage}
    </Text>
  </FormControl>
);

export default FormInput;
