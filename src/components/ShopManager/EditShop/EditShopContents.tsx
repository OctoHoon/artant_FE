import {
  Flex,
  Button,
  Input,
  Textarea,
  Box,
  Text,
  Image,
  useToast,
} from "@chakra-ui/react";
import BlackButton from "../../commons/Button/BlackButton";
import { PlusSVG, SvgCamera, SvgVideo } from "./Svg";
import { updateShop } from "../../../api";
import EditIntroImage from "./EditIntroImage";

export default function EditShopContents({
  shop_pk,
  data,
  descriptionTitle,
  setDescriptionTitle,
  description,
  setDescription,
  images,
  setImages,
  resetImages,
}) {
  const toast = useToast();
  return (
    <Flex gap={"40px"}>
      <Flex flexDirection={"column"} gap={"45px"} width={"248px"}>
        <Text fontSize={"18px"} fontWeight={"500"}>
          {data && data.shop_name} 소개
        </Text>
        <Flex gap={"36px"}>
          <Flex flexDirection={"column"} gap={"2px"}>
            <Text fontSize={"13px"}>판매량</Text>
            <Text fontSize={"22px"} fontWeight={"500"}>
              21,967
            </Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"2px"}>
            <Text fontSize={"13px"}>On ArtAnt since</Text>
            <Text fontSize={"22px"} fontWeight={"500"}>
              2018
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} gap={"40px"}>
        <Flex flexDirection={"column"} gap={"24px"} alignSelf={"stretch"}>
          <EditIntroImage
            shop_pk={shop_pk}
            images={images}
            setImages={setImages}
            resetImages={resetImages}
          />
          <Flex
            padding={"24px"}
            flexDirection={"column"}
            gap={"8px"}
            alignSelf={"stretch"}
            borderRadius={"5px"}
          >
            <Flex gap={"2px"}>
              <PlusSVG />
              스토리 헤드라인 추가
            </Flex>
            <Box height={"8px"} />
            <Input
              value={descriptionTitle}
              onChange={(e) => setDescriptionTitle(e.target.value)}
              placeholder="입력하세요"
              width={"944px"}
            />
            <Box height={"8px"} />
            <Flex gap={"4px"} justifyContent={"flex-end"}>
              <BlackButton
                title={"저장"}
                borderRadius={"100px"}
                width="min"
                onClick={async () => {
                  try {
                    const updateData = {
                      description_title: descriptionTitle,
                    };
                    const result = await updateShop(shop_pk, updateData);
                    toast({
                      title: "헤드라인 추가완료!",
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    });
                    return result;
                  } catch (error) {
                    console.error("업데이트 실패", error);
                    toast({
                      title: "헤드라인 추가실패!",
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
          </Flex>
          <Flex
            padding={"24px"}
            flexDirection={"column"}
            gap={"8px"}
            alignSelf={"stretch"}
            borderRadius={"5px"}
          >
            <Flex gap={"2px"}>
              <PlusSVG />
              당신의 이야기를 추가하세요. 쇼핑객에게 귀하의 비즈니스에 대해
              간략하게 설명하세요.
            </Flex>
            <Box height={"8px"} />
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="입력하세요"
              width={"944px"}
            />
            <Box height={"8px"} />
            <Flex gap={"4px"} justifyContent={"flex-end"}>
              <BlackButton
                title={"저장"}
                borderRadius={"100px"}
                width="min"
                onClick={async () => {
                  try {
                    const updateData = {
                      description: description,
                    };
                    const result = await updateShop(shop_pk, updateData);
                    toast({
                      title: "설명 추가완료!",
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    });
                    return result;
                  } catch (error) {
                    console.error("업데이트 실패", error);
                    toast({
                      title: "업데이트 실패!",
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
          </Flex>
          <Flex flexDirection={"column"} gap={"12px"}>
            <Text>SNS 계정을 연동하세요</Text>
            <Button
              background={"white"}
              borderRadius={"100px"}
              border={"1px"}
              width={"146px"}
            >
              <Flex fontSize={"16px"} fontWeight={"500"} alignItems={"center"}>
                <PlusSVG />
                SNS 계정 연동
              </Flex>
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} gap={"12px"}>
          <Text fontWeight={"500"}>샵 멤버</Text>
          <Flex gap={"12px"} width={"760px"} alignItems={"center"}>
            <Image
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              width={"48px"}
              height={"48px"}
              borderRadius={"100px"}
            />
            <Text color={"#666"}>
              자신에 대한 재미있는 사실을 담은 개인 소개를 추가하세요.
            </Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"12px"}>
            <Input placeholder="회원 이름 추가" />
            <Input placeholder="역할" />
            <Textarea placeholder="내용" />
            <Flex gap={"4px"} justifyContent={"flex-end"}>
              <BlackButton title={"저장"} borderRadius={"100px"} width="min" />
              <BlackButton
                title={"취소"}
                borderRadius={"100px"}
                type={true}
                width="min"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
