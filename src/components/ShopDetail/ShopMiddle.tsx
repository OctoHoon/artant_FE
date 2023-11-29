import { Flex, Box, Text } from "@chakra-ui/react";
import ShopSideBar from "./ShopSideBar";
import CustomSelect from "../Items/CustomSelect";
import PaginationController from "../commons/PaginationController";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import PdpCard from "../commons/Card/PdpCard";
import { getShopDetails, getShopProducts } from "../../api";
import { useState } from "react";

const itemCount = 24;

export default function ShopMiddle({ sections }) {
  const { pk } = useParams();
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery(
    ["shopProduct", pk, page],
    getShopProducts
  );

  const handlePageChange = (event, value) => {
    setPage(value); // Update the page when the user changes it
  };
  return (
    <Box>
      <Text fontSize="24px" fontWeight="500">
        작품
      </Text>
      <Box height="30px" />
      <Flex gap="40px">
        <Box width="252px">
          <ShopSideBar sections={sections} />
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

          {isLoading ? null : (
            <Flex gap={"40px 20px"} flexWrap={"wrap"}>
              {data.products.slice(0, 4).map((art) => (
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

          <Box height="64px" />
          <Flex flexDirection={"column"} gap={"16px"}>
            <Text fontSize="18px" fontWeight={"500"}>
              모든 작품
            </Text>
            {isLoading ? null : (
              <Flex gap={"40px 20px"} flexWrap={"wrap"}>
                {data.products.map((art) => (
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

          <PaginationController
            page={page}
            itemCount={data ? data.total_count : 0}
            pagination={16}
            handleChange={handlePageChange}
          />
        </Box>
      </Flex>
    </Box>
  );
}
