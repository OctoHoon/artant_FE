import { Box, Divider, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function SocialLogin() {
  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Text textTransform={"uppercase"} color="gray.500" fontSize="xs" as="b">
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Text textStyle={"B14R"} color={"#767676"}>
          SNS로 간편하게 로그인
        </Text>
        <HStack spacing={6} marginBottom={6} marginTop={2}>
          <SocialLoginButton src={"/assets/images/google.png"} />
          <SocialLoginButton src={"/assets/images/naver.png"} />
          <SocialLoginButton src={"/assets/images/kakao.png"} />
        </HStack>
      </VStack>
    </Box>
  );
}

const SocialLoginButton = ({ src }) => {
  return (
    <Box
      as="button"
      w="48px"
      h="48px"
      rounded="full"
      bg="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="1px solid #DBDBDB"
    >
      <Image maxH="32px" src={src} />
    </Box>
  );
};
