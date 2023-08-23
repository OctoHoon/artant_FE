import { Flex, Wrap, Box, Text } from "@chakra-ui/react";
import CollectionList from "../ProductDetail/CollectionList";
import RelatedKeyword from "../RelatedKeyword";
import ShopProductCard from "../ShopDetail/ShopProductCard";
import PaginationController from "../commons/PaginationController";
import SearchBar from "../commons/SearchBar";

export default function FavoriteItems() {
  return (
    <Box>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Flex alignItems={"baseline"}>
            <Text fontSize={"22px"}>즐겨찾은 상품</Text>
            <Box width="6px" />
            <Text color={"#595959"} fontSize={"8px"}>
              8개의 작품
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <mask
                id="mask0_607_6648"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="18"
                height="18"
              >
                <rect width="18" height="18" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_607_6648)">
                <path
                  d="M9.00251 15.75C8.0691 15.75 7.19154 15.5729 6.36983 15.2186C5.54811 14.8644 4.83333 14.3836 4.22548 13.7764C3.61764 13.1691 3.13644 12.455 2.78186 11.634C2.42729 10.8131 2.25 9.93591 2.25 9.00251C2.25 8.0691 2.42712 7.19154 2.78136 6.36983C3.13561 5.54811 3.61637 4.83333 4.22364 4.22548C4.83092 3.61764 5.54503 3.13644 6.36596 2.78186C7.18691 2.42729 8.06409 2.25 8.99749 2.25C9.9309 2.25 10.8085 2.42712 11.6302 2.78136C12.4519 3.13561 13.1667 3.61637 13.7745 4.22364C14.3824 4.83092 14.8636 5.54503 15.2181 6.36596C15.5727 7.18691 15.75 8.06409 15.75 8.99749C15.75 9.9309 15.5729 10.8085 15.2186 11.6302C14.8644 12.4519 14.3836 13.1667 13.7764 13.7745C13.1691 14.3824 12.455 14.8636 11.634 15.2181C10.8131 15.5727 9.93591 15.75 9.00251 15.75ZM8.25 14.9625V13.5C7.8375 13.5 7.48438 13.3531 7.19063 13.0594C6.89687 12.7656 6.75 12.4125 6.75 12V11.25L3.15 7.65C3.1125 7.875 3.07812 8.1 3.04688 8.325C3.01562 8.55 3 8.775 3 9C3 10.5125 3.49687 11.8375 4.49062 12.975C5.48438 14.1125 6.7375 14.775 8.25 14.9625ZM13.425 13.05C13.675 12.775 13.9 12.4781 14.1 12.1594C14.3 11.8406 14.4656 11.5094 14.5969 11.1656C14.7281 10.8219 14.8281 10.4688 14.8969 10.1063C14.9656 9.74375 15 9.375 15 9C15 7.76775 14.6618 6.64238 13.9853 5.62389C13.3089 4.60541 12.3971 3.87116 11.25 3.42116V3.75C11.25 4.1625 11.1031 4.51562 10.8094 4.80938C10.5156 5.10313 10.1625 5.25 9.75 5.25H8.25V6.75C8.25 6.9625 8.17812 7.14062 8.03438 7.28438C7.89062 7.42812 7.7125 7.5 7.5 7.5H6V9H10.5C10.7125 9 10.8906 9.07188 11.0344 9.21563C11.1781 9.35938 11.25 9.5375 11.25 9.75V12H12C12.325 12 12.6188 12.0969 12.8813 12.2906C13.1438 12.4844 13.325 12.7375 13.425 13.05Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
            <Text color="#595959" fontSize="13px">
              공개
            </Text>
            <Box width="6px" />
            <Text as="u" color="#595959" fontSize="13px">
              편집
            </Text>
          </Flex>
        </Box>
        <Box>
          <SearchBar
            placeholder={"즐겨찾기 검색"}
            width="700px"
            height={"48px"}
            type={false}
          />
        </Box>
      </Flex>
      <Box height={"40px"} />
      <Wrap spacing={2} justify={"space-around"}>
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
      </Wrap>
      <PaginationController itemCount={20} pagination={40} />
      <Box height="40px" />
      <Text fontSize={"24px"} fontWeight={"500"}>
        이 컬렉션과 유사한 상품
      </Text>
      <Box height="40px" />
      <Wrap spacing={2} justify={"space-around"}>
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
        <ShopProductCard
          pk={4}
          source="/assets/images/card_image_custom-3.png"
          title="우리의 꿈은"
          description="애니메이션화, CG, 스타 서정배"
          price={120000}
          originalPrice={200000}
          free_shipping={true}
          is_best_seller={true}
          artist={undefined}
        />
      </Wrap>
      <Box height="40px" />
      <CollectionList title={"당신이 좋아할 컬렉션"} option={false} />
      <Box height="40px" />
      <Text fontSize={"24px"} fontWeight={"500"}>
        당신이 좋아할 컬렉션
      </Text>
      <Box height="40px" />
      <Wrap spacing={3} justify={"space-around"}>
        <RelatedKeyword width={"120px"} height={"120px"} />
        <RelatedKeyword width={"120px"} height={"120px"} />
        <RelatedKeyword width={"120px"} height={"120px"} />
        <RelatedKeyword width={"120px"} height={"120px"} />
        <RelatedKeyword width={"120px"} height={"120px"} />
      </Wrap>
    </Box>
  );
}
