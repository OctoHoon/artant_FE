import { useNavigate, useParams } from "react-router-dom";

import { Flex, Text } from "@chakra-ui/react";
import AddPictures from "../../components/ShopManager/RegisterProdcuct/AddPictures";
import AddVideo from "../../components/ShopManager/RegisterProdcuct/AddVideo";
import ProductDetails from "../../components/ShopManager/RegisterProdcuct/ProductDetails";
import StockAndPrice from "../../components/ShopManager/RegisterProdcuct/StockAndPrice";
import AddVariation from "../../components/ShopManager/RegisterProdcuct/AddVariations";
import PersonalizeTab from "../../components/ShopManager/PersonalizeTab";
import Shipping from "../../components/ShopManager/RegisterProdcuct/Shipping";
import Returns from "../../components/ShopManager/RegisterProdcuct/Returns";
import { ActionSection } from "../ShopRegister/RegisterProduct";
import WhiteButton from "../../components/commons/Button/WhiteButton";
import BlackButton from "../../components/commons/Button/BlackButton";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useUser from "../../lib/useUser";
import {
  IUploadProductVariables,
  createPhoto,
  createVideo,
  getProductDetails,
  getUploadURL,
  getVideoUploadURL,
  putProduct,
  uploadImage,
  uploadProduct,
  uploadVideo,
} from "../../services/productService";

const IMAGE_DELIVERY_URL = "https://imagedelivery.net/bsWtnSHPIyo_nZ9jFOblFw";

interface IUploadURLResponse {
  id: string;
  uploadURL: string;
}

type OptionCategory = "Primary Color" | "Secondary Color" | "Size" | "Material";

type SelectedOption = {
  variation: OptionCategory | string;
  detail: string[];
  selectPrice: boolean;
  selectQuantity: boolean;
  selectSku: boolean;
};

type DetailCombination = {
  detail1: string;
  detail2: string;
  price?: number;
  quantity?: number;
  sku?: string;
  visible?: boolean;
};

type ProcessingTimeOption = {
  key: string;
  value: string;
  min: number;
  max: number;
};

type Policy = {
  return: boolean;
  exchange: boolean;
  timeframe: number;
};

export default function ShopManagerListingEditing() {
  const { userLoading, isLoggedIn, user } = useUser();

  const { productPK } = useParams();
  console.log(productPK);
  const { isLoading, data } = useQuery(
    ["products", productPK],
    getProductDetails
  );

  const shopPk = data && data.shop_pk;

  const navigate = useNavigate();
  // product value
  const [productName, setProductName] = useState(""); // 제품 이름
  const [productDescription, setProductDescription] = useState(""); // 제품 설명
  const [productPrice, setProductPrice] = useState(0); // 제품 가격
  const [productCount, setProductCount] = useState(0); // 제품 수량
  const [productSKU, setProductSKU] = useState(""); // 제품 SKU
  const [refreshOptionValue, setRefreshOptionValue] = useState("1"); // 갱신 옵션
  const [shippingOptionValue, setShippingOptionValue] = useState("1"); // 갱신 옵션
  const [tags, setTags] = useState<string[]>([]);
  const [materials, setMaterials] = useState<string[]>([]);
  // 카테고리
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  //personalization
  const [isPersonalizationEnabled, setIsPersonalizationEnabled] =
    useState(false);
  const [personalization, setPersonalization] = useState("");
  const [isOption, setIsOption] = useState(false);
  //배송
  const [postalCode, setPostalCode] = useState<string>();
  const [processingTime, setProcessingTime] =
    useState<ProcessingTimeOption | null>(null);
  const [customProcessingTime, setCustomProcessingTime] = useState({
    min: "",
    max: "",
  });
  const [freeShipping, setFreeShipping] = useState<boolean | null>(null);
  const [shippingCost, setShippingCost] = useState("0");
  //exchange policy
  const [policy, setPolicy] = useState<Policy>({
    return: true,
    exchange: true,
    timeframe: 14,
  });
  // image, video files
  const [existingImages, setExistingImages] = useState([]);
  const [existingVideo, setExistingVideo] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  const [selectedVideoFile, setSelectedVideoFile] = useState<File>();
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);
  const [detailCombinations, setDetailCombinations] = useState<
    DetailCombination[]
  >([]);

  useEffect(() => {
    // Pre-populate form fields when data is available
    if (data) {
      setProductName(data.name);
      setExistingImages(data.images.map((images) => images.image));
      if (data.video) {
        setExistingVideo(data.video.video);
      }
      setProductDescription(data.description);
      setProductPrice(data.price);
      setProductCount(data.quantity);
      setSelectedCategory(data.category);
      setSelectedSubCategory(data.subCategory);
      // ... set other details like description, price, etc.
    }
  }, [data]);

  const createPhotoMutation = useMutation(createPhoto, {});
  const uploadImageMutation = useMutation(uploadImage, {
    onSuccess: ({ result }: any) => {
      if (productPK) {
        const responsephoto = createPhotoMutation.mutate({
          image: `${IMAGE_DELIVERY_URL}/${result.id}/public`,
          productPK,
        });
      }
    },
  });
  const uploadImageAndThumbnailMutation = useMutation(uploadImage, {
    onSuccess: ({ result }: any) => {
      if (productPK) {
        const thumbnailResponse = putProduct({
          thumbnail: `${IMAGE_DELIVERY_URL}/${result.id}/public`,
          productPK: productPK, // 제품 PK 값 설정
        });
        createPhotoMutation.mutate({
          image: `${IMAGE_DELIVERY_URL}/${result.id}/public`,
          productPK,
        });
      }
    },
  });
  const uploadURLMutation = useMutation(getUploadURL, {});

  const onSubmitImages = async () => {
    try {
      const uploadURLResponses = await Promise.all(
        selectedFiles.map(() => uploadURLMutation.mutateAsync())
      );

      const uploadPromises = selectedFiles.map(async (file, index) => {
        const response = uploadURLResponses[index];
        if (index === 0) {
          await uploadImageAndThumbnailMutation.mutateAsync({
            uploadURL: response.uploadURL,
            file: file,
          });
        } else {
          await uploadImageMutation.mutateAsync({
            uploadURL: response.uploadURL,
            file: file,
          });
        }
      });

      await Promise.all(uploadPromises);
    } catch (error) {
      console.error("Error uploading photos:", error);
    }
  };

  const createVideoMutation = useMutation(createVideo, {
    onError: () => {
      // mutate가 실패하면, 함수를 실행합니다.
      console.log("createVideoMutation error");
    },
  });

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

  const onSubmitVideo = async ({ pk }) => {
    if (!selectedVideoFile) {
      console.error("No video file selected for upload.");
      return;
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

      // After successful upload, create the video record
      await createVideoMutation.mutateAsync({
        video: cloudflareStreamUrl,
        productPK: pk,
      });
    } catch (error) {
      // Handle errors that occur during the upload or video creation process
      console.error("Error in video submission process:", error);
    }
  };

  const productData: IUploadProductVariables = {
    name: productName,
    description: productDescription,
    price: productPrice,
    category_name: selectedSubCategory,
    shopPK: shopPk!,
    made_by: "",
    product_type: "",
    product_creation_date: "",
    primary_color: "",
    secondary_color: "",
    tags: [],
    section: "",
    materials: [],
    quantity: 0,
    sku: "",
    processing_min: 3,
    processing_max: 7,
    shipping_price: 0,
    images: [],
    video: "",
    is_personalization_enabled: false,
    is_personalization_optional: false,
    personalization_guide: "",
    variations: [],
    variants: [],
  };

  const onSubmitProduct = async () => {
    try {
      const result = await uploadProduct(productData);
      return result;
    } catch (error) {
      console.error("상품 업로드 실패", error);
      throw error;
    }
  };

  const onSubmitAll = async () => {
    if (
      productName &&
      selectedFiles &&
      productDescription &&
      productPrice &&
      shopPk &&
      selectedSubCategory
    ) {
      try {
        // 순차적으로 비동기 함수 실행
        const result = await onSubmitProduct(); // shop에 product 등록
        await onSubmitImages(); // product에 images 등록
        await onSubmitVideo({ pk: productPK });
        setSelectedFiles([]);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        navigate(`/your/shops/me/listings`);
      } catch (error) {
        alert(
          "작품명, 작품설명, 카테고리, 가격, 사진을 등록했는지 확인하세요!"
        );
        console.error("Error during submission:", error);
      }
    } else {
      alert("작품명, 작품설명, 카테고리, 가격, 사진을 등록했는지 확인하세요!");
    }
  };

  const calculateLoadingState = () =>
    createPhotoMutation.isLoading ||
    uploadImageMutation.isLoading ||
    uploadURLMutation.isLoading ||
    createVideoMutation.isLoading ||
    uploadVideoMutation.isLoading ||
    uploadVideoURLMutation.isLoading ||
    uploadImageAndThumbnailMutation.isLoading;

  return (
    <>
      {" "}
      <Flex
        display={"inline-flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"120px"}
        mt={"32px"}
        mb={"120px"}
      >
        <Flex
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"60px"}
        >
          <RegisterProductHeader />
          <AddPictures
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
            existingImages={existingImages}
          />
          <AddVideo
            setSelectedVideoFile={setSelectedVideoFile}
            existingVideo={existingVideo}
          />
          <ProductDetails
            productName={productName}
            productDescription={productDescription}
            setProductName={setProductName}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
            refreshOptionValue={refreshOptionValue}
            setRefreshOptionValue={setRefreshOptionValue}
            shippingOptionValue={shippingOptionValue}
            setShippingOptionValue={setShippingOptionValue}
            setProductDescription={setProductDescription}
            tags={tags}
            setTags={setTags}
            materials={materials}
            setMaterials={setMaterials}
            section={undefined}
            setSection={undefined}
            pk={user.shop_pk}
          />
          <StockAndPrice
            productPrice={productPrice}
            setProductPrice={setProductPrice}
            productCount={productCount}
            setProductCount={setProductCount}
            setProductSKU={setProductSKU}
          />
          <AddVariation
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            detailCombinations={detailCombinations}
            setDetailCombinations={setDetailCombinations}
          />
          <PersonalizeTab
            personalization={personalization}
            setPersonalization={setPersonalization}
            isOption={isOption}
            setIsOption={setIsOption}
            isPersonalizationEnabled={isPersonalizationEnabled}
            setIsPersonalizationEnabled={setIsPersonalizationEnabled}
          />
          <Shipping
            setPostalCode={setPostalCode}
            processingTime={processingTime}
            setProcessingTime={setProcessingTime}
            customProcessingTime={customProcessingTime}
            setCustomProcessingTime={setCustomProcessingTime}
            freeShipping={freeShipping}
            setFreeShipping={setFreeShipping}
            shippingCost={shippingCost}
            setShippingCost={setShippingCost}
          />
          <Returns policy={policy} setPolicy={setPolicy} />
          <ActionSection>
            <Flex gap={"12px"} alignItems={"center"}>
              <WhiteButton
                title={"취소"}
                borderRadius={"5px"}
                onClick={() => navigate(`/your/shops/me/listings`)}
              />
            </Flex>
            <Flex gap={"12px"} alignItems={"center"}>
              <WhiteButton
                title={"미리보기"}
                borderRadius={"5px"}
                onClick={undefined}
              />
              <BlackButton
                title={"저장하고 계속"}
                borderRadius={"5px"}
                onClick={undefined}
                isLoading={calculateLoadingState()}
              />
            </Flex>
          </ActionSection>
        </Flex>
      </Flex>
    </>
  );
}

function RegisterProductHeader() {
  return (
    <Flex
      display={"flex"}
      height={"68px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"12px"}
    >
      {" "}
      <Text textStyle={"H2R"} letterSpacing="0.5px">
        작품 수정하기
      </Text>
      <Text textStyle={"B14R"}>항목에 대한 사진과 세부정보를 수정하세요.</Text>
    </Flex>
  );
}
