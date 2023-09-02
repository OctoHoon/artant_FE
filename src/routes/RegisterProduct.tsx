import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FaCheck, FaChevronDown, FaChevronRight } from "react-icons/fa";
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
import { type } from "os";
import Footer from "../components/commons/Footer";

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
  const [refreshOptionValue, setRefreshOptionValue] = useState("0"); // 갱신 옵션
  const [shippingOptionValue, setShippingOptionValue] = useState("0"); // 갱신 옵션

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
        createPhotoMutation.mutate({
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
        putProduct({
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
      reset();
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
      setTimeout(() => {
        setCloudflareStreamUrl(cloudflareStreamUrl);
      }, 1500);

      uploadVideoMutation.mutate({
        uploadURL: data.uploadURL,
        file: selectedVideoFile!,
      });
    },
  });

  const uploadVideoMutation = useMutation(uploadVideo, {
    onSuccess: (response: any) => {
      console.log("upload video success");
      if (productPK) {
        createVideoMutation.mutate({
          video: cloudflareStreamUrl, // 사용 가능
          productPK,
        });
      }
    },
  });

  const onSubmitVideo = () => {
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

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategory(value);
    setSelectedSubCategory(""); // 상위 카테고리가 변경되면 하위 카테고리 초기화
  };

  const handleSubCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedSubCategory(value);
  };

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

      return result;
    } catch (error) {
      console.error("상품 업로드 실패", error);
      throw error;
    }
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
        if (watch("file")) {
          await onSubmitVideo(); // product에 video 등록
        }
        await onSubmitImages(); // product에 images 등록
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

  return (
    <>
      {" "}
      <Flex
        display={"inline-flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"120px"}
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
                목록 만들기
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
              <Flex
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"4px"}
              >
                <Text
                  color="var(--maincolorstextblack-222222, #222)"
                  fontFamily="Spoqa Han Sans Neo"
                  fontSize="24px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="normal"
                  letterSpacing="-0.5px"
                >
                  사진
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
                  구매자가 모든 세부정보를 볼 수 있도록 최대한 많이 추가하세요.
                </Text>
              </Flex>
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
                  <Flex
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"6px"}
                    alignSelf={"stretch"}
                  >
                    <Text
                      color="var(--maincolorstextblack-222222, #222)"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight={500}
                      lineHeight="normal"
                      letterSpacing="-0.042px"
                    >
                      사진*
                    </Text>
                    <Text
                      color="var(--maincolorstextgray-595959, #666)"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="13px"
                      fontStyle="normal"
                      fontWeight={400}
                      lineHeight="140%"
                      letterSpacing="-0.3px"
                    >
                      최대 10개의 사진을 사용하여 항목의 <br />
                      가장 중요한 특성을 보여주세요.
                    </Text>
                  </Flex>
                  <Flex
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"6px"}
                    alignSelf={"stretch"}
                  >
                    <Text
                      color="var(--maincolorstextblack-222222, #222)"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="13px"
                      fontStyle="normal"
                      fontWeight={400}
                      lineHeight="130%"
                      letterSpacing="-0.3px"
                    >
                      TIP
                    </Text>
                    <Flex
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"flex-start"}
                      gap={"8px"}
                      alignSelf={"stretch"}
                    >
                      <Text
                        color="var(--maincolorstextgray-595959, #666)"
                        fontFamily="Spoqa Han Sans Neo"
                        fontSize="13px"
                        fontStyle="normal"
                        fontWeight={400}
                        lineHeight="140%"
                        letterSpacing="-0.3px"
                      >
                        •자연광을 사용하고 플래시를 사용하지 마세요.
                      </Text>
                      <Text
                        color="var(--maincolorstextgray-595959, #666)"
                        fontFamily="Spoqa Han Sans Neo"
                        fontSize="13px"
                        fontStyle="normal"
                        fontWeight={400}
                        lineHeight="140%"
                        letterSpacing="-0.3px"
                      >
                        • 크기 조정을 위한 공통 개체를 포함합니다.
                      </Text>
                      <Text
                        color="var(--maincolorstextgray-595959, #666)"
                        fontFamily="Spoqa Han Sans Neo"
                        fontSize="13px"
                        fontStyle="normal"
                        fontWeight={400}
                        lineHeight="140%"
                        letterSpacing="-0.3px"
                      >
                        • 들고 있거나, 착용하거나, 사용하고 있는 물건을
                        보여주세요.
                      </Text>
                      <Text
                        color="var(--maincolorstextgray-595959, #666)"
                        fontFamily="Spoqa Han Sans Neo"
                        fontSize="13px"
                        fontStyle="normal"
                        fontWeight={400}
                        lineHeight="140%"
                        letterSpacing="-0.3px"
                      >
                        • 깨끗하고 단순한 배경으로 촬영하세요.
                      </Text>
                      <Text
                        color="var(--maincolorstextgray-595959, #666)"
                        fontFamily="Spoqa Han Sans Neo"
                        fontSize="13px"
                        fontStyle="normal"
                        fontWeight={400}
                        lineHeight="140%"
                        letterSpacing="-0.3px"
                      >
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
                    {[1, 1, 1].map((url, index) => (
                      <GrayBoxImage
                        key={index}
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
                      사진은 너비가 2000px 이상인 사진이 가장 잘 보입니다.
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
                <Flex
                  display={"flex"}
                  width={"234px"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    썸네일 조정
                  </Text>
                  <Text
                    color="var(--maincolorstextgray-595959, #666)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                  >
                    목록의 미리보기 이미지를 미세 조정하세요. <br />
                    쇼핑객이 검색에서 가장 먼저 보게 되는 내용입니다.
                  </Text>
                </Flex>
                <Flex display={"flex"} alignItems={"center"} gap={"16px"}>
                  <GrayBoxImage
                    width={"145px"}
                    height={"120px"}
                    src={
                      selectedFiles.length > 0
                        ? URL.createObjectURL(selectedFiles[0])
                        : ""
                    }
                  />
                  <Button
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
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            display={"flex"}
            width={"1280px"}
            padding={"24px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"32px"}
            border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
          >
            <Flex
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"4px"}
            >
              <Text
                color="var(--maincolorstextblack-222222, #222)"
                fontFamily="Spoqa Han Sans Neo"
                fontSize="24px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                letterSpacing="-0.5px"
              >
                동영상
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
                5~15초 길이의 동영상으로 제품에 생기를 불어넣으세요. 판매를
                늘리는 데 도움이 될 수 있습니다. 동영상에는 소리가 포함되어 있지
                않으므로 제품이 말하도록 하세요!
              </Text>
            </Flex>
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
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="130%"
                    letterSpacing="-0.3px"
                  >
                    TIP
                  </Text>
                  <Flex
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"8px"}
                    alignSelf={"stretch"}
                  >
                    <Text
                      color="var(--maincolorstextgray-595959, #666)"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="13px"
                      fontStyle="normal"
                      fontWeight={400}
                      lineHeight="140%"
                      letterSpacing="-0.3px"
                    >
                      • 모델이 입는 착용 가능한 아이템을 촬영하거나 기능성
                      아이템이 사용되는 모습을 보여줍니다.
                    </Text>
                    <Text
                      color="var(--maincolorstextgray-595959, #666)"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="13px"
                      fontStyle="normal"
                      fontWeight={400}
                      lineHeight="140%"
                      letterSpacing="-0.3px"
                    >
                      • 고해상도 비디오를 녹화하려면 설정을 조정하세요. 1080p
                      이상을 목표로 하세요.
                    </Text>
                    <Text
                      color="var(--maincolorstextgray-595959, #666)"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="13px"
                      fontStyle="normal"
                      fontWeight={400}
                      lineHeight="140%"
                      letterSpacing="-0.3px"
                    >
                      • 동영상을 업로드한 후 올바른 크기를 얻으려면 동영상을
                      자르세요.
                    </Text>
                  </Flex>
                </Flex>
                <Text
                  color="var(--maincolorstextblack-222222, #222)"
                  fontFamily="Spoqa Han Sans Neo"
                  fontSize="13px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="normal"
                  letterSpacing="-0.3px"
                  textDecorationLine="underline"
                  cursor="pointer"
                >
                  판매되는 동영상을 만드는 방법 알아보기
                </Text>
              </Flex>
              <Flex
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"20px"}
              >
                <Flex display={"flex"} alignItems={"flex-start"} gap={"20px"}>
                  <Button
                    isLoading={
                      createVideoMutation.isLoading ||
                      uploadVideoMutation.isLoading ||
                      uploadVideoURLMutation.isLoading
                    }
                    display={"flex"}
                    width={"248px"}
                    height={"248px"}
                    padding={"24px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"26px"}
                    border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                    variant="unstyled" // 클릭 효과와 색상 없애기
                    onClick={onVideoFileSelect}
                  >
                    {cloudflareStreamUrl && (
                      <Flex position={"absolute"}>
                        <video
                          muted
                          loop
                          width="100%"
                          src={cloudflareStreamUrl}
                          controls
                        />
                      </Flex>
                    )}
                    <Flex
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"48px"}
                      mb={"-60px"}
                    >
                      {!cloudflareStreamUrl && (
                        <>
                          <Flex
                            display={"flex"}
                            height={"81px"}
                            flexDirection={"column"}
                            alignItems={"flex-start"}
                            gap={"8px"}
                          >
                            <SvgPlayCircle />
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
                              동영상 추가
                            </Text>
                          </Flex>
                          <Text
                            color="var(--maincolorstextgray-595959, #666)"
                            fontFamily="Spoqa Han Sans Neo"
                            fontSize="14px"
                            fontStyle="normal"
                            fontWeight={400}
                            lineHeight="normal"
                            letterSpacing="-0.042px"
                          >
                            최대 파일 용량: 100MB
                          </Text>
                        </>
                      )}
                    </Flex>
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex // 목록 세부정보
            display={"flex"}
            width={"1280px"}
            padding={"24px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"32px"}
            border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
          >
            <Flex
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"4px"}
            >
              <Text
                color="var(--maincolorstextblack-222222, #222)"
                fontFamily="Spoqa Han Sans Neo"
                fontSize="24px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                letterSpacing="-0.5px"
              >
                목록 세부정보
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
                당신의 아이템에 대한 모든 것을 전 세계에 알리고 그들이 그것을
                좋아할 이유를 알려주세요.
              </Text>
            </Flex>
            <Flex
              display={"flex"}
              flexDirection={"column"}
              alignSelf={"stretch"}
              alignItems={"flex-start"}
              gap={"24px"}
            >
              <Flex // 제목
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    제목*
                  </Text>
                  <Text
                    color="var(--maincolorstextgray-595959, #666)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                  >
                    구매자가 귀하의 상품을 검색하는 데 사용할 <br />
                    키워드를 포함하십시오
                  </Text>
                </Flex>
                <Input
                  display="flex"
                  padding="0px 16px"
                  alignItems="center"
                  flex="1 0 0"
                  alignSelf="stretch"
                  borderRadius="5px"
                  border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                  background="var(--maincolorsbg-white, #FFF)"
                  placeholder="제목을 입력하세요"
                  onChange={(e) => setProductName(e.target.value)}
                />
              </Flex>
              <Flex // 이 목록 정보
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    이 목록 정보*
                  </Text>
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                    textDecorationLine="underline"
                    cursor="pointer"
                  >
                    Etsy에서 허용되는 품목 유형에 대해 자세히 알아보세요.
                  </Text>
                </Flex>
                <Select
                  height={"40px"}
                  flex="1 0 0"
                  padding={"10px 0px"}
                  gap={"10px"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  colorScheme="white"
                  color="#595959"
                  fontSize="14px"
                  fontWeight="400"
                  letterSpacing={"-0.042px"}
                  placeholder="누가 만들었나요?"
                >
                  <option value="option1">I did</option>
                  <option value="option2">A member of my shop</option>
                  <option value="option3">Another company or person</option>
                </Select>
                <Select
                  height={"40px"}
                  flex="1 0 0"
                  padding={"10px 0px"}
                  gap={"10px"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  colorScheme="white"
                  color="#595959"
                  fontSize="14px"
                  fontWeight="400"
                  letterSpacing={"-0.042px"}
                  placeholder="그것은 무엇입니까?"
                >
                  <option value="option1">A finished product</option>
                  <option value="option2">
                    A supply or tool to make things
                  </option>
                </Select>
                <Select
                  height={"40px"}
                  flex="1 0 0"
                  padding={"10px 0px"}
                  gap={"10px"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  colorScheme="white"
                  color="#595959"
                  fontSize="14px"
                  fontWeight="400"
                  letterSpacing={"-0.042px"}
                  placeholder="언제 만들었나요?"
                >
                  <option value="option1">Made to Order</option>
                  <option value="option2">2020-2023</option>
                  <option value="option3">2010-2019</option>
                  <option value="option3">2000-2009</option>
                  <option value="option3">1990-1999</option>
                  <option value="option3">Before 1990</option>
                </Select>
              </Flex>
              <Flex // 카테고리
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    카테고리*
                  </Text>
                  <Text
                    color="var(--maincolorstextgray-595959, #666)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                  >
                    더 많은 쇼핑객이 해당 상품을 찾는 데 도움이
                    <br /> 되는 카테고리 제안을 받으려면 상품에 대한 <br />
                    2~3단어 설명을 입력하세요.
                  </Text>
                </Flex>

                <Select
                  height={"40px"}
                  flex="1 0 0"
                  padding={"10px 0px"}
                  gap={"10px"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  colorScheme="white"
                  color="#595959"
                  fontSize="14px"
                  fontWeight="400"
                  letterSpacing={"-0.042px"}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">상위 카테고리 선택</option>
                  {Object.keys(subsubCategory).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>

                <Select
                  height={"40px"}
                  flex="1 0 0"
                  padding={"10px 0px"}
                  gap={"10px"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  colorScheme="white"
                  color="#595959"
                  fontSize="14px"
                  fontWeight="400"
                  letterSpacing={"-0.042px"}
                  value={selectedSubCategory}
                  onChange={handleSubCategoryChange}
                  disabled={!selectedCategory} // 상위 카테고리를 선택하지 않았을 때 비활성화
                >
                  <option value="">
                    {selectedCategory
                      ? "하위 카테고리 선택"
                      : "상위 카테고리를 먼저 선택하세요"}
                  </option>
                  {selectedCategory &&
                    subsubCategory[selectedCategory].map((subCategory) => (
                      <option key={subCategory} value={subCategory}>
                        {subCategory}
                      </option>
                    ))}
                </Select>
              </Flex>
              <Flex // 갱신옵션
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    갱신 옵션*
                  </Text>
                  <Text
                    color="var(--maincolorstextgray-595959, #666)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                  >
                    각 갱신은 4개월 동안 또는 목록이 매진될 때까지 지속됩니다.
                  </Text>
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                    textDecorationLine="underline"
                    cursor="pointer"
                  >
                    자동 갱신에 대해 자세히 알아보기
                  </Text>
                </Flex>
                <RadioGroup
                  onChange={setRefreshOptionValue}
                  value={refreshOptionValue}
                >
                  <Flex display={"flex"} alignItems={"flex-start"} gap={"40px"}>
                    <Flex
                      display={"flex"}
                      alignItems={"flex-start"}
                      gap={"40px"}
                      width={"270px"}
                    >
                      <Radio alignItems={"flex-start"} gap={"8px"} value="1">
                        <Flex
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"flex-start"}
                          gap={"4px"}
                        >
                          <Text
                            color="var(--maincolorstextblack-222222, #222)"
                            css={`
                              font-feature-settings: "clig" off, "liga" off;
                              /* BODY/XS_14/R */
                              font-family: "Spoqa Han Sans Neo";
                              font-size: 14px;
                              font-style: normal;
                              font-weight: 400;
                              line-height: normal;
                              letter-spacing: -0.042px;
                            `}
                          >
                            자동 갱신
                          </Text>
                          <Text
                            color="var(--maincolorstextgray-595959, #666)"
                            css={`
                              font-feature-settings: "clig" off, "liga" off;
                              /* BODY/XXS_13/R */
                              font-family: "Spoqa Han Sans Neo";
                              font-size: 13px;
                              font-style: normal;
                              font-weight: 400;
                              line-height: 140%; /* 18.2px */
                              letter-spacing: -0.3px;
                            `}
                          >
                            이 목록은 매번 USD 0.20 USD로 만료되므로
                            갱신됩니다(권장).
                          </Text>
                        </Flex>
                      </Radio>
                    </Flex>
                    <Flex
                      display={"flex"}
                      alignItems={"flex-start"}
                      gap={"40px"}
                      width={"270px"}
                    >
                      <Radio alignItems={"flex-start"} gap={"8px"} value="2">
                        <Flex
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"flex-start"}
                          gap={"4px"}
                        >
                          <Text
                            color="var(--maincolorstextblack-222222, #222)"
                            css={`
                              font-feature-settings: "clig" off, "liga" off;
                              /* BODY/XS_14/R */
                              font-family: "Spoqa Han Sans Neo";
                              font-size: 14px;
                              font-style: normal;
                              font-weight: 400;
                              line-height: normal;
                              letter-spacing: -0.042px;
                            `}
                          >
                            수동 갱신
                          </Text>
                          <Text
                            color="var(--maincolorstextgray-595959, #666)"
                            css={`
                              font-feature-settings: "clig" off, "liga" off;
                              /* BODY/XXS_13/R */
                              font-family: "Spoqa Han Sans Neo";
                              font-size: 13px;
                              font-style: normal;
                              font-weight: 400;
                              line-height: 140%; /* 18.2px */
                              letter-spacing: -0.3px;
                            `}
                          >
                            만료된 목록을 직접 갱신하겠습니다.
                          </Text>
                        </Flex>
                      </Radio>
                    </Flex>
                  </Flex>
                </RadioGroup>
              </Flex>
              <Flex // 배송 상품 유형
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    유형*
                  </Text>
                </Flex>
                <RadioGroup
                  onChange={setShippingOptionValue}
                  value={shippingOptionValue}
                >
                  <Flex display={"flex"} alignItems={"flex-start"} gap={"40px"}>
                    <Flex
                      display={"flex"}
                      alignItems={"flex-start"}
                      gap={"40px"}
                      width={"270px"}
                    >
                      <Radio alignItems={"flex-start"} gap={"8px"} value="1">
                        <Flex
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"flex-start"}
                          gap={"4px"}
                        >
                          <Text
                            color="var(--maincolorstextblack-222222, #222)"
                            css={`
                              font-feature-settings: "clig" off, "liga" off;
                              /* BODY/XS_14/R */
                              font-family: "Spoqa Han Sans Neo";
                              font-size: 14px;
                              font-style: normal;
                              font-weight: 400;
                              line-height: normal;
                              letter-spacing: -0.042px;
                            `}
                          >
                            배송상품
                          </Text>
                          <Text
                            color="var(--maincolorstextgray-595959, #666)"
                            css={`
                              font-feature-settings: "clig" off, "liga" off;
                              /* BODY/XXS_13/R */
                              font-family: "Spoqa Han Sans Neo";
                              font-size: 13px;
                              font-style: normal;
                              font-weight: 400;
                              line-height: 140%; /* 18.2px */
                              letter-spacing: -0.3px;
                            `}
                          >
                            구매자에게 배송할 유형의 품목입니다.
                          </Text>
                        </Flex>
                      </Radio>
                    </Flex>
                    <Flex
                      display={"flex"}
                      alignItems={"flex-start"}
                      gap={"40px"}
                      width={"270px"}
                    >
                      <Radio alignItems={"flex-start"} gap={"8px"} value="2">
                        <Flex
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"flex-start"}
                          gap={"4px"}
                        >
                          <Text
                            color="var(--maincolorstextblack-222222, #222)"
                            css={`
                              font-feature-settings: "clig" off, "liga" off;
                              /* BODY/XS_14/R */
                              font-family: "Spoqa Han Sans Neo";
                              font-size: 14px;
                              font-style: normal;
                              font-weight: 400;
                              line-height: normal;
                              letter-spacing: -0.042px;
                            `}
                          >
                            디지털 다운로드 상품
                          </Text>
                          <Text
                            color="var(--maincolorstextgray-595959, #666)"
                            css={`
                              font-feature-settings: "clig" off, "liga" off;
                              /* BODY/XXS_13/R */
                              font-family: "Spoqa Han Sans Neo";
                              font-size: 13px;
                              font-style: normal;
                              font-weight: 400;
                              line-height: 140%; /* 18.2px */
                              letter-spacing: -0.3px;
                            `}
                          >
                            구매자가 다운로드할 디지털 파일입니다.
                          </Text>
                        </Flex>
                      </Radio>
                    </Flex>
                  </Flex>
                </RadioGroup>
              </Flex>
              <Flex // 설명
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    설명*
                  </Text>
                  <Text
                    color="var(--maincolorstextgray-595959, #666)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                  >
                    제품의 가장 뛰어난 기능을 설명하는 간략한 개요부터
                    시작하세요. 쇼핑객은 처음에는 설명의 처음 몇 줄만 볼 수
                    있으므로 중요하게 생각하세요! <br />
                    <br />
                    무슨 말을 더 해야 할지 모르겠나요? 쇼핑객은 귀하의
                    프로세스와 이 제품 뒤에 숨겨진 이야기를 듣고 싶어합니다.
                  </Text>
                </Flex>
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"24px"}
                  flex={"1 0 0"}
                >
                  <Textarea
                    display="flex"
                    padding="11px 16px"
                    alignItems="flex-start"
                    h={"240px"}
                    gap={"8px"}
                    alignSelf="stretch"
                    borderRadius="5px"
                    border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                    background="var(--maincolorsbg-white, #FFF)"
                    placeholder="설명을 입력하세요"
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                  <Flex
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"12px"}
                    alignSelf={"stretch"}
                  >
                    <Flex
                      display={"flex"}
                      alignItems={"flex-start"}
                      gap={"8px"}
                    >
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
                        css={`
                          font-feature-settings: "clig" off, "liga" off;
                          font-family: "Spoqa Han Sans Neo";
                          font-size: 14px;
                          font-style: normal;
                          font-weight: 400;
                          line-height: normal;
                          letter-spacing: -0.042px;
                        `}
                      >
                        Google 검색 결과로 목록 미리 보기
                      </Text>
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
                        css={`
                          font-feature-settings: "clig" off, "liga" off;
                          font-family: "Spoqa Han Sans Neo";
                          font-size: 14px;
                          font-style: normal;
                          font-weight: 400;
                          line-height: normal;
                          letter-spacing: -0.042px;
                          text-decoration-line: underline;
                        `}
                        cursor={"pointer"}
                      >
                        미리보기 표시
                      </Text>
                    </Flex>
                    <Text
                      display="flex"
                      padding="11px 16px"
                      alignItems="flex-start"
                      h={"120px"}
                      gap={"8px"}
                      alignSelf="stretch"
                      borderRadius="5px"
                      border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                      background="var(--maincolorsbg-white, #FFF)"
                      color="var(--maincolorstextblack-222222, #222)"
                      css={`
                        font-feature-settings: "clig" off, "liga" off;
                        font-family: "Spoqa Han Sans Neo";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        letter-spacing: -0.042px;
                      `}
                    >
                      작성자: 아트앤트 <br /> 00000
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex // 섹션
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  alignItems={"center"}
                  width={"234px"}
                  gap={"2px"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    섹션
                  </Text>
                  <Text
                    color="var(--maincolorstextgray-595959, #666)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                  >
                    (선택사항)
                  </Text>
                </Flex>
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"8px"}
                >
                  {" "}
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    css={{
                      fontFeatureSettings: "clig off, liga off",
                      /* BODY/XS_14/R */
                      fontFamily: "Spoqa Han Sans Neo",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      letterSpacing: "-0.042px",
                    }}
                  >
                    쇼핑객이 쉽게 찾아볼 수 있도록 관련 목록을 섹션으로
                    그룹화합니다(예: 팔찌, 어버이날 선물, 털실).
                  </Text>
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    css={{
                      fontFeatureSettings: "clig off, liga off",
                      /* BODY/XS_14/R_LINE */
                      fontFamily: "Spoqa Han Sans Neo",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      letterSpacing: "-0.042px",
                      textDecorationLine: "underline",
                    }}
                    cursor={"pointer"}
                  >
                    첫 번째 섹션 추가
                  </Text>
                  <Select
                    height={"40px"}
                    width={"306px"}
                    padding={"10px 0px"}
                    gap={"10px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    colorScheme="white"
                    color="#595959"
                    fontSize="14px"
                    fontWeight="400"
                    letterSpacing={"-0.042px"}
                    placeholder="섹션 이름"
                  >
                    <option value="option1">팔찌</option>
                    <option value="option2">어버이날 선물</option>
                    <option value="option3">털실</option>
                  </Select>
                </Flex>
              </Flex>
              <Flex // 태그
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Flex
                    display={"flex"}
                    alignItems={"center"}
                    width={"234px"}
                    gap={"2px"}
                  >
                    <Text
                      color="var(--maincolorstextblack-222222, #222)"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight={500}
                      lineHeight="normal"
                      letterSpacing="-0.042px"
                    >
                      태그
                    </Text>
                    <Text
                      color="var(--maincolorstextgray-595959, #666)"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="13px"
                      fontStyle="normal"
                      fontWeight={400}
                      lineHeight="140%"
                      letterSpacing="-0.3px"
                    >
                      (선택사항)
                    </Text>
                  </Flex>
                  <Text
                    color="var(--maincolorstextgray-595959, #666)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                  >
                    누군가가 귀하의 목록을 검색하기 위해 어떤 단어를 사용할 수
                    있습니까? 검색하려면 13개의 태그를 모두 사용하세요.
                  </Text>
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                    textDecorationLine="underline"
                    cursor="pointer"
                  >
                    태그에 대한 아이디어를 얻으세요.
                  </Text>
                </Flex>
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                >
                  <Flex display={"flex"} alignItems={"center"} gap={"20px"}>
                    <InputGroup width={"565px"}>
                      <Input
                        display="flex"
                        padding="0px 16px"
                        alignItems="center"
                        flex="1 0 0"
                        alignSelf="stretch"
                        borderRadius="5px"
                        border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                        background="var(--maincolorsbg-white, #FFF)"
                        fontSize={"14px"}
                        placeholder="모양, 색상, 스타일, 기능 등"
                        onChange={(e) => setProductName(e.target.value)}
                      />
                      <InputRightAddon
                        as={"button"}
                        fontSize={"13px"}
                        children="추가하기"
                      />
                    </InputGroup>
                    <Text
                      color="var(--maincolorstextgray-595959, #666)"
                      textAlign="right"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="12px"
                      fontStyle="normal"
                      fontWeight={400}
                      lineHeight="normal"
                      letterSpacing="-0.036px"
                    >
                      13개 남음
                    </Text>
                  </Flex>
                  <Flex gap={"12px"} alignItems={"flex-start"}>
                    <Flex
                      alignItems="center"
                      justifyContent="flex-start"
                      gap="-1px"
                      height="40px"
                      padding="8px 8px"
                      borderRadius="5px"
                      border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                    >
                      <SvgX />
                      <Flex
                        borderRight="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                        height="150%"
                        marginLeft={"8px"}
                        marginRight="8px" // Adjust this value as needed
                      />
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
                        padding={"3px 12px"}
                        css={`
                          font-feature-settings: "clig" off, "liga" off;
                          /* BODY/XS_14/R */
                          font-family: "Spoqa Han Sans Neo";
                          font-size: 14px;
                          font-style: normal;
                          font-weight: 400;
                          line-height: normal;
                          letter-spacing: -0.042px;
                        `}
                      >
                        빨강
                      </Text>
                    </Flex>
                    <Flex
                      alignItems="center"
                      justifyContent="flex-start"
                      gap="-1px"
                      height="40px"
                      padding="8px 8px"
                      borderRadius="5px"
                      border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                    >
                      <SvgX />
                      <Flex
                        borderRight="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                        height="150%"
                        marginLeft={"8px"}
                        marginRight="8px" // Adjust this value as needed
                      />
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
                        padding={"3px 12px"}
                        css={`
                          font-feature-settings: "clig" off, "liga" off;
                          /* BODY/XS_14/R */
                          font-family: "Spoqa Han Sans Neo";
                          font-size: 14px;
                          font-style: normal;
                          font-weight: 400;
                          line-height: normal;
                          letter-spacing: -0.042px;
                        `}
                      >
                        풍경
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex // 태그
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Flex
                    display={"flex"}
                    alignItems={"center"}
                    width={"234px"}
                    gap={"2px"}
                  >
                    <Text
                      color="var(--maincolorstextblack-222222, #222)"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight={500}
                      lineHeight="normal"
                      letterSpacing="-0.042px"
                    >
                      재료
                    </Text>
                    <Text
                      color="var(--maincolorstextgray-595959, #666)"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="13px"
                      fontStyle="normal"
                      fontWeight={400}
                      lineHeight="140%"
                      letterSpacing="-0.3px"
                    >
                      (선택사항)
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                >
                  <Flex display={"flex"} alignItems={"center"} gap={"20px"}>
                    <InputGroup width={"565px"}>
                      <Input
                        display="flex"
                        padding="0px 16px"
                        alignItems="center"
                        flex="1 0 0"
                        alignSelf="stretch"
                        borderRadius="5px"
                        border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                        background="var(--maincolorsbg-white, #FFF)"
                        fontSize={"14px"}
                        placeholder="원재료, 성분 등"
                        onChange={(e) => setProductName(e.target.value)}
                      />
                      <InputRightAddon
                        as={"button"}
                        fontSize={"13px"}
                        children="추가하기"
                      />
                    </InputGroup>
                    <Text
                      color="var(--maincolorstextgray-595959, #666)"
                      textAlign="right"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="12px"
                      fontStyle="normal"
                      fontWeight={400}
                      lineHeight="normal"
                      letterSpacing="-0.036px"
                    >
                      13개 남음
                    </Text>
                  </Flex>
                  <Flex gap={"12px"} alignItems={"flex-start"}>
                    <Flex
                      alignItems="center"
                      justifyContent="flex-start"
                      gap="-1px"
                      height="40px"
                      padding="8px 8px"
                      borderRadius="5px"
                      border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                    >
                      <SvgX />
                      <Flex
                        borderRight="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                        height="150%"
                        marginLeft={"8px"}
                        marginRight="8px" // Adjust this value as needed
                      />
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
                        padding={"3px 12px"}
                        css={`
                          font-feature-settings: "clig" off, "liga" off;
                          /* BODY/XS_14/R */
                          font-family: "Spoqa Han Sans Neo";
                          font-size: 14px;
                          font-style: normal;
                          font-weight: 400;
                          line-height: normal;
                          letter-spacing: -0.042px;
                        `}
                      >
                        수채화 물감
                      </Text>
                    </Flex>
                    <Flex
                      alignItems="center"
                      justifyContent="flex-start"
                      gap="-1px"
                      height="40px"
                      padding="8px 8px"
                      borderRadius="5px"
                      border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                    >
                      <SvgX />
                      <Flex
                        borderRight="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                        height="150%"
                        marginLeft={"8px"}
                        marginRight="8px" // Adjust this value as needed
                      />
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
                        padding={"3px 12px"}
                        css={`
                          font-feature-settings: "clig" off, "liga" off;
                          /* BODY/XS_14/R */
                          font-family: "Spoqa Han Sans Neo";
                          font-size: 14px;
                          font-style: normal;
                          font-weight: 400;
                          line-height: normal;
                          letter-spacing: -0.042px;
                        `}
                      >
                        아크릴 물감
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex // 재고 및 가격
            display={"flex"}
            width={"1280px"}
            padding={"24px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"32px"}
            border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
          >
            <Flex
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"4px"}
            >
              <Text
                color="var(--maincolorstextblack-222222, #222)"
                fontFamily="Spoqa Han Sans Neo"
                fontSize="24px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                letterSpacing="-0.5px"
              >
                재고 및 가격
              </Text>
            </Flex>
            <Flex
              display={"flex"}
              flexDirection={"column"}
              alignSelf={"stretch"}
              alignItems={"flex-start"}
              gap={"24px"}
            >
              <Flex // 가격
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    가격*
                  </Text>
                  <Text
                    color="var(--maincolorstextgray-595959, #666)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                  >
                    재료비, 인건비, 기타 사업 비용을 고려해야 합니다. 무료
                    배송을 제공하는 경우 배송 비용을 포함하여 수익이 저하되지
                    않도록 하세요.
                  </Text>
                </Flex>
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"8px"}
                >
                  <InputGroup width="200px">
                    <Input
                      display="flex"
                      flex="1"
                      height="40px"
                      padding="0px 28px"
                      borderRadius="5px"
                      border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                      background="var(--maincolorsbg-white, #FFF)"
                      placeholder="0"
                      onChange={(e) => {
                        // 숫자만 입력 가능하도록 정규식으로 필터링
                        const inputValue = e.target.value;
                        const numericValue = Number(
                          inputValue.replace(/[^0-9]/g, "")
                        );
                        setProductPrice(numericValue);
                      }}
                      textAlign="right" // 우측 정렬
                      type="number" // 숫자만 입력 가능
                    />
                    <InputRightElement width="40px">원</InputRightElement>
                  </InputGroup>
                  {2000 > productPrice || productPrice > 5000000 ? (
                    <Text
                      color="var(--maincolorstextredbc-0000, #BC0000)"
                      css={`
                        font-feature-settings: "clig" off, "liga" off;
                        /* BODY/XS_14/R */
                        font-family: "Spoqa Han Sans Neo";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 150%; /* 21px */
                        letter-spacing: -0.042px;
                      `}
                    >
                      가격은 2,000원~5,000,000원 사이여야 합니다.
                    </Text>
                  ) : null}
                </Flex>
              </Flex>
              <Flex // 수량
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    수량*
                  </Text>
                  <Text
                    color="var(--maincolorstextgray-595959, #666)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                  >
                    수량이 1보다 많은 경우 이 목록은 매진될 때까지 자동으로
                    갱신됩니다. 매번 USD 0.20 USD의 상장 수수료가 청구됩니다.
                  </Text>
                </Flex>
                <Input
                  display="flex"
                  padding="0px 16px"
                  alignItems="center"
                  width={"120px"}
                  height={"40px"}
                  alignSelf="stretch"
                  borderRadius="5px"
                  border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                  background="var(--maincolorsbg-white, #FFF)"
                  placeholder="0"
                  onChange={(e) => {
                    // 숫자만 입력 가능하도록 정규식으로 필터링
                    const inputValue = e.target.value;
                    const numericValue = Number(
                      inputValue.replace(/[^0-9]/g, "")
                    );
                    setProductCount(numericValue);
                  }}
                />
              </Flex>
              <Flex // SKU
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    SKU*
                  </Text>
                  <Text
                    color="var(--maincolorstextgray-595959, #666)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                  >
                    SKU는 귀하만 사용할 수 있으며 구매자에게는 표시되지
                    않습니다.
                  </Text>
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                    textDecorationLine="underline"
                    cursor="pointer"
                  >
                    SKU에 대해 자세히 알아보세요.
                  </Text>
                </Flex>
                <Input
                  display="flex"
                  padding="0px 16px"
                  alignItems="center"
                  width={"200px"}
                  height={"40px"}
                  alignSelf="stretch"
                  borderRadius="5px"
                  border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                  background="var(--maincolorsbg-white, #FFF)"
                  placeholder="여기에 입력하세요"
                  onChange={(e) => {}}
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex // 변형
            display={"flex"}
            width={"1280px"}
            padding={"24px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"32px"}
            border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
          >
            <Flex
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"4px"}
            >
              <Text
                color="var(--maincolorstextblack-222222, #222)"
                fontFamily="Spoqa Han Sans Neo"
                fontSize="24px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                letterSpacing="-0.5px"
              >
                변형
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
                색상이나 크기와 같은 사용 가능한 옵션을 추가합니다. 구매자는
                결제 시 이 중에서 선택하게 됩니다.
              </Text>
            </Flex>
            <Button
              display={"flex"}
              padding={"11px 16px"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"8px"}
              backgroundColor={"transparent"}
              border={
                "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
              }
              color="var(--maincolorstextgray-595959, #666)"
              fontFamily="Spoqa Han Sans Neo"
              fontSize="13px"
              fontStyle="normal"
              fontWeight={400}
              lineHeight="140%"
              letterSpacing="-0.3px"
            >
              변형 추가
            </Button>
          </Flex>
          <Flex // 개인화
            display={"flex"}
            width={"1280px"}
            padding={"24px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"32px"}
            border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
          >
            <Flex
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              alignSelf={"stretch"}
            >
              <Flex
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"4px"}
              >
                <Text
                  color="var(--maincolorstextblack-222222, #222)"
                  fontFamily="Spoqa Han Sans Neo"
                  fontSize="24px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="normal"
                  letterSpacing="-0.5px"
                >
                  개인화
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
                  이 목록에 대한 개인 정보를 수집하세요.
                </Text>
              </Flex>
              <FormControl
                display="flex"
                alignItems="center"
                justifyContent={"flex-end"}
              >
                <FormLabel htmlFor="email-alerts" mb="0"></FormLabel>
                <Switch id="individualization" size={"md"} />
              </FormControl>
            </Flex>
          </Flex>
          <Flex // 배송
            display={"flex"}
            width={"1280px"}
            padding={"24px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"32px"}
            border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
          >
            <Flex
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"4px"}
            >
              <Text
                color="var(--maincolorstextblack-222222, #222)"
                fontFamily="Spoqa Han Sans Neo"
                fontSize="24px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                letterSpacing="-0.5px"
              >
                배송
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
                배송 프로필, 주문 처리 일정 등 배송 정보가 정확한지 확인하여
                쇼핑객에게 배송 시간과 비용에 대한 명확한 기대치를 제공하세요.
                배송 설정 에서 언제든지 업데이트할 수 있습니다 .
              </Text>
            </Flex>
            <Flex
              display={"flex"}
              flexDirection={"column"}
              alignSelf={"stretch"}
              alignItems={"flex-start"}
              gap={"24px"}
            >
              <Flex // 배송 옵션
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    배송 옵션*
                  </Text>
                </Flex>

                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  flex={"1 0 0"}
                  alignItems={"flex-start"}
                  gap={"20px"}
                >
                  <Text
                    width={"716px"}
                    color="var(--maincolorstextblack-222222, #222)"
                    css={`
                      font-feature-settings: "clig" off, "liga" off;
                      /* BODY/S_16/R */
                      font-family: "Spoqa Han Sans Neo";
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: 150%; /* 24px */
                      letter-spacing: -0.048px;
                    `}
                  >
                    이 목록에 대한 배송 옵션을 입력하세요. 이러한 옵션을 이
                    목록에만 적용하거나 배송 프로필로 저장하여 향후 목록에 적용
                    할 수있습니다.
                  </Text>
                  <Flex
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"24px"}
                    alignSelf={"stretch"}
                  >
                    <Flex
                      height={"1px"}
                      alignSelf={"stretch"}
                      background={"var(--maincolorslinegrayeeeeee, #EEE)"}
                    ></Flex>
                    <Flex // 출발지 우편번호
                      display={"flex"}
                      alignSelf={"stretch"}
                      alignItems={"flex-start"}
                      gap={"40px"}
                    >
                      <Flex
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        width={"234px"}
                        gap={"6px"}
                        alignSelf={"stretch"}
                      >
                        <Text
                          color="var(--maincolorstextblack-222222, #222)"
                          fontFamily="Spoqa Han Sans Neo"
                          fontSize="14px"
                          fontStyle="normal"
                          fontWeight={500}
                          lineHeight="normal"
                          letterSpacing="-0.042px"
                        >
                          출발지 우편번호*
                        </Text>
                        <Text
                          color="var(--maincolorstextgray-595959, #666)"
                          fontFamily="Spoqa Han Sans Neo"
                          fontSize="13px"
                          fontStyle="normal"
                          fontWeight={400}
                          lineHeight="140%"
                          letterSpacing="-0.3px"
                        >
                          패키지는 어디서 ?
                        </Text>
                      </Flex>
                      <Input
                        display="flex"
                        padding="0px 16px"
                        alignItems="center"
                        width={"248px"}
                        height={"40px"}
                        alignSelf="stretch"
                        borderRadius="5px"
                        border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                        background="var(--maincolorsbg-white, #FFF)"
                        placeholder="우편번호 입력"
                        onChange={(e) => {}}
                      />
                    </Flex>
                    <Flex // 처리시간
                      display={"flex"}
                      alignSelf={"stretch"}
                      alignItems={"flex-start"}
                      gap={"40px"}
                    >
                      <Flex
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        width={"234px"}
                        gap={"6px"}
                        alignSelf={"stretch"}
                      >
                        <Text
                          color="var(--maincolorstextblack-222222, #222)"
                          fontFamily="Spoqa Han Sans Neo"
                          fontSize="14px"
                          fontStyle="normal"
                          fontWeight={500}
                          lineHeight="normal"
                          letterSpacing="-0.042px"
                        >
                          처리시간*
                        </Text>
                        <Text
                          color="var(--maincolorstextgray-595959, #666)"
                          fontFamily="Spoqa Han Sans Neo"
                          fontSize="13px"
                          fontStyle="normal"
                          fontWeight={400}
                          lineHeight="140%"
                          letterSpacing="-0.3px"
                        >
                          주문을 준비해서 우편으로 보내야 하나요? 쇼핑객들은
                          빠르게 배송되는 품목을 구매할 사능성이 더 높다는 점을
                          명심하세요.
                        </Text>
                      </Flex>
                      <Flex
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        gap={"12px"}
                        flex={"1 0 0"}
                      >
                        <Select
                          height={"40px"}
                          padding={"10px 0px"}
                          gap={"10px"}
                          flexDirection={"column"}
                          justifyContent={"center"}
                          alignItems={"flex-start"}
                          colorScheme="white"
                          color="#595959"
                          fontSize="14px"
                          fontWeight="400"
                          letterSpacing={"-0.042px"}
                          placeholder="상품 준비 시간을 선택하세요"
                        >
                          <option value="option1">1일</option>
                          <option value="option2">1-2일</option>
                          <option value="option3">1-3일</option>
                          <option value="option3">3-5일</option>
                        </Select>
                        <Text
                          color="var(--maincolorstextblack-222222, #222)"
                          css={{
                            fontFeatureSettings: "clig off, liga off",
                            /* BODY/XS_14/R */
                            fontFamily: "Spoqa Han Sans Neo",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                            letterSpacing: "-0.042px",
                          }}
                        >
                          매장의 주문 처리 일정은 월요일~금요일, 토요일,
                          일요일을 포함하도록 설정되어 있습니다.
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex
                      height={"1px"}
                      alignSelf={"stretch"}
                      background={"var(--maincolorslinegrayeeeeee, #EEE)"}
                    ></Flex>
                    <Flex // 배송
                      display={"flex"}
                      alignSelf={"stretch"}
                      alignItems={"flex-start"}
                      gap={"40px"}
                    >
                      <Flex
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        width={"234px"}
                        gap={"6px"}
                        alignSelf={"stretch"}
                      >
                        <Text
                          color="var(--maincolorstextblack-222222, #222)"
                          fontFamily="Spoqa Han Sans Neo"
                          fontSize="14px"
                          fontStyle="normal"
                          fontWeight={500}
                          lineHeight="normal"
                          letterSpacing="-0.042px"
                        >
                          배송*
                        </Text>
                      </Flex>
                      <Flex
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        gap={"16px"}
                      >
                        <Flex
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"flex-start"}
                          gap={"6px"}
                        >
                          <Text
                            color="var(--maincolorstextblack-222222, #222)"
                            css={{
                              fontFeatureSettings: "clig off, liga off",
                              /* BODY/XS_14/R */
                              fontFamily: "Spoqa Han Sans Neo",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "normal",
                              letterSpacing: "-0.042px",
                            }}
                          >
                            배송 서비스
                          </Text>
                          <Select
                            height={"40px"}
                            gap={"10px"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"flex-start"}
                            colorScheme="white"
                            color="#595959"
                            fontSize="14px"
                            fontWeight="400"
                            letterSpacing={"-0.042px"}
                            placeholder="배송서비스를 입력하세요"
                          >
                            <option value="option1">국내배송</option>
                            <option value="option2">해외배송</option>
                          </Select>
                        </Flex>
                        <Flex
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"flex-start"}
                          gap={"6px"}
                        >
                          <Text
                            color="var(--maincolorstextblack-222222, #222)"
                            css={{
                              fontFeatureSettings: "clig off, liga off",
                              /* BODY/XS_14/R */
                              fontFamily: "Spoqa Han Sans Neo",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "normal",
                              letterSpacing: "-0.042px",
                            }}
                          >
                            배송비
                          </Text>
                          <Select
                            height={"40px"}
                            gap={"10px"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"flex-start"}
                            colorScheme="white"
                            color="#595959"
                            fontSize="14px"
                            fontWeight="400"
                            letterSpacing={"-0.042px"}
                            placeholder="배송비를 입력하세요"
                          >
                            <option value="option1">무료배송</option>
                            <option value="option2">고정가격</option>
                          </Select>
                        </Flex>
                        <Flex
                          alignItems={"flex-start"}
                          alignSelf={"stretch"}
                          gap={"12px"}
                        >
                          {" "}
                          <Flex
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"flex-start"}
                            gap={"6px"}
                          >
                            <Text
                              color="var(--maincolorstextblack-222222, #222)"
                              css={{
                                fontFeatureSettings: "clig off, liga off",
                                /* BODY/XS_14/R */
                                fontFamily: "Spoqa Han Sans Neo",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "normal",
                                letterSpacing: "-0.042px",
                              }}
                            >
                              하나의 항목
                            </Text>
                            <Input
                              height={"40px"}
                              gap={"10px"}
                              flexDirection={"column"}
                              justifyContent={"center"}
                              alignItems={"flex-start"}
                              colorScheme="white"
                              color="#595959"
                              fontSize="14px"
                              fontWeight="400"
                              letterSpacing={"-0.042px"}
                              placeholder="0원"
                            ></Input>
                          </Flex>{" "}
                          <Flex
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"flex-start"}
                            gap={"6px"}
                          >
                            <Text
                              color="var(--maincolorstextblack-222222, #222)"
                              css={{
                                fontFeatureSettings: "clig off, liga off",
                                /* BODY/XS_14/R */
                                fontFamily: "Spoqa Han Sans Neo",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "normal",
                                letterSpacing: "-0.042px",
                              }}
                            >
                              추가 항목
                            </Text>
                            <Input
                              height={"40px"}
                              gap={"10px"}
                              flexDirection={"column"}
                              justifyContent={"center"}
                              alignItems={"flex-start"}
                              colorScheme="white"
                              color="#595959"
                              fontSize="14px"
                              fontWeight="400"
                              letterSpacing={"-0.042px"}
                              placeholder="0원"
                            ></Input>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Button
                      alignItems={"center"}
                      padding={"8px 16px 8px 8px"}
                      backgroundColor={"transparent"}
                    >
                      <SvgPlus />
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
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
                        다른 위치 추가
                      </Text>
                    </Button>
                    <Flex
                      height={"1px"}
                      alignSelf={"stretch"}
                      background={"var(--maincolorslinegrayeeeeee, #EEE)"}
                    ></Flex>
                    <Flex // 배송 업그레이드
                      display={"flex"}
                      alignSelf={"stretch"}
                      alignItems={"flex-start"}
                      gap={"40px"}
                    >
                      <Flex
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        width={"234px"}
                        gap={"6px"}
                        alignSelf={"stretch"}
                      >
                        <Flex
                          display={"flex"}
                          alignItems={"center"}
                          width={"234px"}
                          gap={"2px"}
                        >
                          <Text
                            color="var(--maincolorstextblack-222222, #222)"
                            fontFamily="Spoqa Han Sans Neo"
                            fontSize="14px"
                            fontStyle="normal"
                            fontWeight={500}
                            lineHeight="normal"
                            letterSpacing="-0.042px"
                          >
                            배송 업그레이드*
                          </Text>
                          <Text
                            color="var(--maincolorstextgray-595959, #666)"
                            fontFamily="Spoqa Han Sans Neo"
                            fontSize="13px"
                            fontStyle="normal"
                            fontWeight={400}
                            lineHeight="140%"
                            letterSpacing="-0.3px"
                          >
                            (선택사항)
                          </Text>
                        </Flex>
                        <Text
                          color="var(--maincolorstextgray-595959, #666)"
                          fontFamily="Spoqa Han Sans Neo"
                          fontSize="13px"
                          fontStyle="normal"
                          fontWeight={400}
                          lineHeight="140%"
                          letterSpacing="-0.3px"
                        >
                          구매자에게 더 빠른 배송을 선택할 수 있는 옵션을
                          제공합니다. 이러한 비용은 표준 가격에 추가됩니다.
                        </Text>
                      </Flex>
                      <Flex
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        gap={"16px"}
                      >
                        <Flex
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"flex-start"}
                          gap={"6px"}
                        >
                          <Text
                            color="var(--maincolorstextblack-222222, #222)"
                            css={{
                              fontFeatureSettings: "clig off, liga off",
                              /* BODY/XS_14/R */
                              fontFamily: "Spoqa Han Sans Neo",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "normal",
                              letterSpacing: "-0.042px",
                            }}
                          >
                            업그레이드
                          </Text>
                          <Select
                            height={"40px"}
                            gap={"10px"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"flex-start"}
                            colorScheme="white"
                            color="#595959"
                            fontSize="14px"
                            fontWeight="400"
                            letterSpacing={"-0.042px"}
                            placeholder="업그레이드 서비스 선택"
                          ></Select>
                        </Flex>
                        <Flex
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"flex-start"}
                          gap={"6px"}
                        >
                          <Text
                            color="var(--maincolorstextblack-222222, #222)"
                            css={{
                              fontFeatureSettings: "clig off, liga off",
                              /* BODY/XS_14/R */
                              fontFamily: "Spoqa Han Sans Neo",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "normal",
                              letterSpacing: "-0.042px",
                            }}
                          >
                            배송서비스
                          </Text>
                          <Select
                            height={"40px"}
                            gap={"10px"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"flex-start"}
                            colorScheme="white"
                            color="#595959"
                            fontSize="14px"
                            fontWeight="400"
                            letterSpacing={"-0.042px"}
                            placeholder="배송 서비스 선택"
                          ></Select>
                        </Flex>
                        <Flex
                          alignItems={"flex-start"}
                          alignSelf={"stretch"}
                          gap={"12px"}
                        >
                          {" "}
                          <Flex
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"flex-start"}
                            gap={"6px"}
                          >
                            <Text
                              color="var(--maincolorstextblack-222222, #222)"
                              css={{
                                fontFeatureSettings: "clig off, liga off",
                                /* BODY/XS_14/R */
                                fontFamily: "Spoqa Han Sans Neo",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "normal",
                                letterSpacing: "-0.042px",
                              }}
                            >
                              하나의 항목
                            </Text>
                            <Input
                              height={"40px"}
                              gap={"10px"}
                              flexDirection={"column"}
                              justifyContent={"center"}
                              alignItems={"flex-start"}
                              colorScheme="white"
                              color="#595959"
                              fontSize="14px"
                              fontWeight="400"
                              letterSpacing={"-0.042px"}
                              placeholder="0원"
                            ></Input>
                          </Flex>{" "}
                          <Flex
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"flex-start"}
                            gap={"6px"}
                          >
                            <Text
                              color="var(--maincolorstextblack-222222, #222)"
                              css={{
                                fontFeatureSettings: "clig off, liga off",
                                /* BODY/XS_14/R */
                                fontFamily: "Spoqa Han Sans Neo",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "normal",
                                letterSpacing: "-0.042px",
                              }}
                            >
                              추가 항목
                            </Text>
                            <Input
                              height={"40px"}
                              gap={"10px"}
                              flexDirection={"column"}
                              justifyContent={"center"}
                              alignItems={"flex-start"}
                              colorScheme="white"
                              color="#595959"
                              fontSize="14px"
                              fontWeight="400"
                              letterSpacing={"-0.042px"}
                              placeholder="0원"
                            ></Input>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Button
                      alignItems={"center"}
                      padding={"8px 16px 8px 8px"}
                      backgroundColor={"transparent"}
                    >
                      <SvgPlus />
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
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
                        배송 업그레이드 추가
                      </Text>
                    </Button>
                    <Flex
                      height={"1px"}
                      alignSelf={"stretch"}
                      background={"var(--maincolorslinegrayeeeeee, #EEE)"}
                    ></Flex>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      alignSelf={"stretch"}
                    >
                      <Flex>
                        <Text
                          color="var(--maincolorstextblack-222222, #222)"
                          css={`
                            font-feature-settings: "clig" off, "liga" off;
                            /* BODY/XS_14/R */
                            font-family: "Spoqa Han Sans Neo";
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: normal;
                            letter-spacing: -0.042px;
                          `}
                        >
                          원하는 경우 이러한 옵션을 저장하여 향후 목록에 적용할
                          수 있습니다.
                        </Text>
                        <Text
                          ml={"6px"}
                          cursor={"pointer"}
                          color="var(--maincolorstextblack-222222, #222)"
                          css={`
                            font-feature-settings: "clig" off, "liga" off;
                            /* BODY/XS_14/R */
                            font-family: "Spoqa Han Sans Neo";
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: normal;
                            letter-spacing: -0.042px;
                          `}
                          textDecorationLine="underline"
                        >
                          배송 프로필 작동 방식
                        </Text>
                      </Flex>
                      <Button
                        alignItems={"center"}
                        padding={"10px 24px"}
                        backgroundColor={"transparent"}
                        borderRadius={"100px"}
                        border={
                          "1px solid var(--maincolorstextblack-222222, #222)"
                        }
                      >
                        <Text
                          color="var(--maincolorstextblack-222222, #222)"
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
                          배송 프로필 저장
                        </Text>
                      </Button>
                    </Flex>
                    <Flex
                      height={"1px"}
                      alignSelf={"stretch"}
                      background={"var(--maincolorslinegrayeeeeee, #EEE)"}
                    ></Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex // 배송 옵션
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    배송비 미리보기
                  </Text>
                </Flex>
                <Flex alignItems={"center"} gap={"40px"} flex={"1 0 0"}>
                  <Flex
                    width={"600px"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"20px"}
                  >
                    {" "}
                    <Flex
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"flex-start"}
                      gap={"16px"}
                    >
                      <Flex
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        gap={"6px"}
                      >
                        <Text
                          color="var(--maincolorstextblack-222222, #222)"
                          css={{
                            fontFeatureSettings: "clig off, liga off",
                            /* BODY/XS_14/R */
                            fontFamily: "Spoqa Han Sans Neo",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "150%",
                            letterSpacing: "-0.042px",
                          }}
                        >
                          기본 배송
                        </Text>
                        <Select
                          height={"40px"}
                          width={"600px"}
                          gap={"10px"}
                          flexDirection={"column"}
                          justifyContent={"center"}
                          alignItems={"flex-start"}
                          colorScheme="white"
                          color="#595959"
                          fontSize="14px"
                          fontWeight="400"
                          letterSpacing={"-0.042px"}
                          placeholder="배송 서비스 선택"
                        ></Select>
                      </Flex>
                      <Flex
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        gap={"6px"}
                      >
                        <Text
                          color="var(--maincolorstextblack-222222, #222)"
                          css={{
                            fontFeatureSettings: "clig off, liga off",
                            /* BODY/XS_14/R */
                            fontFamily: "Spoqa Han Sans Neo",
                            fontSize: "16px",

                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "150%",
                            letterSpacing: "-0.042px",
                          }}
                        >
                          업그레이드
                        </Text>
                        <Select
                          height={"40px"}
                          width={"600px"}
                          gap={"10px"}
                          flexDirection={"column"}
                          justifyContent={"center"}
                          alignItems={"flex-start"}
                          colorScheme="white"
                          color="#595959"
                          fontSize="14px"
                          fontWeight="400"
                          letterSpacing={"-0.042px"}
                          placeholder="배송 서비스 선택"
                        ></Select>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"flex-end"}
                    gap={"40px"}
                    flex={"1 0 0"}
                  >
                    <Flex
                      display={"flex"}
                      width={"120px"}
                      flexDirection={"column"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={"8px"}
                    >
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
                        css={`
                          font-feature-settings: "clig" off, "liga" off;
                          /* BODY/S_16/R */
                          font-family: "Spoqa Han Sans Neo";
                          font-size: 16px;
                          font-style: normal;
                          font-weight: 400;
                          line-height: 150%; /* 24px */
                          letter-spacing: -0.048px;
                        `}
                      >
                        배송비
                      </Text>
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
                        css={`
                          font-feature-settings: "clig" off, "liga" off;
                          /* BODY/S_16/R */
                          font-family: "Spoqa Han Sans Neo";
                          font-size: 16px;
                          font-style: normal;
                          font-weight: 400;
                          line-height: 150%; /* 24px */
                          letter-spacing: -0.048px;
                        `}
                      >
                        0원
                      </Text>
                    </Flex>
                    <Flex
                      display={"flex"}
                      width={"120px"}
                      flexDirection={"column"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={"8px"}
                    >
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
                        css={`
                          font-feature-settings: "clig" off, "liga" off;
                          /* BODY/S_16/R */
                          font-family: "Spoqa Han Sans Neo";
                          font-size: 16px;
                          font-style: normal;
                          font-weight: 400;
                          line-height: 150%; /* 24px */
                          letter-spacing: -0.048px;
                        `}
                      >
                        총 금액
                      </Text>
                      <Text
                        color="var(--maincolorstextblack-222222, #222)"
                        css={`
                          font-feature-settings: "clig" off, "liga" off;
                          /* BODY/S_16/R */
                          font-family: "Spoqa Han Sans Neo";
                          font-size: 16px;
                          font-style: normal;
                          font-weight: 400;
                          line-height: 150%; /* 24px */
                          letter-spacing: -0.048px;
                        `}
                      >
                        0원
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex // 목록 세부정보
            display={"flex"}
            width={"1280px"}
            padding={"24px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"32px"}
            border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
          >
            <Flex
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"4px"}
            >
              <Text
                color="var(--maincolorstextblack-222222, #222)"
                fontFamily="Spoqa Han Sans Neo"
                fontSize="24px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                letterSpacing="-0.5px"
              >
                반품 및 교환
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
                선택한 정책이 이 목록에 적용됩니다.
              </Text>
            </Flex>
            <Flex alignItems={"flex-start"} gap={"40px"} alignSelf={"stretch"}>
              <Text
                color="var(--maincolorstextblack-222222, #222)"
                css={`
                  font-feature-settings: "clig" off, "liga" off;
                  /* BODY/XS_14/R */
                  font-family: "Spoqa Han Sans Neo";
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                  letter-spacing: -0.042px;
                `}
              >
                가장 많이 사용한 것을 기반으로 한 선택은 다음과 같습니다.
              </Text>
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                gap="16px"
                flex="1 0 0"
              >
                <Flex
                  display="flex"
                  padding="20px"
                  justifyContent="space-between"
                  alignItems="center"
                  alignSelf="stretch"
                  border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                >
                  <Flex
                    display="flex"
                    flexDirection={"column"}
                    alignItems="flex-start"
                    gap="12px"
                  >
                    <Flex
                      display="flex"
                      flexDirection={"column"}
                      alignItems="flex-start"
                      gap="8px"
                    >
                      <Flex alignItems={"center"} gap={"6px"}>
                        {" "}
                        <Text
                          color="var(--maincolorstextblack-222222, #222)"
                          fontFamily="Spoqa Han Sans Neo"
                          fontSize="16px"
                          fontStyle="normal"
                          fontWeight={500}
                          lineHeight="normal"
                          letterSpacing="0.048px"
                        >
                          반품 및 교환
                        </Text>
                        <SvgCalendar />{" "}
                        <Text
                          color="var(--maincolorstextblack-222222, #222)"
                          fontFamily="Spoqa Han Sans Neo"
                          fontSize="16px"
                          fontStyle="normal"
                          fontWeight={500}
                          lineHeight="normal"
                          letterSpacing="0.048px"
                        >
                          30일
                        </Text>
                      </Flex>

                      <Text
                        width={"440px"}
                        color="var(--maincolorstextblack-222222, #222)"
                        css={`
                          font-feature-settings: "clig" off, "liga" off;
                          /* BODY/S_16/R */
                          font-family: "Spoqa Han Sans Neo";
                          font-size: 16px;
                          font-style: normal;
                          font-weight: 400;
                          line-height: 150%; /* 24px */
                          letter-spacing: -0.048px;
                        `}
                      >
                        구매자는 품목이 원래 상태로 반품되지 않은 경우 반품
                        배송비용과 가치 손실에 대한 책임이 있습니다.
                      </Text>
                    </Flex>
                    <Text
                      color="var(--maincolorstextgray-595959, #666)"
                      css={`
                        font-feature-settings: "clig" off, "liga" off;
                        /* BODY/XXS_13/R */
                        font-family: "Spoqa Han Sans Neo";
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        letter-spacing: -0.3px;
                      `}
                    >
                      0 활성 목록이 이 정책을 사용합니다.
                    </Text>
                  </Flex>
                  <Button
                    alignItems={"center"}
                    padding={"10px 24px"}
                    backgroundColor={"transparent"}
                    borderRadius={"100px"}
                    border={"1px solid var(--maincolorstextblack-222222, #222)"}
                  >
                    <Text
                      color="var(--maincolorstextblack-222222, #222)"
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
                      적용
                    </Text>
                  </Button>
                </Flex>
                <Flex alignItems={"center"} cursor={"pointer"}>
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    textAlign="center"
                    css={`
                      font-feature-settings: "clig" off, "liga" off;
                      /* HEADINGS/H7/R */
                      font-family: "Spoqa Han Sans Neo";
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: normal;
                      letter-spacing: -0.3px;
                      text-transform: capitalize;
                    `}
                  >
                    다른 정책을 선택하세요
                  </Text>
                  <SvgArrowRight />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            width={"1280px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {" "}
            <Flex gap={"12px"} alignItems={"center"}>
              {" "}
              <Button
                alignItems={"center"}
                padding={"10px 24px"}
                backgroundColor={"transparent"}
                borderRadius={"5px"}
                border={"1px solid var(--maincolorstextblack-222222, #222)"}
              >
                <Text
                  color="var(--maincolorstextblack-222222, #222)"
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
                  취소
                </Text>
              </Button>
              <Text
                color="var(--maincolorstextblack-222222, #222)"
                textAlign="center"
                css={`
                  font-feature-settings: "clig" off, "liga" off;
                  /* BODY/XS_14/R */
                  font-family: "Spoqa Han Sans Neo";
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                  letter-spacing: -0.042px;
                `}
              >
                이목록은 아직 활성화 되지 않았습니다. 매장을 오픈하면 쇼핑객에게
                제공됩니다.
              </Text>
            </Flex>
            <Flex gap={"12px"} alignItems={"center"}>
              <Button
                alignItems={"center"}
                padding={"10px 24px"}
                backgroundColor={"transparent"}
                borderRadius={"5px"}
                border={"1px solid var(--maincolorstextblack-222222, #222)"}
              >
                <Text
                  color="var(--maincolorstextblack-222222, #222)"
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
                  미리보기
                </Text>
              </Button>
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
        <Footer />
      </Flex>
      <Box pb={40} mt={10} px={{ base: 10, lg: 40 }}>
        <Container>
          <VStack
            as="form"
            onSubmit={handleSubmit(onSubmitImages)}
            spacing={5}
            mt={10}
          >
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
      </Box>
    </>
  );
}

const GrayBoxImage = ({ src, width, height }) => {
  if (!src) {
    return (
      <Box
        style={{
          width: width,
          height: height,
          backgroundColor: "#D9D9D9", // 회색 배경
        }}
      />
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

const SvgPlus = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="add">
        <mask
          id="mask0_1005_9844"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1005_9844)">
          <path
            id="add_2"
            d="M11.5 12.5H6V11.5H11.5V6H12.5V11.5H18V12.5H12.5V18H11.5V12.5Z"
            fill="#1C1B1F"
          />
        </g>
      </g>
    </svg>
  );
};

const SvgCalendar = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="calendar_month">
        <mask
          id="mask0_929_11764"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_929_11764)">
          <path
            id="calendar_month_2"
            d="M12 14.1537C11.7936 14.1537 11.6138 14.0771 11.4606 13.9238C11.3074 13.7706 11.2308 13.5908 11.2308 13.3844C11.2308 13.178 11.3074 12.9982 11.4606 12.845C11.6138 12.6918 11.7936 12.6152 12 12.6152C12.2064 12.6152 12.3862 12.6918 12.5394 12.845C12.6926 12.9982 12.7692 13.178 12.7692 13.3844C12.7692 13.5908 12.6926 13.7706 12.5394 13.9238C12.3862 14.0771 12.2064 14.1537 12 14.1537ZM8 14.1537C7.79358 14.1537 7.61378 14.0771 7.46058 13.9238C7.30738 13.7706 7.23077 13.5908 7.23077 13.3844C7.23077 13.178 7.30738 12.9982 7.46058 12.845C7.61378 12.6918 7.79358 12.6152 8 12.6152C8.20642 12.6152 8.38622 12.6918 8.53942 12.845C8.69262 12.9982 8.76923 13.178 8.76923 13.3844C8.76923 13.5908 8.69262 13.7706 8.53942 13.9238C8.38622 14.0771 8.20642 14.1537 8 14.1537ZM16 14.1537C15.7936 14.1537 15.6138 14.0771 15.4606 13.9238C15.3074 13.7706 15.2308 13.5908 15.2308 13.3844C15.2308 13.178 15.3074 12.9982 15.4606 12.845C15.6138 12.6918 15.7936 12.6152 16 12.6152C16.2064 12.6152 16.3862 12.6918 16.5394 12.845C16.6926 12.9982 16.7692 13.178 16.7692 13.3844C16.7692 13.5908 16.6926 13.7706 16.5394 13.9238C16.3862 14.0771 16.2064 14.1537 16 14.1537ZM12 17.9998C11.7936 17.9998 11.6138 17.9232 11.4606 17.77C11.3074 17.6168 11.2308 17.437 11.2308 17.2306C11.2308 17.0242 11.3074 16.8444 11.4606 16.6912C11.6138 16.538 11.7936 16.4613 12 16.4613C12.2064 16.4613 12.3862 16.538 12.5394 16.6912C12.6926 16.8444 12.7692 17.0242 12.7692 17.2306C12.7692 17.437 12.6926 17.6168 12.5394 17.77C12.3862 17.9232 12.2064 17.9998 12 17.9998ZM8 17.9998C7.79358 17.9998 7.61378 17.9232 7.46058 17.77C7.30738 17.6168 7.23077 17.437 7.23077 17.2306C7.23077 17.0242 7.30738 16.8444 7.46058 16.6912C7.61378 16.538 7.79358 16.4613 8 16.4613C8.20642 16.4613 8.38622 16.538 8.53942 16.6912C8.69262 16.8444 8.76923 17.0242 8.76923 17.2306C8.76923 17.437 8.69262 17.6168 8.53942 17.77C8.38622 17.9232 8.20642 17.9998 8 17.9998ZM16 17.9998C15.7936 17.9998 15.6138 17.9232 15.4606 17.77C15.3074 17.6168 15.2308 17.437 15.2308 17.2306C15.2308 17.0242 15.3074 16.8444 15.4606 16.6912C15.6138 16.538 15.7936 16.4613 16 16.4613C16.2064 16.4613 16.3862 16.538 16.5394 16.6912C16.6926 16.8444 16.7692 17.0242 16.7692 17.2306C16.7692 17.437 16.6926 17.6168 16.5394 17.77C16.3862 17.9232 16.2064 17.9998 16 17.9998ZM5.61538 20.9998C5.15513 20.9998 4.77083 20.8457 4.4625 20.5373C4.15417 20.229 4 19.8447 4 19.3844V6.61519C4 6.15494 4.15417 5.77065 4.4625 5.46232C4.77083 5.15399 5.15513 4.99982 5.61538 4.99982H7.3846V2.76904H8.46152V4.99982H15.6154V2.76904H16.6154V4.99982H18.3846C18.8449 4.99982 19.2292 5.15399 19.5375 5.46232C19.8458 5.77065 20 6.15494 20 6.61519V19.3844C20 19.8447 19.8458 20.229 19.5375 20.5373C19.2292 20.8457 18.8449 20.9998 18.3846 20.9998H5.61538ZM5.61538 19.9998H18.3846C18.5385 19.9998 18.6795 19.9357 18.8077 19.8075C18.9359 19.6793 19 19.5383 19 19.3844V10.6152H5V19.3844C5 19.5383 5.0641 19.6793 5.1923 19.8075C5.32052 19.9357 5.46154 19.9998 5.61538 19.9998Z"
            fill="#1C1B1F"
          />
        </g>
      </g>
    </svg>
  );
};

const SvgArrowRight = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow_right_alt_300">
        <mask
          id="mask0_1005_3365"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1005_3365)">
          <path
            id="arrow_right_alt"
            d="M13.8461 17.6538L12.7923 16.5692L16.6116 12.75H4.5V11.25H16.6116L12.7923 7.43079L13.8461 6.34619L19.5 12L13.8461 17.6538Z"
            fill="#1C1B1F"
          />
        </g>
      </g>
    </svg>
  );
};
