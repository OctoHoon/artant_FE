import { Flex, Text } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  createPhoto,
  createVideo,
  getUploadURL,
  getVideoUploadURL,
  IMAGE_DELIVERY_URL,
  IUploadProductVariables,
  putProduct,
  updateShop,
  uploadImage,
  uploadProduct,
  uploadVideo,
  Variant,
} from "../api";
import { useState } from "react";
import RegisterProcess from "../components/RegisterShop/RegisterProcess";
import AddVariation from "../components/ShopManager/RegisterProdcuct/AddVariations";
import PersonalizeTab from "../components/ShopManager/PersonalizeTab";
import Shipping from "../components/ShopManager/RegisterProdcuct/Shipping";
import Returns from "../components/ShopManager/RegisterProdcuct/Returns";
import StockAndPrice from "../components/ShopManager/RegisterProdcuct/StockAndPrice";
import ProductDetails from "../components/ShopManager/RegisterProdcuct/ProductDetails";
import WhiteButton from "../components/commons/Button/WhiteButton";
import AddVideo from "../components/ShopManager/RegisterProdcuct/AddVideo";
import AddPictures from "../components/ShopManager/RegisterProdcuct/AddPictures";
import BlackButton from "../components/commons/Button/BlackButton";
import useUser from "../lib/useUser";

type SelectedOption = {
  name: string;
  is_sku_vary: boolean;
  is_price_vary: boolean;
  is_quantity_vary: boolean;
  options: OptionDetail[];
};

type OptionDetail = {
  name: string;
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

export const ActionSection = ({ children, ...props }) => (
  <Flex
    width="1280px"
    justifyContent="space-between"
    alignItems="center"
    {...props}
  >
    {children}
  </Flex>
);

export default function UploadPhotos() {
  const { userLoading, isLoggedIn, user } = useUser();

  const navigate = useNavigate();
  // product value
  const [productPK, setProductPK] = useState("");
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
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  const [selectedVideoFile, setSelectedVideoFile] = useState<File>();
  const { shopPk } = useParams();
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);
  const [detailCombinations, setDetailCombinations] = useState<Variant[]>([]);
  const [section, setSection] = useState();

  const uploadImageMutation = useMutation(uploadImage, {}); //cloudflare에 올림
  const uploadURLMutation = useMutation(getUploadURL, {}); //url 가져옴

  console.log(detailCombinations);

  const onSubmitImages = async () => {
    try {
      // Step 1: Get upload URLs for each file
      const uploadURLResponses = await Promise.all(
        selectedFiles.map(() => uploadURLMutation.mutateAsync())
      );

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
      const images = uploadImageResponses.map((response, index) => ({
        image: `https://imagedelivery.net/bsWtnSHPIyo_nZ9jFOblFw/${response.result.id}/public`, // Assuming the response contains the URL as 'imageUrl'
        order: index + 1, // Adding 1 since you want order to start from 1, not 0
      }));

      return images;
    } catch (error) {
      console.error("Error uploading photos:", error);
      return []; // Return an empty array in case of an error
    }
  };

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

  const onSubmitVideo = async () => {
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

  const onSubmitProduct = async ({ productData }) => {
    try {
      console.log(productData);
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
        let videoUrl = await onSubmitVideo();
        if (videoUrl == undefined) {
          videoUrl = "";
        }
        const images = await onSubmitImages(); // product에 images 등록

        const productData: IUploadProductVariables = {
          name: productName,
          description: productDescription,
          price: productPrice,
          category_name: selectedSubCategory,
          shopPK: shopPk!,
          tags: tags,
          materials: materials,
          made_by: "I did",
          product_type: "A finished product",
          product_creation_date: "Made To Order",
          primary_color: "",
          secondary_color: "",
          section: section ?? "",
          quantity: 0,
          sku: productSKU,
          processing_min: 3,
          processing_max: 7,
          shipping_price: 0,
          images: images,
          video: videoUrl,
          is_personalization_enabled: isPersonalizationEnabled,
          is_personalization_optional: isOption,
          personalization_guide: personalization,
          variations: selectedOptions,
          variants: detailCombinations,
        };

        const result = await onSubmitProduct({ productData }); // shop에 product 등록
        setSelectedFiles([]);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const updateData = {
          register_step: 2,
        };
        const response = await updateShop(shopPk, updateData);
        navigate(`/your/shops/${shopPk}/onboarding/listings/${result["id"]}`);
      } catch (error) {
        console.log(error);
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
    uploadImageMutation.isLoading ||
    uploadURLMutation.isLoading ||
    uploadVideoMutation.isLoading ||
    uploadVideoURLMutation.isLoading;
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
          {" "}
          <RegisterProcess currentPage={2} />
          <RegisterProductHeader />
          <AddPictures
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
            existingImages={[]}
          />
          <AddVideo setSelectedVideoFile={setSelectedVideoFile} />
          <ProductDetails
            productName={productName}
            setProductName={setProductName}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
            refreshOptionValue={refreshOptionValue}
            setRefreshOptionValue={setRefreshOptionValue}
            shippingOptionValue={shippingOptionValue}
            setShippingOptionValue={setShippingOptionValue}
            productDescription={productDescription}
            setProductDescription={setProductDescription}
            tags={tags}
            setTags={setTags}
            materials={materials}
            setMaterials={setMaterials}
            section={section}
            setSection={setSection}
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
                onClick={undefined}
              />
              <Text textStyle={"B14R"}>
                이목록은 아직 활성화 되지 않았습니다. 매장을 오픈하면 쇼핑객에게
                제공됩니다.
              </Text>
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
                onClick={onSubmitAll}
                isLoading={calculateLoadingState()}
              />
            </Flex>
          </ActionSection>
        </Flex>
      </Flex>
    </>
  );

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
          작품 만들기
        </Text>
        <Text textStyle={"B14R"}>
          항목에 대한 사진과 세부정보를 추가하세요. 지금 당장 가능한 내용을
          작성하세요. 나중에 편집할 수 있습니다.
        </Text>
      </Flex>
    );
  }
}
