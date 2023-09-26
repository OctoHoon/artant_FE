import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, Box, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getShops } from "../../api";

interface IShop {
  pk: number;
  shop_name: string;
  avatar: string;
  background_pic: string;
}

export default function TopBanner() {
  const [shopData, setShopData] = useState([]);
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true, // Center mode 설정
    centerPadding: "400px",
    usetransform: false,
  };

  const { isLoading, data } = useQuery(["shops"], getShops);
  console.log(data);

  return (
    <Box maxW={"1920px"} minW="1280px">
      {isLoading ? null : (
        <>
          <Slider {...settings}>
            {data.map((shop: IShop) => (
              <Link to={`shop/${shop.pk}`}>
                <Image
                  key={shop.pk}
                  width="1280px"
                  height="480px"
                  objectFit="cover"
                  src={shop.background_pic}
                />
              </Link>
            ))}
          </Slider>
        </>
      )}
    </Box>
  );
}
