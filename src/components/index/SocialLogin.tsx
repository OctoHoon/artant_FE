import { Box, Divider, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function SocialLogin() {
  const kakaoParams = {
    client_id: "08257a5e580b5be1b9a8785b4f4ace12",
    redirect_uri: "http://127.0.0.1:3000/",
    response_type: "code",
  };
  const params = new URLSearchParams(kakaoParams).toString();
  console.log(params);
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
          <SocialLoginButton
            src={"/assets/images/google.png"}
            params={undefined}
          />
          <SocialLoginButton
            src={"/assets/images/naver.png"}
            params={undefined}
          />
          <SocialLoginButton src={"/assets/images/kakao.png"} params={params} />
        </HStack>
      </VStack>
    </Box>
  );
}

const SocialLoginButton = ({ src, params }) => {
  return (
    <Box
      as="a"
      href={`https://kauth.kakao.com/oauth/authorize?${params}`}
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
