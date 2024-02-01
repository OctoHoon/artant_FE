import { useState } from "react";
import {
  getUploadURL,
  getVideoUploadURL,
  uploadImage,
  uploadProduct,
  uploadVideo,
} from "../../../services/productService";
import { useMutation } from "@tanstack/react-query";

export type SelectedOption = {
  name: string;
  options: OptionDetail[];
};

export type OptionDetail = {
  name: string;
};

export type ProcessingTimeOption = {
  key: string;
  value: string;
  min: number;
  max: number;
};

export type Policy = {
  return: boolean;
  exchange: boolean;
  timeframe: number;
};

export type OptionDetails = {
  originalPrice: string;
  price: string;
  stock: string;
  visible: boolean;
};

export type PriceMap = {
  [key: string]: OptionDetails;
};

export const useProductState = () => {
  const [productName, setProductName] = useState(""); // 제품 이름
  const [productDescription, setProductDescription] = useState(""); // 제품 설명
  const [productPrice, setProductPrice] = useState(0); // 제품 가격
  const [productOriginalPrice, setProductOriginalPrice] = useState(0); // 정가
  const [productCount, setProductCount] = useState(0); // 제품 수량
  const [productSKU, setProductSKU] = useState(""); // 제품 SKU
  const [refreshOptionValue, setRefreshOptionValue] = useState("1"); // 갱신 옵션
  const [shippingOptionValue, setShippingOptionValue] = useState("1"); // 배송 옵션
  const [tags, setTags] = useState<string[]>([]);
  const [materials, setMaterials] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // 카테고리
  const [selectedSubCategory, setSelectedSubCategory] = useState(""); // 서브 카테고리
  const [isPersonalizationEnabled, setIsPersonalizationEnabled] =
    useState(false); // 개인화 여부
  const [personalization, setPersonalization] = useState(""); // 개인화 내용
  const [isOption, setIsOption] = useState(false); // 옵션 여부
  const [postalCode, setPostalCode] = useState<string>(); // 우편번호
  const [processingTime, setProcessingTime] =
    useState<ProcessingTimeOption | null>(null); // 처리 시간
  const [customProcessingTime, setCustomProcessingTime] = useState({
    min: "",
    max: "",
  }); // 사용자 정의 처리 시간
  const [freeShipping, setFreeShipping] = useState<boolean | null>(null); // 무료 배송 여부
  const [shippingCost, setShippingCost] = useState("0"); // 배송비
  const [policy, setPolicy] = useState<Policy>({
    return: true,
    exchange: true,
    timeframe: 14,
  }); // 교환 정책
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]); // 선택된 파일들
  const [selectedVideoFile, setSelectedVideoFile] = useState<File>(); // 선택된 비디오 파일
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([
    { name: "", options: [] },
    { name: "", options: [] },
  ]); // 선택된 옵션들
  const [combinations, setCombinations] = useState<string[][]>([]); // 조합
  const [prices, setPrices] = useState<PriceMap>({
    default: { originalPrice: "0", price: "0", stock: "0", visible: true },
  }); // 가격 맵
  const [section, setSection] = useState(); // 섹션

  return {
    productName,
    setProductName,
    productDescription,
    setProductDescription,
    productPrice,
    setProductPrice,
    productOriginalPrice,
    setProductOriginalPrice,
    productCount,
    setProductCount,
    productSKU,
    setProductSKU,
    refreshOptionValue,
    setRefreshOptionValue,
    shippingOptionValue,
    setShippingOptionValue,
    tags,
    setTags,
    materials,
    setMaterials,
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
    isPersonalizationEnabled,
    setIsPersonalizationEnabled,
    personalization,
    setPersonalization,
    isOption,
    setIsOption,
    postalCode,
    setPostalCode,
    processingTime,
    setProcessingTime,
    customProcessingTime,
    setCustomProcessingTime,
    freeShipping,
    setFreeShipping,
    shippingCost,
    setShippingCost,
    policy,
    setPolicy,
    selectedFiles,
    setSelectedFiles,
    selectedVideoFile,
    setSelectedVideoFile,
    selectedOptions,
    setSelectedOptions,
    combinations,
    setCombinations,
    prices,
    setPrices,
    section,
    setSection,
  };
};

export const transformToVariants = ({ combinations, prices }) => {
  if (combinations.length === 0) {
    const variants = [];
    const minOriginalPriceAtMinPrice = parseInt(
      prices["default"]["originalPrice"]
    );
    const minPrice = parseInt(prices["default"]["price"]);
    const totalStock = parseInt(prices["default"]["stock"]);
    return { variants, totalStock, minPrice, minOriginalPriceAtMinPrice };
  }

  let totalStock = 0;
  let minPrice = Number.MAX_VALUE;
  let minOriginalPriceAtMinPrice = Number.MAX_VALUE;

  const variants = combinations.map((combination) => {
    const key = combination.join("-");
    const priceDetail = prices[key];
    const price = parseFloat(priceDetail.price);
    const originalPrice = parseFloat(priceDetail.originalPrice);
    const stock = parseInt(priceDetail.stock);

    totalStock += stock;

    if (price < minPrice) {
      minPrice = price;
      minOriginalPriceAtMinPrice = originalPrice;
    }

    return {
      option_one: combination[0] || "",
      option_two: combination[1] || "",
      sku: "", // Implement generateSKU based on your logic
      price,
      original_price: originalPrice,
      quantity: stock,
    };
  });
  return { variants, totalStock, minPrice, minOriginalPriceAtMinPrice };
};

export const onSubmitProduct = async ({ productData }) => {
  try {
    console.log(productData);
    const result = await uploadProduct(productData);

    return result;
  } catch (error) {
    console.error("작품 업로드 실패", error);
    throw error;
  }
};

export const useUploadImages = () => {
  const uploadImageMutation = useMutation(uploadImage, {}); //cloudflare에 올림
  const uploadURLMutation = useMutation(getUploadURL, {}); //url 가져옴

  const uploadImages = async ({ selectedFiles }) => {
    console.log(selectedFiles);
    console.log("여기");
    try {
      // Step 1: Get upload URLs for each file
      const uploadURLResponses = await Promise.all(
        selectedFiles.map(() => uploadURLMutation.mutateAsync())
      );
      console.log(uploadURLResponses);

      // Step 2: Upload each file to the acquired URL
      const uploadImageResponses = await Promise.all(
        selectedFiles.map(async (file, index) => {
          const response = uploadURLResponses[index];
          return uploadImageMutation.mutateAsync({
            uploadURL: response.uploadURL,
            file: file,
          });
        })
      );
      console.log(uploadImageResponses);

      // Step 3: Construct the images array
      const images = uploadImageResponses.map(
        (response) =>
          `https://imagedelivery.net/bsWtnSHPIyo_nZ9jFOblFw/${response.result.id}/public` // Assuming the response contains the URL as 'imageUrl'
      );

      return images;
    } catch (error) {
      console.error("Error uploading photos:", error);
      return []; // Return an empty array in case of an error
    }
  };
  return {
    uploadImages,
    isUploadingImages:
      uploadImageMutation.isLoading || uploadURLMutation.isLoading,
  };
};

export const useUploadVideo = () => {
  const uploadVideoMutation = useMutation(uploadVideo, {
    onError: () => {
      // mutate가 실패하면, 함수를 실행합니다.
      console.log("uploadVideoMutation error");
    },
  });

  const uploadVideoURLMutation = useMutation(getVideoUploadURL, {
    onError: () => {
      // mutate가 실패하면, 함수를 실행합니다.
      console.log("uploadVideoURLMutation error");
    },
  });

  const uploadVideos = async ({ selectedVideoFile }) => {
    if (!selectedVideoFile) {
      // console.error("No video file selected for upload.");
      return "";
    }
    try {
      // First, get the upload URL
      const uploadURLData = await uploadVideoURLMutation.mutateAsync();
      const cloudflareStreamUrl = `https://customer-8j0waj0pjwj8wz5e.cloudflarestream.com/${
        uploadURLData.uploadURL.split("/")[3]
      }/thumbnails/thumbnail.mp4?width=600&time=0s`;

      // Then upload the video file
      await uploadVideoMutation.mutateAsync({
        uploadURL: uploadURLData.uploadURL,
        file: selectedVideoFile,
      });
      return cloudflareStreamUrl;
    } catch (error) {
      // Handle errors that occur during the upload or video creation process
      console.error("Error in video submission process:", error);
      return "";
    }
  };
  return { uploadVideos, isUploadingVideo: uploadVideoMutation.isLoading };
};
