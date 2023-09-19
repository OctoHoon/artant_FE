import { Box } from "@chakra-ui/react";
import Footer from "../components/commons/Footer";
import ItemDetail from "../components/ProductDetail/ItemDetail";
import CollectionList from "../components/ProductDetail/CollectionList";
import RelatedKeywords from "../components/ProductDetail/RelatedKeywords";
import ItemListFive from "../components/ProductDetail/ItemsListFive";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../api";
import SimilarItemFive from "../components/ProductDetail/SimilarItemFive";

export default function ProductDetail() {
  const { pk } = useParams();
  const { isLoading, data } = useQuery(["products", pk], getProductDetails);

  const shopPk = data && data.shop_pk;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center" // Center horizontally
      justifyContent="center" // Center vertically
      gap={"96px"}
      px={40}
    >
      <ItemDetail shop_pk={shopPk ? shopPk : null} />
      <ItemListFive
        title="판매자의 다른 작품"
        shop_pk={shopPk ? shopPk : null}
      />
      <SimilarItemFive title="당신이 좋아할 만한 작품" />
      <CollectionList
        title="아트앤아트 쇼핑객이 직접 선택한 컬렉션"
        option={true}
      />
      {isLoading ? null : (
        <RelatedKeywords
          category={data.category}
          subCategory={data.subCategory}
        />
      )}
    </Box>
  );
}
