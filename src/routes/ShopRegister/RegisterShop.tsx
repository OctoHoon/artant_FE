import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../lib/useUser";

export default function RegisterShop() {
  const toast = useToast();
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성
  const { userLoading, isLoggedIn, user } = useUser();

  const handleButtonClick = () => {
    if (!user) {
      toast({
        title: "먼저 로그인해주세요",
        description: "로그인을 해야 계정 생성이 가능합니다.",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom-right",
      });
      return; // Exit the function if the shop is activated
    }

    if (user.shop?.is_activated) {
      toast({
        title: "이미 갤러리가 열려있습니다.",
        description: "Artant는 1계정 1갤러리를 원칙으로 합니다.",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom-right",
      });
      return; // Exit the function if the shop is activated
    }

    // Define the navigation paths based on the shop registration step
    const navigationPaths = {
      1: `/your/shops/${user.shop?.pk}/onboarding/listings/create`,
      2: `/your/shops/${user.shop?.pk}/onboarding/listings/payments`,
      3: `/your/shops/${user.shop?.pk}/onboarding/listings/billing`,
    };

    // Navigate to the appropriate path or the default path if the step is not 1, 2, or 3
    const path =
      navigationPaths[user.shop?.register_step] ||
      "/your/shops/onboarding/name";
    console.log(path);
    navigate(path);
  };
  return (
    <Flex flexDirection={"column"} width={"full"} alignItems={"center"}>
      <Flex
        display={"inline-flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"8px"}
        width={"1920px"}
        justifyContent={"center"}
      >
        <Image
          src="/assets/images/shop_register_background.png"
          width={"1920px"}
        />
        <Flex
          width={"586px"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"40px"}
          position={"absolute"}
          left={"50%"}
          top={"440px"}
          transform="translate(-50%, 0%)"
        >
          <Flex
            flexDirection={"column"}
            alignItems={"flex-start"}
            zIndex="1"
          ></Flex>
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
            onClick={handleButtonClick}
          >
            시작하기
          </Button>
        </Flex>
      </Flex>
      <Flex
        width={"full"}
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
            <MenuTextsub title={"스토리"} />
            <MenuTextsub title={"자주하는 질문"} />
          </Flex>
          <Box
            height={"1px"}
            alignSelf={"stretch"}
            background={"var(--maincolorslineblack-222222, #222)"}
          />
        </Flex>
        <Box>
          <Text
            width={"1099px"}
            textAlign={"center"}
            fontSize={"24px"}
            lineHeight={"160%"}
            letterSpacing={"-0.5px"}
          >
            구매자에게는 수없이 많은 작품을, 창작자에게는 수없이 많은 구매자를
            연결합니다.
          </Text>
          <Text
            width={"1099px"}
            textAlign={"center"}
            fontSize={"24px"}
            lineHeight={"160%"}
            letterSpacing={"-0.5px"}
          >
            수많은 사람들이 당신의 창의적인 작품을 보고 즐기며, 직접 구매하기를
            원하고 있습니다.
          </Text>
        </Box>

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
              onClick={handleButtonClick}
            >
              ARTANT 매장을 오픈하세요!
            </Button>
          </Flex>
        </Flex>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          gap={"8px"}
          width={"full"}
        >
          <Box
            alignSelf={"stretch"}
            width={"full"}
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
                      500원 리스팅 수수료
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
                      9% 거래 수수료 및 투명한 기타 비용
                    </Flex>
                    <Text
                      color={"var(--maincolorstextgray-595959, #666)"}
                      lineHeight={"150%"}
                    >
                      카드결재시 실비의 수수료 및 운송료를 투명하게 공개합니다.
                      계좌이체시에는 카드결재 수수료가 없습니다.{" "}
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
                아트앤트에서 벌어들인 매출에 따라 필요할 수도 있습니다. 외부
                광고 수수료에 대한 자세한 내용을 보려면 도움말 센터를 방문하세요
              </Flex>
            </Flex>
          </Flex>
          <Flex
            padding={"120px 0px"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"60px"}
          >
            <Flex
              width={"1060px"}
              padding={"0px 20px"}
              alignItems={"center"}
              gap={"40px"}
            >
              <Flex
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"16px"}
                flex={"1 0 0"}
              >
                <Text fontSize={"30px"} letterSpacing={"0.5px"}>
                  간편하고 강력한 도구
                </Text>
                <Text fontSize={"16px"} lineHeight={"150%"}>
                  매장 관리 시간을 줄이고 재미있는 일에 더 많은 시간을
                  투자하세요. 이제 막 시작했거나 1만 번째 판매를 앞두고 있는
                  경우에 도움이 되는 도구가 있습니다.
                </Text>
              </Flex>
              <Image
                width={"540px"}
                height={"400px"}
                src="/assets/images/shop_register_1.png"
              />
            </Flex>
            <Flex
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"40px"}
            >
              <Flex width={"1060px"} alignItems={"flex-start"}>
                <Flex
                  padding={"0px 20px"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                  flex={"1 0 0"}
                >
                  <Box width={"20px"} height={"30px"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="30"
                      viewBox="0 0 20 30"
                      fill="none"
                    >
                      <rect
                        opacity="0.96"
                        width="10"
                        height="10"
                        fill="#D9D9D9"
                      />
                      <rect
                        opacity="0.96"
                        x="10"
                        y="10"
                        width="10"
                        height="10"
                        fill="#D9D9D9"
                      />
                      <rect
                        opacity="0.96"
                        y="20"
                        width="10"
                        height="10"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </Box>
                  <Flex flexDirection={"column"} gap={"8px"} flex={"1 0 0"}>
                    <Text fontSize={"24px"}>간편하고 강력한 도구</Text>
                    <Text fontSize={"16px"} lineHeight={"150%"}>
                      ARTANT Seller 앱을 사용하여 이동 중에도 주문을 관리하고,
                      품목을 업데이트하고, 고객에게 응답하세요.
                    </Text>
                  </Flex>
                  <Box width={"20px"} height={"30px"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="30"
                      viewBox="0 0 20 30"
                      fill="none"
                    >
                      <rect
                        opacity="0.96"
                        width="10"
                        height="10"
                        fill="#D9D9D9"
                      />
                      <rect
                        opacity="0.96"
                        x="10"
                        y="10"
                        width="10"
                        height="10"
                        fill="#D9D9D9"
                      />
                      <rect
                        opacity="0.96"
                        y="20"
                        width="10"
                        height="10"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </Box>
                  <Flex flexDirection={"column"} gap={"8px"} flex={"1 0 0"}>
                    <Text fontSize={"24px"}>
                      트래픽을 유도하는 프로모션 도구
                    </Text>
                    <Text fontSize={"16px"} lineHeight={"150%"}>
                      검색에서 귀하의 목록을 홍보하거나 당사의 무료 도구를
                      사용하여 ARTANT 및 소셜 미디어에서 귀하의 품목을
                      공유함으로써 더 많은 구매자에게 다가가십시오.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex width={"1060px"} alignItems={"flex-start"}>
                <Flex
                  padding={"0px 20px"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                  flex={"1 0 0"}
                >
                  <Box width={"20px"} height={"30px"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="30"
                      viewBox="0 0 20 30"
                      fill="none"
                    >
                      <rect
                        opacity="0.96"
                        width="10"
                        height="10"
                        fill="#D9D9D9"
                      />
                      <rect
                        opacity="0.96"
                        x="10"
                        y="10"
                        width="10"
                        height="10"
                        fill="#D9D9D9"
                      />
                      <rect
                        opacity="0.96"
                        y="20"
                        width="10"
                        height="10"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </Box>
                  <Flex flexDirection={"column"} gap={"8px"} flex={"1 0 0"}>
                    <Text fontSize={"24px"}>매출 향상을 위한 분석</Text>
                    <Text fontSize={"16px"} lineHeight={"150%"}>
                      실적 추세와 트래픽 소스를 보여주는 자세한 통계를 통해
                      비즈니스를 최신 상태로 유지할 수 있습니다.
                    </Text>
                  </Flex>
                  <Box width={"20px"} height={"30px"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="30"
                      viewBox="0 0 20 30"
                      fill="none"
                    >
                      <rect
                        opacity="0.96"
                        width="10"
                        height="10"
                        fill="#D9D9D9"
                      />
                      <rect
                        opacity="0.96"
                        x="10"
                        y="10"
                        width="10"
                        height="10"
                        fill="#D9D9D9"
                      />
                      <rect
                        opacity="0.96"
                        y="20"
                        width="10"
                        height="10"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </Box>
                  <Flex flexDirection={"column"} gap={"8px"} flex={"1 0 0"}>
                    <Text fontSize={"24px"}>원활하게 결제 수락</Text>
                    <Text fontSize={"16px"} lineHeight={"150%"}>
                      구매자가 원하는 방식으로 쉽게 결제할 수 있도록 PayPal로
                      결제 처리를 관리하세요.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            {/* <Flex
              flexDirection={"column"}
              alignItems={"center"}
              gap={"8px"}
              width={"1920px"}
              flex={"1 0 0"}
              background={"#FFFDEA"}
            >
              <Flex height={"726px"} flexDirection={"column"} gap={"8px"} />
              <Flex
                padding={"120px 0px"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"40px"}
                position={"absolute"}
                left={"50%"}
                transform="translate(-50%, 0%)"
              >
                <Flex
                  width={"1060px"}
                  padding={"0px 20px 40px 20px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"40px"}
                >
                  <Flex
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"16px"}
                    flex={"1 0 0"}
                  >
                    <Text
                      textAlign={"center"}
                      fontSize={"30px"}
                      letterSpacing={"0.5px"}
                    >
                      필요할 때 도움을 받으세요!
                    </Text>
                    <Text
                      width={"408px"}
                      fontSize={"16px"}
                      lineHeight={"150%"}
                      textAlign={"center"}
                    >
                      우리는 크고 작은 매장을 위한 지원과 교육을 통해 180만 명의
                      판매자가 성공할 수 있도록 돕기 위해 최선을 다하고
                      있습니다.
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column" gap={"40px"}>
                  <Flex width={"1060px"} alignItems={"center"}>
                    <Flex
                      padding={"0px 20px"}
                      alignItems={"center"}
                      gap={"24px"}
                      flex={"1 0 0"}
                    >
                      <Box
                        width={"112px"}
                        height={"112px"}
                        borderRadius={"100px"}
                        opacity={"0.96"}
                        background="#D9D9D9"
                      />
                      <Flex flexDirection={"column"} gap={"8px"} flex={"1 0 0"}>
                        <Text fontSize={"24px"}>우리에게 이야기하세요</Text>
                        <Text fontSize={"16px"} lineHeight={"150%"}>
                          질문이 있을 때마다 이메일로 지원 담당자에게 연락하거나
                          전화 통화를 요청하세요.
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex
                      padding={"0px 20px"}
                      alignItems={"center"}
                      gap={"24px"}
                      flex={"1 0 0"}
                    >
                      <Box
                        width={"112px"}
                        height={"112px"}
                        borderRadius={"100px"}
                        opacity={"0.96"}
                        background="#D9D9D9"
                      />
                      <Flex flexDirection={"column"} gap={"8px"} flex={"1 0 0"}>
                        <Text fontSize={"24px"}>성공을 위한 팁</Text>
                        <Text fontSize={"16px"} lineHeight={"150%"}>
                          항상 업데이트되는 판매자 핸드북을 통해 귀하의
                          비즈니스에 대한 모범 사례를 알아보세요.
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex width={"1060px"} alignItems={"center"}>
                    <Flex
                      padding={"0px 20px"}
                      alignItems={"center"}
                      gap={"24px"}
                      flex={"1 0 0"}
                    >
                      <Box
                        width={"112px"}
                        height={"112px"}
                        borderRadius={"100px"}
                        opacity={"0.96"}
                        background="#D9D9D9"
                      />
                      <Flex flexDirection={"column"} gap={"8px"} flex={"1 0 0"}>
                        <Text fontSize={"24px"}>판매자 뉴스레터</Text>
                        <Text fontSize={"16px"} lineHeight={"150%"}>
                          받은 편지함으로 바로 전달되는 ARTANT Success
                          뉴스레터를 읽고 매장 개선에 대한 팁을 알아보세요.
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex
                      padding={"0px 20px"}
                      alignItems={"center"}
                      gap={"24px"}
                      flex={"1 0 0"}
                    >
                      <Box
                        width={"112px"}
                        height={"112px"}
                        borderRadius={"100px"}
                        opacity={"0.96"}
                        background="#D9D9D9"
                      />
                      <Flex flexDirection={"column"} gap={"8px"} flex={"1 0 0"}>
                        <Text fontSize={"24px"}>조언 받기</Text>
                        <Text fontSize={"16px"} lineHeight={"150%"}>
                          ARTANT 포럼과 Teams에서 질문을 하고 귀하와 같은 판매자
                          커뮤니티를 찾아보세요.
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex> */}
            <Flex flexDirection={"column"} alignItems={"flex-start"}>
              <Flex
                padding={"120px 0px"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={"40px"}
              >
                <Flex
                  width={"1060px"}
                  padding={"0px 20px 40px 20px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"40px"}
                >
                  <Flex
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"16px"}
                    flex={"1 0 0"}
                  >
                    <Text fontSize={"30px"} letterSpacing={"0.5px"}>
                      판매자 이야기
                    </Text>
                    <Text
                      width={"408px"}
                      fontSize={"16px"}
                      lineHeight={"150%"}
                      textAlign={"center"}
                    >
                      우리는 ARTANT가 꽤 훌륭하다고 생각하지만 우리의 말을
                      그대로 받아들이지는 마세요. ARTANT가 어떻게 변화를
                      가져왔는지 판매자로부터 이야기를 들어보세요.
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  width={"1080px"}
                  padding={"0px 40px 0px 20px"}
                  alignItems={"center"}
                  gap={"40px"}
                >
                  <Image
                    width={"510px"}
                    height={"400px"}
                    opacity={"0.96"}
                    src="/assets/images/shop_register_2.jpeg"
                  />
                  <Flex
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"12px"}
                    flex={"1 0 0"}
                  >
                    <Text fontSize={"20px"} fontWeight={"500"}>
                      니콜 루이스
                    </Text>
                    <Text color={"#666"} fontSize={"16px"} lineHeight={"150%"}>
                      "내 가게는 취미로 시작했지만, 나중에는 교사라는 직업을
                      지원하기 위한 부업으로 시작했습니다. 2014년에 첫 아들이
                      태어났을 때 저는 이 사업을 본격적인 사업으로 성장시키기로
                      결정했습니다. ARTANT에서 판매하는 것을 지켜볼 기회가
                      생겼습니다. 우리 아이들은 가족으로서 사업을 구축하면서
                      성장합니다."
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  width={"1080px"}
                  padding={"0px 40px 0px 20px"}
                  alignItems={"center"}
                  gap={"40px"}
                >
                  <Flex
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"12px"}
                    flex={"1 0 0"}
                  >
                    <Text fontSize={"20px"} fontWeight={"500"}>
                      샤이나 아담스
                    </Text>
                    <Text color={"#666"} fontSize={"16px"} lineHeight={"150%"}>
                      "빈티지 매장을 운영하면서 사람들의 집에 기쁨을 가져다주는
                      것 같은 느낌을 받을 수 있을 거라고는 상상도 못했는데, 그게
                      바로 제가 경험하게 된 것입니다. 저는 이것이 쇼핑객이자
                      판매자로서 매우 개인적인 경험처럼 느껴진다는 점이 마음에
                      듭니다."
                    </Text>
                  </Flex>
                  <Image
                    width={"510px"}
                    height={"400px"}
                    opacity={"0.96"}
                    src="/assets/images/shop_register_3.jpeg"
                  />
                </Flex>
                <Flex
                  width={"1080px"}
                  padding={"0px 40px 0px 20px"}
                  alignItems={"center"}
                  gap={"40px"}
                >
                  <Image
                    width={"510px"}
                    height={"400px"}
                    opacity={"0.96"}
                    src="/assets/images/shop_register_4.jpeg"
                  />
                  <Flex
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"12px"}
                    flex={"1 0 0"}
                  >
                    <Text fontSize={"20px"} fontWeight={"500"}>
                      미샤 곤잘레스
                    </Text>
                    <Text color={"#666"} fontSize={"16px"} lineHeight={"150%"}>
                      "세 아프리카계 미국인 자녀의 어머니로서 저는 장난감에서
                      자신의 모습을 보는 데 익숙하지 않은 제 아이들과 그들과
                      같은 아이들을 위해 무언가를 만들고 싶은 충동을 느꼈습니다.
                      제가 가게를 시작했을 때 가장 큰 기쁨 중 하나는 아이들이
                      와서 내 지문을 보고 '아! 저거 나야?'라고 묻습니다."
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Box
                width={"1060px"}
                height={"1px"}
                background={" var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"}
              />
            </Flex>
            {/* <Flex flexDirection={"column"} alignItems={"flex-start"}>
              <Flex
                padding={"120px 0px"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Flex
                  width={"1060px"}
                  padding={"0px 20px 40px 20px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"40px"}
                >
                  <Text fontSize={"30px"} letterSpacing={"0.5px"}>
                    ARTANT에서 무엇을 판매할 수 있나요?
                  </Text>
                </Flex>
                <Flex
                  width={"1060px"}
                  padding={"0px 40px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Flex
                    padding={"0px 20px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"8px"}
                  >
                    <Flex
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box
                        width={"300px"}
                        height={"300px"}
                        opacity={"0.96"}
                        background="#D9D9D9"
                      />
                      <Text
                        padding={"20px 0px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        fontSize={"20px"}
                      >
                        수공예품
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    padding={"0px 20px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"8px"}
                  >
                    <Flex
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box
                        width={"300px"}
                        height={"300px"}
                        opacity={"0.96"}
                        background="#D9D9D9"
                      />
                      <Text
                        padding={"20px 0px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        fontSize={"20px"}
                      >
                        빈티지
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    padding={"0px 20px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"8px"}
                  >
                    <Flex
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box
                        width={"300px"}
                        height={"300px"}
                        opacity={"0.96"}
                        background="#D9D9D9"
                      />
                      <Text
                        padding={"20px 0px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        fontSize={"20px"}
                      >
                        공예용품
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  paddingTop={"10px"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  gap={"12px"}
                >
                  <Text fontWeight={"500"}>판매는 20세 이상 가능</Text>
                  <Text
                    width={"889px"}
                    textAlign={"center"}
                    lineHeight={"150%"}
                    color={"#666"}
                  >
                    ARTANT는 전 세계 수백만 명의 사람들이 연결되어 독특한 상품을
                    만들고, 판매하고, 구매하는 마켓플레이스입니다. ARTANT에서는
                    핸드메이드 제품, 빈티지 아이템, 공예품 등을 판매할 수
                    있습니다. 더 알아보기
                  </Text>
                </Flex>
              </Flex>
              <Box
                width={"1060px"}
                height={"1px"}
                background={" var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"}
              />
            </Flex> */}
          </Flex>
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Flex
              width={"1060px"}
              padding={"0px 20px 40px 20px"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"40px"}
            >
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"16px"}
                flex={"1 0 0"}
                paddingBottom={"40px"}
              >
                <Text fontSize={"30px"} letterSpacing={"0.5px"}>
                  자주 묻는 질문
                </Text>
                <Text
                  width={"408px"}
                  fontSize={"16px"}
                  lineHeight={"150%"}
                  textAlign={"center"}
                >
                  다음은 ARTANT 판매에 관한 몇 가지 일반적이 질문입니다.
                </Text>
              </Flex>
            </Flex>
            <Flex
              padding={"0px 40px 0px 20px"}
              justifyContent={"center"}
              gap={"60px"}
              width={"1060px"}
            >
              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                gap={"40px"}
                flex={"1 0 0"}
              >
                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                  alignSelf={"stretch"}
                >
                  <Text fontSize={"24px"}>
                    아트앤트의 수수료는 어떻게 책정되나요?
                  </Text>
                  <Text
                    alignSelf={"stretch"}
                    color={"#666"}
                    lineHeight={"180%"}
                  >
                    ARTANT에 가입하고 갤러리를 시작하는 것은 무료입니다. 기본
                    판매 수수료에는 상장 수수료, 거래 수수료, 결제 처리 수수료의
                    세 가지가 있습니다. 시장에 목록을 게시하는 데는 USD 0.20의
                    비용이 듭니다. 목록은 4개월 동안 또는 품목이 판매될 때까지
                    지속됩니다. 상품이 판매되면 판매 가격(설정한 배송비 포함)에
                    9%의 거래 수수료가 부과됩니다. PayPal로 결제를 수락하는 경우
                    수수료 구조에 따라 결제 처리 수수료도 부과됩니다. 등록
                    수수료는 500원으로 청구되므로 은행 통화가 USD가 아닌 경우
                    환율 변동에 따라 금액이 달라질 수 있습니다. 귀하는
                    오프사이트 광고를 통해 발생한 모든 판매에 대해 광고 수수료를
                    지불합니다. ARTANT 매장을 열 때 ARTANT의 광고 서비스에
                    참여할지 여부를 결정할 수 있습니다.{" "}
                    <Text as="u">더 알아보기</Text>
                  </Text>
                </Flex>
                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                  alignSelf={"stretch"}
                >
                  <Text fontSize={"24px"}>
                    상점을 만들려면 어떻게 해야 하나요?
                  </Text>
                  <Text
                    alignSelf={"stretch"}
                    color={"#666"}
                    lineHeight={"180%"}
                  >
                    ARTANT에서 상점을 개설하는 것은 쉽습니다. ARTANT 계정
                    만들기(아직 계정이 없는 경우), 갤러리 위치 및 통화 설정,
                    갤러리 이름 선택, 작품 생성, 결제 방법(지급 받고 싶은 방법)
                    설정, 마지막으로 청구 방법 설정 (ARTANT 수수료 지불 방법).{" "}
                    <Text as="u">더 알아보기</Text>
                  </Text>
                </Flex>
              </Flex>
              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                gap={"40px"}
                flex={"1 0 0"}
              >
                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                  alignSelf={"stretch"}
                >
                  <Text fontSize={"24px"}>어떻게 돈을 받나요?</Text>
                  <Text
                    alignSelf={"stretch"}
                    color={"#666"}
                    lineHeight={"180%"}
                  >
                    PayPal 결제를 수락하면 ARTANT에서 PayPal 판매로 발생한
                    자금이 PayPal 계정에 입금됩니다. 개인 계정에는 월별 수신
                    한도가 적용되고 신용 카드로 자금을 조달하는 구매자의 결제를
                    받을 수 없으므로 판매자는 개인 계정이 아닌 PayPal 비즈니스
                    계정을 사용하는 것이 좋습니다.{" "}
                    <Text as="u">더 알아보기</Text>
                  </Text>
                </Flex>
                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                  alignSelf={"stretch"}
                >
                  <Text fontSize={"24px"}>
                    상점을 만들려면 신용카드나 직불카드가 필요합니까?
                  </Text>
                  <Text
                    alignSelf={"stretch"}
                    color={"#666"}
                    lineHeight={"180%"}
                  >
                    아니요. 갤러리를 만드는 데 신용카드나 직불카드가 필요하지
                    않습니다. 판매자로 인증받으려면 신용카드를 사용하거나
                    PayPal을 통해 등록할 수 있습니다. 갤러리를 열고 목록을
                    게시할 때까지는 비용이 발생하지 않습니다.{" "}
                    <Text as="u">더 알아보기</Text>
                  </Text>
                </Flex>
                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                  alignSelf={"stretch"}
                >
                  <Text fontSize={"24px"}>
                    ARTANT에서 무엇을 판매할 수 있나요?
                  </Text>
                  <Text
                    alignSelf={"stretch"}
                    color={"#666"}
                    lineHeight={"180%"}
                  >
                    ARTANT는 수공예품, 빈티지 제품(20년 이상), 수공예품 및
                    비수공예품을 모두 판매할 수 있는 공예가, 예술가 및 수집가를
                    위한 마켓플레이스를 제공합니다.{" "}
                    <Text as="u">더 알아보기</Text>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
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
