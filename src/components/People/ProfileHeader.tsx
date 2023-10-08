import { Flex, Box, Avatar, Text, Image, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import FavoriteItems from "./FavoriteItems";
import FavoriteShops from "./FavoriteShops";
import useUser from "../../lib/useUser";
import { useQuery } from "@tanstack/react-query";
import { getFavoriteProducts, getShops, getUser } from "../../api";

export default function ProfileHeader() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get("tab");
  const [index, setIndex] = useState(tab === "shops" ? 1 : 0);
  const { pk } = useParams();
  const { data: user, isLoading: userLoading } = useQuery(
    ["SpecificUser", pk],
    getUser
  );
  const { isLoading: FavoriteProductIsLoading, data: FavoriteProductsData } =
    useQuery(["FavoriteProducts", pk], getFavoriteProducts);

  const { isLoading: ShopIsLoading, data: ShopData } = useQuery(
    ["shops"],
    getShops
  );

  return (
    <Box width="1280px">
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
          <Link to={`/shop/${user.shop_pks[0]}`}>
            <Flex>
              <Box marginRight="12px" textAlign={"end"}>
                <Text color={"#595959"}>{user?.shop_names[0]}</Text>
                <Text color={"#595959"}>0 판매</Text>
              </Box>
              <Box width="40px">
                <Image src={user?.shop_avatars[0]} />
              </Box>
            </Flex>
          </Link>
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
              !FavoriteProductIsLoading && FavoriteProductsData[0]?.thumbnail
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
            objectFit={"cover"}
            src={!ShopIsLoading && ShopData[0]?.avatar}
            border={index != 0 ? "2px" : 0}
          />
          <Box height="10px" />
          <Text textAlign={"center"}>즐겨찾은 상점</Text>
        </Box>
      </Flex>
      <Box height={"60px"} />
      {index === 1 ? (
        ShopData ? (
          <FavoriteShops data={ShopData} />
        ) : null
      ) : FavoriteProductsData ? (
        <FavoriteItems data={FavoriteProductsData} />
      ) : null}
    </Box>
  );
}
