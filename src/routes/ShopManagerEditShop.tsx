import {
  Button,
  Flex,
  Input,
  Text,
  Image,
  Divider,
  Select,
  Box,
  Textarea,
} from "@chakra-ui/react";
import BlackButton from "../components/commons/Button/BlackButton";
import SearchBar from "../components/commons/SearchBar";
import MessageTab from "../components/Messages/MessageTab";
import ArtantButton from "../components/commons/ArtantButton";

export default function ShopManagerEditShop() {
  return (
    <Flex flexDirection={"column"} gap={"24px"}>
      <Flex
        flexDirection={"column"}
        width={"1340px"}
        padding={"32px 0px 0px 60px"}
        alignItems={"center"}
        gap={"24px"}
        alignSelf={"stretch"}
      >
        <Flex
          width={"max"}
          alignSelf={"stretch"}
          fontSize={"22px"}
          fontWeight={"500"}
          paddingBottom={"24px"}
          borderBottom={"2px"}
        >
          <Text alignSelf={"stretch"} width={"1280px"}>
            스토어 설정
          </Text>
        </Flex>
        <Flex flexDirection={"column"} gap={"36px"}>
          <Flex
            flexDirection={"column"}
            gap={"30px"}
            alignItems={"center"}
            alignSelf={"stretch"}
          >
            <Flex flexDirection={"column"} gap={"30px"} alignSelf={"stretch"}>
              <EditAvatar />
              <Divider />
              <EditAnnouncement />
              <Divider />
              <EditArt />
              <Divider />
              <Flex gap={"30px"} flexDirection={"column"}>
                <Flex gap={"40px"}>
                  <Flex flexDirection={"column"} gap={"45px"} width={"248px"}>
                    <Text fontSize={"18px"} fontWeight={"500"}>
                      에바아트프린트 소개
                    </Text>
                    <Flex gap={"36px"}>
                      <Flex flexDirection={"column"} gap={"2px"}>
                        <Text fontSize={"13px"}>판매량</Text>
                        <Text fontSize={"22px"} fontWeight={"500"}>
                          21,967
                        </Text>
                      </Flex>
                      <Flex flexDirection={"column"} gap={"2px"}>
                        <Text fontSize={"13px"}>On ArtAnt since</Text>
                        <Text fontSize={"22px"} fontWeight={"500"}>
                          2018
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex flexDirection={"column"} gap={"40px"}>
                    <Flex
                      flexDirection={"column"}
                      gap={"24px"}
                      alignSelf={"stretch"}
                    >
                      <Flex
                        width={"760px"}
                        flexDirection={"column"}
                        gap={"24px"}
                        alignSelf={"stretch"}
                        background={"#FAFAFA"}
                        borderRadius={"5px"}
                        padding={"24px"}
                        textAlign={"center"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <Flex flexDirection={"column"} gap={"8px"}>
                          <Text fontSize={"16px"}>
                            동영상과 최대 5장의 사진을 추가하세요.
                          </Text>
                          <Text color={"#555"}>
                            프로세스,작업 공간 또는 구매자에게 영감을 줄 수 있는
                            모든 것에 대한 사진을 공유하세요.
                          </Text>
                        </Flex>
                        <Flex gap={"40px"}>
                          <Button
                            display={"flex"}
                            width={"120px"}
                            height={"120px"}
                            padding={"24px"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            gap={"20px"}
                            border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                            variant="unstyled" // 클릭 효과와 색상 없애기
                            disabled={false}
                            onClick={() => {}}
                          >
                            <SvgCamera />
                            <Text
                              color="var(--maincolorstextblack-222222, #222)"
                              textAlign="center"
                              fontFamily="Spoqa Han Sans Neo"
                              fontSize="13px"
                              fontStyle="normal"
                              fontWeight={400}
                              lineHeight="normal"
                              letterSpacing="-0.3px"
                              mt={"-12px"}
                            >
                              사진 추가
                            </Text>
                          </Button>
                          <Button
                            display={"flex"}
                            width={"120px"}
                            height={"120px"}
                            padding={"24px"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            gap={"20px"}
                            border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                            variant="unstyled" // 클릭 효과와 색상 없애기
                            disabled={false}
                            onClick={() => {}}
                          >
                            <SvgVideo />
                            <Text
                              color="var(--maincolorstextblack-222222, #222)"
                              textAlign="center"
                              fontFamily="Spoqa Han Sans Neo"
                              fontSize="13px"
                              fontStyle="normal"
                              fontWeight={400}
                              lineHeight="normal"
                              letterSpacing="-0.3px"
                              mt={"-12px"}
                            >
                              동영상 추가
                            </Text>
                          </Button>
                        </Flex>
                      </Flex>
                      <Flex
                        padding={"24px"}
                        flexDirection={"column"}
                        gap={"8px"}
                        alignSelf={"stretch"}
                        borderRadius={"5px"}
                      >
                        <Flex gap={"2px"}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <mask
                              id="mask0_1193_14934"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            >
                              <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1193_14934)">
                              <path
                                d="M11.5 12.5H6V11.5H11.5V6H12.5V11.5H18V12.5H12.5V18H11.5V12.5Z"
                                fill="#1C1B1F"
                              />
                            </g>
                          </svg>
                          스토리 헤드라인 추가
                        </Flex>
                        <Box height={"8px"} />
                        <Input placeholder="입력하세요" width={"944px"} />
                        <Box height={"8px"} />
                        <Flex gap={"4px"} justifyContent={"flex-end"}>
                          <BlackButton
                            title={"저장"}
                            borderRadius={"100px"}
                            width="min"
                          />
                          <BlackButton
                            title={"취소"}
                            borderRadius={"100px"}
                            type={true}
                            width="min"
                          />
                        </Flex>
                      </Flex>
                      <Flex
                        padding={"24px"}
                        flexDirection={"column"}
                        gap={"8px"}
                        alignSelf={"stretch"}
                        borderRadius={"5px"}
                      >
                        <Flex gap={"2px"}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <mask
                              id="mask0_1193_14934"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            >
                              <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1193_14934)">
                              <path
                                d="M11.5 12.5H6V11.5H11.5V6H12.5V11.5H18V12.5H12.5V18H11.5V12.5Z"
                                fill="#1C1B1F"
                              />
                            </g>
                          </svg>
                          당신의 이야기를 추가하세요. 쇼핑객에게 귀하의
                          비즈니스에 대해 간략하게 설명하세요.
                        </Flex>
                        <Box height={"8px"} />
                        <Input placeholder="입력하세요" width={"944px"} />
                        <Box height={"8px"} />
                        <Flex gap={"4px"} justifyContent={"flex-end"}>
                          <BlackButton
                            title={"저장"}
                            borderRadius={"100px"}
                            width="min"
                          />
                          <BlackButton
                            title={"취소"}
                            borderRadius={"100px"}
                            type={true}
                            width="min"
                          />
                        </Flex>
                      </Flex>
                      <Flex flexDirection={"column"} gap={"12px"}>
                        <Text>SNS 계정을 연동하세요</Text>
                        <Button
                          background={"white"}
                          borderRadius={"100px"}
                          border={"1px"}
                          width={"146px"}
                        >
                          <Flex
                            fontSize={"16px"}
                            fontWeight={"500"}
                            alignItems={"center"}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <mask
                                id="mask0_1210_9148"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              >
                                <rect width="24" height="24" fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_1210_9148)">
                                <path
                                  d="M11.5 12.5H6V11.5H11.5V6H12.5V11.5H18V12.5H12.5V18H11.5V12.5Z"
                                  fill="#1C1B1F"
                                />
                              </g>
                            </svg>
                            SNS 계정 연동
                          </Flex>
                        </Button>
                      </Flex>
                    </Flex>
                    <Flex flexDirection={"column"} gap={"12px"}>
                      <Text fontWeight={"500"}>샵 멤버</Text>
                      <Flex gap={"12px"} width={"760px"} alignItems={"center"}>
                        <Image
                          src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                          width={"48px"}
                          height={"48px"}
                          borderRadius={"100px"}
                        />
                        <Text color={"#666"}>
                          자신에 대한 재미있는 사실을 담은 개인 소개를
                          추가하세요.
                        </Text>
                      </Flex>
                      <Flex flexDirection={"column"} gap={"12px"}>
                        <Input placeholder="회원 이름 추가" />
                        <Input placeholder="역할" />
                        <Textarea placeholder="내용" />
                        <Flex gap={"4px"} justifyContent={"flex-end"}>
                          <BlackButton
                            title={"저장"}
                            borderRadius={"100px"}
                            width="min"
                          />
                          <BlackButton
                            title={"취소"}
                            borderRadius={"100px"}
                            type={true}
                            width="min"
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Divider />
                <Flex flexDirection={"column"}>
                  <Flex>
                    <Text width={"352px"} padding={"24px"}>
                      쇼핑 정책
                    </Text>
                    <Text
                      color={"#666"}
                      alignSelf={"stretch"}
                      padding={"24px"}
                      borderBottom={"1px solid #EEE"}
                      width={"928px"}
                    >
                      최종 업데이트 : 2023년 7월 28일
                    </Text>
                  </Flex>
                  <Flex>
                    <Text width={"352px"} padding={"24px"}>
                      상품 정책
                    </Text>
                    <Flex
                      gap={"20px"}
                      width={"928px"}
                      padding={"24px"}
                      borderBottom={"1px solid #EEE"}
                    >
                      <Flex alignSelf={"stretch"} flexDirection={"column"}>
                        <Text>간단한 상점 정책 설정</Text>
                        <Text>
                          몇초만에 매장 정책을 만들 수 있는 빠른 템플릿을 제공해
                          드립니다.
                        </Text>
                      </Flex>
                      <BlackButton
                        title={"지금 사용해보세요"}
                        borderRadius={"100px"}
                        width="min"
                      />
                    </Flex>
                  </Flex>
                  <Flex>
                    <Text width={"352px"} padding={"24px"}>
                      자주 묻는 질문
                    </Text>
                    <Flex gap={"20px"} width={"928px"} padding={"24px"}>
                      <Flex alignSelf={"stretch"} flexDirection={"column"}>
                        <Text>
                          FAQ의 정보는 아트앤트의 정책이나 귀하의 매장 정책과
                          모순되지 않을 수 있습니다.
                        </Text>
                        <Button background={"white"} width={"104px"}>
                          <Flex gap={"2px"} fontWeight={"500"}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <mask
                                id="mask0_1210_6944"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              >
                                <rect width="24" height="24" fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_1210_6944)">
                                <path
                                  d="M11.5 12.5H6V11.5H11.5V6H12.5V11.5H18V12.5H12.5V18H11.5V12.5Z"
                                  fill="#1C1B1F"
                                />
                              </g>
                            </svg>
                            FAQ 추가
                          </Flex>
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Divider />
                <Flex justifyContent={"space-between"}>
                  <Button border={"1px"} background={"white"}>
                    취소
                  </Button>
                  <Flex gap={"8px"}>
                    <Button border={"1px"} background={"white"}>
                      미리보기
                    </Button>
                    <Button background={"black"} color={"white"}>
                      저장하기
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box height={"120px"} />
    </Flex>
  );
}

const SvgVideo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <mask
        id="mask0_1210_6914"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="32"
      >
        <rect width="32" height="32" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1210_6914)">
        <circle cx="16" cy="16" r="12" fill="white" />
        <path
          d="M13.3333 20.7692L20.7692 16L13.3333 11.2308V20.7692ZM16.0045 28C14.3451 28 12.785 27.6851 11.3241 27.0554C9.86331 26.4256 8.59259 25.5709 7.51197 24.4913C6.43137 23.4117 5.57589 22.1422 4.94553 20.6827C4.31518 19.2233 4 17.6638 4 16.0045C4 14.3451 4.31488 12.785 4.94463 11.3241C5.57441 9.86331 6.4291 8.59259 7.5087 7.51197C8.5883 6.43137 9.85782 5.57589 11.3173 4.94553C12.7767 4.31518 14.3362 4 15.9955 4C17.6549 4 19.215 4.31488 20.6759 4.94463C22.1367 5.57441 23.4074 6.4291 24.488 7.5087C25.5686 8.5883 26.4241 9.85782 27.0545 11.3173C27.6848 12.7767 28 14.3362 28 15.9955C28 17.6549 27.6851 19.215 27.0554 20.6759C26.4256 22.1367 25.5709 23.4074 24.4913 24.488C23.4117 25.5686 22.1422 26.4241 20.6827 27.0545C19.2233 27.6848 17.6638 28 16.0045 28ZM16 26.6667C18.9778 26.6667 21.5 25.6333 23.5667 23.5667C25.6333 21.5 26.6667 18.9778 26.6667 16C26.6667 13.0222 25.6333 10.5 23.5667 8.43333C21.5 6.36667 18.9778 5.33333 16 5.33333C13.0222 5.33333 10.5 6.36667 8.43333 8.43333C6.36667 10.5 5.33333 13.0222 5.33333 16C5.33333 18.9778 6.36667 21.5 8.43333 23.5667C10.5 25.6333 13.0222 26.6667 16 26.6667Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
};

const SvgCamera = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
      <mask
        id="a"
        width="32"
        height="32"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0h32v32H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#1C1B1F"
          d="M16 22.308c1.393 0 2.57-.481 3.532-1.443.962-.961 1.442-2.138 1.442-3.532 0-1.393-.48-2.57-1.442-3.532-.962-.961-2.139-1.442-3.532-1.442-1.393 0-2.57.48-3.532 1.442-.962.962-1.442 2.14-1.442 3.532 0 1.394.48 2.57 1.442 3.532.962.962 2.139 1.443 3.532 1.443Zm0-1.334c-1.036 0-1.902-.348-2.597-1.043-.696-.696-1.044-1.562-1.044-2.598 0-1.036.348-1.901 1.044-2.597.695-.696 1.561-1.044 2.597-1.044s1.902.348 2.597 1.044c.696.696 1.044 1.561 1.044 2.597s-.348 1.902-1.044 2.598c-.695.695-1.561 1.043-2.597 1.043Zm-9.846 5.693c-.614 0-1.126-.206-1.537-.617-.411-.411-.617-.924-.617-1.537v-14.36c0-.613.206-1.125.617-1.536C5.027 8.206 5.54 8 6.154 8h3.943l2.467-2.667h6.872L21.903 8h3.943c.614 0 1.126.206 1.537.617.411.41.617.923.617 1.537v14.359c0 .613-.206 1.126-.617 1.537-.41.411-.923.617-1.537.617H6.154Z"
        />
      </g>
    </svg>
  );
};

function EditAnnouncement() {
  return (
    <Flex gap={"173px"} alignSelf={"stretch"}>
      <Flex flexDirection={"column"}>
        <Text fontSize={"16px"}>공지사항</Text>
        <Text color={"#666"} fontSize={"13px"}>
          2023.08.24 업데이트
        </Text>
      </Flex>
      <Flex
        padding={"24px"}
        flexDirection={"column"}
        gap={"8px"}
        alignSelf={"stretch"}
        borderRadius={"5px"}
        background={"#FAFAFA"}
      >
        <Flex gap={"2px"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_1193_14934"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1193_14934)">
              <path
                d="M11.5 12.5H6V11.5H11.5V6H12.5V11.5H18V12.5H12.5V18H11.5V12.5Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
          공지 추가
        </Flex>
        <Input
          placeholder="이 공간을 사용하여 중요한 최신 정보를 구매자와 공유하세요. 새로운 제품과 특별 프로모션을 언급 할수 있습니다. 쇼핑을 시작할 수 있도록 짧게 유지 하세요"
          width={"944px"}
          height={"60px"}
        />
        <Flex gap={"4px"} justifyContent={"flex-end"}>
          <BlackButton title={"저장"} borderRadius={"100px"} width="min" />
          <BlackButton
            title={"취소"}
            borderRadius={"100px"}
            type={true}
            width="min"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

function EditArt() {
  return (
    <Flex width={"1280px"} flexDirection={"column"} gap={"30px"}>
      <Flex gap={"40px"} alignSelf={"stretch"}>
        <Flex flexDirection={"column"} gap={"60px"}>
          <Flex flexDirection={"column"} gap={"32px"}>
            <Flex gap={"24px"} flexDirection={"column"}>
              <Text fontSize={"24px"} fontWeight={"500"}>
                작품
              </Text>
              <SearchBar
                placeholder={"작품 검색"}
                width={undefined}
                height={undefined}
                type={undefined}
                onSearch={undefined}
              />
              <MessageTab tabname={"모든 작품"} count={797} />
            </Flex>
            <Button
              background={"white"}
              borderRadius={"5px"}
              border={
                "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
              }
            >
              <Flex gap={"2px"} alignSelf={"center"} color={"#777"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1193_14754"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="24"
                  >
                    <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1193_14754)">
                    <path
                      d="M18.5 19.2885L17.8115 18.6L19.8673 16.5H15V15.5H19.8673L17.8115 13.4L18.5 12.7115L21.7885 16L18.5 19.2885ZM10.9 10.3846L18 5.41925C18 5.38078 17.9904 5.31315 17.9712 5.21635C17.9519 5.11955 17.9263 5.02115 17.8942 4.92115C17.8622 4.82115 17.8301 4.72917 17.7981 4.6452C17.766 4.56122 17.7308 4.51282 17.6923 4.5H17.6346L10.9 9.19422L4.35962 4.5H4.3077C4.26923 4.51282 4.23397 4.56122 4.20192 4.6452C4.16987 4.72917 4.13783 4.82212 4.10578 4.92405C4.07373 5.02597 4.04808 5.12628 4.02885 5.225C4.00962 5.32373 4 5.39233 4 5.43078L10.9 10.3846ZM4.58652 16.5C4.14679 16.5 3.77243 16.3455 3.46345 16.0366C3.15448 15.7276 3 15.3532 3 14.9135V5.08652C3 4.64679 3.15448 4.27243 3.46345 3.96345C3.77243 3.65448 4.14679 3.5 4.58652 3.5H17.4135C17.8532 3.5 18.2276 3.65448 18.5365 3.96345C18.8455 4.27243 19 4.64679 19 5.08652V10.5231C18.8718 10.5154 18.7436 10.5096 18.6154 10.5058C18.4872 10.5019 18.359 10.5 18.2308 10.5C16.8026 10.5 15.5737 11.0106 14.5442 12.0317C13.5147 13.0529 13 14.2859 13 15.7308C13 15.859 13.0019 15.9872 13.0058 16.1154C13.0096 16.2436 13.0154 16.3718 13.0231 16.5H4.58652Z"
                      fill="#777777"
                    />
                  </g>
                </svg>
                판매자 연락하기
              </Flex>
            </Button>
          </Flex>
          <Flex flexDirection={"column"} gap={"42px"} fontSize={"13px"}>
            <Flex flexDirection={"column"} gap={"14px"}>
              <Text as="u">1637 판매</Text>
              <Text as="u">4030 팬</Text>
            </Flex>
            <Text as="u">이 판매자 샵을 아트앤트에 신고하세요!</Text>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} width={"988px"}>
          <Select placeholder="추천순" alignSelf={"flex-end"} width={"103px"} />
          <Box height="18px" />
          <Flex
            padding={"24px"}
            flexDirection={"column"}
            gap={"8px"}
            alignSelf={"stretch"}
            borderRadius={"5px"}
            background={"#FAFAFA"}
          >
            <Flex gap={"2px"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_1193_14934"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1193_14934)">
                  <path
                    d="M11.5 12.5H6V11.5H11.5V6H12.5V11.5H18V12.5H12.5V18H11.5V12.5Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              대기열 편집/추가
            </Flex>
            <Box height={"8px"} />
            <Input placeholder="입력하세요" width={"944px"} />
            <Box height={"8px"} />
            <Flex gap={"4px"} justifyContent={"flex-end"}>
              <BlackButton title={"저장"} borderRadius={"100px"} width="min" />
              <BlackButton
                title={"취소"}
                borderRadius={"100px"}
                type={true}
                width="min"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function EditAvatar() {
  return (
    <Flex gap={"60px"}>
      <Flex gap={"32px"} flex={"1 0 0"}>
        <Button
          display={"flex"}
          width={"120px"}
          height={"120px"}
          padding={"24px"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"20px"}
          border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
          variant="unstyled" // 클릭 효과와 색상 없애기
          disabled={false}
          onClick={() => {}}
        >
          <SvgCamera />
          <Text
            color="var(--maincolorstextblack-222222, #222)"
            textAlign="center"
            fontFamily="Spoqa Han Sans Neo"
            fontSize="13px"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="normal"
            letterSpacing="-0.3px"
            mt={"-12px"}
          >
            사진 추가
          </Text>
        </Button>
        <Flex flexDirection={"column"} gap={"8px"} flex={"1 0 0"}>
          <Text fontWeight={"500"} fontSize={"16px"}>
            에바아트프린트
          </Text>
          <Flex
            padding={"24px"}
            flexDirection={"column"}
            gap={"8px"}
            alignSelf={"stretch"}
            borderRadius={"5px"}
            background={"#FAFAFA"}
          >
            <Flex gap={"2px"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_1193_14934"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1193_14934)">
                  <path
                    d="M11.5 12.5H6V11.5H11.5V6H12.5V11.5H18V12.5H12.5V18H11.5V12.5Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              당신의 스토어를 한 문장으로 표현해 보세요
            </Flex>
            <Input placeholder="입력하세요" width={"934px"} />
            <Flex justifyContent={"space-between"} fontSize={"13px"}>
              <Flex gap={"4px"}>
                <BlackButton
                  title={"저장"}
                  borderRadius={"100px"}
                  width="min"
                />
                <BlackButton
                  title={"취소"}
                  borderRadius={"100px"}
                  type={true}
                  width="min"
                />
              </Flex>
              0/55
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDirection={"column"}
          gap={"8px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex borderRadius={"100px"} width={"60px"} height={"60px"}>
            <Image
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              width={"60px"}
              height={"60px"}
              borderRadius={"60px"}
              border={"1px"}
            />
            <Flex position={"relative"} left={"-42px"} top={"18px"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_1193_14764"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1193_14764)">
                  <path
                    d="M12 16.7308C13.0449 16.7308 13.9279 16.3702 14.649 15.6491C15.3702 14.9279 15.7308 14.0449 15.7308 13C15.7308 11.9551 15.3702 11.0721 14.649 10.351C13.9279 9.6298 13.0449 9.26922 12 9.26922C10.9551 9.26922 10.0721 9.6298 9.35095 10.351C8.6298 11.0721 8.26923 11.9551 8.26923 13C8.26923 14.0449 8.6298 14.9279 9.35095 15.6491C10.0721 16.3702 10.9551 16.7308 12 16.7308ZM12 15.7308C11.2231 15.7308 10.5737 15.4699 10.0519 14.9481C9.53013 14.4263 9.26923 13.7769 9.26923 13C9.26923 12.2231 9.53013 11.5737 10.0519 11.0519C10.5737 10.5301 11.2231 10.2692 12 10.2692C12.7769 10.2692 13.4263 10.5301 13.9481 11.0519C14.4699 11.5737 14.7308 12.2231 14.7308 13C14.7308 13.7769 14.4699 14.4263 13.9481 14.9481C13.4263 15.4699 12.7769 15.7308 12 15.7308ZM4.61538 20C4.15513 20 3.77083 19.8458 3.4625 19.5375C3.15417 19.2292 3 18.8449 3 18.3846V7.61537C3 7.15512 3.15417 6.77083 3.4625 6.4625C3.77083 6.15417 4.15513 6 4.61538 6H7.57308L9.42308 4H14.5769L16.4269 6H19.3846C19.8449 6 20.2292 6.15417 20.5375 6.4625C20.8458 6.77083 21 7.15512 21 7.61537V18.3846C21 18.8449 20.8458 19.2292 20.5375 19.5375C20.2292 19.8458 19.8449 20 19.3846 20H4.61538Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
            </Flex>
          </Flex>
          <Button
            borderRadius={"100px"}
            border={"1px solid #D9D9D9"}
            background={"white"}
          >
            사진 변경
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
