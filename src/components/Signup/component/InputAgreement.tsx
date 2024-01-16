import {
  Checkbox,
  Flex,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { terms_of_service } from "../../data/Articles";
import { translation } from "../Signup";

export default function CheckAgreement({
  handleAgreementChange,
  openAgreementModal,
  selectedAgreement,
  closeAgreementModal,
  value,
  isChecked,
  isRequired,
}) {
  return (
    <Flex justifyContent="space-between">
      <Checkbox
        isRequired={isRequired}
        _checked={{
          "& .chakra-checkbox__control": {
            background: "#5400FD",
          },
        }}
        key={value}
        isChecked={isChecked}
        onChange={(e) => handleAgreementChange(value, e.target.checked)}
        color={"#666666"}
      >
        {translation[value]}
      </Checkbox>
      <Button backgroundColor="white" onClick={() => openAgreementModal(value)}>
        {">"}
      </Button>
      {/* Modal for the agreement */}
      <Modal isOpen={selectedAgreement === value} onClose={closeAgreementModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{translation[value]}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text maxH="500px" overflowY="auto">
              {terms_of_service}
            </Text>
            <Button
              marginY={"10px"}
              textStyle={"B16M"}
              width="full"
              height="56px"
              border="1px"
              variant="outline"
              backgroundColor="#5400FD;"
              color={"white"}
              borderRadius="0px"
              onClick={closeAgreementModal}
            >
              확인
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
