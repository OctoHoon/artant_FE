import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  createPhoto,
  createVideo,
  getUploadURL,
  getVideoUploadURL,
  uploadImage,
  uploadVideo,
} from "../api";
import { useEffect, useRef, useState } from "react";
import RegisterProcess from "../components/RegisterShop/RegisterProcess";
import ReactPlayer from "react-player";

interface IForm {
  file: FileList;
}

interface IUploadURLResponse {
  id: string;
  uploadURL: string;
}

export default function UploadPhotos() {
  const [productName, setProductName] = useState(""); // 입력된 텍스트 상태 추가
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  const [selectedVideoFile, setSelectedVideoFile] = useState<FileList>();
  const [productPK, setProductPK] = useState("3");
  const [thumbnail, setThumbnail] = useState("");
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
  const uploadURLMutation = useMutation(getUploadURL, {});

  const onSubmit = async () => {
    try {
      const uploadURLResponses = await Promise.all(
        selectedFiles.map(() => uploadURLMutation.mutateAsync())
      );

      const uploadPromises = selectedFiles.map(async (file, index) => {
        const response = uploadURLResponses[index];
        await uploadImageMutation.mutateAsync({
          uploadURL: response.uploadURL,
          file: file,
        });
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
      }/thumbnails/thumbnail.mp4?width=248&time=0s`;

      //   console.log(
      //     cloudflareStreamUrl.replace(
      //       "/watch",
      //       "/thumbnails/thumbnail.jpg?time=0s&height=270"
      //     )
      //   );
      setTimeout(() => {
        setCloudflareStreamUrl(cloudflareStreamUrl);
        setThumbnail(
          cloudflareStreamUrl.replace(
            "/watch",
            "/thumbnails/thumbnail.jpg?time=0s&height=270"
          )
        );
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
      //   if (productPK) {
      //     createVideoMutation.mutate({
      //       video: cloudflareStreamUrl, // 사용 가능
      //       productPK,
      //     });
      //   }
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

  return (
    <>
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
              항목에 대한 사진과 세부정보를 추가하세요. 지금 당장 가능한 내용을
              작성하세요. 나중에 편집할 수 있습니다.
            </Text>
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
              5~15초 길이의 동영상으로 제품에 생기를 불어넣으세요. 판매를 늘리는
              데 도움이 될 수 있습니다. 동영상에는 소리가 포함되어 있지 않으므로
              제품이 말하도록 하세요!
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
            <Flex
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
            <Flex
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

      <Box pb={40} mt={10} px={{ base: 10, lg: 40 }}>
        <Container>
          <Heading textAlign={"center"}>Upload a Photo</Heading>
          <VStack
            as="form"
            onSubmit={handleSubmit(onSubmit)}
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

            <Button
              isLoading={
                createPhotoMutation.isLoading ||
                uploadImageMutation.isLoading ||
                uploadURLMutation.isLoading
              }
              type="submit"
              w="full"
              colorScheme={"red"}
            >
              Upload photos
            </Button>
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

            <Button
              isLoading={
                createVideoMutation.isLoading ||
                uploadVideoMutation.isLoading ||
                uploadVideoURLMutation.isLoading
              }
              onClick={onSubmitVideo}
              w="full"
              colorScheme={"red"}
            >
              Upload Videos
            </Button>
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
