import { FaComment, FaGithub } from "react-icons/fa";
import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

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
        <Text fontSize={"16px"}>간편하게 로그인</Text>
        <HStack spacing={6} marginBottom={6} marginTop={2}>
          {" "}
          <Box
            as="button"
            w="48px"
            h="48px"
            rounded="full"
            bg="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid gray"
          >
            <Image maxH="28px" src="/assets/images/google.png" />
          </Box>
          <Box
            as="button"
            w="48px"
            h="48px"
            rounded="full"
            bg="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid gray"
          >
            <Image maxH="100px" src="/assets/images/naver_logo.png" />
          </Box>
          <Box
            as="button"
            w="48px"
            h="48px"
            rounded="full"
            bg="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid gray"
          >
            <Image maxH="32px" src="/assets/images/kakao.png" />
          </Box>
        </HStack>
        {/* <Button
          w="100%"
          colorScheme="gray"
          variant="outline"
          borderColor="blackAlpha.500"
        >
          <Image
            marginStart={-10}
            marginRight={10}
            maxH="30px"
            src="/images/구글__2_1000.png"
          />
          Google로 시작하기
        </Button>
        <Button w="100%" colorScheme={"yellow"}>
          <Image
            marginStart={-10}
            marginRight={10}
            maxH="40px"
            src="/images/카카오톡 로고 Yellow.png"
          />
          카카오로 시작하기
        </Button> */}
      </VStack>
    </Box>
  );
}
