import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import ShopIntro from "../components/ShopDetail/ShopIntro";
import Footer from "../components/commons/Footer";
import ScrollToTop from "../components/commons/ScrollToTop";

export default function RegisterShop() {
  return (
    <Box>
      <ScrollToTop />
      <Flex
        display={"inline-flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"8px"}
      >
        <Image src="/assets/images/shop_register_background.png" />
        <Flex
          width={"586px"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"40px"}
          position={"absolute"}
          left={"50%"}
          top={"7%"}
          transform="translate(-50%, 0%)"
        >
          <Flex flexDirection={"column"} alignItems={"flex-start"} zIndex="1">
            <Flex
              alignSelf={"stretch"}
              textAlign={"center"}
              fontSize={"32px"}
              fontWeight={"700"}
              lineHeight={"150%"}
              flexDirection="column"
            >
              <Text>수백만 명의 쇼핑객이 매장에</Text>
              <Text>무엇이 있는지 보고 싶어합니다.</Text>
            </Flex>
          </Flex>
          <Button
            height={"47px"}
            padding={"12px 56px"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"100px"}
            background={" var(--maincolorsbgblack-222222, #222);"}
            fontSize={"18px"}
            fontWeight={"500"}
            textAlign={"center"}
            color={"var(--maincolorstext-white, #FFF)"}
          >
            시작하기
          </Button>
        </Flex>
      </Flex>
      <Flex
        padding={"60px 0px 120px 0px"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"96px"}
      >
        <Flex
          width={"1280"}
          padding={"0px 110px"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Flex
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            rowGap={"10px"}
            alignSelf={"stretch"}
            width={"1060px"}
            flexWrap={"wrap"}
          >
            <MenuTextsub title={"수수료"} />
            <MenuTextsub title={"도구"} />
            <MenuTextsub title={"지원"} />
            <MenuTextsub title={"스토리"} />
            <MenuTextsub title={"판매"} />
            <MenuTextsub title={"자주하는 질문"} />
          </Flex>
          <Box
            height={"1px"}
            alignSelf={"stretch"}
            background={"var(--maincolorslineblack-222222, #222)"}
          />
        </Flex>
        <Text
          width={"711px"}
          textAlign={"center"}
          fontSize={"24px"}
          lineHeight={"160%"}
        >
          수백만 명의 쇼핑객이 매년 수 십억 달러를 소비하여 귀하와 같은 창의적인
          기업가로부터 직접 구매하는 창의적인 마켓플레이스에 참여하세요.
        </Text>
        <Flex
          width={"1280px"}
          padding={"0px 110px"}
          alignItems={"flex-start"}
          gap={"110px"}
        >
          <Flex
            width={"280px"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"40px"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 150 150"
              fill="none"
            >
              <circle cx="75" cy="75" r="75" fill="#FFDD55" />
            </svg>
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              gap="12px"
              alignSelf={"stretch"}
            >
              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                gap="16px"
                alignSelf={"stretch"}
              >
                <Text fontSize={"20px"} fontWeight={"500"}>
                  훌륭한 가치
                </Text>
                <Text
                  fontSize={"14px"}
                  fontWeight={"400"}
                  lineHeight={"150%"}
                  color={"var(--maincolorstextgray-595959, #666);"}
                  textAlign={"center"}
                >
                  단 $0.20의 비용으로 첫 번째 품목을 등록하세요. 판매 시 거래,
                  결제 처리 및 외부 광고 비용만 지불하면 됩니다.
                </Text>
              </Flex>
              <Button
                width={"86px"}
                padding={"6px 10px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"100px"}
                border={
                  "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
                }
                background={"white"}
                fontSize={"12px"}
                fontWeight={"500"}
              >
                더 알아보기
              </Button>
            </Flex>
          </Flex>
          <Flex
            width={"280px"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"40px"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 150 150"
              fill="none"
            >
              <circle cx="75" cy="75" r="75" fill="#FFDD55" />
            </svg>
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              gap="12px"
              alignSelf={"stretch"}
            >
              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                gap="16px"
                alignSelf={"stretch"}
              >
                <Text fontSize={"20px"} fontWeight={"500"}>
                  강력한 도구
                </Text>
                <Text
                  fontSize={"14px"}
                  fontWeight={"400"}
                  lineHeight={"150%"}
                  color={"var(--maincolorstextgray-595959, #666);"}
                  textAlign={"center"}
                  height={"63px"}
                >
                  당사의 도구와 서비스를 사용하면 귀하의 비즈니스를 쉽게 관리,
                  홍보 및 성장시킬 수 있습니다.
                </Text>
              </Flex>
              <Button
                width={"86px"}
                padding={"6px 10px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"100px"}
                border={
                  "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
                }
                background={"white"}
                fontSize={"12px"}
                fontWeight={"500"}
              >
                더 알아보기
              </Button>
            </Flex>
          </Flex>
          <Flex
            width={"280px"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"40px"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 150 150"
              fill="none"
            >
              <circle cx="75" cy="75" r="75" fill="#FFDD55" />
            </svg>
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              gap="12px"
              alignSelf={"stretch"}
            >
              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                gap="16px"
                alignSelf={"stretch"}
              >
                <Text fontSize={"20px"} fontWeight={"500"}>
                  지원과 교육
                </Text>
                <Text
                  fontSize={"14px"}
                  fontWeight={"400"}
                  lineHeight={"150%"}
                  color={"var(--maincolorstextgray-595959, #666);"}
                  textAlign={"center"}
                >
                  도움이 필요할 때마다 ARTANT 지원 전문가에게 연락하고 판매자
                  핸드북에서 성공적인 매장 운영에 대한 팁을 얻으세요.
                </Text>
              </Flex>
              <Button
                width={"86px"}
                padding={"6px 10px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"100px"}
                border={
                  "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
                }
                background={"white"}
                fontSize={"12px"}
                fontWeight={"500"}
              >
                더 알아보기
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          padding={"20px 40px"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"18px"}
          borderRadius={"10px"}
          border={"2px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"}
        >
          <Flex alignItems={"center"} gap={"8px"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M63.999 0C64.6946 0 65.3638 0.24148 65.8962 0.67608L66.1982 0.95964L79.2868 15.073L79.4092 15.2286C79.8164 15.7712 80 16.3866 80 16.991L79.994 24.667C79.994 28.6437 78.4797 32.2668 75.9966 34.9912L75.9934 77C75.9934 78.5188 74.865 79.774 73.4007 79.9728L72.9935 80H7.00619C5.48749 80 4.23234 78.8712 4.03371 77.4072L4.00631 77L4.00319 34.9912C1.71104 32.4764 0.244576 29.1957 0.0325447 25.5781L0.00590579 24.667L0.00514574 17.1639C-0.027133 16.6146 0.0914617 16.0495 0.38885 15.5325L0.64988 15.1507L0.806593 14.9677L13.8016 0.95964C14.2747 0.44972 14.907 0.12324 15.5876 0.0285997L16.0009 0H63.999ZM52.3271 33.7684L52.2795 33.8392C49.484 37.5776 45.0222 39.9972 39.9952 39.9972C34.9402 39.9972 30.4565 37.5504 27.664 33.7764C24.8744 37.5504 20.3907 39.9972 15.3356 39.9972C13.4593 39.9972 11.6616 39.66 10 39.0432L10.0051 73.996H15.9993L16.0009 47.004C16.0009 45.4852 17.1294 44.23 18.5937 44.0316L19.0007 44.004H36.9837C38.5025 44.004 39.7576 45.1328 39.9564 46.5968L39.9836 47.004L39.9824 73.996H69.9908L69.9916 39.046C68.3325 39.6612 66.5373 39.9972 64.6642 39.9972C59.6056 39.9972 55.1194 37.5468 52.3271 33.7684ZM33.9802 50.004H22.0006V73.996H33.9802V50.004ZM61.018 44.004C62.5367 44.004 63.7918 45.1328 63.9902 46.5968L64.0178 47.004V61.012C64.0178 62.5308 62.8891 63.786 61.4251 63.9848L61.018 64.012H47.0129C45.4942 64.012 44.239 62.8836 44.0402 61.4192L44.013 61.012V47.004C44.013 45.4852 45.1414 44.23 46.6057 44.0316L47.0129 44.004H61.018ZM58.0153 50.004H50.0116V58.012H58.0153V50.004ZM24.6645 20.008H6.00527L6.00567 24.667L6.03039 25.3511L6.1439 26.276L6.27486 26.9011L6.47237 27.589L6.6898 28.1804L6.85251 28.5564C6.97719 28.8279 7.1145 29.0924 7.2637 29.3491L7.67544 29.9949L7.89259 30.2938L8.40765 30.9164L8.97471 31.4927L9.35969 31.8324L9.52805 31.9697C10.7861 32.9716 12.3089 33.6552 13.9746 33.8988L14.6968 33.9756L15.3356 33.9972C20.2737 33.9972 24.3157 30.1608 24.644 25.3058L24.6655 24.667L24.6645 20.008ZM49.3236 20.008H30.6643L30.6653 24.667C30.6653 29.3905 34.1754 33.2944 38.7292 33.912L39.3564 33.9756L39.9952 33.9972C44.9334 33.9972 48.9752 30.1608 49.3036 25.3058L49.3252 24.667L49.3236 20.008ZM73.9906 20.008H55.3314L55.3342 24.667C55.3342 29.3905 58.8444 33.2944 63.3983 33.912L64.0254 33.9756L64.6642 33.9972C66.9213 33.9972 68.9912 33.1956 70.6048 31.8617L70.964 31.5492L71.4271 31.0944L72.0119 30.4176C72.2279 30.1418 72.4291 29.8535 72.6135 29.554L73.0275 28.8072L73.2791 28.2553L73.5123 27.6349L73.6311 27.2526L73.7842 26.6443L73.8974 26.0141L73.9698 25.3471L73.9942 24.667L73.9906 20.008ZM28.2469 5.996H17.3088L9.87711 14.008H25.783L28.2469 5.996ZM45.4742 5.996H34.5226L32.0587 14.008H47.9381L45.4742 5.996ZM62.6871 5.996H51.7499L54.2138 14.008H70.1188L62.6871 5.996Z"
                fill="#AAAAAA"
              />
            </svg>
          </Flex>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            gap={"18px"}
            fontSize={"16px"}
            textAlign={"center"}
            color="var(--maincolorstextgray-595959, #666);"
          >
            오늘부터 판매를 시작하세요.
            <Button
              padding={"12px 20px"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"2px"}
              borderRadius={"5px"}
              background={"var(--maincolorsiconblack-1-c-1-b-1-f, #1C1B1F);"}
              color={"white"}
              fontSize={"16px"}
            >
              ARTANT 매장을 오픈하세요!
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} alignItems={"center"} gap={"8px"}>
          <Box
            alignSelf={"stretch"}
            width={"1920px"}
            height={"1010px"}
            background="var(--maincolorsbggrayf-9-f-9-ff, #F9F9FF);"
          />
          <Flex
            padding={"120px 0px"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"48px"}
            position={"absolute"}
            left={"50%"}
            transform="translate(-50%, 0%)"
          >
            <Text fontSize={"30px"}>간편하고 투명하며 안전한 보안</Text>
            <Flex
              width={"560px"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"30px"}
            >
              <Box
                height={"1px"}
                alignSelf={"stretch"}
                background="var(--maincolorslineblack-222222, #222);"
              />
              <Flex padding={"0px 30px"} alignItems={"flex-end"} gap={"100px"}>
                <Flex gap={"10px"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_843_10316"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_843_10316)">
                      <path
                        d="M9.55126 17.3078L4.58203 12.3385L5.29548 11.6251L9.55126 15.8809L18.707 6.7251L19.4205 7.43855L9.55126 17.3078Z"
                        fill="#1C1B1F"
                      />
                    </g>
                  </svg>
                  추가 월 수수료 없음
                </Flex>
                <Flex gap={"10px"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_843_10316"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_843_10316)">
                      <path
                        d="M9.55126 17.3078L4.58203 12.3385L5.29548 11.6251L9.55126 15.8809L18.707 6.7251L19.4205 7.43855L9.55126 17.3078Z"
                        fill="#1C1B1F"
                      />
                    </g>
                  </svg>
                  자동 입금
                </Flex>
              </Flex>
              <Box
                height={"1px"}
                alignSelf={"stretch"}
                background="var(--maincolorslineblack-222222, #222);"
              />
            </Flex>
            <Flex flexDirection={"column"} alignItems={"flex-start"}>
              <Flex
                width={"720px"}
                flexDirection={"column"}
                alignItems={"flex-start"}
              >
                <Flex
                  padding={"24px"}
                  alignItems={"center"}
                  gap="24px"
                  alignSelf={"stretch"}
                >
                  <Box
                    width={"60px"}
                    height={"60px"}
                    borderRadius={"30px"}
                    background={"white"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M10.418 3.33325C8.3469 3.33325 6.66797 5.01219 6.66797 7.08325V32.9166C6.66797 34.9876 8.3469 36.6666 10.418 36.6666H22.9186C24.978 36.6666 26.6496 35.0068 26.6686 32.9519L26.669 32.9167V30.4167C26.669 29.7264 26.1095 29.1667 25.419 29.1667C24.6626 29.1667 24.1868 28.9633 23.8576 28.6987C23.511 28.4199 23.2251 27.9899 23.006 27.3834C22.5516 26.1251 22.5025 24.4659 22.5023 22.9166C22.5023 22.6001 22.3821 22.2953 22.1661 22.0639C22.039 21.9276 21.9536 21.8353 21.8921 21.7689C21.7415 21.6061 21.7343 21.5984 21.608 21.4794C21.4848 21.3636 21.1086 21.0044 19.6363 19.5328C18.8555 18.7523 18.4225 18.0918 18.2808 17.5873C18.216 17.3561 18.2193 17.1836 18.2548 17.0448C18.2901 16.9071 18.3768 16.7263 18.596 16.507C18.815 16.2879 18.9955 16.2017 19.1323 16.1666C19.2701 16.1313 19.4421 16.128 19.6728 16.1931C20.177 16.3353 20.837 16.7691 21.6181 17.5508C22.5175 18.4506 23.3721 19.2958 24.1376 20.0529C25.4035 21.3046 26.427 22.3168 27.0053 22.9364C27.4763 23.4411 28.2673 23.4683 28.772 22.9973C29.2766 22.5263 29.304 21.7353 28.833 21.2306C28.3586 20.7224 27.5965 19.9598 26.6683 19.0399L26.6681 13.4338L31.4038 18.1694C32.107 18.8726 32.5021 19.8264 32.5021 20.8209V35.4166C32.5021 36.1069 33.0618 36.6666 33.7521 36.6666C34.4425 36.6666 35.0021 36.1069 35.0021 35.4166V20.8209C35.0021 19.1634 34.3436 17.5738 33.1715 16.4016L26.6681 9.89815L26.668 7.08315C26.668 5.01212 24.9891 3.33325 22.918 3.33325H10.418ZM20.6546 28.2326C20.816 28.6794 21.0241 29.1229 21.2943 29.5363C20.0368 30.1416 19.1691 31.4279 19.1691 32.9169V34.1666H14.1691V32.9169C14.1691 30.8458 12.4901 29.1669 10.4191 29.1669H9.16797V10.8327H10.4191C12.4901 10.8327 14.1691 9.15377 14.1691 7.0827V5.83325H19.1691V7.0827C19.1691 9.15377 20.848 10.8327 22.9191 10.8327H24.1681L24.1683 16.5634C23.9108 16.3073 23.6496 16.0469 23.3865 15.7836C22.5013 14.8979 21.4726 14.1032 20.3513 13.787C19.7693 13.6228 19.1443 13.5829 18.512 13.7448C18.1355 13.8412 17.7836 14.0022 17.458 14.2194C17.1998 14.1845 16.9365 14.1664 16.6688 14.1664C13.4471 14.1664 10.8354 16.7781 10.8354 19.9998C10.8354 23.2214 13.4471 25.8331 16.6688 25.8331C17.9255 25.8331 19.0895 25.4356 20.0418 24.7596C20.1033 25.8999 20.2593 27.1381 20.6546 28.2326ZM13.3354 19.9998C13.3354 18.4736 14.3612 17.1868 15.7609 16.7916C15.6911 17.2973 15.7422 17.7939 15.8739 18.2629C16.189 19.3853 16.9826 20.4151 17.869 21.3009C18.3385 21.7703 18.699 22.1288 18.9771 22.4044C18.3783 22.9796 17.5648 23.3331 16.6688 23.3331C14.8278 23.3331 13.3354 21.8408 13.3354 19.9998ZM9.16797 7.08325C9.16797 6.3929 9.72762 5.83325 10.418 5.83325H11.6691V7.0827C11.6691 7.77307 11.1094 8.3327 10.4191 8.3327H9.16797V7.08325ZM21.6691 5.83325H22.918C23.6083 5.83325 24.168 6.39287 24.168 7.08322L24.1681 8.3327H22.9191C22.2286 8.3327 21.6691 7.77307 21.6691 7.0827V5.83325ZM24.1686 31.6669V32.9166C24.1688 33.6069 23.6091 34.1666 22.9186 34.1666H21.6691V32.9169C21.6691 32.2264 22.2286 31.6669 22.9191 31.6669H24.1686ZM11.6691 34.1666H10.418C9.72762 34.1666 9.16797 33.6069 9.16797 32.9166V31.6669H10.4191C11.1094 31.6669 11.6691 32.2264 11.6691 32.9169V34.1666Z"
                        fill="#1C1B1F"
                      />
                    </svg>
                  </Box>
                  <Flex
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"6px"}
                    flex={"1 0 0"}
                  >
                    <Text fontSize={"16px"} fontWeight={"500"}>
                      USD 0.20 리스팅 수수료
                    </Text>
                    <Text
                      color={"var(--maincolorstextgray-595959, #666)"}
                      lineHeight={"150%"}
                    >
                      리스팅은 4개월 동안 또는 판매될 때까지 활성화됩니다.
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  padding={"24px"}
                  alignItems={"center"}
                  gap="24px"
                  alignSelf={"stretch"}
                >
                  <Box
                    width={"60px"}
                    height={"60px"}
                    borderRadius={"30px"}
                    background={"white"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M23.9262 4.32565C24.0742 4.13777 24.3497 4.11278 24.5292 4.27098L26.0642 5.62463L21.2305 11.6667H24.432L27.9413 7.28003L30.695 9.70823C30.8643 9.85758 30.884 10.1146 30.7392 10.2879L29.5872 11.6667H32.8275C33.6508 10.465 33.463 8.81588 32.3485 7.83315L26.1827 2.3959C24.9268 1.2885 22.9985 1.46335 21.9625 2.77857L14.9603 11.6667H18.143L23.9262 4.32565ZM27.0833 23.3334C26.393 23.3334 25.8333 23.8931 25.8333 24.5834C25.8333 25.2737 26.393 25.8334 27.0833 25.8334H30.4167C31.107 25.8334 31.6667 25.2737 31.6667 24.5834C31.6667 23.8931 31.107 23.3334 30.4167 23.3334H27.0833ZM7.5 12.0834C7.5 11.3931 8.05965 10.8334 8.75 10.8334H13.9641L15.95 8.33342H8.75C6.67893 8.33342 5 10.0123 5 12.0834V29.5834C5 32.5749 7.42512 35.0001 10.4167 35.0001H30.4167C33.4082 35.0001 35.8333 32.5749 35.8333 29.5834V18.7501C35.8333 15.7585 33.4082 13.3334 30.4167 13.3334H8.75C8.05965 13.3334 7.5 12.7738 7.5 12.0834ZM7.5 29.5834V15.62C7.89097 15.7582 8.3117 15.8334 8.75 15.8334H30.4167C32.0275 15.8334 33.3333 17.1392 33.3333 18.7501V29.5834C33.3333 31.1943 32.0275 32.5001 30.4167 32.5001H10.4167C8.80583 32.5001 7.5 31.1943 7.5 29.5834Z"
                        fill="#1C1B1F"
                      />
                    </svg>
                  </Box>
                  <Flex
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"6px"}
                    flex={"1 0 0"}
                  >
                    <Flex fontSize={"16px"} fontWeight={"500"}>
                      6.5 % 거래 수수료, 페이팔 수수료
                    </Flex>
                    <Text
                      color={"var(--maincolorstextgray-595959, #666)"}
                      lineHeight={"150%"}
                    >
                      구매 후에는 소정의 수수료와 표준 PayPal 결제 처리 수수료가
                      부과됩니다.{" "}
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  padding={"24px"}
                  alignItems={"center"}
                  gap="24px"
                  alignSelf={"stretch"}
                >
                  <Box
                    width={"60px"}
                    height={"60px"}
                    borderRadius={"30px"}
                    background={"white"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M28.6862 3.72904C28.9045 3.07414 28.5507 2.36619 27.8958 2.14779C27.2408 1.92939 26.533 2.28326 26.3145 2.93816L25.0645 6.68646C24.8462 7.34136 25.2 8.04931 25.8548 8.26771C26.5098 8.48611 27.2177 8.13224 27.4362 7.47734L28.6862 3.72904ZM36.3005 3.69972C36.7887 4.18789 36.7887 4.97934 36.3005 5.46749L32.1338 9.63416C31.6457 10.1223 30.8543 10.1223 30.3662 9.63416C29.878 9.14601 29.878 8.35456 30.3662 7.86639L34.5328 3.69972C35.021 3.21157 35.8123 3.21157 36.3005 3.69972ZM15.1272 7.19722C16.3102 4.74189 19.5912 4.24269 21.451 6.23507L33.1282 18.7451C34.9465 20.6931 34.3015 23.8528 31.865 24.9323L26.1652 27.4576C26.4887 28.2411 26.6672 29.0999 26.6672 30.0003C26.6672 33.6823 23.6825 36.6669 20.0005 36.6669C17.3413 36.6669 15.0458 35.1101 13.9758 32.8581L11.6133 33.9048C10.5089 34.3941 9.21864 34.1733 8.33977 33.3444L5.94187 31.0831C4.99062 30.1859 4.72992 28.7761 5.29747 27.5983L15.1272 7.19722ZM16.2633 31.8446C16.9437 33.2206 18.3615 34.1669 20.0005 34.1669C22.3018 34.1669 24.1672 32.3014 24.1672 30.0003C24.1672 29.4604 24.0645 28.9444 23.8777 28.4709L16.2633 31.8446ZM19.6233 7.94096C18.9635 7.23396 17.7992 7.41109 17.3793 8.28237L7.54967 28.6834C7.45507 28.8798 7.49854 29.1148 7.65709 29.2643L10.055 31.5256C10.2015 31.6638 10.4165 31.7006 10.6006 31.6189L30.8523 22.6464C31.717 22.2634 31.9458 21.1423 31.3005 20.4509L19.6233 7.94096ZM31.6667 13.7491C31.6667 13.0587 32.2263 12.4991 32.9167 12.4991H36.25C36.9403 12.4991 37.5 13.0587 37.5 13.7491C37.5 14.4394 36.9403 14.9991 36.25 14.9991H32.9167C32.2263 14.9991 31.6667 14.4394 31.6667 13.7491Z"
                        fill="#1C1B1F"
                      />
                    </svg>
                  </Box>
                  <Flex
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"6px"}
                    flex={"1 0 0"}
                  >
                    <Text fontSize={"16px"} fontWeight={"500"}>
                      15% 오프사이트 광고 수수료*
                    </Text>
                    <Text
                      color={"var(--maincolorstextgray-595959, #666)"}
                      lineHeight={"150%"}
                    >
                      ARTANT는 오프사이트 광고를 통해 웹에서 회원님의 아이템을
                      광고하는 데 비용을 지불합니다. 해당 광고 중 하나에서
                      판매가 발생할 때만 수수료를 지불합니다.{" "}
                      <Text as="u">광고 수수료에 대해 자세히 알아보기</Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                width={"720px"}
                padding={"24px 108px"}
                alignItems={"center"}
                gap={"28px"}
              >
                <Box width={"80px"} height={"80px"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                  >
                    <path
                      d="M33.3346 6.66675C40.6983 6.66675 46.668 12.6363 46.668 20.0001V26.6667H55.0013C57.7626 26.6667 60.0013 28.9053 60.0013 31.6667L60.0026 36.6667C58.9396 36.6667 57.8766 37.0321 57.014 37.7621L56.6566 38.0977C53.9516 40.9141 51.138 42.2224 48.0013 42.2224C45.393 42.2224 43.3346 44.3664 43.3346 46.9444V55.2814C43.3346 63.1947 46.413 69.3467 52.269 73.3394L11.668 73.3334C8.90654 73.3334 6.66797 71.0947 6.66797 68.3334V31.6667C6.66797 28.9053 8.90654 26.6667 11.668 26.6667H20.0013V20.0001C20.0013 12.6363 25.9708 6.66675 33.3346 6.66675ZM60.947 40.4077C64.254 43.8587 67.9183 45.5557 72.0013 45.5557C72.6456 45.5557 73.1833 46.0317 73.3076 46.6647L73.3346 46.9444V55.2814C73.3346 64.2211 68.958 70.2987 60.423 73.2621C60.1493 73.3571 59.8533 73.3571 59.5796 73.2621C51.3293 70.3974 46.9643 64.6227 46.6826 56.1657L46.668 55.2814V46.9444C46.668 46.1774 47.265 45.5557 48.0013 45.5557C52.0793 45.5557 55.7456 43.8584 59.0606 40.4067C59.5816 39.8641 60.4266 39.8647 60.947 40.4077ZM33.335 45.0001C30.5736 45.0001 28.335 47.2387 28.335 50.0001C28.335 52.7614 30.5736 55.0001 33.335 55.0001C36.0966 55.0001 38.335 52.7614 38.335 50.0001C38.335 47.2387 36.0966 45.0001 33.335 45.0001ZM33.3346 13.3334C29.6527 13.3334 26.668 16.3182 26.668 20.0001V26.6667H40.0013V20.0001C40.0013 16.3182 37.0166 13.3334 33.3346 13.3334Z"
                      fill="#212121"
                    />
                  </svg>
                </Box>
                당사는 다양한 결제 수단으로 거래를 처리할 수 있는 외부 결제
                플랫폼인 PayPal을 통해 결제를 처리합니다. ARTANT에서 PayPal로
                판매한 금액은 회원님의 PayPal 계정으로 입금됩니다.
              </Flex>
              <Flex
                width={"720px"}
                padding={"24px 108p*x"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                * 외부 광고는 대부분의 판매자에게 선택 사항이지만, 12개월 동안
                Etsy에서 벌어들인 매출에 따라 필요할 수도 있습니다. 외부 광고
                수수료에 대한 자세한 내용을 보려면 도움말 센터를 방문하세요
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}

function MenuTextsub({ title }) {
  return (
    <Box
      padding={"12px 24px"}
      justifyContent={"center"}
      alignItems={"center"}
      flex="1 0 0"
      borderRadius={"5px 5px 0px 0px"}
    >
      <Text textAlign={"center"} fontSize={"16px"} fontWeight={"500"}>
        {title}
      </Text>
    </Box>
  );
}
