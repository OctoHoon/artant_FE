import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import RegisterProcess from "../../components/RegisterShop/RegisterProcess";
import BlackButton from "../../components/commons/Button/BlackButton";
import ScrollToTop from "../../components/commons/ScrollToTop";
import { useNavigate, useParams } from "react-router-dom";
import useUser from "../../lib/useUser";
import { updateShop } from "../../services/shopService";

export default function RegisterBilling() {
  const toast = useToast();
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성
  const { userLoading, isLoggedIn, user } = useUser();
  const { shopPk } = useParams();

  const handleButtonClick = async () => {
    try {
      const updateData = {
        register_step: 4,
        is_activated: true,
      };
      console.log(shopPk);
      const result = await updateShop(shopPk, updateData);
      console.log(result);
      navigate("/your/shops/me");
      toast({
        title: "계정이 생성되었습니다",
        description: "샵 매니저 페이지로 이동합니다.",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "bottom-right",
      });
    } catch (error) {
      console.error("업데이트 실패", error);
      throw error;
    }
  };

  return (
    <Flex flexDirection={"column"} gap={"60px"} mt={"32px"} mb={"120px"}>
      <ScrollToTop />
      <RegisterProcess currentPage={4} />
      <Flex flexDirection={"column"} gap={"40px"}>
        <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"12px"}>
          <Flex
            alignItems={"center"}
            gap={"12px"}
            fontSize={"30px"}
            letterSpacing={"0.5px"}
          >
            지급 방법
            <Flex
              padding={"2px 8px"}
              alignItems={"center"}
              gap={"2px"}
              borderRadius={"100px"}
              background={"#FF6701"}
            >
              <Box width={"18px"} height={"18px"}></Box>
              <Flex
                paddingTop={"2px"}
                alignItems={"center"}
                gap={"8px"}
                fontSize={"13px"}
                fontWeight={"500"}
                color={"white"}
              >
                보호됨
              </Flex>
            </Flex>
          </Flex>
          <Flex gap={"12px"}>ARTANT 청구서를 지불 방법을 알려주십시오.</Flex>
        </Flex>
        <Flex gap={"40px"}>
          <Flex
            padding={"24px"}
            flexDirection={"column"}
            flex={"1 0 0"}
            border={
              "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
            }
          >
            <Flex gap={"24px"} flexDirection={"column"}>
              <Flex
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={"4px"}
              >
                <Text fontSize={"22px"} fontWeight={"500"}>
                  신용카드 추가
                </Text>
                <Text fontSize={"16px"}>또는</Text>
                <Button
                  padding={"6px 16px"}
                  borderRadius={"5px"}
                  border={"1px solid var(--maincolorstextblack-222222, #222);"}
                  background={"white"}
                >
                  PayPal로 결제
                </Button>
              </Flex>
              <Flex flexDirection={"column"} gap={"24px"}>
                <Flex gap={"40px"}>
                  <Flex
                    width={"234px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    fontWeight={"500"}
                  >
                    카드 번호 *
                  </Flex>
                  <Input width={"200px"} height={"40px"} />
                </Flex>
                <Flex gap={"40px"}>
                  <Flex
                    width={"234px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    fontWeight={"500"}
                  >
                    만료일 *
                  </Flex>
                  <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    <Select placeholder="월" width={"120px"} height={"40px"}>
                      <option value="option1">1월</option>
                      <option value="option2">2월</option>
                      <option value="option3">3월</option>
                      <option value="option1">4월</option>
                      <option value="option2">5월</option>
                      <option value="option3">6월</option>
                      <option value="option1">7월</option>
                      <option value="option2">8월</option>
                      <option value="option3">9월</option>
                      <option value="option1">10월</option>
                      <option value="option2">11월</option>
                      <option value="option3">12월</option>
                    </Select>
                    /
                    <Select placeholder="년" width={"120px"} height={"40px"}>
                      <option value="option1">2023</option>
                      <option value="option2">2024</option>
                      <option value="option3">2025</option>
                      <option value="option1">2026</option>
                      <option value="option2">2027</option>
                      <option value="option3">2028</option>
                      <option value="option1">2029</option>
                      <option value="option2">2030</option>
                      <option value="option3">2031</option>
                      <option value="option1">2032</option>
                    </Select>
                  </Flex>
                </Flex>
                <Flex gap={"40px"}>
                  <Flex
                    width={"234px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    fontWeight={"500"}
                  >
                    GVC *
                  </Flex>
                  <Input width={"160px"} height={"40px"} />
                </Flex>
                <Flex gap={"40px"}>
                  <Flex
                    width={"234px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    fontWeight={"500"}
                  >
                    카드상의 이름 *
                  </Flex>
                  <Input width={"160px"} height={"40px"} />
                </Flex>
                <Flex gap={"40px"}>
                  <Flex
                    width={"234px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    fontWeight={"500"}
                  >
                    본인인증 *
                  </Flex>
                  <BlackButton title={"휴대폰 인증"} borderRadius={"5px"} />
                </Flex>
                <Flex gap={"40px"}>
                  <Flex
                    width={"234px"}
                    flexDirection={"column"}
                    justifyContent={"flex-start"}
                    fontWeight={"500"}
                  >
                    청구지 주소 *
                  </Flex>
                  <Flex gap={"24px"} flex={"1 0 0"} flexDirection={"column"}>
                    <Flex flexDirection={"column"} gap={"6px"}>
                      주소
                      <Input />
                    </Flex>
                    <Flex gap={"12px"} alignSelf={"stretch"} flex={"1 0 0"}>
                      <Flex
                        flexDirection={"column"}
                        gap={"6px"}
                        alignSelf={"stretch"}
                        flex={"1 0 0"}
                      >
                        상세 주소
                        <Input />
                      </Flex>
                      <Flex
                        flexDirection={"column"}
                        gap={"6px"}
                        width={"160px"}
                      >
                        우편번호
                        <Input />
                      </Flex>
                    </Flex>
                    <Flex flexDirection={"column"} gap={"6px"}>
                      연락처(휴대폰)
                      <Input />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDirection={"column"} gap={"12px"}>
            <Flex
              width={"412px"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              border={
                "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
              }
            >
              <Flex
                padding={"20px"}
                flexDirection={"column"}
                gap={"4px"}
                background={"#F9F9F9"}
                fontSize={"13px"}
                fontWeight={"700"}
                alignSelf={"stretch"}
              >
                지금은 청구 되지 않습니다.
              </Flex>
              <Flex
                padding={"20px"}
                flexDirection={"column"}
                gap={"12px"}
                alignSelf={"stretch"}
                lineHeight={"150%"}
              >
                <Box>
                  <Flex gap={"4px"}>
                    <Text>귀하의 상점 작품에 대한 청구서에 </Text>
                    <Text color={"#F12E24"} fontWeight={"500"}>
                      {" "}
                      500원{" "}
                    </Text>
                    이 추가되며,
                  </Flex>
                  이 금액은 다음 달 1일에 마감됩니다.
                </Box>
                <Flex flexDirection={"column"} gap={"12px"} as="u">
                  <Box
                    height={"1px"}
                    alignSelf={"stretch"}
                    background="var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"
                  />
                  수수료는 어떻게 작용합니까?
                </Flex>
              </Flex>
            </Flex>
            <Flex
              flexDirection={"column"}
              gap={"20px"}
              justifyContent={"center"}
              alignSelf={"stretch"}
            >
              <Text>
                상점열기를 클릭하면 <Text as="u">이용약관</Text>에 동의하게
                됩니다.
              </Text>

              <BlackButton
                title={"상점열기"}
                borderRadius={"5px"}
                flex="1 0 0"
                onClick={handleButtonClick}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
