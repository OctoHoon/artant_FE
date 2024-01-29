import { useState, useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  HStack,
  Box,
  Text,
  IconButton,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const ImageCropperModal = ({ isOpen, onClose, imageSrc, onImageCropped }) => {
  const cropperRef = useRef<ReactCropperElement>(null);
  const [aspectRatio, setAspectRatio] = useState<number | undefined>(undefined);

  const aspectRatios = [
    { value: undefined, label: "자유롭게", width: "27px", height: "36px" },
    { value: 1, label: "1:1", width: "36px", height: "36px" },
    { value: 0.75, label: "3:4", width: "27px", height: "36px" },
    { value: 1.33, label: "4:3", width: "36px", height: "27px" },
  ];

  const handleAspectRatioChange = (ratio) => {
    setAspectRatio(ratio);
    if (cropperRef.current && cropperRef.current.cropper) {
      // Cropper 인스턴스에 새로운 비율 적용
      cropperRef.current.cropper.setAspectRatio(ratio);
    }
  };

  const handleCrop = () => {
    if (cropperRef.current && cropperRef.current.cropper) {
      cropperRef.current.cropper.getCroppedCanvas().toBlob((blob) => {
        if (blob) {
          onImageCropped(blob);
        }
      });
    }
  };

  const handleModalClose = () => {
    setAspectRatio(undefined); // aspectRatio 상태 초기화
    onClose(); // 원래의 onClose 함수 호출
  };

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
      <ModalOverlay />
      <ModalContent
        width={"540px"}
        maxWidth={"540px"}
        px={"20px"}
        pt={"20px"}
        pb={"12px"}
        backgroundColor="white"
      >
        <Cropper
          ref={cropperRef}
          src={imageSrc}
          style={{ height: "100%", width: "100%" }}
          aspectRatio={aspectRatio}
          autoCropArea={1}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          guides={false}
        />
        <HStack
          spacing={4}
          pt={5}
          px={12}
          justify="space-between"
          align={"flex-end"}
        >
          {aspectRatios.map((ratio) => (
            <Box key={ratio.label} textAlign="center">
              <Button
                className={`aspectRatioButton ${
                  ratio.label === "자유롭게" ? "freeAspectRatioButton" : ""
                } ${aspectRatio === ratio.value ? "selected" : ""}`}
                onClick={() => handleAspectRatioChange(ratio.value)}
                backgroundColor="white"
                border={`2px solid ${
                  aspectRatio === ratio.value ? "#5400FD" : "rgba(0,0,0,.3)"
                }`}
                borderRadius="0"
                _hover={{ bg: "white" }} // 호버 효과 제거
                _active={{
                  bg: "white",
                  transform: "none",
                  borderColor: "#5400FD",
                }} // 클릭 효과 제거
                _focus={{ boxShadow: "none" }} // 포커스 시 테두리 그림자 제거
                width={ratio.width}
                height={ratio.height}
                minWidth={ratio.width}
                minHeight={ratio.height}
                padding="0"
              />
              <Text mt="2" textStyle={"B14M"}>
                {ratio.label}
              </Text>
            </Box>
          ))}
        </HStack>
        <Divider my={3} borderWidth={"0.3px"} borderColor={"rgba(0,0,0,.2)"} />
        <HStack justifyContent={"flex-end"} alignContent={"center"}>
          <Button
            width={"48px"}
            border="1px"
            variant="outline"
            backgroundColor="#5400FD;"
            color={"white"}
            borderRadius="5px"
            _hover={{
              background: "var(--maincolorsbggray-555555, #5400FD)",
            }}
            onClick={handleModalClose}
          >
            <Text textStyle={"B14S"}>취소</Text>
          </Button>
          <Button
            width={"48px"}
            border="1px"
            variant="outline"
            backgroundColor="#5400FD;"
            color={"white"}
            borderRadius="5px"
            _hover={{
              background: "var(--maincolorsbggray-555555, #5400FD)",
            }}
            onClick={handleCrop}
          >
            <Text textStyle={"B14S"}>수정</Text>
          </Button>
        </HStack>
      </ModalContent>
    </Modal>
  );
};

export default ImageCropperModal;
