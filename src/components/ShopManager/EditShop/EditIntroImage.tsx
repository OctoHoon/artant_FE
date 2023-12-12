import {
  Flex,
  Button,
  Text,
  Input,
  Image,
  Box,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { SvgCamera, SvgVideo } from "./Svg";
import { ChangeEvent, useEffect, useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";

import BlackButton from "../../commons/Button/BlackButton";
import { useMutation } from "@tanstack/react-query";
import DragImages from "./DragImages";
import {
  getUploadURL,
  getVideoUploadURL,
  uploadImage,
  uploadVideo,
} from "../../../services/productService";
import { updateShop } from "../../../services/shopService";
import { IMAGE_DELIVERY_URL } from "../../../services/apiConfig";

export default function EditIntroImage({
  shop_pk,
  images,
  setImages,
  resetImages,
}) {
  const toast = useToast();

  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) => ({
        id: null,
        file: file,
        url: URL.createObjectURL(file),
        existed: false,
      }));
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleVideoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedVideo(e.target.files[0]);
    }
  };

  const triggerImageInput = () => {
    document.getElementById("image-input")?.click();
  };

  const triggerVideoInput = () => {
    document.getElementById("video-input")?.click();
  };

  const deleteImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const deleteVideo = () => {
    setSelectedVideo(null);
  };

  const uploadImageMutation = useMutation(uploadImage, {});
  const uploadURLMutation = useMutation(getUploadURL, {});

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

  const handleButtonClick = async () => {
    const toastId = "loading-toast";
    toast({
      id: toastId,
      title: "이미지 업데이트 중...",
      description: "잠시만 기다려주세요",
      status: "info",
      duration: null,
      isClosable: false,
    });

    try {
      let imagesData: { image: string; order: number }[] = [];
      let videoUrl: string = "";

      // Handling Image Uploads
      const uploadResponses = new Array(images.length);

      // Upload only new images
      const uploadPromises = images.map((image, index) => {
        if (!image.existed && image.file) {
          return uploadURLMutation.mutateAsync().then((response) => {
            return uploadImageMutation
              .mutateAsync({
                uploadURL: response.uploadURL,
                file: image.file!,
              })
              .then((uploadResponse) => {
                console.log("1");

                // Store the upload response at the same index as the original image
                uploadResponses[index] = {
                  image: `${IMAGE_DELIVERY_URL}/${uploadResponse.result.id}/public`,
                  order: index + 1,
                };
              });
          });
        } else {
          // For existing images, directly place them into the response array
          uploadResponses[index] = {
            image: image.url,
            order: index + 1,
          };
          console.log("2");

          return Promise.resolve();
        }
      });
      console.log("3");

      await Promise.all(uploadPromises);
      console.log("4");
      // Filter out any undefined entries and sort by order
      imagesData = uploadResponses
        .filter((response) => response !== undefined)
        .sort((a, b) => a.order - b.order);

      // Handling Video Upload

      if (selectedVideo) {
        const uploadURLData = await uploadVideoURLMutation.mutateAsync();
        const cloudflareStreamUrl = `https://customer-8j0waj0pjwj8wz5e.cloudflarestream.com/${
          uploadURLData.uploadURL.split("/")[3]
        }/thumbnails/thumbnail.mp4?width=600&time=0s`;

        // Then upload the video file
        await uploadVideoMutation.mutateAsync({
          uploadURL: uploadURLData.uploadURL,
          file: selectedVideo,
        });

        const updateData = {
          images: imagesData,
          video: cloudflareStreamUrl ?? "",
        };
        console.log(updateData);
        console.log(shop_pk);

        const result = await updateShop(shop_pk, updateData);
        toast.close(toastId);
        toast({
          title: "업데이트 완료!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        return result;
      } else {
        const updateData = {
          images: imagesData,
          video: "",
        };
        console.log(updateData);
        console.log(shop_pk);

        const result = await updateShop(shop_pk, updateData);
        toast.close(toastId);
        toast({
          title: "업데이트 완료!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        return result;
      }
    } catch (error) {
      console.error("Image/Video upload failed", error);
      toast.close(toastId);
      toast({
        title: "실패!",
        description: "업로드 중 문제가 발생했습니다.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      throw error;
    }
  };

  return (
    <Flex
      width={"760px"}
      flexDirection={"column"}
      gap={"24px"}
      alignSelf={"stretch"}
      background={"#FAFAFA"}
      borderRadius={"5px"}
      padding={"24px"}
      textAlign={"center"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex flexDirection={"column"} gap={"8px"}>
        <Text fontSize={"16px"}>동영상과 최대 5장의 사진을 추가하세요.</Text>
        <Text color={"#555"}>
          프로세스,작업 공간 또는 구매자에게 영감을 줄 수 있는 모든 것에 대한
          사진을 공유하세요.
        </Text>
      </Flex>
      <Flex gap={"40px"} textAlign="center">
        <Input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          hidden
          id="image-input"
        />
        <label htmlFor="image-input">
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
            disabled={false}
            onClick={triggerImageInput}
          >
            <SvgCamera />
            <Text textStyle={"B13R"} mt={"-12px"}>
              사진 추가
            </Text>
          </Button>
        </label>
        <Input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
          hidden
          id="video-input"
        />
        <label htmlFor="video-input">
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
            disabled={false}
            onClick={triggerVideoInput}
          >
            <SvgVideo />
            <Text textStyle={"B13R"} mt={"-12px"}>
              동영상 추가
            </Text>
          </Button>
        </label>
      </Flex>
      <DragImages
        images={images}
        setImages={setImages}
        deleteImage={deleteImage}
      />

      {selectedVideo && (
        <Box position="relative" boxSize="200px">
          <video width="100%" height="100%" controls>
            <source
              src={URL.createObjectURL(selectedVideo)}
              type="video/mp4"
              onLoad={() =>
                URL.revokeObjectURL(URL.createObjectURL(selectedVideo))
              } // Clean up the object URL after the image has loaded
            />
            Your browser does not support the video tag.
          </video>
          <IconButton
            aria-label="Delete video"
            icon={<CloseIcon />}
            size="sm"
            position="absolute"
            top="1"
            right="1"
            onClick={deleteVideo}
          />
        </Box>
      )}
      <Flex justifyContent={"space-between"} fontSize={"13px"}>
        <BlackButton
          title={"저장"}
          borderRadius={"100px"}
          width="min"
          onClick={handleButtonClick}
        />
        <BlackButton
          title={"취소"}
          borderRadius={"100px"}
          type={true}
          width="min"
          onClick={resetImages}
        />
      </Flex>
    </Flex>
  );
}
