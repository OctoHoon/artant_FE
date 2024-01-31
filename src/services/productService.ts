import axios from "axios";
import { instance } from "./apiConfig";
import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";

export interface Variation {
  name: string;
  options: { name: string }[];
}

export interface Variant {
  option_one: string;
  option_two: string;
  sku: string;
  price: number;
  original_price: number;
  quantity: number;
}

export interface IUploadProductVariables {
  shopPK: string;
  name: string;
  made_by: string;
  product_type: string;
  product_creation_date: string;
  category_name_input: string;
  primary_color_input?: string;
  secondary_color_input?: string;
  tags_input: string[];
  section_input: string;
  materials_input: string[];
  description: string;
  price: number;
  original_price: number;
  quantity: number;
  sku: string;
  processing_min: number;
  processing_max: number;
  shipping_price: number;
  images_input: string[];
  video_input: string | null;
  is_personalization_enabled: boolean;
  is_personalization_optional: boolean;
  personalization_guide: string;
  variations_input: Variation[];
  variants_input: Variant[];
}

export const uploadProduct = (uploadProduct: IUploadProductVariables) =>
  instance
    .post(`/shops/${uploadProduct.shopPK}/products`, uploadProduct, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
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

export const getProducts = () =>
  instance.get("products/").then((response) => response.data);

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

export const getReviews = ({ queryKey }: QueryFunctionContext) => {
  const [pk, page, selectedOption] = queryKey;
  return (
    instance
      //?page=${page}&sort=${selectedOption}
      .get(`reviews/products/${pk}`)
      .then((response) => response.data)
  );
};

export const getReviewPhotos = ({ queryKey }: QueryFunctionContext) => {
  const [pk, page] = queryKey;
  return instance
    .get(`reviews/products/${pk}/images?page=${page}`)
    .then((response) => response.data);
};
