import {
  Flex,
  Button,
  Input,
  Text,
  Image,
  useToast,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { getUploadURL, updateShop, uploadImage } from "../../../api";
import BlackButton from "../../commons/Button/BlackButton";
import { PhotoSVG, PlusSVG, SvgCamera } from "./Svg";
import { AiOutlineCamera } from "react-icons/ai";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function EditAvatar({
  shop_pk,
  shop_name,
  shortDescription,
  setShortDescription,
  shop_avatar,
}) {
  const toast = useToast();

  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(
    shop_avatar
  );

  const IMAGE_DELIVERY_URL = "https://imagedelivery.net/bsWtnSHPIyo_nZ9jFOblFw";

  const triggerFileInput = () => {
    document.getElementById("avatar")?.click();
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImageMutation = useMutation(uploadImage, {});
  const uploadURLMutation = useMutation(getUploadURL, {});

  const handleButtonClick = async () => {
    let avatarSrc = "";
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
      if (avatar) {
        const uploadURLResponse = await uploadURLMutation.mutateAsync();
        console.log(uploadURLResponse);
        const response = await uploadImageMutation.mutateAsync({
          uploadURL: uploadURLResponse.uploadURL,
          file: avatar,
        });
        avatarSrc = `${IMAGE_DELIVERY_URL}/${response.result.id}/public`;
      }

      const updateData = {
        avatar: avatarSrc,
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
    <Flex gap={"60px"}>
      <Flex gap={"32px"} flex={"1 0 0"}>
        <FormControl>
          <FormLabel htmlFor="backgroundImg">갤러리 아바타</FormLabel>
          <Button
            onClick={triggerFileInput}
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
          >
            {avatarPreview ? (
              <Image
                src={avatarPreview}
                alt="backgroud image preview"
                width={"100%"}
              />
            ) : (
              <>
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
              </>
            )}
          </Button>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            hidden
          />
          <BlackButton
            title={"저장"}
            borderRadius={"100px"}
            width="min"
            onClick={handleButtonClick}
          />
        </FormControl>

        <Flex flexDirection={"column"} gap={"8px"} flex={"1 0 0"}>
          <Text fontWeight={"500"} fontSize={"16px"}>
            {shop_name}
          </Text>
          <Flex
            padding={"24px"}
            flexDirection={"column"}
            gap={"8px"}
            alignSelf={"stretch"}
            borderRadius={"5px"}
            background={"#FAFAFA"}
          >
            <Flex gap={"2px"}>
              <PlusSVG />
              당신의 스토어를 한 문장으로 표현해 보세요
            </Flex>
            <Input
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="입력하세요"
              width={"934px"}
            />
            <Flex justifyContent={"space-between"} fontSize={"13px"}>
              <Flex gap={"4px"}>
                <BlackButton
                  title={"저장"}
                  borderRadius={"100px"}
                  width="min"
                  onClick={async () => {
                    try {
                      const updateData = {
                        short_description: shortDescription,
                      };
                      const result = await updateShop(shop_pk, updateData);
                      toast({
                        title: "추가완료!",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                      });
                      return result;
                    } catch (error) {
                      console.error("업데이트 실패", error);
                      toast({
                        title: "실패!",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                      });
                      throw error;
                    }
                  }}
                />
                <BlackButton
                  title={"취소"}
                  borderRadius={"100px"}
                  type={true}
                  width="min"
                />
              </Flex>
              {shortDescription && shortDescription.length}/55
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDirection={"column"}
          gap={"8px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex borderRadius={"100px"} width={"60px"} height={"60px"}>
            <Image
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              width={"60px"}
              height={"60px"}
              borderRadius={"60px"}
              border={"1px"}
            />
            <Flex position={"relative"} left={"-42px"} top={"18px"}>
              <PhotoSVG />
            </Flex>
          </Flex>
          <Button
            borderRadius={"100px"}
            border={"1px solid #D9D9D9"}
            background={"white"}
          >
            사진 변경
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
