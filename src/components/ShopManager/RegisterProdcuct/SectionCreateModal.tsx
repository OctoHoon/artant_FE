import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

export default function CreateSectionModal({
  isOpen,
  onClose,
  sectionName,
  setSectionName,
}) {
  const handleSave = () => {
    onClose(); // Close the modal after saving
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>새 섹션 추가</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="section-name">
            <FormLabel>섹션 이름</FormLabel>
            <Input
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
              placeholder="섹션 이름을 입력하세요"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            저장
          </Button>
          <Button variant="ghost" onClick={onClose}>
            취소
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
