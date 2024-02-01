import {
  Button,
  Checkbox,
  Flex,
  Input,
  Text,
  Image,
  FormControl,
  Switch,
  Select,
  Radio,
} from "@chakra-ui/react";
import BlackButton from "../../components/commons/Button/BlackButton";
import PaginationController from "../../components/commons/PaginationController";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useUser from "../../lib/useUser";
import { getShopProducts } from "../../services/shopService";

export default function ShopManagerListings() {
  const { user } = useUser();
  const shopPK = user?.shop.pk || null;
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery(
    ["shopProduct", shopPK, page],
    getShopProducts
  );

  const handlePageChange = (event, value) => {
    setPage(value); // Update the page when the user changes it
  };

  return (
    <Flex flexDirection={"column"} gap={"32px"}>
      <Flex
        maxW={"1340px"}
        padding={"32px 0px 24px 60px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"24px"}
        alignSelf={"stretch"}
        borderBottom={"2px solid #F1F1F5"}
        fontWeight={"500"}
        fontSize={"22px"}
      >
        작품 목록
        <Flex gap={"24px"}>
          <Input placeholder="제목, 태그 검색" width={"400px"} />
          <Link to={"/your/shops/me/listings/create"}>
            <Button
              background="white"
              borderRadius={"5px"}
              border={
                "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_1086_8650"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1086_8650)">
                  <path
                    d="M11.5 12.5H6V11.5H11.5V6H12.5V11.5H18V12.5H12.5V18H11.5V12.5Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              작품 추가
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Flex padding={"0px 0px 120px 60px"} gap={"60px"}>
        <Flex
          width={"980px"}
          flexDirection={"column"}
          gap={"40px"}
          alignSelf={"stretch"}
        >
          <Flex
            padding={"24px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            borderRadius={"5px"}
            background={"#F3F6FF"}
          >
            <Flex gap={"4px"}>
              <Gift />
              <Flex
                flexDirection={"column"}
                paddingTop={"2px"}
                gap={"8px"}
                fontSize={"13px"}
                width={"500px"}
              >
                <Text fontSize={"16px"} fontWeight={"500"}>
                  스토어에 무료 배송 설정
                </Text>
                <Text>
                  30,000원 이상 주문에 무료 배송을 제공하면 검색 결과에서
                  우선순위를 차지할 수 있습니다. 대량 가격 책정 도구를 사용하면
                  쉽게 설정할 수 있습니다. <Text as="u">자세히 알아보기</Text>
                </Text>
              </Flex>
            </Flex>
            <Flex justifyContent={"flex-end"} gap={"8px"} alignSelf={"stretch"}>
              <BlackButton
                title={"해제"}
                borderRadius={"100px"}
                type={true}
                width="min"
              />
              <BlackButton
                title={"시작하기"}
                borderRadius={"100px"}
                width="min"
              />
            </Flex>
          </Flex>
          <Flex flexDirection={"column"} gap={"20px"}>
            <Flex alignItems={"center"} gap={"8px"}>
              <Flex
                fontSize={"13px"}
                padding={"8px 12px"}
                alignItems={"center"}
                gap={"2px"}
                borderRadius={"5px"}
                border={"1px solid #D9D9D9"}
              >
                <Checkbox />
                전체선택
              </Flex>
              <Flex alignItems={"center"} gap={"-1px"}>
                <Flex
                  fontSize={"13px"}
                  padding={"11px 16px"}
                  height={"40px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"5px 0px 0px 5px"}
                  border={
                    "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
                  }
                >
                  활성화
                </Flex>
                <Flex
                  fontSize={"13px"}
                  padding={"11px 16px"}
                  height={"40px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"0px 5px 5px 0px"}
                  border={
                    "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
                  }
                >
                  선택삭제
                </Flex>
              </Flex>
              <Flex
                padding={"8px 8px 8px 16px"}
                height={"40px"}
                gap={"10px"}
                fontSize={"13px"}
                alignItems={"center"}
                borderRadius={"5px"}
                border={
                  "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
                }
              >
                편집 옵션
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1086_7060"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1086_7060)">
                    <path
                      d="M12.0015 14.6538L7.59766 10.25H16.4053L12.0015 14.6538Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDirection={"column"} gap={"40px"}>
            <Flex gap={"40px"} flexWrap={"wrap"}>
              {data &&
                data.products.map((item, index) => (
                  <ShopManagerListingsCard key={index} item={item} />
                ))}
            </Flex>
          </Flex>
          <PaginationController
            page={page}
            itemCount={data && data.products.length}
            pagination={9}
            handleChange={handlePageChange}
          />
        </Flex>
        <Tab />
      </Flex>
    </Flex>
  );
}

function Tab() {
  return (
    <Flex width={"240px"} flexDirection={"column"} gap={"24px"}>
      <Flex
        padding={"12px 20px"}
        flexDirection={"column"}
        borderRadius={"5px"}
        border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
        background={"var(--maincolorsbggrayf-9-f-9-f-9, #F9F9F9)"}
        textAlign={"center"}
        width={"240px"}
        fontWeight={"500"}
        fontSize={"13px"}
      >
        빠른 편집
      </Flex>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        alignSelf={"stretch"}
      >
        통계
        <FormControl
          display="flex"
          alignItems="center"
          gap="8px"
          width={"80px"}
        >
          <Text fontSize={"12px"} fontWeight={"500"} textAlign={"center"}>
            off
          </Text>
          <Switch id="email-alerts" colorScheme="gray" />
        </FormControl>
      </Flex>
      <Flex flexDirection={"column"} gap={"6px"} alignSelf={"stretch"}>
        정렬
        <Select
          placeholder="만료 최신순"
          width={"240px"}
          height={"40px"}
          fontSize={"13px"}
        >
          <option value="option1">1월</option>
          <option value="option2">2월</option>
          <option value="option3">3월</option>
        </Select>
      </Flex>
      <Flex flexDirection={"column"} gap={"6px"}>
        <Text>목록 상태</Text>
        <Flex gap={"8px"} flexDirection={"column"}>
          <RadioItem title={"활성"} />
          <RadioItem title={"초안"} />
          <RadioItem title={"만료"} />
          <RadioItem title={"품절"} />
          <RadioItem title={"비활성"} />
        </Flex>
      </Flex>
      <Flex gap={"4px"} fontSize={"13px"}>
        <Checkbox />
        추천목록
      </Flex>
      <Flex gap={"6px"} flexDirection={"column"}>
        <Text fontSize={"12px"} fontWeight={"500"}>
          섹션
        </Text>
        <Text fontSize={"13px"} as="u">
          섹션 관리
        </Text>
      </Flex>
      <Flex gap={"6px"} flexDirection={"column"}>
        <Text fontSize={"12px"} fontWeight={"500"}>
          배송 프로필
        </Text>
        <Text fontSize={"13px"} as="u">
          배송 프로필 사용
        </Text>
      </Flex>
      <Flex gap={"6px"} flexDirection={"column"}>
        <Text fontSize={"12px"} fontWeight={"500"}>
          반품 & 교환 정책
        </Text>
        <Text fontSize={"13px"} as="u">
          정책 만들기
        </Text>
      </Flex>
      <Flex gap={"6px"} flexDirection={"column"}>
        <Text fontSize={"12px"} fontWeight={"500"}>
          동영상 목록
        </Text>
        <Flex flexDirection={"column"}>
          <RadioItem title={"전체"} />
          <RadioItem title={"동영상 포함"} />
          <RadioItem title={"동영상 미포함"} />
        </Flex>
      </Flex>
      <Flex gap={"6px"} flexDirection={"column"}>
        <Text fontSize={"12px"} fontWeight={"500"}>
          태그
        </Text>
        <Select
          placeholder="전체"
          width={"240px"}
          height={"40px"}
          fontSize={"13px"}
        >
          <option value="option1">1월</option>
          <option value="option2">2월</option>
          <option value="option3">3월</option>
        </Select>
      </Flex>
    </Flex>
  );
}

function Gift() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask
        id="mask0_1026_12358"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1026_12358)">
        <path
          d="M11.5 19.7135V12.2866L5 8.52309V15.6039C5 15.7064 5.02564 15.8026 5.07692 15.8923C5.12821 15.9821 5.20513 16.059 5.3077 16.1231L11.5 19.7135ZM12.5 19.7135L18.6923 16.1231C18.7949 16.059 18.8718 15.9821 18.9231 15.8923C18.9744 15.8026 19 15.7064 19 15.6039V8.52309L12.5 12.2866V19.7135ZM11.1923 20.6866L4.80768 17.0077C4.55513 16.8628 4.35737 16.666 4.21442 16.4173C4.07147 16.1686 4 15.8994 4 15.6096V8.39039C4 8.10065 4.07147 7.83143 4.21442 7.58271C4.35737 7.33398 4.55513 7.13718 4.80768 6.99231L11.1923 3.31346C11.4449 3.16859 11.7141 3.09616 12 3.09616C12.2859 3.09616 12.5551 3.16859 12.8077 3.31346L19.1923 6.99231C19.4449 7.13718 19.6426 7.33398 19.7856 7.58271C19.9285 7.83143 20 8.10065 20 8.39039V15.6096C20 15.8994 19.9285 16.1686 19.7856 16.4173C19.6426 16.666 19.4449 16.8628 19.1923 17.0077L12.8077 20.6866C12.5551 20.8314 12.2859 20.9039 12 20.9039C11.7141 20.9039 11.4449 20.8314 11.1923 20.6866ZM15.7115 9.27501L18.425 7.71346L12.3077 4.17309C12.2051 4.10899 12.1026 4.07694 12 4.07694C11.8974 4.07694 11.7949 4.10899 11.6923 4.17309L9.3 5.54808L15.7115 9.27501ZM12 11.4269L14.7 9.85964L8.275 6.14616L5.575 7.71346L12 11.4269Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
}

function RadioItem({ title }) {
  return (
    <Flex flexDirection={"column"}>
      <Flex gap={"8px"} fontSize={"13px"}>
        <Flex gap={"4px"} color={"#666"}>
          <Radio />
          {title}
        </Flex>
        0
      </Flex>
    </Flex>
  );
}

function ShopManagerListingsCard({ item }) {
  const navigate = useNavigate();

  return (
    <Flex
      width={"300px"}
      padding={"10px"}
      flexDirection={"column"}
      gap={"8px"}
      border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
    >
      <Checkbox
        position={"absolute"}
        width={"18px"}
        height={"18px"}
        background={"white"}
        zIndex={1}
      />
      <Link to={`/listings/${item.pk}`}>
        {" "}
        <Image
          objectFit={"cover"}
          src={item.thumbnail}
          width={"280px"}
          height={"220px"}
        ></Image>
      </Link>

      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"8px"}
        fontSize={"13px"}
      >
        <Text fontSize={"14px"} noOfLines={2}>
          {item.name}
        </Text>
        <Text>재고 : {item.stock || "1"}개</Text>
        <Text>가격: {item.price}원</Text>
        <Text color={"#9E76BE"}>ARTANT에서 활성화됨</Text>
        <Text fontSize={"12px"}>2023년 12월 18일 갱신</Text>
      </Flex>
      <Flex
        gap={"8px"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        width={"full"}
      >
        <Button background={"white"} onClick={() => navigate(`${item.pk}`)}>
          <Flex gap={"4px"} alignItems={"center"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_1086_191"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1086_191)">
                <path
                  d="M18.4497 8.10052L15.8891 5.55075L17.1458 4.29361C17.3414 4.09787 17.584 4 17.8736 4C18.1631 4 18.4057 4.09787 18.6014 4.29361L19.7005 5.39311C19.8961 5.58885 19.9959 5.82957 19.9999 6.11527C20.0038 6.40099 19.908 6.64172 19.7123 6.83746L18.4497 8.10052ZM17.7131 8.84337L6.56063 20H4V17.4384L15.1524 6.28177L17.7131 8.84337Z"
                  fill="#777777"
                />
              </g>
            </svg>
            작품 편집
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
}
