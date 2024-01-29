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
import { updateShop } from "../../../services/shopService";

export default function CreateSectionModal({
  shopPk,
  sections,
  isOpen,
  onClose,
  sectionName,
  setSectionName,
}) {
  const handleSave = async () => {
    try {
      console.log(sections);
      const newSection = {
        title: sectionName,
      };
      let newSections = [...sections, newSection];
      console.log(newSections);
      const response = await updateShop(shopPk, {
        sections_input: newSections,
      });

      // Handle any additional logic after successful creation
    } catch (error) {
      console.error("Error creating section:", error);
    }
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
            <FormLabel>섹션 제목</FormLabel>
            <Input
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
              placeholder="섹션 제목을 입력하세요"
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
