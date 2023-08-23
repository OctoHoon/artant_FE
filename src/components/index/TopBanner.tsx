import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";

interface Shop {
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

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("http://127.0.0.1:8000/api/v1/users/shops")
      .then((response) => {
        // Update the state with the fetched data
        setShopData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching shop data:", error);
      });
  }, []);

  return (
    <Slider {...settings}>
      {shopData.map((shop: Shop) => (
        <Image
          key={shop.pk}
          width="690px"
          height="300px"
          objectFit="cover"
          src={shop.background_pic}
        />
      ))}
    </Slider>
  );
}
