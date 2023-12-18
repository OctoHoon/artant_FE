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
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import { Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center" // Center horizontally
      justifyContent="flex-start" // Center vertically
      fontSize={"14px"}
      width={"full"}
    >
      <Flex
        width={"full"}
        padding={"18px 0px"}
        borderTopWidth={"1px"}
        borderTopColor={"#F1F1F5"}
        borderBottomWidth={"1px"}
        borderBottomColor={"#F1F1F5"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex width={"1280px"}>
          <Link to={"/"}>
            <Text fontSize={"14px"}>회사소개</Text>
          </Link>
          <Divider
            orientation="vertical"
            height="16px"
            borderColor="#D9D9D9"
            mx={2}
          />{" "}
          <Link to={"/"}>
            <Text fontSize={"14px"}>이용약관</Text>
          </Link>
          <Divider
            orientation="vertical"
            height="16px"
            borderColor="#D9D9D9"
            mx={2}
          />{" "}
          <Link to={"/"}>
            <Text fontSize={"14px"}>개인정보처리방침</Text>
          </Link>
          <Divider
            orientation="vertical"
            height="16px"
            borderColor="#D9D9D9"
            mx={2}
          />{" "}
          <Link to={"/"}>
            <Text fontSize={"14px"}>청소년보호방침</Text>
          </Link>
          <Divider
            orientation="vertical"
            height="16px"
            borderColor="#D9D9D9"
            mx={2}
          />{" "}
          <Link to={"/"}>
            <Text fontSize={"14px"}>광고문의</Text>
          </Link>
        </Flex>
      </Flex>
      <Box height={"40px"} />

      <Box>
        <Flex justifyContent={"space-between"} width={"1280px"}>
          <Box>
            <Text fontSize={"14px"} fontWeight={"500"} marginBottom={"12px"}>
              (주)아트앤트
            </Text>
            <Box>
              <Flex>
                <Text color={"gray"} fontSize={"12px"} letterSpacing={"-0.3px"}>
                  대표이사 서정배
                </Text>
                <Divider
                  orientation="vertical"
                  height="16px"
                  borderColor="#D9D9D9"
                  mx={2}
                />
                <Text color={"gray"} fontSize={"12px"} letterSpacing={"-0.3px"}>
                  서울특별시 서초구 사임당로 64, 교대벤처타워3층
                </Text>
                <Divider
                  orientation="vertical"
                  height="16px"
                  borderColor="#D9D9D9"
                  mx={2}
                />
                <Text color={"gray"} fontSize={"12px"} letterSpacing={"-0.3px"}>
                  호스팅서비스 사업자: (주)데이터앤트
                </Text>
                <Divider
                  orientation="vertical"
                  height="16px"
                  borderColor="#D9D9D9"
                  mx={2}
                />
                <Text color={"gray"} fontSize={"12px"} letterSpacing={"-0.3px"}>
                  사업자등록번호: 835-86-02785
                </Text>
              </Flex>
              <HStack marginBottom={"24px"}>
                <Text color={"gray"} fontSize={"12px"} letterSpacing={"-0.3px"}>
                  통신판매업신고: 2023-서울삼성-0000
                </Text>
                <Divider
                  orientation="vertical"
                  height="16px"
                  borderColor="#D9D9D9"
                  mx={2}
                />

                <Text color={"gray"} fontSize={"12px"} letterSpacing={"-0.3px"}>
                  email: help@artant.co.kr
                </Text>
              </HStack>
            </Box>
          </Box>

          <Box>
            <Text fontWeight={"500"} fontSize={"24px"}>
              고객센터 0000-0000
            </Text>{" "}
            <Flex fontSize={"12px"} alignItems={"center"}>
              고객센터 바로가기
              <Box width="4px" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
              >
                <path d="M1 1L5 5L1 9" stroke="black" />
              </svg>
            </Flex>
          </Box>
        </Flex>

        <Text fontSize={"13px"}>소비자피해보상</Text>
        <Text color={"gray"} fontSize={"12px"} marginBottom={1}>
          고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한
          구매 안전서비스로 소비자 피해보상 보험 서비스를 이용하실 수 있습니다.
        </Text>
        <Text color={"gray"} fontSize={"12px"} marginBottom={1}>
          본 사이트의 모든 정보, 콘텐츠, UI등에 대한 복제, 전송, 배포, 스크래핑
          등의 행위는 엄격히 금지됩니다.
        </Text>
        <Text color={"gray"} fontSize={"12px"} marginBottom={1}>
          Copyright ARTANT Inc. All Rights Reserved.
        </Text>
        <Box height={"48px"} />
      </Box>
    </Box>
  );
}
