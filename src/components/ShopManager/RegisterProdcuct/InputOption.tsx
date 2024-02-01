import { Input } from "@chakra-ui/react";

export default function InputOption({
  value = "",
  placeholder,
  onChange,
  width = "full",
  disabled = false,
  required = false,
}) {
  return (
    <Input
      value={value}
      disabled={disabled}
      width={width}
      required={required}
      display="flex"
      padding="0px 16px"
      alignItems="center"
      alignSelf="stretch"
      borderRadius="5px"
      border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
      background="var(--maincolorsbg-white, #FFF)"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
