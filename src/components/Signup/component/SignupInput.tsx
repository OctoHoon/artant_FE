import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function SignupInput({
  label,
  id,
  type,
  value,
  onChange,
  isInvalid,
  errorBorderColor,
  placeholder,
  onBlur,
}) {
  return (
    <FormControl isRequired>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        variant="flushed"
        width={"full"}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        isInvalid={isInvalid}
        errorBorderColor={errorBorderColor}
        placeholder={placeholder}
        onBlur={onBlur}
      />
    </FormControl>
  );
}
