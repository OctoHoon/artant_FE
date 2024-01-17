import { Box } from "@chakra-ui/react";
import ItemDetail from "../components/ProductDetail/ItemDetail";
import CollectionList from "../components/ProductDetail/CollectionList";
import RelatedKeywords from "../components/ProductDetail/RelatedKeywords";
import ItemListFive from "../components/ProductDetail/ItemsListFive";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SimilarItemFive from "../components/ProductDetail/SimilarItemFive";
import { getProductDetails } from "../services/productService";

export default function ProductDetail() {
  const { pk } = useParams();
  const { isLoading, data } = useQuery(["products", pk], getProductDetails);

  const shopPk = data && data.shop_pk;
  const isLikded = data && data.is_liked;

  console.log(data);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center" // Center horizontally
      justifyContent="center" // Center vertically
    >
      <Box height={"32px"} />
      <ItemDetail shop_pk={shopPk ? shopPk : null} is_liked={isLikded} />
      <Box height={"96px"} />

      <ItemListFive
        title="판매자의 다른 작품"
        shop_pk={shopPk ? shopPk : null}
      />
      <Box height={"96px"} />

      <SimilarItemFive title="당신이 좋아할 만한 작품" />
      <Box height={"96px"} />

      <CollectionList
        title="아트앤트 쇼핑객이 직접 선택한 컬렉션"
        option={true}
      />
      <Box height={"96px"} />

      {isLoading ? null : (
        <RelatedKeywords
          category={data.category}
          subCategory={data.subCategory}
        />
      )}
      <Box height={"120px"} />
    </Box>
  );
}
