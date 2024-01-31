import { Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import PersonalizeTab from "./PersonalizeTab";
import AddVariation from "./RegisterProdcuct/AddVariations";
import Returns from "./RegisterProdcuct/Returns";
import Shipping from "./RegisterProdcuct/Shipping";
import { ActionSection } from "../../routes/ShopRegister/RegisterProduct";
import WhiteButton from "../commons/Button/WhiteButton";
import AddPictures from "./RegisterProdcuct/AddPictures";
import AddVideo from "./RegisterProdcuct/AddVideo";
import ProductDetails from "./RegisterProdcuct/ProductDetails";
import useUser from "../../lib/useUser";
import { IUploadProductVariables } from "../../services/productService";
import OpenInfo from "./RegisterProdcuct/OpenInfo";
import RegisterProductHeader from "./RegisterProdcuct/RegisterProductHeader";
import {
  useProductState,
  onSubmitProduct,
  transformToVariants,
  useUploadImages,
  useUploadVideo,
} from "./RegisterProdcuct/RegisterProduct";

export default function AddProduct() {
  const { userLoading, isLoggedIn, user } = useUser();
  console.log(user);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    productName,
    setProductName,
    productDescription,
    setProductDescription,
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
  } = useProductState();

  const { uploadImages } = useUploadImages();
  const { uploadVideos } = useUploadVideo();

  const onSubmitAll = async (e: React.FormEvent) => {
    e.preventDefault();

    const variantData = transformToVariants({
      combinations,
      prices,
    });

    //validate 넣어야함

    if (selectedFiles.length === 0) {
      alert("최소 한 장의 사진을 넣어주세요");
      return;
    }
    setIsLoading(true);

    if (variantData.minPrice) {
      try {
        // 순차적으로 비동기 함수 실행
        let images: string[] = [];
        let videoUrl = "";
        try {
          videoUrl = await uploadVideos({ selectedVideoFile });
          if (videoUrl == undefined) {
            videoUrl = "";
          }
        } catch (error) {
          setIsLoading(false);
          console.log(error);
          alert("동영상 업로드 중 문제가 생겼습니다.");
        }

        try {
          images = await uploadImages({ selectedFiles }); // product에 images 등록
        } catch (error) {
          setIsLoading(false);
          console.log(error);
          alert("사진 업로드 중 문제가 발생했습니다.");
        }
        console.log(images);

        const productData: IUploadProductVariables = {
          name: productName,
          description: productDescription,
          price: variantData.minPrice,
          original_price: variantData.minOriginalPriceAtMinPrice,
          category_name_input: selectedSubCategory,
          shopPK: user.shop.pk,
          tags_input: tags,
          materials_input: materials,
          made_by: "I did",
          product_type: "A finished product",
          product_creation_date: "Made To Order",
          section_input: section ?? "",
          quantity: 0,
          sku: productSKU,
          processing_min: 3,
          processing_max: 7,
          shipping_price: 0,
          images_input: images,
          video_input: videoUrl,
          is_personalization_enabled: isPersonalizationEnabled,
          is_personalization_optional: isOption,
          personalization_guide: personalization,
          variations_input: selectedOptions,
          variants_input: variantData.variants,
        };

        await onSubmitProduct({ productData }); // shop에 product 등록
        setSelectedFiles([]);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        navigate(`/your/shops/me/listings`);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        alert(
          "작품명, 작품설명, 카테고리, 가격, 사진을 등록했는지 확인하세요!"
        );
        console.error("Error during submission:", error);
      }
    } else {
      setIsLoading(false);
      alert("뭐지");
    }
  };

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
        <form onSubmit={onSubmitAll}>
          <Flex
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"60px"}
          >
            {" "}
            <RegisterProductHeader
              title={"작품 만들기"}
              subtitle={
                " 항목에 대한 사진과 세부정보를 추가하세요. 지금 당장 가능한 내용을 작성하세요. 나중에 편집할 수 있습니다."
              }
            />
            <AddPictures
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
              existingImages={[]}
            />
            <AddVideo setSelectedVideoFile={setSelectedVideoFile} />
            {!userLoading && (
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
                pk={user.shop.pk}
              />
            )}
            <AddVariation
              productName={productName}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              combinations={combinations}
              setCombinations={setCombinations}
              prices={prices}
              setPrices={setPrices}
            />
            <OpenInfo />
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
                  이목록은 아직 활성화 되지 않았습니다. 매장을 오픈하면
                  쇼핑객에게 제공됩니다.
                </Text>
              </Flex>
              <Flex gap={"12px"} alignItems={"center"}>
                <WhiteButton
                  title={"미리보기"}
                  borderRadius={"5px"}
                  onClick={undefined}
                />
                <Button
                  isLoading={isLoading}
                  type="submit"
                  padding={"10px 24px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"5px"}
                  background={"black"}
                  fontSize={"16px"}
                  fontWeight={"500"}
                  color={"white"}
                  textAlign={"center"}
                  alignSelf={"start"}
                  _hover={{
                    background: "var(--maincolorsbggray-555555, #555)",
                  }}
                >
                  {"저장하고 계속"}
                </Button>
              </Flex>
            </ActionSection>
          </Flex>
        </form>
      </Flex>
    </>
  );
}
