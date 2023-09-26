import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  Input,
  Button,
} from "@chakra-ui/react";
import PaginationController from "../components/commons/PaginationController";
import SearchBar from "../components/commons/SearchBar";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ArtantButton from "../components/commons/ArtantButton";
import BlackButton from "../components/commons/Button/BlackButton";
import { Rating } from "@mui/material";
import { Star } from "@mui/icons-material";
import StarRating from "../components/commons/StarRating";
import { getPurchase } from "../api";
import { useQuery } from "@tanstack/react-query";

export default function Review() {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);
  const { isLoading, data } = useQuery(["Purchase"], getPurchase);

  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      width={"1280px"}
      alignSelf={"center"}
      mt={"32px"}
      mb={"120px"}
    >
      <Flex
        alignSelf={"stretch"}
        justifyContent={"space-between"}
        paddingBottom={"24px"}
        borderBottom={"2px solid black"}
      >
        <Text textStyle={"h2"} fontWeight={"400"}>
          구매내역 및 리뷰
        </Text>
        <SearchBar
          placeholder={"구매 내역 검색"}
          width={"400px"}
          height={undefined}
          type={undefined}
          onSearch={undefined}
        />
      </Flex>
      <Box height={"40px"} />
      <Flex flexDirection={"column"} gap={"96px"} alignSelf={"stretch"}>
        {data &&
          data.map((item, index) => (
            <Flex gap={"40px"} alignSelf={"stretch"}>
              <Flex flexDirection={"column"} alignSelf={"stretch"}>
                <Flex
                  width={"828px"}
                  height={"62px"}
                  padding={"15px 8px"}
                  gap={"8px"}
                  alignItems={"center"}
                  alignSelf={"stretch"}
                  background="#F9F9FF"
                >
                  <Flex
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={"828px"}
                  >
                    <Flex width={"518px"} gap={"20px"} alignItems={"center"}>
                      <Flex gap={"8px"} alignItems={"center"}>
                        <Image
                          width={"32px"}
                          height={"32px"}
                          src={item.product.shop_avatar}
                          objectFit={"cover"}
                        />
                        <Text textStyle={"h9"}>{item.product.shop_name}</Text>
                      </Flex>

                      <Flex gap={"8px"} alignItems={"center"}>
                        <Text textStyle={"bodyXs14R"}>
                          {item.order_date} 주문
                        </Text>
                        <Text textStyle={"bodyXs14R"}>•</Text>
                        <Text textStyle={"bodyMini"}>주문번호</Text>
                        <Text textStyle={"bodyMini"}>271000020471</Text>
                      </Flex>
                    </Flex>
                    <Text textStyle={"bodyMini"} fontWeight={500}>
                      {item.product.price.toLocaleString()}원
                    </Text>
                  </Flex>
                </Flex>
                <Flex width={"828px"}>
                  <Flex padding={"20px 0px 20px 10px"} flexDirection={"column"}>
                    <Image
                      width={"120px"}
                      height={"120px"}
                      src={item.product.thumbnail}
                      objectFit={"cover"}
                    />
                  </Flex>
                  <Flex
                    padding={"20px"}
                    flexDirection={"column"}
                    gap={"24px"}
                    flex={"1 0 0"}
                  >
                    <Flex flexDirection={"column"} gap={"6px"}>
                      <Text textStyle={"h9"} fontWeight={700}>
                        {item.product.name}
                      </Text>
                      <Text textStyle={"bodyXs14M"}>
                        {item.product.price.toLocaleString()}원
                      </Text>
                      <Flex gap={"4px"} fontSize={"14px"}>
                        옵션 :
                        <Flex flexDirection={"column"} gap={"4px"}>
                          <Text color={"#666"}>200cm x 300cm</Text>
                          <Text color={"#666"}>액자 없음</Text>
                        </Flex>
                      </Flex>
                      <Text fontSize={"14px"}>배송비: 무료배송</Text>
                    </Flex>
                    <Flex
                      padding={"24px"}
                      flexDirection={"column"}
                      gap={"12px"}
                      borderRadius={"5px"}
                      border={"1px solid #D9D9D9"}
                    >
                      <Flex
                        gap={"6px"}
                        flexDirection={"column"}
                        rowGap={"6px"}
                        fontSize={"14px"}
                      >
                        <Flex>
                          <Text textStyle={"bodyXs14M"}>별점</Text>
                          <Text>
                            (필수<span style={{ color: "#F12E24" }}>*</span>)
                          </Text>
                        </Flex>
                        <Rating />
                      </Flex>
                      <Flex flexDirection={"column"}>
                        <Text textStyle={"bodyXs14M"}>리뷰 쓰기</Text>
                        <Input
                          placeholder="다른 고객님에게 도움이 되도록 삼품에 대한 솔직한 평가를 남겨 주세요."
                          fontSize={"14px"}
                          value={value}
                          onChange={handleChange}
                        />
                        <Text fontSize={"12px"} alignSelf={"flex-end"}>
                          {value.length}
                        </Text>
                      </Flex>
                      <Flex flexDirection={"column"}>
                        <Text textStyle={"bodyXs14M"}>사진 첨부</Text>
                        <Flex alignItems={"center"} gap={"20px"}>
                          <Flex alignItems={"center"} gap={"8px"}>
                            <Button
                              background={"white"}
                              borderRadius={"5px"}
                              border={"1px solid #D9D9D9"}
                            >
                              <Flex
                                fontSize={"13px"}
                                alignItems={"center"}
                                fontWeight={"400"}
                              >
                                <SvgPlus /> 사진첨부
                              </Flex>
                            </Button>
                            <Text fontSize={"13px"}>0 / 5</Text>
                          </Flex>
                          <Text fontSize={"12px"}>
                            사진은 최대 20MB 이하의 JPG, PNG, GIF 파일 5장까지
                            첨부 가능합니다.
                          </Text>
                        </Flex>
                        <Flex gap={"8px"} alignSelf={"flex-end"}>
                          <ArtantButton
                            title={"취소"}
                            width={"74px"}
                            onClick={() => {}}
                          />
                          <BlackButton
                            title={"등록하기"}
                            borderRadius={"5px"}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex width={"828px"}>
                  <Flex padding={"20px 0px 20px 10px"} flexDirection={"column"}>
                    <Image
                      width={"120px"}
                      height={"120px"}
                      src={item.product.thumbnail}
                      objectFit={"cover"}
                    />
                  </Flex>
                  <Flex
                    padding={"20px"}
                    flexDirection={"column"}
                    gap={"24px"}
                    flex={"1 0 0"}
                  >
                    <Flex flexDirection={"column"} gap={"6px"}>
                      <Text textStyle={"h9"} fontWeight={700}>
                        {item.product.name}
                      </Text>
                      <Text textStyle={"bodyXs14M"}>
                        {item.product.price.toLocaleString()}원
                      </Text>
                      <Flex gap={"4px"} fontSize={"14px"}>
                        옵션 :
                        <Flex flexDirection={"column"} gap={"4px"}>
                          <Text color={"#666"}>200cm x 300cm</Text>
                          <Text color={"#666"}>액자 없음</Text>
                        </Flex>
                      </Flex>
                      <Text fontSize={"14px"}>배송비: 무료배송</Text>
                    </Flex>
                    <Flex
                      padding={"24px"}
                      flexDirection={"column"}
                      gap={"12px"}
                      borderRadius={"5px"}
                      background={"#FAFAFA"}
                    >
                      <Flex
                        gap={"6px"}
                        flexDirection={"column"}
                        rowGap={"6px"}
                        fontSize={"14px"}
                      >
                        <Text textStyle={"bodyXs14M"}>작성한 리뷰</Text>
                      </Flex>
                      <Flex flexDirection={"column"} gap={"12px"}>
                        <StarRating
                          star={5}
                          reviews={undefined}
                          include_count={false}
                        ></StarRating>
                        <Text fontSize={"14px"}>
                          제 새 침실에 걸 그림입니다. 설명대로 튜브에 포장되어
                          있었고 나무 위에 펴서 액자에 넣었습니다. 정말
                          아름답습니다. 이 그림을 훌륭하게 그려주셔서 정말
                          감사합니다.
                        </Text>
                      </Flex>
                      <Flex flexDirection={"column"}>
                        <Flex gap={"8px"} alignSelf={"flex-end"}>
                          <ArtantButton
                            title={"리뷰 수정"}
                            width={"102px"}
                            onClick={() => {}}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                width={"412px"}
                flexDirection={"column"}
                padding={"20px"}
                gap={"8px"}
                background={"#F9F9F9"}
                alignSelf={"stretch"}
                height={"min"}
              >
                <Flex fontWeight={"700"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_746_10047"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_746_10047)">
                      <path
                        d="M12 17.1096C13.8167 15.6737 15.1875 14.2974 16.1125 12.9808C17.0375 11.6641 17.5 10.3872 17.5 9.15C17.5 8.12627 17.3131 7.25334 16.9394 6.53123C16.5657 5.80913 16.1 5.22467 15.5423 4.77787C14.9846 4.33109 14.3869 4.00642 13.7492 3.80385C13.1115 3.60128 12.5284 3.5 12 3.5C11.4716 3.5 10.8885 3.60128 10.2508 3.80385C9.61309 4.00642 9.01538 4.33109 8.4577 4.77787C7.9 5.22467 7.43429 5.80913 7.06058 6.53123C6.68686 7.25334 6.5 8.12627 6.5 9.15C6.5 10.3872 6.9625 11.6641 7.8875 12.9808C8.8125 14.2974 10.1833 15.6737 12 17.1096ZM12 18.3846C9.81667 16.741 8.1875 15.1538 7.1125 13.6231C6.0375 12.0923 5.5 10.6012 5.5 9.14973C5.5 8.05339 5.69647 7.09218 6.08942 6.26608C6.48237 5.43998 6.98867 4.74616 7.6083 4.18463C8.22795 3.62308 8.92505 3.20192 9.6996 2.92115C10.4741 2.64038 11.2409 2.5 12 2.5C12.7591 2.5 13.5259 2.64038 14.3004 2.92115C15.075 3.20192 15.7721 3.62308 16.3917 4.18463C17.0113 4.74616 17.5176 5.43998 17.9106 6.26608C18.3035 7.09218 18.5 8.05339 18.5 9.14973C18.5 10.6012 17.9625 12.0923 16.8875 13.6231C15.8125 15.1538 14.1833 16.741 12 18.3846ZM12 10.5C12.4218 10.5 12.7772 10.3555 13.0663 10.0663C13.3555 9.77725 13.5 9.4218 13.5 9C13.5 8.5782 13.3555 8.22275 13.0663 7.93365C12.7772 7.64455 12.4218 7.5 12 7.5C11.5782 7.5 11.2228 7.64455 10.9337 7.93365C10.6446 8.22275 10.5 8.5782 10.5 9C10.5 9.4218 10.6446 9.77725 10.9337 10.0663C11.2228 10.3555 11.5782 10.5 12 10.5ZM5.5 21.5V20.5H18.5V21.5H5.5Z"
                        fill="#1C1B1F"
                      />
                    </g>
                  </svg>
                  기본 배송지: 기본배송지
                </Flex>
                [16884] 경기도 용인시 처인구 모현읍 능곡로 13-6, 능원한백 b동
                305호
                <Flex
                  background={"white"}
                  border={"1px solid #D9D9D9"}
                  alignSelf={"stretch"}
                  padding={"10px"}
                  justifyContent={"center"}
                  color={"#83AD6F"}
                  fontSize={"12px"}
                  fontWeight={700}
                >
                  2023.09.07 배송 완료
                </Flex>
                <Flex
                  background={"white"}
                  border={"1px solid #D9D9D9"}
                  alignSelf={"stretch"}
                  padding={"10px"}
                  justifyContent={"center"}
                  fontSize={"12px"}
                  fontWeight={700}
                >
                  영수증
                </Flex>
                <Flex
                  background={"white"}
                  border={"1px solid #D9D9D9"}
                  alignSelf={"stretch"}
                  padding={"10px"}
                  justifyContent={"center"}
                  fontSize={"12px"}
                  fontWeight={700}
                >
                  교환 / 반품 문의
                </Flex>
              </Flex>
            </Flex>
          ))}
      </Flex>

      <Box height={"60px"} />
      <Flex alignSelf={"flex-start"}>
        <PaginationController
          itemCount={1}
          pagination={10}
          handleChange={() => {}}
        />
      </Flex>
    </Flex>
  );
}

function SvgPlus() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask
        id="mask0_1273_12146"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1273_12146)">
        <path
          d="M11.5 12.5H6V11.5H11.5V6H12.5V11.5H18V12.5H12.5V18H11.5V12.5Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
}
