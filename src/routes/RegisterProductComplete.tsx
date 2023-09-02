import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import Footer from "../components/commons/Footer";
import ProfileHeader from "../components/People/ProfileHeader";
import RegisterProcess from "../components/RegisterShop/RegisterProcess";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useUser from "../lib/useUser";
import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../api";

export default function RegisterShopName() {
  const { shopPk, productPk } = useParams();

  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성
  const { isLoading, data } = useQuery(
    ["products", productPk],
    getProductDetails
  );

  return (
    <Flex
      display={"inline-flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"120px"}
    >
      <Flex
        display={"inline-flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"60px"}
      >
        <RegisterProcess currentPage={2}></RegisterProcess>
        <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"60px"}>
          <Flex
            width={"1280px"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"60px"}
          >
            {" "}
            <Flex
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"40px"}
            >
              {" "}
              <Flex
                height={"68px"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"12px"}
              >
                {" "}
                <Text
                  color="var(--maincolorstextblack-222222, #222)"
                  fontFamily="Spoqa Han Sans Neo"
                  fontSize="30px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="normal"
                  letterSpacing="0.5px"
                >
                  첫번째 목록을 성공적으로 작성했습니다!
                </Text>
                <Text
                  color="var(--maincolorstextblack-222222, #222)"
                  fontFamily="Spoqa Han Sans Neo"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="140%" /* 이렇게 설정하면 19.6px로 계산됩니다. */
                  letterSpacing="-0.042px"
                >
                  첫 번째 판매에 한 걸음 더 가까워졌습니다. 목록을 몇 개 더
                  추가해 보세요. 5개부터 시작하는 것이 좋습니다.
                  <br /> 이를 통해 구매자는 귀하의 매장을 찾을 수있는 더 많은
                  기회를 얻을 수 있습니다.
                </Text>
              </Flex>
            </Flex>
            {isLoading ? (
              <Box alignSelf={"stretch"} height={"500px"} />
            ) : (
              <Flex flexDirection={"column"} alignItems={"flex-start"}>
                <Image
                  objectFit={"cover"}
                  width={"290px"}
                  height={"247px"}
                  src={data["thumbnail"]}
                />
                <Flex
                  width={"290px"}
                  padding={"10px 0px 8px 8px"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                >
                  {" "}
                  <Flex
                    alignSelf={"stretch"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"5px"}
                  >
                    {" "}
                    <Text
                      color="var(--maincolorstextblack-222222, #222)"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="normal"
                      textTransform="capitalize"
                    >
                      [{data["category"]}]
                    </Text>
                    <Text
                      color="var(--maincolorstextblack-222222, #222)"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="130%" /* 이렇게 설정하면 18.2px로 계산됩니다. */
                      letterSpacing="0.035px"
                      textTransform="capitalize"
                    >
                      {data["name"]} - {data["shop_name"]} 작가
                    </Text>
                  </Flex>
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="normal"
                    letterSpacing="-0.3px"
                  >
                    {data["price"].toLocaleString()}원
                  </Text>
                </Flex>
              </Flex>
            )}
          </Flex>
          <Flex
            width={"1280px"}
            justifyContent={"center"}
            gap={"12px"}
            alignItems={"center"}
          >
            <Flex gap={"12px"} alignItems={"flex-start"}>
              <Button
                alignItems={"center"}
                padding={"10px 24px"}
                backgroundColor={"transparent"}
                borderRadius={"100px"}
                border={"1px solid var(--maincolorstextblack-222222, #222)"}
              >
                <Text
                  color="var(--maincolorstextblack-222222, #222)"
                  css={`
                    /* BODY/S_16/M */
                    font-family: "Spoqa Han Sans Neo";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    letter-spacing: 0.048px;
                  `}
                >
                  미리보기
                </Text>
              </Button>
              <Button
                alignContent={"center"}
                justifyContent={"center"}
                padding={"10px 24px"}
                backgroundColor="var(--maincolorsbgblack-222222, #222)"
                borderRadius={"100px"}
                border={"1px solid var(--maincolorstextblack-222222, #222)"}
              >
                <Text
                  color="var(--maincolorstext-white, #FFF);"
                  css={`
                    /* BODY/S_16/M */
                    font-family: "Spoqa Han Sans Neo";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    letter-spacing: 0.048px;
                  `}
                >
                  저장하고 계속
                </Text>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
