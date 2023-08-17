import { Flex, Box, Text, Grid, Button, ButtonGroup } from "@chakra-ui/react";
import ShopSideBar from "./ShopSideBar";
import ShopProductCard from "./ShopProductCard";
import CustomSelect from "../Items/CustomSelect";
import PaginationController from "../commons/PaginationController";

const List = [
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
  />,
];
const repeated = Array(16).fill(List[0]);
const itemCount = 24;

export default function ShopMiddle() {
  return (
    <Box>
      <Text fontSize="24px" fontWeight="500">
        작품
      </Text>
      <Box height="30px" />
      <Flex gap={10}>
        <Box maxW="258px">
          <ShopSideBar />
        </Box>
        <Box maxW="958px">
          <Box
            width="100%"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <CustomSelect onSelectionChange={() => {}} />
          </Box>
          <Text fontSize="18px" fontWeight={"500"}>
            추천 작품
          </Text>

          <Grid
            mt={8}
            columnGap={4}
            rowGap={8}
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
          >
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
          </Grid>
          <Box height="64px" />
          <Text fontSize="18px" fontWeight={"500"}>
            모든 작품
          </Text>

          <Grid
            mt={8}
            columnGap={4}
            rowGap={8}
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
          >
            {repeated.map((element) => element)}
          </Grid>
          <PaginationController itemCount={50} pagination={16} />
        </Box>
      </Flex>
    </Box>
  );
}
