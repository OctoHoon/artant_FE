import {
  FormControl,
  FormLabel,
  Button,
  Image,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import BlackButton from "../../commons/Button/BlackButton";
import { useMutation } from "@tanstack/react-query";
import { updateShop } from "../../../services/shopService";
import { getUploadURL, uploadImage } from "../../../services/productService";
import { IMAGE_DELIVERY_URL } from "../../../services/apiConfig";

export default function EditBackgroundImg({ shop_pk, background_pic }) {
  const toast = useToast();

  const [backgroundImg, setBackgroundImg] = useState<File | null>(null);
  const [backgroundImgPreview, setBackgroundImgPreview] = useState<
    string | null
  >(background_pic);

  console.log(background_pic);
  console.log(`${backgroundImgPreview}`);

  const handleBackgroundImgChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setBackgroundImg(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImgPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("backgroundImg")?.click();
  };

  const uploadImageMutation = useMutation(uploadImage, {});
  const uploadURLMutation = useMutation(getUploadURL, {});

  const handleButtonClick = async () => {
    let backgroundImgSrc = "";
    const toastId = "loading-toast"; // Unique ID for the loading toast
    toast({
      id: toastId,
      title: "배경 이미지 업데이트 중...",
      description: "잠시만 기다려주세요",
      status: "info",
      duration: null, // null duration keeps the toast open indefinitely
      isClosable: false,
    });

    try {
      if (backgroundImg) {
        const uploadURLResponse = await uploadURLMutation.mutateAsync();
        console.log(`업로드 url ${uploadURLResponse}`);
        const response = await uploadImageMutation.mutateAsync({
          uploadURL: uploadURLResponse.uploadURL,
          file: backgroundImg,
        });
        backgroundImgSrc = `${IMAGE_DELIVERY_URL}/${response.result.id}/public`;
      }

      const updateData = {
        background_pic: backgroundImgSrc,
      };
      const result = await updateShop(shop_pk, updateData);
      toast.close(toastId);
      toast({
        title: "업데이트 완료!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      return result;
    } catch (error) {
      console.error("Account creation failed", error);
      toast({
        title: "실패!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      throw error; // Re-throw the error as is
    }
  };
  return (
    <Flex
      marginY={"20px"}
      flexDirection={"column"}
      height={"full"}
      gap={"40px"}
    >
      <FormControl>
        <FormLabel htmlFor="backgroundImg">배경사진</FormLabel>
        <Button onClick={triggerFileInput} p={1} height={"100%"} width={"100%"}>
          {backgroundImgPreview ? (
            <Image
              src={backgroundImgPreview}
              alt="backgroud image preview"
              width={"100%"}
            />
          ) : (
            <AiOutlineCamera size="100px" />
          )}
        </Button>
        <input
          id="backgroundImg"
          type="file"
          accept="image/*"
          onChange={handleBackgroundImgChange}
          hidden
        />
      </FormControl>
      <Flex
        justifyContent={"space-between"}
        fontSize={"13px"}
        alignSelf={"flex-end"}
      >
        <Flex gap={"4px"}>
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
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
