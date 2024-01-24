// ImageCropperModal.tsx
import React, { useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Modal, ModalOverlay, ModalContent, Button } from "@chakra-ui/react";

interface ImageCropperModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  onImageCropped: (croppedImage: Blob) => void;
}

const ImageCropperModal: React.FC<ImageCropperModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  onImageCropped,
}) => {
  const cropperRef = useRef<ReactCropperElement>(null);

  const handleCrop = () => {
    if (cropperRef.current && cropperRef.current.cropper) {
      cropperRef.current.cropper.getCroppedCanvas().toBlob((blob) => {
        if (blob) {
          onImageCropped(blob);
        }
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Cropper
          ref={cropperRef}
          src={imageSrc}
          style={{ height: 400, width: "100%" }}
          aspectRatio={1} // You can change the aspect ratio as needed
          guides={false}
        />
        <Button onClick={handleCrop}>Crop Image</Button>
      </ModalContent>
    </Modal>
  );
};

export default ImageCropperModal;
