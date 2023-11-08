import {
  Button,
  Container,
  Flex,
  FormControl,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  createPhoto,
  createVideo,
  getUploadURL,
  getVideoUploadURL,
  IUploadProductVariables,
  putProduct,
  uploadImage,
  uploadProduct,
  uploadVideo,
} from "../api";
import { useEffect, useRef, useState } from "react";
import RegisterProcess from "../components/RegisterShop/RegisterProcess";
import ReactPlayer from "react-player";
import { subsubCategory } from "../components/data/options";
import { PixelCrop } from "react-image-crop";
import ThumbnailCrop from "../components/ShopManager/Thumbnail";
import AddVariation from "../components/ShopManager/RegisterProdcuct/AddVariations";
import PersonalizeTab from "../components/ShopManager/PersonalizeTab";
import Shipping from "../components/ShopManager/RegisterProdcuct/Shipping";
import Returns from "../components/ShopManager/RegisterProdcuct/Returns";
import StockAndPrice from "../components/ShopManager/RegisterProdcuct/StockAndPrice";
import ProductDetails from "../components/ShopManager/RegisterProdcuct/ProductDetails";
import RegisterHeader from "../components/ShopManager/RegisterProdcuct/RegisterHeader";
import SectionTitle from "../components/ShopManager/RegisterProdcuct/SectionTitle";
import WhiteButton from "../components/commons/Button/WhiteButton";
import AddVideo from "../components/ShopManager/RegisterProdcuct/AddVideo";

interface IForm {
  file: FileList;
}

interface IUploadURLResponse {
  id: string;
  uploadURL: string;
}

export default function UploadPhotos() {
  // product value
  const [productPK, setProductPK] = useState("");
  const [productName, setProductName] = useState(""); // 제품 이름
  const [productDescription, setProductDescription] = useState(""); // 제품 설명
  const [productPrice, setProductPrice] = useState(0); // 제품 가격
  const [productCount, setProductCount] = useState(0); // 제품 수량
  const [productSKU, setProductSKU] = useState(""); // 제품 SKU
  const [refreshOptionValue, setRefreshOptionValue] = useState("1"); // 갱신 옵션
  const [shippingOptionValue, setShippingOptionValue] = useState("1"); // 갱신 옵션

  // image, video files
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  const [selectedVideoFile, setSelectedVideoFile] = useState<FileList>();

  const { register, handleSubmit, watch, reset } = useForm<IForm>();
  const { shopPk } = useParams();
  const [cloudflareStreamUrl, setCloudflareStreamUrl] = useState<string>("");
  const createPhotoMutation = useMutation(createPhoto, {});
  const uploadImageMutation = useMutation(uploadImage, {
    onSuccess: ({ result }: any) => {
      console.log(result);

      if (productPK) {
        const responsephoto = createPhotoMutation.mutate({
          image: `https://imagedelivery.net/bsWtnSHPIyo_nZ9jFOblFw/${result.id}/public`,
          productPK,
        });
      }
    },
  });
  const uploadImageAndThumbnailMutation = useMutation(uploadImage, {
    onSuccess: ({ result }: any) => {
      console.log(result);

      if (productPK) {
        console.log("upload image ahs pk ", productPK);
        const thumbnailResponse = putProduct({
          thumbnail: `https://imagedelivery.net/bsWtnSHPIyo_nZ9jFOblFw/${result.id}/public`,
          productPK: productPK, // 제품 PK 값 설정
        });
        createPhotoMutation.mutate({
          image: `https://imagedelivery.net/bsWtnSHPIyo_nZ9jFOblFw/${result.id}/public`,
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
      console.log("썸네일 업데이트 완료");
      setCloudflareStreamUrl("");
    } catch (error) {
      console.error("Error uploading photos:", error);
    }
  };

  const createVideoMutation = useMutation(createVideo, {});

  const uploadVideoURLMutation = useMutation(getVideoUploadURL, {
    onSuccess: (data: IUploadURLResponse) => {
      const cloudflareStreamUrl = `https://customer-8j0waj0pjwj8wz5e.cloudflarestream.com/${
        data.uploadURL.split("/")[3]
      }/thumbnails/thumbnail.mp4?width=600&time=0s`;

      //   console.log(
      //     cloudflareStreamUrl.replace(
      //       "/watch",
      //       "/thumbnails/thumbnail.jpg?time=0s&height=270"
      //     )
      //   );

      setCloudflareStreamUrl(cloudflareStreamUrl);

      uploadVideoMutation.mutate({
        uploadURL: data.uploadURL,
        file: selectedVideoFile!,
      });
    },
  });

  const uploadVideoMutation = useMutation(uploadVideo, {
    onSuccess: (response: any) => {
      console.log("upload video success");
    },
  });

  const onSubmitVideo = async () => {
    console.log(watch("file"));
    uploadVideoURLMutation.mutate();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFilesList = e.target.files;

    console.log("selected filelist", selectedFilesList);
    if (selectedFilesList) {
      const newFiles = Array.from(selectedFilesList);
      setSelectedFiles([...selectedFiles, ...newFiles]);
    }
    if (selectedFiles.length > 9) {
      setSelectedFiles(selectedFiles.slice(0, 9));
    }
    console.log(selectedFiles);
  };

  const handleVideoFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const videoFile = e.target.files;
    console.log("handleVideoFileSelect", videoFile);
    if (videoFile) {
      setSelectedVideoFile(videoFile);
    }
    onSubmitVideo();
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileSelect = () => {
    if (fileInputRef.current && selectedFiles.length < 9) {
      fileInputRef.current.click();
    }
  };

  const videoFileInputRef = useRef<HTMLInputElement>(null);

  const onVideoFileSelect = () => {
    if (videoFileInputRef.current) {
      videoFileInputRef.current.click();
    }
  };

  // 카테고리
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const productData: IUploadProductVariables = {
    name: productName,
    description: productDescription,
    price: productPrice,
    thumbnail:
      "https://static9.depositphotos.com/1022647/1077/i/950/depositphotos_10770202-stock-photo-modern-art-gallery-empty-picture.jpg", // 임시 썸네일
    category_name: selectedSubCategory,
    shopPK: shopPk!,
  };

  const onSubmitProduct = async () => {
    console.log(productName);
    console.log(productDescription);
    console.log(productPrice);
    console.log(shopPk);

    try {
      const result = await uploadProduct(productData);
      setProductPK(result["id"]);

      // setProductPK가 완료되면 createVideoMutation.mutate 호출
      createVideoNow(result["id"]);

      return result;
    } catch (error) {
      console.error("상품 업로드 실패", error);
      throw error;
    }
  };

  const createVideoNow = (productPK) => {
    createVideoMutation.mutate({
      video: cloudflareStreamUrl,
      productPK,
    });
  };

  const navigate = useNavigate();
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

        console.log("setprodut pk from result", result["id"], productPK);

        await onSubmitImages(); // product에 images 등록
        setSelectedFiles([]);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log("화면이동");
        navigate(`/your/shops/${shopPk}/onboarding/listings/${result["id"]}`);
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [adjustedCrop, setAdjustedCrop] = useState(false);

  function drawCroppedImage() {
    if (completedCrop && previewCanvasRef.current) {
      const canvas = previewCanvasRef.current;
      const ctx = canvas.getContext("2d");

      const image = new window.Image() as HTMLImageElement;
      image.src = URL.createObjectURL(selectedFiles[0]);

      image.onload = () => {
        const { width, height, x, y } = completedCrop;
        const scale = image.height / 400;

        const offscreen = new OffscreenCanvas(width * scale, height * scale);
        const offscreenCtx = offscreen.getContext(
          "2d"
        ) as OffscreenCanvasRenderingContext2D;

        console.log(
          scale,
          x,
          y,
          width,
          height,
          offscreen.width,
          offscreen.height
        );
        canvas.width = 120;
        canvas.height = 120;

        ctx!.drawImage(
          image,
          x * scale,
          y * scale,
          width * scale,
          height * scale,
          0,
          0,
          120,
          120
        );
      };
    }
  }

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
          <Flex
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"40px"}
          >
            <Flex
              display={"flex"}
              height={"68px"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"12px"}
            >
              {" "}
              <Text
                color="var(--maincolorstextblack-222222, #222)"
                fontFamily="Spoqa Han Sans Neo"
                fontSize="30px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                letterSpacing="0.5px"
              >
                작품 만들기
              </Text>
              <Text
                color="var(--maincolorstextblack-222222, #222)"
                fontFamily="Spoqa Han Sans Neo"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                letterSpacing="-0.042px"
              >
                항목에 대한 사진과 세부정보를 추가하세요. 지금 당장 가능한
                내용을 작성하세요. 나중에 편집할 수 있습니다.
              </Text>
            </Flex>
            <Flex
              display={"flex"}
              width={"1280px"}
              padding={"24px"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"32px"}
              border={
                "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
              }
            >
              <RegisterHeader
                title={"사진"}
                description={
                  "구매자가 모든 세부정보를 볼 수 있도록 최대한 많이 추가하세요."
                }
              />

              <Flex
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  width={"234px"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                >
                  <SectionTitle
                    title={"사진*"}
                    description={
                      "최대 8개의 사진을 사용하여 항목의 가장 중요한 특성을 보여주세요."
                    }
                    link={undefined}
                  />
                  <Flex
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"6px"}
                    alignSelf={"stretch"}
                  >
                    <Text textStyle={"B13M"}>TIP</Text>
                    <Flex
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"flex-start"}
                      gap={"8px"}
                      alignSelf={"stretch"}
                      color="var(--maincolorstextgray-595959, #666)"
                    >
                      <Text textStyle={"B13R"}>
                        • 자연광을 사용하고 플래시를 사용하지 마세요.
                      </Text>

                      <Text textStyle={"B13R"}>
                        • 들고 있거나, 착용하거나, 사용하고 있는 물건을
                        보여주세요.
                      </Text>
                      <Text textStyle={"B13R"}>
                        • 깨끗하고 단순한 배경으로 촬영하세요.
                      </Text>
                      <Text textStyle={"B13R"}>
                        • 구매자가 모든 옵션을 볼 수 있도록 변형에 사진을
                        추가하세요.
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"20px"}
                >
                  <Flex display={"flex"} alignItems={"flex-start"} gap={"20px"}>
                    <Button
                      display={"flex"}
                      width={"120px"}
                      height={"120px"}
                      padding={"24px"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"20px"}
                      border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                      variant="unstyled" // 클릭 효과와 색상 없애기
                      disabled={selectedFiles.length > 8}
                      onClick={onFileSelect}
                    >
                      <SvgCamera />
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
                        textAlign="center"
                        fontFamily="Spoqa Han Sans Neo"
                        fontSize="13px"
                        fontStyle="normal"
                        fontWeight={400}
                        lineHeight="normal"
                        letterSpacing="-0.3px"
                        mt={"-12px"}
                      >
                        사진 추가
                      </Text>
                    </Button>

                    {[1, 1, 1, 1, 1, 1].map((url, index) => (
                      <GrayBoxImage
                        key={index}
                        index={index}
                        src={
                          selectedFiles.length > index
                            ? URL.createObjectURL(selectedFiles[index])
                            : ""
                        }
                        width={"120px"}
                        height={"120px"}
                      />
                    ))}
                  </Flex>
                  <Flex display={"flex"} alignItems={"flex-start"} gap={"20px"}>
                    {[1, 1].map((url, index) => (
                      <GrayBoxImage
                        key={index + 6}
                        index={index + 6}
                        src={
                          selectedFiles.length > index + 6
                            ? URL.createObjectURL(selectedFiles[index + 6])
                            : ""
                        }
                        width={"120px"}
                        height={"120px"}
                      />
                    ))}
                  </Flex>
                  <HStack>
                    <SvgWarning />
                    <Text
                      color="var(--maincolorstextblack-222222, #222)"
                      textAlign="center"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="13px"
                      fontStyle="normal"
                      fontWeight={400}
                      lineHeight="normal"
                      letterSpacing="-0.3px"
                    >
                      사진은 너비가 2000픽셀 이상인 사진이 가장 잘 보입니다.
                    </Text>
                  </HStack>
                </Flex>
              </Flex>
              <Flex
                display={"flex"}
                alignItems={"flex-start"}
                gap={"40px"}
                alignSelf={"stretch"}
              >
                <SectionTitle
                  title={"썸네일 조정"}
                  description={
                    "작품의 미리보기 이미지를 미세 조정하세요. 쇼핑객이 검색에서 가장 먼저 보게 되는 내용입니다."
                  }
                  link={undefined}
                />
                <Flex display={"flex"} alignItems={"center"} gap={"16px"}>
                  {adjustedCrop ? (
                    <canvas
                      width={"120px"}
                      height={"120px"}
                      ref={previewCanvasRef}
                      style={{
                        border:
                          "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <GrayBoxImage
                      index={-1}
                      width={"145px"}
                      height={"120px"}
                      src={
                        selectedFiles.length > 0
                          ? URL.createObjectURL(selectedFiles[0])
                          : ""
                      }
                    />
                  )}
                  <Button
                    onClick={() => {
                      onOpen();
                      setAdjustedCrop(true);
                    }}
                    display="flex"
                    height="38px"
                    padding="8px 16px"
                    justifyContent="center"
                    alignItems="center"
                    border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                    background="var(--maincolorsbg-white, #FFF)"
                  >
                    썸네일 조정
                  </Button>
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>썸네일 조정</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <ThumbnailCrop
                          imgSrc={
                            selectedFiles.length > 0
                              ? URL.createObjectURL(selectedFiles[0])
                              : ""
                          }
                          setCompletedCropParent={(c) => setCompletedCrop(c)}
                        />
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          colorScheme="blue"
                          mr={3}
                          onClick={() => {
                            onClose();
                            drawCroppedImage();
                          }}
                        >
                          완료
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                          {" "}
                          취소
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <AddVideo
            setSelectedVideoFile={setSelectedVideoFile}
            videoFileInputRef={videoFileInputRef}
          />
          <ProductDetails
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
          />
          <StockAndPrice
            productPrice={productPrice}
            setProductPrice={setProductPrice}
            setProductCount={setProductCount}
            setProductSKU={setProductSKU}
          />
          <AddVariation />
          <PersonalizeTab />
          <Shipping />
          <Returns />
          <Flex
            width={"1280px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {" "}
            <Flex gap={"12px"} alignItems={"center"}>
              {" "}
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
              <Button
                alignContent={"center"}
                justifyContent={"center"}
                padding={"10px 24px"}
                backgroundColor="var(--maincolorsbgblack-222222, #222)"
                borderRadius={"5px"}
                border={"1px solid var(--maincolorstextblack-222222, #222)"}
                onClick={onSubmitAll}
                isLoading={
                  createPhotoMutation.isLoading ||
                  uploadImageMutation.isLoading ||
                  uploadURLMutation.isLoading ||
                  createVideoMutation.isLoading ||
                  uploadVideoMutation.isLoading ||
                  uploadVideoURLMutation.isLoading ||
                  uploadImageAndThumbnailMutation.isLoading
                }
                _hover={{
                  background: "var(--maincolorsbggray-555555, #555)",
                }}
              >
                <Text
                  color="var(--maincolorstext-white, #FFF);"
                  css={`
                    /* BODY/S_16/M */
                    font-family: "Spoqa Han Sans Neo";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    letter-spacing: 0.048px;
                  `}
                >
                  저장하고 계속
                </Text>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Container>
        <VStack as="form" spacing={5} mt={10}>
          <FormControl>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              multiple
              display="none" // 숨길 input 엘리먼트
              ref={fileInputRef}
            />
          </FormControl>

          <FormControl>
            <Input
              {...register("file")}
              type="file"
              accept="video/*"
              onChange={handleVideoFileSelect}
              style={{ display: "none" }} // 파일 선택 버튼을 숨깁니다.
              ref={videoFileInputRef}
            />
          </FormControl>
        </VStack>
      </Container>
    </>
  );
}

const GrayBoxImage = ({ src, width, height, index }) => {
  const textArray = [
    "정면",
    "측면",
    "모든 각도",
    "세부",
    "사용",
    "크기와 규모",
    "장면",
    "변형",
  ];

  const svgComponents = [
    <SvgOne />,
    <SvgTwo />,
    <SvgThree />,
    <SvgFour />,
    <SvgFive />,
    <SvgSix />,
    <SvgSeven />,
    <SvgEight />,
  ];

  if (!src) {
    return (
      <Flex display={"flex"} alignItems={"flex-start"}>
        <Flex
          display={"flex"}
          width={"120px"}
          height={"120px"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"4px"}
          border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
        >
          <Flex
            width={"80px"}
            height={"80px"}
            alignItems={"center"}
            justifyItems={"center"}
            alignContent={"center"}
            justifyContent={"center"}
          >
            {svgComponents[index]}
          </Flex>
          <Text
            color="var(--maincolorstextgray-969696, #969696)"
            textAlign="center"
            fontFamily="Spoqa Han Sans Neo"
            fontSize="12px"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="normal"
            letterSpacing="-0.036px"
          >
            {textArray[index]}
          </Text>
        </Flex>
      </Flex>
    ); // 이미지가 없을 때 null 반환
  }

  return (
    <Image
      src={src}
      style={{
        width: width,
        height: height,
        backgroundColor: "#D9D9D9", // 회색 배경
      }}
    />
  );
};

const SvgCamera = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
      <mask
        id="a"
        width="32"
        height="32"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0h32v32H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#1C1B1F"
          d="M16 22.308c1.393 0 2.57-.481 3.532-1.443.962-.961 1.442-2.138 1.442-3.532 0-1.393-.48-2.57-1.442-3.532-.962-.961-2.139-1.442-3.532-1.442-1.393 0-2.57.48-3.532 1.442-.962.962-1.442 2.14-1.442 3.532 0 1.394.48 2.57 1.442 3.532.962.962 2.139 1.443 3.532 1.443Zm0-1.334c-1.036 0-1.902-.348-2.597-1.043-.696-.696-1.044-1.562-1.044-2.598 0-1.036.348-1.901 1.044-2.597.695-.696 1.561-1.044 2.597-1.044s1.902.348 2.597 1.044c.696.696 1.044 1.561 1.044 2.597s-.348 1.902-1.044 2.598c-.695.695-1.561 1.043-2.597 1.043Zm-9.846 5.693c-.614 0-1.126-.206-1.537-.617-.411-.411-.617-.924-.617-1.537v-14.36c0-.613.206-1.125.617-1.536C5.027 8.206 5.54 8 6.154 8h3.943l2.467-2.667h6.872L21.903 8h3.943c.614 0 1.126.206 1.537.617.411.41.617.923.617 1.537v14.359c0 .613-.206 1.126-.617 1.537-.41.411-.923.617-1.537.617H6.154Z"
        />
      </g>
    </svg>
  );
};

const SvgWarning = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <mask
        id="a"
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#1C1B1F"
          d="M2.73 20 12 4l9.269 16H2.73Zm1.72-1h15.1L12 6 4.45 19ZM12 17.615c.174 0 .32-.059.438-.176a.596.596 0 0 0 .177-.439.596.596 0 0 0-.177-.439.596.596 0 0 0-.438-.176.596.596 0 0 0-.439.176.596.596 0 0 0-.177.439c0 .174.06.32.177.439a.596.596 0 0 0 .439.176Zm-.5-2.23h1v-5h-1v5Z"
        />
      </g>
    </svg>
  );
};

const SvgPlayCircle = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1005_4485"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1005_4485)">
        <circle cx="24" cy="24" r="18" fill="white" />
        <path
          d="M20 31.1539L31.1539 24L20 16.8461V31.1539ZM24.0067 42C21.5176 42 19.1774 41.5277 16.9862 40.583C14.795 39.6384 12.8889 38.3564 11.2679 36.737C9.64705 35.1176 8.36383 33.2133 7.4183 31.0241C6.47277 28.8349 6 26.4958 6 24.0067C6 21.5176 6.47232 19.1774 7.41695 16.9862C8.36162 14.795 9.64365 12.8889 11.2631 11.268C12.8825 9.64705 14.7867 8.36383 16.9759 7.4183C19.1651 6.47277 21.5042 6 23.9933 6C26.4824 6 28.8226 6.47232 31.0138 7.41695C33.205 8.36162 35.1111 9.64365 36.732 11.263C38.353 12.8824 39.6362 14.7867 40.5817 16.9759C41.5272 19.1651 42 21.5042 42 23.9933C42 26.4824 41.5277 28.8226 40.583 31.0138C39.6384 33.205 38.3564 35.1111 36.737 36.732C35.1176 38.353 33.2133 39.6362 31.0241 40.5817C28.8349 41.5272 26.4958 42 24.0067 42ZM24 40C28.4667 40 32.25 38.45 35.35 35.35C38.45 32.25 40 28.4667 40 24C40 19.5333 38.45 15.75 35.35 12.65C32.25 9.55 28.4667 8 24 8C19.5333 8 15.75 9.55 12.65 12.65C9.55 15.75 8 19.5333 8 24C8 28.4667 9.55 32.25 12.65 35.35C15.75 38.45 19.5333 40 24 40Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
};

const SvgSearch = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 11.7101 16.9276 13.2866 15.964 14.5483L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3466 21.0676 19.7794 21.0953 19.3871 20.7903L19.2929 20.7071L14.5483 15.964C13.2866 16.9276 11.7101 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5ZM10 4.5C6.96243 4.5 4.5 6.96243 4.5 10C4.5 13.0376 6.96243 15.5 10 15.5C13.0376 15.5 15.5 13.0376 15.5 10C15.5 6.96243 13.0376 4.5 10 4.5Z"
          fill="#AAAAAA"
        />
      </g>
    </svg>
  );
};
const SvgX = () => {
  return (
    <div style={{ cursor: "pointer" }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="close">
          <mask
            id="mask0_1005_1568"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_1005_1568)">
            <path
              id="close_2"
              d="M6.40148 18.6538L5.34766 17.6L10.9477 12L5.34766 6.40002L6.40148 5.34619L12.0015 10.9462L17.6015 5.34619L18.6553 6.40002L13.0553 12L18.6553 17.6L17.6015 18.6538L12.0015 13.0538L6.40148 18.6538Z"
              fill="#1C1B1F"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

const SvgOne = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="none">
      <g fill-rule="evenodd" clip-rule="evenodd">
        <path
          fill="#B2B2B3"
          d="m30.19 61.495.87-.495.866.5a1 1 0 0 1-1.735-.005ZM31.061.002c10.106 0 18.224 1.114 23.551 2.783 2.645.828 4.707 1.824 5.964 2.97.636.579 1.125 1.25 1.326 2.015.21.796.078 1.588-.342 2.313-1.199 2.068-8.607 14.922-15.716 27.26l-9.625 16.705-4.293 7.452-.867-.499c-.869.495-.868.496-.869.495l-1.162-2.036a12534.739 12534.739 0 0 0-12.65-22.096C9.287 25.01 1.887 12.197.529 10.13.046 9.398-.125 8.58.091 7.752c.205-.789.727-1.469 1.39-2.046 1.317-1.147 3.48-2.144 6.205-2.97C13.181 1.071 21.4-.03 31.061.001Zm.002 58.989 3.423-5.941c2.59-4.498 6.07-10.537 9.625-16.706A33534.571 33534.571 0 0 1 59.83 9.08c.18-.31.2-.562.138-.802-.071-.27-.278-.625-.739-1.044-.934-.852-2.663-1.741-5.215-2.54C48.948 3.105 41.05 2 31.06 2h-.003C21.52 1.97 13.512 3.06 8.267 4.65c-2.643.8-4.478 1.698-5.47 2.563-.493.428-.703.783-.77 1.04-.056.219-.037.46.172.777 1.401 2.133 8.849 15.03 15.914 27.336a10864.769 10864.769 0 0 1 12.652 22.1l.298.523Z"
        />
        <path
          fill="#D9D9D9"
          d="m53.97 8.7-.003.006a.025.025 0 0 1 .003-.006Zm-.085.096a1.324 1.324 0 0 1-.061.053c-.21.17-.58.38-1.15.606-1.133.448-2.832.872-5.002 1.236-4.324.724-10.335 1.18-17 1.18-6.665 0-12.676-.456-17-1.18-2.17-.364-3.869-.788-5.001-1.236-.572-.226-.941-.436-1.15-.606a1.384 1.384 0 0 1-.055-.047c.02-.02.046-.042.076-.068.221-.187.605-.415 1.187-.664 1.155-.493 2.88-.978 5.074-1.404 4.372-.849 10.428-1.429 17.08-1.429 6.652 0 12.601.58 16.865 1.428 2.14.426 3.81.91 4.922 1.4.561.248.927.474 1.137.658.032.027.057.052.078.073ZM7.374 8.7l.003.006a.024.024 0 0 1-.003-.006Zm.005.204a.022.022 0 0 1-.002.004l.002-.004Zm46.583-.013Zm-5.96 3.772c-4.462.748-10.59 1.207-17.33 1.207-6.74 0-12.868-.459-17.33-1.207-2.224-.373-4.082-.825-5.407-1.348-.657-.26-1.241-.56-1.679-.916-.425-.347-.861-.876-.861-1.591s.439-1.25.857-1.603c.438-.369 1.025-.69 1.691-.974 1.342-.573 3.225-1.09 5.478-1.528 4.521-.878 10.709-1.466 17.462-1.466 6.754 0 12.837.588 17.255 1.467 2.202.437 4.034.956 5.34 1.532.648.286 1.22.609 1.645.98.412.36.826.893.826 1.592 0 .715-.436 1.244-.861 1.59-.438.357-1.022.657-1.68.917-1.324.523-3.182.975-5.405 1.348Z"
        />
      </g>
    </svg>
  );
};

const SvgTwo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="77" height="72" fill="none">
      <g fill-rule="evenodd" clip-rule="evenodd">
        <path
          fill="#B2B2B3"
          d="m68.352 58.296.005-1 .866-.501a1 1 0 0 1-.87 1.5Zm-52.82-31.502C20.583 18.042 25.608 11.57 29.716 7.79c2.04-1.877 3.934-3.164 5.555-3.68.819-.26 1.644-.35 2.407-.14.794.216 1.415.726 1.833 1.452 1.191 2.073 8.619 14.915 15.75 27.24l9.654 16.689 4.307 7.444-.866.5-.005 1-2.345-.011a12611.69 12611.69 0 0 0-25.46-.093c-14.245-.035-29.041-.032-31.51.11-.875.051-1.667-.21-2.277-.81-.581-.573-.909-1.365-1.077-2.228-.335-1.714-.117-4.085.53-6.859 1.305-5.59 4.462-13.258 9.318-21.61Zm51.086 29.493-3.433-5.935-9.655-16.688A33702.51 33702.51 0 0 1 37.778 6.42c-.179-.31-.386-.455-.625-.52-.27-.074-.68-.072-1.274.117-1.205.383-2.84 1.435-4.808 3.246-3.907 3.594-8.813 9.882-13.809 18.534l-.001.003c-4.794 8.243-7.854 15.723-9.1 21.06-.628 2.69-.768 4.727-.515 6.02.125.64.327 1 .517 1.186.16.158.378.262.758.24 2.548-.147 17.441-.148 31.63-.114a10781.626 10781.626 0 0 1 25.465.093l.602.003Z"
        />
        <path
          fill="#D9D9D9"
          d="m35.584 9.412.004.006a.03.03 0 0 1-.004-.006Zm.044.161.008.055c.037.288.02.745-.09 1.391-.218 1.282-.76 3.072-1.604 5.263-1.683 4.366-4.5 10.155-8.057 16.317-3.558 6.163-7.163 11.496-10.103 15.136-1.475 1.826-2.754 3.19-3.755 4.02-.505.42-.891.662-1.16.774a1.492 1.492 0 0 1-.041.017 1.718 1.718 0 0 1-.013-.074c-.045-.306-.037-.784.06-1.452.19-1.324.693-3.17 1.495-5.413 1.601-4.474 4.333-10.367 7.885-16.52 3.552-6.151 7.233-11.366 10.248-14.89 1.513-1.766 2.83-3.075 3.857-3.864.518-.398.917-.628 1.195-.733l.075-.027Zm-24.974 43.02h.007-.007Zm.22.119a.019.019 0 0 1 .002.004l-.002-.004Zm24.91-43.173h.005-.005ZM35.809 17c-1.73 4.49-4.598 10.374-8.19 16.598-3.594 6.224-7.257 11.65-10.28 15.393-1.507 1.865-2.883 3.348-4.034 4.303-.571.474-1.135.858-1.668 1.08-.51.212-1.21.363-1.854-.009-.643-.371-.868-1.059-.948-1.604-.084-.58-.05-1.274.058-2.026.219-1.517.772-3.506 1.593-5.803 1.649-4.607 4.437-10.61 8.036-16.846 3.6-6.234 7.35-11.554 10.461-15.19 1.551-1.812 2.971-3.239 4.157-4.15.59-.453 1.167-.814 1.708-1.019.516-.194 1.209-.321 1.837.041.644.373.864 1.055.935 1.602.075.573.024 1.253-.101 1.984-.251 1.475-.848 3.408-1.71 5.646Z"
        />
      </g>
    </svg>
  );
};

const SvgThree = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Angle_03">
        <mask
          id="mask0_1226_9730"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="80"
          height="80"
        >
          <rect id="Rectangle 264" width="80" height="80" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1226_9730)">
          <path
            id="Vector (Stroke)"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.16594 65.528L10.0294 66.0325L10.0303 67.0325C9.67195 67.0328 9.3408 66.8414 9.16227 66.5307C8.98375 66.2199 8.98515 65.8374 9.16594 65.528ZM62.8573 35.5345C67.9101 44.2864 71.0038 51.8743 72.2226 57.322C72.8278 60.0267 72.9958 62.3104 72.6323 63.9723C72.4487 64.8119 72.1124 65.5709 71.5502 66.1278C70.9656 66.7067 70.2141 66.9896 69.3762 66.9882C66.9853 66.9841 52.1502 66.9952 37.91 67.0073C30.7906 67.0133 23.8206 67.0196 18.6306 67.0244L10.0303 67.0325C10.0299 67.0325 10.0303 67.0325 10.0294 66.0325C9.16594 65.528 9.16573 65.5284 9.16594 65.528L10.3486 63.5028C11.1028 62.2107 12.1828 60.3598 13.4859 58.1247C16.0921 53.6545 19.5905 47.6476 23.1593 41.5006C30.3117 29.1811 37.7076 16.3658 38.8186 14.1562C39.212 13.3737 39.8341 12.8179 40.6596 12.5899C41.4452 12.373 42.2956 12.4857 43.1275 12.7712C44.7789 13.338 46.7231 14.7125 48.8015 16.6599C52.9902 20.5848 58.0528 27.1525 62.8573 35.5345ZM11.7723 65.0308L18.6287 65.0244C23.8188 65.0196 30.7888 65.0133 37.9083 65.0073C52.1461 64.9952 66.9853 64.9841 69.3796 64.9882C69.7379 64.9888 69.9668 64.881 70.1427 64.7068C70.341 64.5104 70.5454 64.1536 70.6785 63.545C70.9485 62.3105 70.8547 60.3682 70.2709 57.7587C69.1119 52.5782 66.1196 45.1849 61.1243 36.5328L61.1228 36.5301C56.3808 28.2572 51.4332 21.8666 47.434 18.1193C45.4183 16.2306 43.724 15.0905 42.4782 14.6629C41.8615 14.4513 41.4487 14.4469 41.192 14.5178C40.9754 14.5776 40.7764 14.7145 40.6054 15.0546C39.4589 17.3349 32.0136 30.2331 24.8889 42.5047C21.3193 48.6532 17.8203 54.6612 15.2137 59.1321C13.9104 61.3675 12.8302 63.2187 12.0758 64.511L11.7723 65.0308Z"
            fill="#B2B2B3"
          />
        </g>
      </g>
    </svg>
  );
};

const SvgFour = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="62" fill="none">
      <path
        fill="#B2B2B3"
        fill-rule="evenodd"
        d="M.336 54.547 11.55 35.126l1.732 1-11.21 19.415c-.083.15-.082.246-.058.333.031.117.135.318.427.585.597.546 1.739 1.146 3.483 1.695C9.376 59.24 14.786 60 21.664 60c6.556 0 12.058-.76 15.64-1.85 1.814-.551 3.027-1.155 3.656-1.707.31-.27.4-.462.423-.551.012-.049.024-.124-.084-.283a1.014 1.014 0 0 1-.041-.066l-10.982-19.19 1.735-.993 10.965 19.16c.366.555.511 1.194.349 1.852-.157.631-.565 1.154-1.047 1.576-.955.836-2.498 1.54-4.392 2.116C34.056 61.229 28.345 62 21.664 62c-6.994 0-12.625-.77-16.34-1.94-1.84-.578-3.313-1.285-4.233-2.126-.466-.427-.847-.94-1.009-1.543-.17-.633-.071-1.264.248-1.833l.006-.012Z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        d="M21.896 35.103c9.417 0 17.051-7.634 17.051-17.052C38.947 8.634 31.313 1 21.896 1 12.478 1 4.844 8.634 4.844 18.051c0 9.418 7.634 17.052 17.052 17.052ZM41.002 33.619l-3.245 3.294L50.11 49.081l3.245-3.294-12.353-12.168Z"
      />
      <path
        fill="#CCC"
        fill-rule="evenodd"
        d="M21.896 2C13.03 2 5.844 9.186 5.844 18.051c0 8.865 7.187 16.052 16.052 16.052 4.429 0 8.439-1.794 11.343-4.695a1.024 1.024 0 0 1 .176-.178 15.999 15.999 0 0 0 4.532-11.179C37.947 9.186 30.761 2 21.896 2Zm13.54 27.99a17.983 17.983 0 0 0 4.511-11.939C39.947 8.081 31.865 0 21.896 0 11.926 0 3.844 8.082 3.844 18.051c0 9.97 8.082 18.052 18.052 18.052 4.673 0 8.93-1.776 12.136-4.69l3.94 3.856-.928.942a1 1 0 0 0 .01 1.415l12.354 12.167a1 1 0 0 0 1.414-.01l3.245-3.295a1 1 0 0 0-.01-1.414L41.702 32.907a1 1 0 0 0-1.414.01l-.913.927-3.94-3.855Zm4.5 6.136a1 1 0 0 0 .331-.337l.745-.756 10.929 10.764-1.842 1.87-10.928-10.765.765-.776Z"
        clip-rule="evenodd"
      />
      <mask
        id="a"
        width="30"
        height="30"
        x="7"
        y="2"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M21.953 31.806c8.077 0 14.624-6.547 14.624-14.624 0-8.076-6.547-14.623-14.624-14.623-8.076 0-14.623 6.547-14.623 14.623 0 8.077 6.547 14.624 14.623 14.624Z"
        />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#B2B2B3"
          fill-rule="evenodd"
          d="M21.954 8.438a1 1 0 0 1 .866.501l24.433 42.398c.412.624.566 1.332.382 2.058-.177.697-.634 1.285-1.193 1.773-1.109.967-2.918 1.799-5.173 2.487-4.553 1.389-11.363 2.32-19.373 2.32-8.354 0-15.068-.93-19.484-2.323-2.19-.69-3.918-1.526-4.983-2.5-.539-.492-.966-1.074-1.144-1.747-.186-.704-.072-1.405.294-2.04L21.087 8.938a1 1 0 0 1 .867-.5ZM-1.688 52.364c-.126.218-.134.379-.094.53.048.181.195.448.56.782.744.68 2.14 1.408 4.235 2.069 4.154 1.31 10.647 2.23 18.882 2.23 7.885 0 14.485-.92 18.79-2.233 2.174-.663 3.656-1.396 4.442-2.081.389-.34.53-.6.57-.758.03-.116.028-.257-.121-.477a1.015 1.015 0 0 1-.04-.062L21.953 11.44l-23.64 40.924Z"
          clip-rule="evenodd"
        />
        <g fill="#D9D9D9">
          <path d="M21.953 17.934a.751.751 0 1 0 0-1.502.751.751 0 0 0 0 1.503ZM20.219 21.403a.751.751 0 1 0 0-1.503.751.751 0 0 0 0 1.503ZM23.687 21.403a.751.751 0 1 0 0-1.503.751.751 0 0 0 0 1.503ZM18.485 24.87a.751.751 0 1 0 0-1.503.751.751 0 0 0 0 1.503ZM21.953 24.87a.751.751 0 1 0 0-1.503.751.751 0 0 0 0 1.503ZM25.421 24.87a.751.751 0 1 0 0-1.503.751.751 0 0 0 0 1.503ZM20.219 28.339a.751.751 0 1 0 0-1.503.751.751 0 0 0 0 1.503ZM23.687 28.339a.751.751 0 1 0 0-1.503.751.751 0 0 0 0 1.503ZM27.155 28.339a.751.751 0 1 0 0-1.503.751.751 0 0 0 0 1.503ZM16.75 28.339a.751.751 0 1 0 0-1.503.751.751 0 0 0 0 1.503Z" />
        </g>
      </g>
    </svg>
  );
};

const SvgFive = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="73" fill="none">
      <path
        fill="#D9D9D9"
        fill-rule="evenodd"
        d="M23.071 62.267c-8.388 0-15.893 4.024-20.6 10.164A1.179 1.179 0 0 1 .6 70.996C5.734 64.3 13.917 59.91 23.07 59.91c9.304 0 17.49 4.469 22.692 11.38a1.179 1.179 0 0 1-1.884 1.419c-4.781-6.352-12.284-10.44-20.808-10.44Z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        d="M22.929 68.22c12.012 0 21.75-9.738 21.75-21.75s-9.738-21.75-21.75-21.75-21.75 9.738-21.75 21.75 9.738 21.75 21.75 21.75Z"
      />
      <path
        fill="#D9D9D9"
        fill-rule="evenodd"
        d="M22.929 25.9c-11.361 0-20.571 9.21-20.571 20.57 0 11.361 9.21 20.571 20.57 20.571 11.361 0 20.571-9.21 20.571-20.57C43.5 35.11 34.29 25.9 22.93 25.9ZM0 46.47c0-12.663 10.265-22.928 22.929-22.928 12.663 0 22.928 10.265 22.928 22.929 0 12.663-10.265 22.928-22.928 22.928S0 59.134 0 46.471Z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        d="M41.398 32.85 23.214 1.26 5.03 32.85c-1.426 2.567 5.847 5.277 18.184 5.277 11.766 0 19.896-2.71 18.184-5.277Z"
      />
      <path
        fill="#B2B2B3"
        fill-rule="evenodd"
        d="M23.214.08c.422 0 .811.225 1.022.59l18.167 31.562c.358.555.5 1.204.33 1.873-.162.635-.57 1.145-1.025 1.54-.896.782-2.313 1.42-4.005 1.934-3.435 1.042-8.533 1.727-14.489 1.727-6.236 0-11.269-.683-14.606-1.73-1.647-.517-3.004-1.16-3.868-1.948-.44-.401-.818-.9-.982-1.507a2.43 2.43 0 0 1 .241-1.844l.009-.016L22.192.671c.21-.366.6-.59 1.022-.59ZM6.057 33.428a.21.21 0 0 0-.025.064v.002l.002.011c.009.034.061.167.295.381.484.442 1.45.958 2.985 1.44 3.027.95 7.8 1.621 13.9 1.621 5.81 0 10.66-.67 13.804-1.624 1.597-.485 2.626-1.006 3.14-1.455.196-.17.262-.282.282-.326a.385.385 0 0 0-.023-.038 1.164 1.164 0 0 1-.04-.066L23.213 3.622 6.057 33.428Z"
        clip-rule="evenodd"
      />
      <path
        fill="#D9D9D9"
        fill-rule="evenodd"
        d="M12.407 51.365a1.077 1.077 0 0 0-2.138.18c0 .653.343 1.137.717 1.445.355.293.787.477 1.178.6.79.246 1.72.333 2.437.333.717 0 1.648-.087 2.437-.334.39-.122.823-.306 1.178-.599.374-.308.717-.792.717-1.446a1.076 1.076 0 0 0-2.138-.179c-.072.045-.2.107-.399.17-.513.16-1.21.235-1.795.235s-1.282-.076-1.795-.236a1.784 1.784 0 0 1-.399-.169ZM28.033 51.365a1.077 1.077 0 0 0-2.138.18c0 .653.343 1.137.717 1.445.355.293.787.477 1.178.6.79.246 1.72.333 2.437.333.717 0 1.648-.087 2.437-.334.39-.122.823-.306 1.178-.599.374-.308.717-.792.717-1.446a1.076 1.076 0 0 0-2.138-.179c-.072.045-.2.107-.4.17-.512.16-1.209.235-1.794.235s-1.282-.076-1.795-.236a1.782 1.782 0 0 1-.399-.169ZM18.879 58.37a1.077 1.077 0 0 0-2.1.336c0 .893.712 1.37 1.105 1.573.46.237 1.032.392 1.589.501 1.133.222 2.51.305 3.592.305 1.082 0 2.459-.083 3.592-.305.557-.108 1.13-.264 1.59-.501.393-.203 1.103-.68 1.103-1.573a1.076 1.076 0 0 0-2.099-.337c-.193.098-.529.205-1.007.298-.95.186-2.177.265-3.179.265-1.002 0-2.23-.08-3.18-.265-.477-.093-.813-.2-1.006-.298Zm8.48-.066c.002 0-.004.005-.019.015a.078.078 0 0 1 .02-.015Zm-8.57.015-.019-.015c.001 0 .009.005.02.015Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

const SvgSix = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="50" fill="none">
      <path
        fill="#fff"
        d="M28.214 26.429 15.214 1l-13 25.429c-1.072 1.857 4.214 3.785 13 3.785 8.428 0 14.214-1.928 13-3.785Z"
      />
      <path
        fill="#B2B2B3"
        fill-rule="evenodd"
        d="M15.214 0a1 1 0 0 1 .89.545l12.98 25.388c.261.425.365.924.235 1.437-.126.497-.44.888-.779 1.185-.666.585-1.704 1.05-2.919 1.42-2.473.752-6.131 1.24-10.407 1.24-4.45 0-8.078-.487-10.495-1.243-1.189-.371-2.192-.84-2.837-1.431-.33-.302-.623-.689-.746-1.168a1.898 1.898 0 0 1 .197-1.419L14.323.544A1 1 0 0 1 15.215 0Zm0 3.197L3.104 26.884a1.02 1.02 0 0 1-.012.024c.02.032.062.085.141.158.32.293.986.655 2.083.997 2.155.674 5.562 1.151 9.898 1.151 4.153 0 7.601-.476 9.825-1.153 1.133-.345 1.84-.71 2.181-1.009.062-.054.101-.097.126-.127a.946.946 0 0 1-.022-.041L15.214 3.197Z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        d="m48.456 26.928-8-16.785-8 16.785c-.643 1.143 2.572 2.357 8 2.357 5.143-.071 8.715-1.285 8-2.357Z"
      />
      <path
        fill="#B2B2B3"
        fill-rule="evenodd"
        d="M40.456 9.143a1 1 0 0 1 .903.57l7.977 16.735c.2.34.273.75.153 1.164-.115.399-.375.69-.613.89-.47.398-1.166.7-1.928.935-1.565.483-3.845.812-6.478.848h-.014c-2.773 0-5.045-.308-6.58-.797-.749-.238-1.427-.552-1.884-.976a1.893 1.893 0 0 1-.567-.903c-.104-.4-.04-.795.14-1.135l7.989-16.762a1 1 0 0 1 .902-.57Zm-6.99 17.992c.18.122.502.284 1.017.448 1.268.403 3.314.702 5.967.702 2.506-.035 4.581-.35 5.908-.759.514-.158.859-.314 1.066-.44l-6.968-14.62-6.99 14.668Zm14.158-.197s0 .002-.003.004a.025.025 0 0 1 .003-.004Zm-14.3.078a.025.025 0 0 0 0 0Z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        d="m59.157 27.57-3.286-7.785-3.286 7.786c-.286.428 1.072.928 3.286.928 2.143 0 3.571-.5 3.286-.928Z"
      />
      <path
        fill="#B2B2B3"
        fill-rule="evenodd"
        d="M55.87 18.785a1 1 0 0 1 .922.611l3.263 7.733c.135.257.182.568.09.884a1.346 1.346 0 0 1-.436.649c-.284.239-.66.39-.995.49-.711.216-1.708.347-2.843.347-1.168 0-2.168-.13-2.875-.347-.333-.103-.708-.256-.99-.505a1.333 1.333 0 0 1-.421-.664c-.08-.31-.028-.61.101-.855l3.263-7.732a1 1 0 0 1 .922-.61Zm0 3.572-2.084 4.938c.47.115 1.18.204 2.085.204.886 0 1.603-.092 2.08-.21l-2.08-4.932Z"
        clip-rule="evenodd"
      />
      <path
        fill="#D9D9D9"
        fill-rule="evenodd"
        d="M0 39a1 1 0 0 1 1-1H61a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V39Zm57.612 1v4.556a1 1 0 0 0 2 0V40H60v8H2v-8h.51v2.556a1 1 0 0 0 2 0V40h1.674v4.556a1 1 0 0 0 2 0V40h1.673v2.556a1 1 0 0 0 2 0V40h1.674v4.556a1 1 0 0 0 2 0V40h1.673v2.556a1 1 0 0 0 2 0V40h1.674v4.556a1 1 0 0 0 2 0V40h1.673v2.556a1 1 0 0 0 2 0V40h1.674v4.556a1 1 0 0 0 2 0V40h1.673v2.556a1 1 0 0 0 2 0V40h1.673v4.556a1 1 0 0 0 2 0V40h1.674v2.556a1 1 0 0 0 2 0V40h1.674v4.556a1 1 0 0 0 2 0V40h1.673v2.556a1 1 0 0 0 2 0V40h1.674v4.556a1 1 0 0 0 2 0V40h1.673v2.556a1 1 0 0 0 2 0V40h1.673Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

const SvgSeven = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="64" fill="none">
      <path fill="#fff" d="M57 1H1v56h56V1Z" />
      <path
        fill="#fff"
        d="M22.616 1H1v21.112h.336c11.704 0 21.168-9.464 21.28-21.112ZM36 1c.112 11.592 9.464 20.944 21 21.112V1H36Z"
      />
      <path
        fill="#D9D9D9"
        fill-rule="evenodd"
        d="M0 1a1 1 0 0 1 1-1h56a1 1 0 0 1 1 1v56a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1Zm56 1v19.072C45.81 20.42 37.635 12.24 37.034 2H56ZM35.031 2C35.637 13.346 44.706 22.418 56 23.076V28H30V2h5.031ZM2 2h19.582C20.97 12.417 12.506 20.763 2 21.101V2Zm21.585 0C22.969 13.516 13.617 22.762 2 23.102V28h26V2h-4.415ZM28 30H2v26h26V30Zm2 26V30h26v26H30Z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        d="M25.64 59.408 15.448 41.712 5.256 59.408c-.84 1.456 3.304 2.968 10.192 2.968 6.608 0 11.144-1.512 10.192-2.968Z"
      />
      <path
        fill="#B2B2B3"
        fill-rule="evenodd"
        d="M15.448 40.712a1 1 0 0 1 .867.5l10.18 17.677c.24.38.34.837.22 1.31-.112.447-.393.789-.677 1.038-.557.49-1.407.865-2.368 1.158-1.965.597-4.857.98-8.222.98-3.501 0-6.37-.382-8.292-.983-.943-.294-1.765-.673-2.306-1.169-.278-.254-.538-.592-.648-1.02a1.707 1.707 0 0 1 .188-1.294l10.192-17.696a1 1 0 0 1 .866-.501Zm0 3.004L6.21 59.756c.219.197.703.465 1.542.727 1.661.52 4.31.893 7.696.893 3.243 0 5.923-.373 7.64-.895.844-.256 1.355-.52 1.6-.721l-9.24-16.044Z"
        clip-rule="evenodd"
      />
      <path fill="#fff" d="M49.44 50.169H35.272v11.704H49.44V50.169Z" />
      <path
        fill="#D9D9D9"
        fill-rule="evenodd"
        d="M43.328 37.345a1 1 0 1 0-2 0v7.3l-3.616-3.077a1 1 0 1 0-1.296 1.523l4.912 4.18v1.898h-6.056a1 1 0 0 0-1 1v11.704a1 1 0 0 0 1 1H49.44a1 1 0 0 0 1-1V50.169a1 1 0 0 0-1-1h-6.112v-4.075l2.816-1.942a1 1 0 0 0-1.136-1.646l-1.68 1.159v-5.32Zm-7.056 23.528v-9.704H48.44v9.704H36.272Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

const SvgEight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="38" fill="none">
      <path
        fill="#fff"
        d="M17.53 33.345 9.31 19.069 1.087 33.345c-.678 1.174 2.665 2.394 8.222 2.394 5.33 0 8.99-1.22 8.221-2.394Z"
      />
      <path
        fill="#B2B2B3"
        fill-rule="evenodd"
        d="M9.309 18.07a1 1 0 0 1 .866.5l8.21 14.256c.217.346.312.767.2 1.205-.104.411-.36.719-.606.935-.48.422-1.198.735-1.981.973-1.61.49-3.963.8-6.69.8-2.835 0-5.17-.31-6.746-.802-.77-.24-1.466-.557-1.933-.986-.241-.22-.479-.523-.58-.918a1.57 1.57 0 0 1 .171-1.188L8.443 18.57a1 1 0 0 1 .867-.5Zm-7.2 15.505c.189.125.523.288 1.05.453 1.314.41 3.429.71 6.15.71 2.604 0 4.746-.299 6.107-.713.534-.162.886-.324 1.092-.453l-7.2-12.499-7.2 12.502Zm14.587-.148-.003.003a.024.024 0 0 1 .003-.003Zm-14.747.018Z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        d="M38.162 32.713 29.94 1 21.72 32.713c-.678 2.575 2.665 3.93 8.221 3.93 5.331 0 8.99-1.4 8.222-3.93Z"
      />
      <path
        fill="#B2B2B3"
        fill-rule="evenodd"
        d="M29.94 0a1 1 0 0 1 .969.749l8.217 31.695c.265.892.148 1.755-.337 2.497-.463.707-1.203 1.222-2.041 1.598-1.673.75-4.084 1.104-6.807 1.104-2.827 0-5.223-.34-6.865-1.09-.827-.378-1.543-.897-1.988-1.61-.465-.746-.568-1.6-.337-2.483v-.002L28.974.75A1 1 0 0 1 29.94 0Zm0 4.985-7.253 27.979-.001.003c-.106.405-.046.684.099.917.165.265.504.567 1.123.85 1.25.571 3.303.909 6.033.909 2.607 0 4.69-.347 5.988-.929.648-.29 1.011-.6 1.185-.867.148-.226.203-.479.092-.844a.886.886 0 0 1-.011-.04L29.94 4.986Z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        d="m58.795 31.944-8.222-9.26-8.222 9.26c-.678.768 2.665 2.892 8.222 2.892 5.33 0 8.99-2.169 8.222-2.892Z"
      />
      <path
        fill="#B2B2B3"
        fill-rule="evenodd"
        d="M50.573 21.684a1 1 0 0 1 .748.336l8.2 9.237c.357.364.448.854.32 1.296-.108.375-.353.667-.566.87-.442.424-1.118.82-1.913 1.158-1.615.688-3.997 1.255-6.79 1.255-2.897 0-5.26-.553-6.846-1.24-.78-.339-1.436-.737-1.867-1.171-.21-.212-.436-.501-.539-.862a1.347 1.347 0 0 1 .281-1.28l.002-.003 8.222-9.26a1 1 0 0 1 .748-.336Zm0 2.506-7.097 7.994c.22.164.563.367 1.046.577 1.305.565 3.392 1.075 6.05 1.075 2.539 0 4.652-.518 6.007-1.095a6.02 6.02 0 0 0 1.077-.573l-7.083-7.978Zm7.385 7.716v.001Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};
