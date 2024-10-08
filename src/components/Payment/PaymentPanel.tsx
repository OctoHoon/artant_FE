import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import BlackButton from "../commons/Button/BlackButton";
import { addToPurchase } from "../../services/userService";

export default function PaymentPanel({ data }) {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let totalPrice = 0;
  let totalOriginalPrice = 0;

  // data.cartline의 각 요소를 순회하며 price와 original_price를 합산합니다.
  data &&
    data.forEach((cartItem) => {
      // 각 요소의 price와 original_price를 더합니다.
      totalPrice += cartItem.product.price * cartItem.quantity;
      totalOriginalPrice += cartItem.product.original_price * cartItem.quantity;
    });

  const handlePurchase = () => {
    // data에 있는 상품들을 서버로 보내서 구매합니다.
    try {
      const productData = data.map((item) => ({
        product_pk: item.product.pk, // 상품의 고유 식별자
        quantity: item.quantity, // 상품 수량
        variant_pks: [], // 상품 옵션
      }));

      // 각 상품을 구매합니다.
      for (const product of productData) {
        addToPurchase(product);
      }

      // 구매가 완료되면 추가적인 동작을 수행할 수 있습니다.
      // 예를 들어, 화면을 리디렉션하거나 모달을 닫을 수 있습니다.
    } catch (error) {
      // 에러 처리를 수행합니다. 구매 실패 시 사용자에게 알려줄 수 있습니다.
      console.error("구매 중 에러 발생:", error);
    }
  };

  return (
    <Box
      maxW="412px"
      width="412px"
      height={"100%"}
      border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
    >
      <Box
        padding={"20px"}
        background="var(--maincolorsbggrayf-9-f-9-f-9, #F9F9F9)"
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
        [16884] 경기도 용인시 처인구 모현읍 능곡로 13-6, 능원한백 b동 305호
        <Flex gap="10px" marginTop="10px">
          <Button
            border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
            background="var(--maincolorsbg-white, #FFF)"
            width={"100%"}
            borderRadius={"0px"}
          >
            배송지 변경
          </Button>
        </Flex>
      </Box>

      <Box
        display={"flex"}
        padding="20px"
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"20px"}
        alignSelf={"stretch"}
      >
        <Box alignItems={"flex-start"} alignSelf={"stretch"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"baseline"}
            alignSelf={"stretch"}
          >
            <div>주문금액</div>
            <Flex fontSize={"22px"} alignItems={"baseline"}>
              {totalOriginalPrice.toLocaleString()}{" "}
              {<Text fontSize={"16px"}>원</Text>}
            </Flex>
          </Flex>

          <Flex
            justifyContent={"space-between"}
            alignItems={"baseline"}
            alignSelf={"stretch"}
          >
            <div>배송비</div>
            <Flex fontSize={"22px"} alignItems={"baseline"}>
              +0 {<Text fontSize={"16px"}>원</Text>}
            </Flex>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            alignItems={"baseline"}
            alignSelf={"stretch"}
          >
            <div>작품할인</div>
            <Flex fontSize={"22px"} alignItems={"baseline"}>
              -{(totalOriginalPrice - totalPrice).toLocaleString()}{" "}
              {<Text fontSize={"16px"}>원</Text>}
            </Flex>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            alignItems={"baseline"}
            alignSelf={"stretch"}
            color={"var(--maincolorstextgray-595959, #666)"}
          >
            <Flex gap="4px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <mask
                  id="mask0_746_11324"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_746_11324)">
                  <path
                    d="M9.33333 13.3333L8.85768 12.8577L11.3859 10.3333H4V3.33331H4.66667V9.66665H11.3859L8.85768 7.13845L9.32948 6.6628L12.6667 9.99998L9.33333 13.3333Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              작품할인
            </Flex>
            <Flex fontSize={"22px"} alignItems={"baseline"}>
              -{(totalOriginalPrice - totalPrice).toLocaleString()}{" "}
              {<Text fontSize={"16px"}>원</Text>}
            </Flex>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            alignItems={"baseline"}
            alignSelf={"stretch"}
          >
            <div>포인트 사용</div>
            <Flex fontSize={"22px"} alignItems={"baseline"}>
              +0 {<Text fontSize={"16px"}>원</Text>}
            </Flex>
          </Flex>
        </Box>
        <Box
          height={"1px"}
          alignSelf={"stretch"}
          background={"var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9)"}
        />
        <Flex
          justifyContent={"space-between"}
          alignItems={"baseline"}
          alignSelf={"stretch"}
          color="var(--maincolorstextredf-12-e-24, #F12E24);"
        >
          <Text fontSize={"13px"} fontWeight={"700"}>
            결정예정금액
          </Text>
          <Flex fontSize={"22px"} alignItems={"baseline"}>
            {totalPrice.toLocaleString()} {<Text fontSize={"13px"}>원</Text>}
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} gap={"10px"} alignSelf={"stretch"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"baseline"}
            alignSelf={"stretch"}
            color="var(--maincolorstextgray-595959, #666);"
          >
            <Text fontSize={"13px"}>
              주문정보 및 서비스 이용약관에 동의합니다.
            </Text>
          </Flex>
          <Button
            height={"65px"}
            padding={"10px"}
            justifyContent={"center"}
            alignItems={"center"}
            alignSelf={"stretch"}
            borderRadius={"0px"}
            color={"white"}
            background={" var(--maincolorsbgredf-12-e-24, #F12E24)"}
            onClick={() => {
              handlePurchase(); // 구매 처리
              onOpen(); // 모달 열기
            }}
            _hover={{
              background: "var(--maincolorsbggray-222222, #222)",
            }}
          >
            <Flex alignItems={"baseline"}>
              <Text fontSize={"24px"} fontWeight={"500"}>
                {totalPrice.toLocaleString()}{" "}
              </Text>
              <Text fontSize={"16px"}>원 결제하기</Text>
            </Flex>
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>결제가 완료되었습니다.</ModalHeader>
              <ModalCloseButton />

              <ModalFooter>
                <Button
                  color={"black"}
                  onClick={() => {
                    navigate(`/reviews`);
                    onClose();
                  }}
                  _hover={{
                    background: "var(--maincolorsbggray-555555, #555)",
                  }}
                >
                  확인
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Box>
    </Box>
  );
}
