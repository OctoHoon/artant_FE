import { Avatar, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import StarRating from "../commons/StarRating";
import ArtantButton from "../commons/ArtantButton";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getShopDetails } from "../../api";

export default function ShopHeader() {
  const { pk } = useParams();
  const { isLoading, data } = useQuery(["shop", pk], getShopDetails);

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {isLoading ? (
        <Box width={"100%"} height={"500px"} />
      ) : (
        <>
          <Box width={"100%"}>
            <Image src={data!["background_pic"]} />
            <Flex position={"relative"}>
              <Box width={"100%"} bg="#FAFAFA" height={"170px"} />
              <Flex
                width="1280px"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              >
                <Flex alignItems={"center"} height={"170px"}>
                  <Image width="120px" height="120px" src={data!["avatar"]} />
                  <Box width="32px" />
                  <Box>
                    <Text fontSize={"16px"} fontWeight={"500"}>
                      {data!["shop_name"]}
                    </Text>
                    <Box height={"2px"} />
                    <Text fontSize={"14px"}>
                      현대적이고 빈티지한 인쇄용 벽 예술
                    </Text>
                    <Box height={"14px"} />
                    <Flex alignItems={"center"}>
                      <Box marginRight={"2px"} color="#9968D9">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <mask
                            id="mask0_465_6239"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_465_6239)">
                            <path
                              d="M7.475 20C6.24038 20 5.18589 19.5628 4.31152 18.6885C3.43717 17.8141 3 16.7596 3 15.525C3 14.3096 3.42467 13.2676 4.27402 12.399C5.12339 11.5304 6.15577 11.0827 7.37115 11.0558C7.49935 11.0558 7.62756 11.0654 7.75577 11.0846C7.88398 11.1038 8.01217 11.1263 8.14037 11.1519L4.84615 4.53845H9.61538L12 9.30768L14.3846 4.53845H19.1539L15.8846 11.0827C16 11.057 16.1186 11.0378 16.2404 11.025C16.3622 11.0122 16.4872 11.0058 16.6154 11.0058C17.8397 11.0365 18.8766 11.4862 19.726 12.3548C20.5753 13.2234 21 14.2718 21 15.5C21 16.7513 20.5628 17.8141 19.6885 18.6885C18.8141 19.5628 17.7513 20 16.5 20C16.3115 20 16.1189 19.9894 15.9221 19.9683C15.7253 19.9471 15.5391 19.9071 15.3635 19.8481C16.1519 19.5045 16.7051 18.9208 17.0231 18.0971C17.341 17.2734 17.5 16.4077 17.5 15.5C17.5 13.9654 16.967 12.6651 15.901 11.599C14.8349 10.533 13.5346 10 12 10C10.4654 10 9.16506 10.533 8.09903 11.599C7.03301 12.6651 6.5 13.9654 6.5 15.5C6.5 16.4154 6.64679 17.2962 6.94037 18.1423C7.23397 18.9885 7.79744 19.5571 8.63077 19.8481C8.44231 19.9071 8.25288 19.9471 8.0625 19.9683C7.87212 19.9894 7.67628 20 7.475 20ZM12 20C10.75 20 9.6875 19.5625 8.8125 18.6875C7.9375 17.8125 7.5 16.75 7.5 15.5C7.5 14.25 7.9375 13.1875 8.8125 12.3125C9.6875 11.4375 10.75 11 12 11C13.25 11 14.3125 11.4375 15.1875 12.3125C16.0625 13.1875 16.5 14.25 16.5 15.5C16.5 16.75 16.0625 17.8125 15.1875 18.6875C14.3125 19.5625 13.25 20 12 20ZM10.4384 17.7885L12 16.6L13.5615 17.7885L12.9769 15.8596L14.5385 14.7462H12.6096L12 12.7115L11.3904 14.7462H9.46152L11.0231 15.8596L10.4384 17.7885Z"
                              fill="#9968D9"
                            />
                          </g>
                        </svg>
                      </Box>

                      <Text color="#9968D9"> 아트앤트 스타</Text>
                      <Box width={"8px"} />
                      <Box width="1px" height={"10px"} bg="#E1E3DF" />
                      <Box width={"8px"} />
                      <Text color="black">893 판매</Text>
                      <Box width={"8px"} />
                      <Box width="1px" height={"10px"} bg="#E1E3DF" />
                      <Box width={"8px"} />
                      <StarRating star={5} reviews={1} include_count={false} />
                    </Flex>
                    <Box height={"7px"} />

                    <ArtantButton
                      title={"팔로우 샵"}
                      width="126px"
                      onClick={() => {}}
                    ></ArtantButton>
                  </Box>
                  <Box width="100px" />
                  <Box>
                    <Text>아트앤트 스타 셀러입니다.</Text>
                    <Box height="20px" />
                    <Flex>
                      <Box width="160px">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <mask
                            id="mask0_465_6295"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_465_6295)">
                            <path
                              d="M18.6154 21.7885L17.9269 21.1L19.9827 19H15.1154V18H20.0019L17.9019 15.9L18.6154 15.2115L21.9039 18.5L18.6154 21.7885ZM4.61538 19C4.16794 19 3.78685 18.8426 3.4721 18.5279C3.15737 18.2132 3 17.8321 3 17.3846V6.61537C3 6.16794 3.15737 5.78685 3.4721 5.4721C3.78685 5.15737 4.16794 5 4.61538 5H19.3846C19.8321 5 20.2132 5.15737 20.5279 5.4721C20.8426 5.78685 21 6.16794 21 6.61537V14.05C20.6397 13.8731 20.2631 13.7372 19.8702 13.6423C19.4772 13.5474 19.0782 13.5 18.6731 13.5C17.2372 13.5 16.016 14.0032 15.0096 15.0096C14.0032 16.016 13.5 17.2372 13.5 18.6731V19H4.61538ZM12 12.1154L20 6.90385L19.6923 6L12 11L4.3077 6L4 6.90385L12 12.1154Z"
                              fill="#9968D9"
                            />
                          </g>
                        </svg>
                        <Text fontWeight={"500"}>원활한 배송</Text>
                        <Text fontSize={"13px"}>
                          배송이 정시에 도착한 이력이 있습니다.
                        </Text>
                      </Box>
                      <Box width="24px" />

                      <Box width="160px">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <mask
                            id="mask0_465_6295"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_465_6295)">
                            <path
                              d="M18.6154 21.7885L17.9269 21.1L19.9827 19H15.1154V18H20.0019L17.9019 15.9L18.6154 15.2115L21.9039 18.5L18.6154 21.7885ZM4.61538 19C4.16794 19 3.78685 18.8426 3.4721 18.5279C3.15737 18.2132 3 17.8321 3 17.3846V6.61537C3 6.16794 3.15737 5.78685 3.4721 5.4721C3.78685 5.15737 4.16794 5 4.61538 5H19.3846C19.8321 5 20.2132 5.15737 20.5279 5.4721C20.8426 5.78685 21 6.16794 21 6.61537V14.05C20.6397 13.8731 20.2631 13.7372 19.8702 13.6423C19.4772 13.5474 19.0782 13.5 18.6731 13.5C17.2372 13.5 16.016 14.0032 15.0096 15.0096C14.0032 16.016 13.5 17.2372 13.5 18.6731V19H4.61538ZM12 12.1154L20 6.90385L19.6923 6L12 11L4.3077 6L4 6.90385L12 12.1154Z"
                              fill="#9968D9"
                            />
                          </g>
                        </svg>
                        <Text fontWeight={"500"}>빠른 답변</Text>
                        <Text fontSize={"13px"}>
                          메세지에 빠르게 회신한 이력이 있습니다.
                        </Text>
                      </Box>
                      <Box width="24px" />
                      <Box width="160px">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <mask
                            id="mask0_465_6295"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_465_6295)">
                            <path
                              d="M18.6154 21.7885L17.9269 21.1L19.9827 19H15.1154V18H20.0019L17.9019 15.9L18.6154 15.2115L21.9039 18.5L18.6154 21.7885ZM4.61538 19C4.16794 19 3.78685 18.8426 3.4721 18.5279C3.15737 18.2132 3 17.8321 3 17.3846V6.61537C3 6.16794 3.15737 5.78685 3.4721 5.4721C3.78685 5.15737 4.16794 5 4.61538 5H19.3846C19.8321 5 20.2132 5.15737 20.5279 5.4721C20.8426 5.78685 21 6.16794 21 6.61537V14.05C20.6397 13.8731 20.2631 13.7372 19.8702 13.6423C19.4772 13.5474 19.0782 13.5 18.6731 13.5C17.2372 13.5 16.016 14.0032 15.0096 15.0096C14.0032 16.016 13.5 17.2372 13.5 18.6731V19H4.61538ZM12 12.1154L20 6.90385L19.6923 6L12 11L4.3077 6L4 6.90385L12 12.1154Z"
                              fill="#9968D9"
                            />
                          </g>
                        </svg>
                        <Text fontWeight={"500"}>리뷰 후기</Text>
                        <Text fontSize={"13px"}>
                          리뷰 평점이 4.8 이상입니다.
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
                <Flex
                  padding={"24px"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  gap="4px"
                  alignItems={"center"}
                >
                  <Link to={`/people/${data["users"][0]["pk"]}`}>
                    <Avatar
                      width="60px"
                      height="60px"
                      src={data["users"][0]["avatar"]}
                    />
                  </Link>
                  <Text>{data["users"][0]["username"]}</Text>

                  <Flex
                    gap="6px"
                    padding="0px 10px"
                    alignItems={"center"}
                    fontWeight={"500"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <mask
                        id="mask0_820_6751"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_820_6751)">
                        <path
                          d="M18 19.6442L16.9558 18.6L18.7712 16.75H14.25V15.25H18.7712L16.9558 13.4L18 12.3558L21.6442 16L18 19.6442ZM4.05768 16.75C3.56056 16.75 3.135 16.573 2.781 16.219C2.427 15.865 2.25 15.4394 2.25 14.9423V5.05768C2.25 4.56056 2.427 4.135 2.781 3.781C3.135 3.427 3.56056 3.25 4.05768 3.25H16.9423C17.4394 3.25 17.865 3.427 18.219 3.781C18.573 4.135 18.75 4.56056 18.75 5.05768V10.3115C18.625 10.291 18.5 10.2756 18.375 10.2654C18.25 10.2551 18.125 10.25 18 10.25C17.875 10.25 17.75 10.2526 17.625 10.2577C17.5 10.2628 17.375 10.2756 17.25 10.2962V5.823L10.4 10.6923L3.74995 5.8384V14.9423C3.74995 15.032 3.7788 15.1058 3.8365 15.1635C3.8942 15.2212 3.96792 15.25 4.05768 15.25H12.2961C12.2756 15.375 12.2628 15.5 12.2577 15.625C12.2526 15.75 12.25 15.875 12.25 16C12.25 16.125 12.2551 16.25 12.2654 16.375C12.2756 16.5 12.291 16.625 12.3115 16.75H4.05768ZM4.79607 4.74995L10.4 8.8577L16.1731 4.74995H4.79607Z"
                          fill="#1C1B1F"
                        />
                      </g>
                    </svg>
                    문의하기
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <Flex width={"1280px"} padding={"30px 0px"}>
            <Box width="200px">
              <Text fontSize="16px">공지사항</Text>
              <Text fontSize="13px" color="#595959">
                2023.08.24 업데이트
              </Text>
            </Box>
            <Box width="150px" />
            <Text lineHeight={"150%"}>
              멋지고 현대적인 스타일로 아프리카의 영감을 주는 디자인을 사랑하는
              사람들을 위한 멋진 민족 추상 미술과 다채로운 프린트를 찾을 수 있는{" "}
              {data && data.shop_name} 상점에 오신 것을 환영합니다!
            </Text>
          </Flex>
        </>
      )}
    </Flex>
  );
}
