import { Flex, Button, Input, Text, Image, useToast } from "@chakra-ui/react";
import { updateShop } from "../../../api";
import BlackButton from "../../commons/Button/BlackButton";
import { PhotoSVG, PlusSVG, SvgCamera } from "./Svg";

export default function EditAvatar({
  shop_pk,
  shop_name,
  shortDescription,
  setShortDescription,
}) {
  const toast = useToast();
  return (
    <Flex gap={"60px"}>
      <Flex gap={"32px"} flex={"1 0 0"}>
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
          onClick={() => {}}
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
