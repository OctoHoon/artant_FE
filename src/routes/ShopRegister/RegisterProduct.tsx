import { Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import RegisterProcess from "../../components/RegisterShop/RegisterProcess";
import AddVariation from "../../components/ShopManager/RegisterProdcuct/AddVariations";
import PersonalizeTab from "../../components/ShopManager/PersonalizeTab";
import Shipping from "../../components/ShopManager/RegisterProdcuct/Shipping";
import Returns from "../../components/ShopManager/RegisterProdcuct/Returns";
import ProductDetails from "../../components/ShopManager/RegisterProdcuct/ProductDetails";
import WhiteButton from "../../components/commons/Button/WhiteButton";
import AddVideo from "../../components/ShopManager/RegisterProdcuct/AddVideo";
import AddPictures from "../../components/ShopManager/RegisterProdcuct/AddPictures";
import useUser from "../../lib/useUser";
import { IUploadProductVariables } from "../../services/productService";
import { updateShop } from "../../services/shopService";
import OpenInfo from "../../components/ShopManager/RegisterProdcuct/OpenInfo";
import RegisterProductHeader from "../../components/ShopManager/RegisterProdcuct/RegisterProductHeader";
import {
  onSubmitProduct,
  transformToVariants,
  useProductState,
  useUploadImages,
  useUploadVideo,
} from "../../components/ShopManager/RegisterProdcuct/RegisterProduct";
import { useState } from "react";

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

export default function RegisterProduct() {
  const { userLoading, isLoggedIn, user } = useUser();

  const navigate = useNavigate();
  // product value
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
    optionNumbers,
    setOptionNumbers,
  } = useProductState();

  const [isLoading, setIsLoading] = useState(false);

  const { uploadImages } = useUploadImages();
  const { uploadVideos } = useUploadVideo();

  const onSubmitAll = async (e: React.FormEvent) => {
    e.preventDefault();

    const variantData = transformToVariants({
      optionNumbers,
      selectedOptions,
      combinations,
      prices,
    });

    //validate 넣어야함
    if (selectedFiles.length === 0) {
      alert("최소 한 장의 사진을 넣어주세요");
      return;
    }

    setIsLoading(true);

    if (
      variantData.minPrice &&
      variantData.minOriginalPriceAtMinPrice &&
      variantData.totalStock
    ) {
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

        const result = await onSubmitProduct({ productData }); // shop에 product 등록
        setSelectedFiles([]);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const updateData = {
          register_step: 2,
        };
        await updateShop(user.shop.pk, updateData);
        setIsLoading(false);
        navigate(
          `/your/shops/${user.shop.pk}/onboarding/listings/${result["id"]}`
        );
      } catch (error) {
        alert("상품 업로드 중 문제가 생겼습니다. 개발자에게 문제를 알려주세요");
        setIsLoading(false);
        console.error("Error during submission:", error);
      }
    } else {
      alert("가격, 재고를 등록했는지 확인하세요!");
      setIsLoading(false);
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
            <RegisterProcess currentPage={2} />
            <RegisterProductHeader
              title={"작품 만들기"}
              subtitle={
                "항목에 대한 사진과 세부정보를 추가하세요. 지금 당장 가능한 내용을 작성하세요. 나중에 편집할 수 있습니다."
              }
            />
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
              pk={user?.shop?.pk}
            />
            <AddVariation
              productName={productName}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              combinations={combinations}
              setCombinations={setCombinations}
              prices={prices}
              setPrices={setPrices}
              optionNumbers={optionNumbers}
              setOptionNumbers={setOptionNumbers}
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
                  이 작품은 아직 활성화 되지 않았습니다. 매장을 오픈하면
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
