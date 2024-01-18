import {
  FormControl,
  Checkbox,
  CheckboxGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import CheckAgreement from "./InputAgreement";
import { useState } from "react";

export default function InputAgreements({
  selectAll,
  agreements,
  handleSelectAllChange,
  handleAgreementChange,
}) {
  const [selectedAgreement, setSelectedAgreement] = useState(null);

  const openAgreementModal = (agreementKey) => {
    setSelectedAgreement(agreementKey);
  };

  const closeAgreementModal = () => {
    setSelectedAgreement(null);
  };

  return (
    <FormControl border="1px solid #DBDBDB" padding={"10px"} gap={"10px"}>
      {/* <FormLabel>Agreements</FormLabel> */}

      <Checkbox
        isChecked={
          selectAll &&
          agreements.agreed_to_electronic_transactions &&
          agreements.agreed_to_marketing_mails &&
          agreements.agreed_to_optional_privacy_policy &&
          agreements.agreed_to_privacy_policy &&
          agreements.agreed_to_terms_of_service &&
          agreements.agreed_to_third_party_sharing &&
          agreements.confirmed_age_over_14
        }
        onChange={handleSelectAllChange}
        _checked={{
          "& .chakra-checkbox__control": {
            background: "#5400FD",
          },
        }}
        marginBottom={"10px"}
        color={"#666666"}
      >
        전체동의
      </Checkbox>
      <CheckboxGroup>
        <Stack spacing={2}>
          {Object.entries(agreements).map(([key, isChecked]) => {
            const requiredAgreements = [
              "agreed_to_electronic_transactions",
              "confirmed_age_over_14",
              "agreed_to_terms_of_service",
              "agreed_to_privacy_policy",
              "agreed_to_third_party_sharing",
            ];
            const isRequired = requiredAgreements.includes(key);

            return (
              <CheckAgreement
                value={key}
                handleAgreementChange={handleAgreementChange}
                openAgreementModal={openAgreementModal}
                selectedAgreement={selectedAgreement}
                closeAgreementModal={closeAgreementModal}
                isChecked={isChecked}
                isRequired={isRequired}
              />
            );
          })}
        </Stack>
      </CheckboxGroup>
      <Text marginTop={"10px"} textStyle={"B14R"} color={"#666666"}>
        동의를 거부할 권리가 있으며 동의를 거부할 경우, 사이드 가입 또는 일부
        서비스 이용이 제한됩니다.
      </Text>
    </FormControl>
  );
}
