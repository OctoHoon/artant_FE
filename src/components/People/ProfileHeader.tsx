import { Flex, Box, Avatar, Text, Image, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import FavoriteItems from "./FavoriteItems";
import FavoriteShops from "./FavoriteShops";
import useUser from "../../lib/useUser";
import { useQuery } from "@tanstack/react-query";
import { getFavoriteProducts } from "../../api";

export default function ProfileHeader() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get("tab");
  const [index, setIndex] = useState(tab === "shops" ? 1 : 0);
  const { pk } = useParams();
  const { user, userLoading } = useUser();
  const { isLoading: FavoriteProductIsLoading, data: FavoriteProductsData } =
    useQuery(["FavoriteProducts", pk], getFavoriteProducts);

  return (
    <Box width="100%">
      <Flex justifyContent={"space-between"} width={"100%"}>
        <Flex alignItems={"center"}>
          <Avatar src={userLoading ? null : user?.avatar} />
          <Box width="10px" />
          <Box>
            <Text fontSize={"22px"} fontWeight={"500"}>
              {userLoading ? null : user?.name}
            </Text>
            <Flex>
              <Text color={"#595959"} as="u">
                공개 프로필 설정
              </Text>
              <Box width="10px" />
              <Text color={"#595959"} as="u">
                {" "}
                About
              </Text>
            </Flex>
          </Box>
        </Flex>
        {!userLoading && user?.shop_names.length > 0 && (
          <Flex>
            <Box marginRight="12px" textAlign={"end"}>
              <Text color={"#595959"}>{user?.shop_names[0]}</Text>
              <Text color={"#595959"}>0 판매</Text>
            </Box>
            <Box width="40px">
              <Image src={user?.shop_avatars[0]} />
            </Box>
          </Flex>
        )}
      </Flex>
      <Box height={"40px"} />
      <Flex gap="10px">
        <Box onClick={() => setIndex(0)}>
          <Image
            width="140px"
            height="108px"
            borderRadius={"10px"}
            objectFit={"cover"}
            src={
              !FavoriteProductIsLoading &&
              FavoriteProductsData?.products[2]?.thumbnail
            }
            border={index == 0 ? "2px" : 0}
          />
          <Box height="10px" />
          <Text textAlign={"center"}>즐겨찾은 작품</Text>
        </Box>
        <Box onClick={() => setIndex(1)}>
          <Image
            width="140px"
            height="108px"
            borderRadius={"10px"}
            src="https://i.etsystatic.com/11396539/r/il/3a4a3a/4474003937/il_794xN.4474003937_1bjd.jpg"
            border={index != 0 ? "2px" : 0}
          />
          <Box height="10px" />
          <Text textAlign={"center"}>즐겨찾은 상점</Text>
        </Box>
      </Flex>
      <Box height={"60px"} />
      {index === 1 ? (
        <FavoriteShops />
      ) : !FavoriteProductIsLoading ? (
        <FavoriteItems data={FavoriteProductsData} />
      ) : null}
    </Box>
  );
}
