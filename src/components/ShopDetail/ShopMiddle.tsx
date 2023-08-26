import {
  Flex,
  Box,
  Text,
  Grid,
  Button,
  ButtonGroup,
  Wrap,
} from "@chakra-ui/react";
import ShopSideBar from "./ShopSideBar";
import ShopProductCard from "./ShopProductCard";
import CustomSelect from "../Items/CustomSelect";
import PaginationController from "../commons/PaginationController";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import PdpCard from "../commons/PdpCard";
import { getShopProducts } from "../../api";

const itemCount = 24;

export default function ShopMiddle() {
  const { pk } = useParams();
  const { isLoading, data } = useQuery(["shopProduct", pk], getShopProducts);
  console.log(data);
  return (
    <Box>
      <Text fontSize="24px" fontWeight="500">
        작품
      </Text>
      <Box height="30px" />
      <Flex gap="40px">
        <Box width="252px">
          <ShopSideBar />
        </Box>
        <Box width="998px">
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
          <Box height={"16px"} />

          <Flex flexWrap={"wrap"} gap={"40px 20px"}>
            <PdpCard
              pk={4}
              source="/assets/images/card_image_custom-3.png"
              title="우리의 꿈은"
              description="애니메이션화, CG, 스타 서정배"
              price={120000}
              originalPrice={200000}
              free_shipping={true}
              is_best_seller={true}
              artist={undefined}
              is_liked={false}
            />
            <PdpCard
              pk={4}
              source="/assets/images/card_image_custom-3.png"
              title="우리의 꿈은"
              description="애니메이션화, CG, 스타 서정배"
              price={120000}
              originalPrice={200000}
              free_shipping={true}
              is_best_seller={true}
              artist={undefined}
              is_liked={false}
            />
            <PdpCard
              pk={4}
              source="/assets/images/card_image_custom-3.png"
              title="우리의 꿈은"
              description="애니메이션화, CG, 스타 서정배"
              price={120000}
              originalPrice={200000}
              free_shipping={true}
              is_best_seller={true}
              artist={undefined}
              is_liked={false}
            />
            <PdpCard
              pk={4}
              source="/assets/images/card_image_custom-3.png"
              title="우리의 꿈은"
              description="애니메이션화, CG, 스타 서정배"
              price={120000}
              originalPrice={200000}
              free_shipping={true}
              is_best_seller={true}
              artist={undefined}
              is_liked={false}
            />
          </Flex>

          <Box height="64px" />
          <Flex flexDirection={"column"} gap={"16px"}>
            <Text fontSize="18px" fontWeight={"500"}>
              모든 작품
            </Text>
            {isLoading ? null : (
              <Flex gap={"40px 20px"} flexWrap={"wrap"}>
                {data.map((art) => (
                  <PdpCard
                    key={art.pk}
                    pk={art.pk}
                    source={art.thumbnail}
                    title={art.name}
                    description={null}
                    artist={art.shop_name}
                    price={art.price}
                    originalPrice={art.original_price}
                    free_shipping={art.free_shipping}
                    is_best_seller={art.is_best_seller}
                    is_liked={art.is_liked}
                  />
                ))}
              </Flex>
            )}
          </Flex>

          <PaginationController itemCount={50} pagination={16} />
        </Box>
      </Flex>
    </Box>
  );
}
