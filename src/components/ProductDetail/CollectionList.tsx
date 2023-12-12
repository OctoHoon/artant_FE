import { Box, Flex, Text } from "@chakra-ui/react";
import Collection from "../commons/Card/Collection";
import MoreButton from "../commons/MoreButton";
import { useQuery } from "@tanstack/react-query";
import { getCollections } from "../../services/userService";

export default function CollectionList({ title, option }) {
  const { isLoading, data } = useQuery(["ProductCollections"], getCollections);

  return (
    <Box width="1280px">
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize={"24px"} fontWeight={"500"}>
          {title}
        </Text>
        {option ? <MoreButton /> : null}
      </Flex>
      <Box height={"24px"} />
      {isLoading || !data ? null : (
        <Flex width="1280px" justifyContent="space-between">
          {data.map((collection, index) => (
            <Collection
              title={collection.title}
              total_count={collection.total_products}
              images={collection.thumbnails}
            />
          ))}
        </Flex>
      )}
    </Box>
  );
}
