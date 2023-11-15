import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

// const isDevelopment = true;

// const baseUrl = isDevelopment
//   ? "http://127.0.0.1:8000/api/v1/"
//   : "http://147.46.245.226:8000/api/v1/";

const baseUrl = "https://artant.shop/api/v1/";

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

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

export const getShops = () =>
  instance.get("users/shops").then((response) => response.data);

export const getProducts = () =>
  instance.get("products/").then((response) => response.data);

export const getFavoriteProducts = ({ queryKey }: QueryFunctionContext) => {
  const [_, userPk] = queryKey;
  return instance
    .get(`favorites/items/${userPk}`)
    .then((response) => response.data);
};

export const getProductsParameter = ({ queryKey }: QueryFunctionContext) => {
  const [category, location, selectedOption] = queryKey;
  console.log(
    `products/?category=${category}&sort=${selectedOption}${location}`
  );
  return instance
    .get(`products/?category=${category}&sort=${selectedOption}${location}`)
    .then((response) => response.data);
};

export const getProductsParameterTag = ({ queryKey }: QueryFunctionContext) => {
  const [tag, location, selectedOption] = queryKey;
  console.log(`products/?category=${tag}&sort=${selectedOption}${location}`);
  return instance
    .get(`products/?tag=${tag}&sort=${selectedOption}${location}`)
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
  instance.get("/users/shops").then((response) => response.data);

export const getShopDetails = ({ queryKey }: QueryFunctionContext) => {
  const [_, pk] = queryKey;
  return instance.get(`users/shops/${pk}`).then((response) => response.data);
};

export const getShopProducts = ({ queryKey }: QueryFunctionContext) => {
  const [_, pk, page] = queryKey;
  return instance
    .get(`users/shops/${pk}/products?page=${page}`)
    .then((response) => response.data);
};

export const toggleLikeProduct = (pk) => {
  return instance
    .put(`favorites/items/toggle/${pk}`, null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);
};

export const toggleLikeShop = (pk) => {
  return instance
    .put(`favorites/shops/toggle/${pk}`, null, {
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
    .get(`users/shops/${pk}/reviews?page=${page}&sort=${selectedOption}`)
    .then((response) => response.data);
};

export const getReviewPhotos = ({ queryKey }: QueryFunctionContext) => {
  const [pk, page] = queryKey;
  return instance
    .get(`products/${pk}/reviews/photos?page=${page}`)
    .then((response) => response.data);
};

export const getRecentlyViewedProducts = () =>
  instance.get("products/recently-viewed").then((response) => response.data);

export const getUploadURL = () =>
  instance
    .post(`products/photos/get-url`, null, {
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
      `products/${productPK}/photos`,
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
    .post(`products/videos/get-url`, null, {
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
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  category_name: string;
  shopPK: string;
}

export const updateShop = async (pk, shopData) => {
  try {
    const response = await instance.put(`users/shops/${pk}`, shopData, {
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
  description,
  price,
  thumbnail,
  category_name,
  shopPK,
}: IUploadProductVariables) =>
  instance
    .post(
      `/users/shops/${shopPK}/products/create`,
      { name, description, price, category_name, thumbnail },
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
