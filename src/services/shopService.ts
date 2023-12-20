import axios from "axios";
import { instance } from "./apiConfig";
import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";

export const createShop = async ({ shop_name }) => {
  try {
    const response = await instance.post(
      `shops/`,
      {
        shop_name,
      },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    );
    return response.data;
  } catch (error) {
    // Error handling can be more specific based on your needs
    if (axios.isAxiosError(error) && error.response) {
      // You can handle specific status codes or error messages here
      throw new Error(error.response.data.message || "Error creating user.");
    } else {
      throw error; // Re-throw the error if it's not an Axios error
    }
  }
};

export const createSection = async (shopId, data) => {
  try {
    const response = await instance.patch(`shops/${shopId}`, data, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    });
    return response.data;
  } catch (error) {
    // Handle the error appropriately
    console.error("Error updating the shop:", error);
    throw error;
  }
};

export const updateShop = async (shopId, shopData) => {
  const updatedShopData = { ...shopData, id: shopId };

  try {
    const response = await instance.patch(`shops/${shopId}`, updatedShopData, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    });
    return response.data;
  } catch (error) {
    // Handle the error appropriately
    console.error("Error updating the shop:", error);
    throw error;
  }
};

export const getShopBanners = () =>
  instance.get("shops/banners").then((response) => response.data);

export const getRecommendedShops = () =>
  instance.get("shops/recommended-shops").then((response) => response.data);

export const getArtistRecommended = () =>
  instance.get("shops/featured-shops").then((response) => response.data);

export const getShopDetails = ({ queryKey }: QueryFunctionContext) => {
  const [_, pk] = queryKey;
  return instance.get(`shops/${pk}`).then((response) => response.data);
};

export const getShopProducts = ({ queryKey }: QueryFunctionContext) => {
  const [_, pk, page, section] = queryKey;
  if (section === undefined) {
    return instance
      .get(`shops/${pk}/products?page=${page}`)
      .then((response) => response.data);
  } else {
    return instance
      .get(`shops/${pk}/products?page=${page}&section=${section}`)
      .then((response) => response.data);
  }
};

export const getShopReviews = ({ queryKey }: QueryFunctionContext) => {
  const [pk, page, selectedOption] = queryKey;
  return instance
    .get(`shops/${pk}/reviews?page=${page}&sort=${selectedOption}`)
    .then((response) => response.data);
};
