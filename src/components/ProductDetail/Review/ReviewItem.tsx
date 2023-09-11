import StarRating from "../../commons/StarRating";
import {
  Box,
  Flex,
  Text,
  Image,
  Avatar,
  Progress,
  Wrap,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface IReview {
  user: {
    pk: number; // 클릭시 프로필 링크 이동 위함
    name: string;
    avatar: string;
  };
  product_name: string;
  content: string;
  rating: number;
  created_at: string; // 2023.08.23 양식으로
  rating_item_quality: number | null;
  rating_shipping: number | null;
  rating_customer_servie: number | null;
  images: {
    pk: string;
    image: string;
  }; // etsy에서는 리뷰도 이미지 썸네일이랑 원본 파일로 따로 저장해서 여기서는 리뷰 이미지 썸네일을 가져옴
  reply: {
    pk: string; //클릭시 판매자 페이지 링크 이동 위함
    shop_name: string;
    avatar: string | null;
    content: string;
    created_at: string;
  } | null;
}

export default function ReviewItem({ review }) {
  const include_option =
    review.rating_item_quality &&
    review.rating_shipping &&
    review.rating_customer_servie;
  const include_reply = review.reply === null;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box marginBottom={"16px"}>
      <Flex justifyContent={"space-between"}>
        <Box>
          <StarRating star={review.rating} reviews={0} include_count={false} />
          <Text
            marginTop={"8px"}
            color="#222"
            fontFamily="Spoqa Han Sans Neo"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="28px"
            letterSpacing="-0.048px"
          >
            {review.content}
          </Text>
          <Flex>
            <Text
              marginTop={"8px"}
              color="#595959"
              fontFamily="Spoqa Han Sans Neo"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="28px"
              letterSpacing="-0.042px"
              width="80px"
            >
              구매한 상품:
            </Text>
            <Text
              marginTop={"8px"}
              color="#595959"
              fontFamily="Spoqa Han Sans Neo"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="28px"
              letterSpacing="-0.042px"
              textDecoration="underline"
              textDecor="underline"
            >
              {review.product_name}
            </Text>
          </Flex>
          <Flex marginTop={"8px"}>
            <Wrap>
              {review.images.map((image) => (
                <Box>
                  <Image
                    objectFit={"cover"}
                    key={image.pk}
                    src={image.image}
                    width="60px"
                    height="60px"
                    marginRight={"8px"}
                    onClick={onOpen}
                  />
                  <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalCloseButton />
                      <ModalBody>
                        <Flex>
                          <Box width="50%">
                            <Image
                              objectFit={"cover"}
                              key={image.pk}
                              src={image.image}
                            />
                          </Box>
                          <Box width="8px"></Box>
                          <Box width="50%">
                            <Flex
                              marginTop={"12px"}
                              marginBottom={"12px"}
                              alignItems={"center"}
                            >
                              <Avatar
                                width="36px"
                                height="36px"
                                name={review.user.name}
                                marginRight={"12px"}
                                src={review.user.avatar}
                              />
                              <Text
                                color="#595959"
                                fontFamily="Spoqa Han Sans Neo"
                                fontSize="14px"
                                fontStyle="normal"
                                fontWeight="400"
                                lineHeight="28px"
                                letterSpacing="-0.042px"
                                textDecoration="underline"
                                textDecor="underline"
                                marginEnd={"10px"}
                              >
                                {review.user.name}
                              </Text>
                              <Text
                                color="#595959"
                                fontFamily="Spoqa Han Sans Neo"
                                fontSize="14px"
                                fontStyle="normal"
                                fontWeight="400"
                                lineHeight="28px"
                                letterSpacing="-0.042px"
                              >
                                {review.created_at}
                              </Text>
                            </Flex>
                            {review.content}
                          </Box>
                        </Flex>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Box>
              ))}
            </Wrap>
          </Flex>
          <Flex marginTop={"12px"} marginBottom={"12px"} alignItems={"center"}>
            <Avatar
              width="36px"
              height="36px"
              name={review.user.name}
              marginRight={"12px"}
              src={review.user.avatar}
            />
            <Text
              color="#595959"
              fontFamily="Spoqa Han Sans Neo"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="28px"
              letterSpacing="-0.042px"
              textDecoration="underline"
              textDecor="underline"
              marginEnd={"10px"}
            >
              {review.user.name}
            </Text>
            <Text
              color="#595959"
              fontFamily="Spoqa Han Sans Neo"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="28px"
              letterSpacing="-0.042px"
            >
              {review.created_at}
            </Text>
          </Flex>
        </Box>
        {include_option && (
          <Box minWidth={"240px"}>
            {review.rating_item_quality === null && (
              <Box>
                <Text>배송</Text>
                <Flex alignItems={"center"}>
                  <Progress
                    value={review.rating_item_quality * 20}
                    bg="#EAEAEA" // Background color (grey)
                    colorScheme="blue"
                    borderRadius="full"
                    minWidth={"200px"}
                  />
                  <Text>{review.rating}점</Text>
                </Flex>
              </Box>
            )}
            {review.rating_shipping === null && (
              <Box>
                <Text>배송</Text>
                <Flex alignItems={"center"}>
                  <Progress
                    value={review.rating * 20}
                    bg="#EAEAEA" // Background color (grey)
                    colorScheme="blue"
                    borderRadius="full"
                    minWidth={"200px"}
                  />
                  <Text>{review.rating}점</Text>
                </Flex>
              </Box>
            )}
            {review.rating_customer_servie === null && (
              <Box>
                <Text>배송</Text>
                <Flex alignItems={"center"}>
                  <Progress
                    value={review.rating_customer_servie * 20}
                    bg="#EAEAEA" // Background color (grey)
                    colorScheme="blue"
                    borderRadius="full"
                    minWidth={"200px"}
                  />
                  <Text>{review.rating_customer_servie}점</Text>
                </Flex>
              </Box>
            )}
          </Box>
        )}
      </Flex>
      {include_reply ? (
        <Box />
      ) : (
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="764"
            height="2"
            viewBox="0 0 764 2"
            fill="none"
          >
            <path d="M0 1L764 1" stroke="#D9D9D9" stroke-dasharray="2 2" />
          </svg>
          <Text marginTop="24px">{review.reply.content}</Text>
          <Flex
            marginTop="16px"
            marginBottom={"16px"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Avatar
              width="36px"
              height="36px"
              name={review.reply.shop_name}
              marginRight={"12px"}
              src={review.reply.avatar}
            />
            <Text
              color="#595959"
              fontFamily="Spoqa Han Sans Neo"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="28px"
              letterSpacing="-0.042px"
              textDecoration="underline"
              textDecor="underline"
              marginEnd={"10px"}
            >
              {review.reply.shop_name}
            </Text>
            <Text
              color="#595959"
              fontFamily="Spoqa Han Sans Neo"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="28px"
              letterSpacing="-0.042px"
            >
              {review.reply.created_at}
            </Text>
          </Flex>
        </Box>
      )}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="764"
        height="2"
        viewBox="0 0 764 2"
        fill="none"
      >
        <path d="M0 1L764 1" stroke="#D9D9D9" />
      </svg>
    </Box>
  );
}
