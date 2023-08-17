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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import { Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      h={"347px"}
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
    >
      <HStack
        borderTopWidth={"1px"}
        borderTopColor={"#F1F1F5"}
        borderBottomWidth={"1px"}
        borderBottomColor={"#F1F1F5"}
        py={4}
        my={5}
      >
        <Link to={"/"}>
          <Text fontSize={"14pt"}>회사소개</Text>
        </Link>
        <Divider
          orientation="vertical"
          height="16px"
          borderColor="#D9D9D9"
          mx={2}
        />{" "}
        <Link to={"/"}>
          <Text fontSize={"14pt"}>이용약관</Text>
        </Link>
        <Divider
          orientation="vertical"
          height="16px"
          borderColor="#D9D9D9"
          mx={2}
        />{" "}
        <Link to={"/"}>
          <Text fontSize={"14pt"}>개인정보처리방침</Text>
        </Link>
        <Divider
          orientation="vertical"
          height="16px"
          borderColor="#D9D9D9"
          mx={2}
        />{" "}
        <Link to={"/"}>
          <Text fontSize={"14pt"}>청소년보호방침</Text>
        </Link>
        <Divider
          orientation="vertical"
          height="16px"
          borderColor="#D9D9D9"
          mx={2}
        />{" "}
        <Link to={"/"}>
          <Text fontSize={"14pt"}>광고문의</Text>
        </Link>
      </HStack>
      <Text fontSize={"14pt"} as="b">
        (주)아트앤트
      </Text>
      <HStack>
        <Text color={"gray"} fontSize={"13pt"}>
          대표이사 홍길동
        </Text>
        <Divider
          orientation="vertical"
          height="16px"
          borderColor="#D9D9D9"
          mx={2}
        />
        <Text color={"gray"} fontSize={"13pt"}>
          서울특별시 강남구 아무동 아트빌딩
        </Text>
        <Divider
          orientation="vertical"
          height="16px"
          borderColor="#D9D9D9"
          mx={2}
        />
        <Text color={"gray"} fontSize={"13pt"}>
          호스팅서비스 사업자: 아트앤트
        </Text>
        <Divider
          orientation="vertical"
          height="16px"
          borderColor="#D9D9D9"
          mx={2}
        />
        <Text color={"gray"} fontSize={"13pt"}>
          사업자등록번호: 000-000000
        </Text>
        <Button
          position={"relative"}
          top={0}
          left={10}
          colorScheme="gray"
          variant="outline"
          borderColor="blackAlpha.500"
          _hover={{ bg: "transparent" }}
          px={8}
          py={8}
        >
          <VStack align={"flex-start"}>
            <Text as="b" fontSize={"24px"}>
              고객센터 0000-0000
            </Text>
            <HStack>
              {" "}
              <Text fontSize={"12px"}>고객센터 바로가기</Text>
              <LiaGreaterThanSolid size={"12px"} />
            </HStack>
          </VStack>
        </Button>
      </HStack>
      <HStack marginBottom={10}>
        <Text color={"gray"} fontSize={"13pt"}>
          통신판매업신고: 2023-서울송파-0000
        </Text>
        <Divider
          orientation="vertical"
          height="16px"
          borderColor="#D9D9D9"
          mx={2}
        />

        <Text color={"gray"} fontSize={"13pt"}>
          email: help@artant.com
        </Text>
      </HStack>

      <Text fontSize={"13pt"} marginBottom={3}>
        소비자피해보상
      </Text>
      <Text color={"gray"} fontSize={"13pt"} marginBottom={1}>
        고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 구매
        안전서비스로 소비자 피해보상 보험 서비스를 이용하실 수 있습니다.
      </Text>
      <Text color={"gray"} fontSize={"13pt"} marginBottom={1}>
        본 사이트의 모든 정보, 콘텐츠, UI등에 대한 복제, 전송, 배포, 스크래핑
        등의 행위는 엄격히 금지됩니다.
      </Text>
      <Text color={"gray"} fontSize={"13pt"} marginBottom={1}>
        Copyright ARTANT Inc. All Rights Reserved.
      </Text>
    </Box>
  );
}
