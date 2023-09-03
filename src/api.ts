import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const isDevelopment = true;

const baseUrl = isDevelopment
  ? "http://127.0.0.1:8000/api/v1/"
  : "http://147.46.245.226:8000/api/v1/";

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const getMe = () =>
  instance.get(`users/me`).then((response) => response.data);

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
  const [_, pk] = queryKey;
  return instance
    .get(`users/shops/${pk}/products`)
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
  file: FileList;
  uploadURL: string;
}

export const uploadVideo = ({ file, uploadURL }: IUploadVideoVarialbes) => {
  const form = new FormData();
  form.append("file", file[0]);
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
