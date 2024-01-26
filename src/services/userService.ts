import axios from "axios";
import { instance } from "./apiConfig";
import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";

export interface IUserSignUpVariables {
  is_corporate: boolean;
  corporate_number: string | null;
  corporate_name: string | null;
  name: string;
  username: string;
  password: string;
  password_confirm: string;
  email: string;
  gender: string;
  birthday: string;
  cell_phone_number: string;
  description: string;
  avatar: string;
  agreed_to_terms_of_service: boolean;
  agreed_to_electronic_transactions: boolean;
  agreed_to_privacy_policy: boolean;
  confirmed_age_over_14: boolean;
  agreed_to_third_party_sharing: boolean;
  agreed_to_optional_privacy_policy: boolean;
  agreed_to_marketing_mails: boolean;
}

export const createUser = async (userData: IUserSignUpVariables) => {
  try {
    const response = await instance.post(`users/sign-up`, userData, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    });
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

export const validateEmail = async ({ email }) => {
  try {
    const response = await instance.post(`users/validate-email`, {
      email: email,
    });
    return response;
  } catch (error) {
    console.error("Error validating email:", error);
  }
};

export const validateCorporateNumber = async ({ corporateNumber }) => {
  try {
    const response = await instance.post(`users/validate-corporate-number`, {
      corporate_number: corporateNumber,
    });
    return response;
  } catch (error) {
    console.error("Error validating email:", error);
  }
};

export const sendPasswordResetEmail = async ({ name, email }) => {
  try {
    const response = await instance.post(`users/request-password-reset`, {
      name: name,
      email: email,
    });
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export const resetPassword = async ({
  uid,
  token,
  new_password,
  confirm_password,
}) => {
  try {
    const response = await instance.post("users/password-reset-confirm", {
      uid: uid,
      token: token,
      new_password: new_password,
      confirm_password: confirm_password,
    });
    return response.data;
  } catch (error) {
    console.error("Error in password reset confirm:", error);
    throw error;
  }
};

export interface IUsernameLoginVariables {
  email: string;
  password: string;
  rememberMe: boolean;
}
export interface IUsernameLoginSuccess {
  ok: string;
}
export interface IUsernameLoginError {
  error: string;
}

export const usernameLogIn = ({
  email,
  password,
  rememberMe,
}: IUsernameLoginVariables) =>
  instance.post(
    `users/log-in`,
    { email, password, rememberMe },
    {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    }
  );

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

export const getRecentlyViewedProducts = () =>
  instance
    .get("user-activities/recently-viewed")
    .then((response) => response.data);

export const kakaoLogin = (code: string) =>
  instance
    .post(
      `/users/kakao`,
      { code },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoekn") || "",
        },
      }
    )
    .then((response) => response.status);
