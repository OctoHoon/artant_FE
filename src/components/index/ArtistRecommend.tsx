import { Flex, Text } from "@chakra-ui/react";
import Artist from "../commons/Card/Artist";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getArtistRecommended } from "../../api";

interface Shop {
  pk: number;
  shop_name: string;
  avatar: string;
  background_pic: string;
}

export default function ArtistRecommend() {
  const { isLoading, data } = useQuery(
    ["ArtistRecommend"],
    getArtistRecommended
  );
  return (
    <Flex
      flexDirection={"column"}
      gap={"24px"}
      alignItems={"flex-start"}
      width={"1280px"}
    >
      <Text fontSize={"30px"} fontWeight={"500"}>
        판매자 추천
      </Text>
      <Flex alignSelf={"stretch"} justifyContent={"space-between"}>
        {isLoading ? null : (
          <>
            {data.slice(0, 4).map((artist: Shop, index) => (
              <Artist
                key={artist.pk}
                pk={artist.pk}
                source={artist.avatar}
                name={artist.shop_name}
                description={"작가"}
              />
            ))}
          </>
        )}
      </Flex>
    </Flex>
  );
}
