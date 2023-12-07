import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const isDevelopment = true;

const baseUrl = isDevelopment
  ? "http://127.0.0.1:8000/api/v1/"
  : "https://artant.shop/api/v1/";

// const baseUrl = "https://artant.shop/api/v1/";

export const IMAGE_DELIVERY_URL =
  "https://imagedelivery.net/bsWtnSHPIyo_nZ9jFOblFw";

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const createShop = async ({ username, shop_name, register_step }) => {
  try {
    const response = await instance.post(
      `shops/`,
      {
        username,
        shop_name,
        register_step: register_step || undefined,
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

export const createUser = async ({
  username,
  password,
  email,
  name,
  gender,
  birthday,
  description,
  avatar,
}) => {
  try {
    const response = await instance.post(
      `users/sign-up`,
      {
        username,
        password,
        email,
        name,
        gender,
        birthday,
        description,
        avatar,
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

export const getMe = () =>
  instance.get(`users/me`).then((response) => response.data);

export const getUser = ({ queryKey }: QueryFunctionContext) => {
  const [_, userPk] = queryKey;
  return instance.get(`users/${userPk}`).then((response) => response.data);
};

export const logOut = () =>
  instance
    .post(`users/log-out`, null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export interface IUsernameLoginVariables {
  username: string;
  password: string;
}
export interface IUsernameLoginSuccess {
  ok: string;
}
export interface IUsernameLoginError {
  error: string;
}

export const usernameLogIn = ({
  username,
  password,
}: IUsernameLoginVariables) =>
  instance.post(
    `users/log-in`,
    { username, password },
    {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    }
  );

export const getShopBanners = () =>
  instance.get("shops/banners").then((response) => response.data);

export const getRecommendedShops = () =>
  instance.get("shops/recommended-shops").then((response) => response.data);

export const getProducts = () =>
  instance.get("products/").then((response) => response.data);

export const getFavoriteProducts = ({ queryKey }: QueryFunctionContext) => {
  const [_, userPk] = queryKey;
  return instance
    .get(`favorites/products/user/${userPk}`)
    .then((response) => response.data);
};

export const getFavoriteShops = ({ queryKey }: QueryFunctionContext) => {
  const [_, userPk] = queryKey;
  return instance
    .get(`favorites/shops/user/${userPk}`)
    .then((response) => response.data);
};

export const getProductsParameter = ({ queryKey }: QueryFunctionContext) => {
  const [category, location, selectedOption] = queryKey;
  console.log(
    `products/?category=${category}&sort=${selectedOption}${location}`
  );
  return instance
    .get(`products/?category=${category}&sort=${selectedOption}&${location}`)
    .then((response) => response.data);
};

export const getProductsParameterTag = ({ queryKey }: QueryFunctionContext) => {
  const [tag, location, selectedOption] = queryKey;
  console.log(`products/?category=${tag}&sort=${selectedOption}&${location}`);
  return instance
    .get(`products/?tag=${tag}&sort=${selectedOption}&${location}`)
    .then((response) => response.data);
};

export const getProductsRecommended = () =>
  instance
    .get("products/?sort=order&limit=8")
    .then((response) => response.data["products"]);

export const getProductsNew = () =>
  instance
    .get("products/?sort=created_at&limit=3")
    .then((response) => response.data["products"]);

export const getProductDetails = ({ queryKey }: QueryFunctionContext) => {
  const [_, productPk] = queryKey;
  return instance
    .get(`products/${productPk}`)
    .then((response) => response.data);
};

export const getArtistRecommended = () =>
  instance.get("shops/featured-shops").then((response) => response.data);

export const getShopDetails = ({ queryKey }: QueryFunctionContext) => {
  const [_, pk] = queryKey;
  return instance.get(`shops/${pk}`).then((response) => response.data);
};

export const getShopProducts = ({ queryKey }: QueryFunctionContext) => {
  const [_, pk, page, section] = queryKey;
  return instance
    .get(`shops/${pk}/products?page=${page}&section=${section}`)
    .then((response) => response.data);
};

export const toggleLikeProduct = (pk) => {
  return instance
    .put(`favorites/products/${pk}`, null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);
};

export const toggleLikeShop = (pk) => {
  return instance
    .put(`favorites/shops/${pk}`, null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);
};

export const getReviews = ({ queryKey }: QueryFunctionContext) => {
  const [pk, page, selectedOption] = queryKey;
  return instance
    .get(`products/${pk}/reviews?page=${page}&sort=${selectedOption}`)
    .then((response) => response.data);
};

export const getShopReviews = ({ queryKey }: QueryFunctionContext) => {
  const [pk, page, selectedOption] = queryKey;
  return instance
    .get(`shops/${pk}/reviews?page=${page}&sort=${selectedOption}`)
    .then((response) => response.data);
};

export const getReviewPhotos = ({ queryKey }: QueryFunctionContext) => {
  const [pk, page] = queryKey;
  return instance
    .get(`products/${pk}/reviews/images?page=${page}`)
    .then((response) => response.data);
};

export const getRecentlyViewedProducts = () =>
  instance
    .get("user-activities/recently-viewed")
    .then((response) => response.data);

export const getUploadURL = () =>
  instance
    .post(`common/images/get-url`, null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export interface IUploadImageVarialbes {
  file: File;
  uploadURL: string;
}

export const uploadImage = ({ file, uploadURL }: IUploadImageVarialbes) => {
  const form = new FormData();
  form.append("file", file);
  return axios
    .post(uploadURL, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

export interface ICreatePhotoVariables {
  image: string;
  productPK: string;
}

export const createPhoto = ({ image, productPK }: ICreatePhotoVariables) =>
  instance
    .post(
      `products/${productPK}/images`,
      { image },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);

export const getVideoUploadURL = () =>
  instance
    .post(`common/videos/get-url`, null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export interface IUploadVideoVarialbes {
  file: File;
  uploadURL: string;
}

export const uploadVideo = ({ file, uploadURL }: IUploadVideoVarialbes) => {
  console.log(file);
  console.log(uploadURL);
  const form = new FormData();
  form.append("file", file);
  console.log(form);
  return axios.post(uploadURL, form).then((response) => response.data);
};

export interface ICreateVideoVariables {
  video: string;
  productPK: string;
}

export const createVideo = ({ video, productPK }: ICreateVideoVariables) =>
  instance
    .post(
      `products/${productPK}/videos`,
      { video },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);

export interface IUploadProductVariables {
  shopPK: string;
  name: string;
  made_by: string;
  product_type: string;
  product_creation_date: string;
  category_name: string;
  primary_color: string;
  secondary_color: string;
  tags: string[];
  section: string;
  materials: string[];
  description: string;
  price: number;
  quantity: number;
  sku: string;
  processing_min: number;
  processing_max: number;
  shipping_price: number;
  images: { image: string; order: number }[];
  video: string;
  is_personalization_enabled: boolean;
  is_personalization_optional: boolean;
  personalization_guide: string;
  variations: Variation[];
  variants: Variant[];
}

export interface Variation {
  name: string;
  is_sku_vary: boolean;
  is_price_vary: boolean;
  is_quantity_vary: boolean;
  options: { name: string }[];
}

export interface Variant {
  option_one: string;
  option_two: string;
  sku: string;
  price: number;
  quantity: number;
}

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

export const uploadProduct = ({
  name,
  made_by,
  product_type,
  product_creation_date,
  category_name,
  primary_color,
  secondary_color,
  tags,
  section,
  materials,
  description,
  price,
  quantity,
  sku,
  processing_min,
  processing_max,
  shipping_price,
  images,
  video,
  is_personalization_enabled,
  is_personalization_optional,
  personalization_guide,
  variations,
  variants,
  shopPK,
}: IUploadProductVariables) =>
  instance
    .post(
      `/shops/${shopPK}/products`,
      {
        name,
        made_by,
        product_type,
        product_creation_date,
        category_name,
        primary_color,
        secondary_color,
        tags,
        section,
        materials,
        description,
        price,
        quantity,
        sku,
        processing_min,
        processing_max,
        shipping_price,
        images,
        video,
        is_personalization_enabled,
        is_personalization_optional,
        personalization_guide,
        variations,
        variants,
      },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);
export interface IPutProductVariables {
  thumbnail: string;
  productPK: string;
}
export const putProduct = (variables: IPutProductVariables) =>
  instance
    .put(`/products/${variables.productPK}`, variables, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export const getCollections = () =>
  instance.get(`collections/`).then((response) => response.data);

export interface IUploadCartVariables {
  product_pk: string;
  quantity: number;
  variant_pks: number[];
}

export const addToCart = ({
  product_pk,
  quantity,
  variant_pks,
}: IUploadCartVariables) =>
  instance
    .post(
      `cart/`,
      { product_pk, quantity, variant_pks },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);

export const getCart = () =>
  instance.get(`cart/`).then((response) => response.data);

export const addToPurchase = ({
  product_pk,
  quantity,
  variant_pks,
}: IUploadCartVariables) =>
  instance
    .post(
      `purchase/`,
      { product_pk, quantity, variant_pks },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);

export const getPurchase = () =>
  instance.get(`purchase/`).then((response) => response.data);

export const deleteCartLine = (cartline_pk) =>
  instance
    .delete(`cart/${cartline_pk}`, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);
