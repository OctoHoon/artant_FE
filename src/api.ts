import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const isDevelopment = false;

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
