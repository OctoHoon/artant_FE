import { LiaGreaterThanSolid } from "react-icons/lia";

import {
  Box,
  Button,
  HStack,
  IconButton,
  Divider,
  LightMode,
  Spacer,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Icon,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";

export default function RegisterButton() {
  return (
    <Button
      mx={{
        base: 10,
        lg: 40,
      }}
      rightIcon={<LiaGreaterThanSolid />}
      colorScheme="gray"
      variant="outline"
      borderColor="blackAlpha.500"
      px={8}
    >
      판매자 등록
    </Button>
  );
}
