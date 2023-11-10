import { Flex, Text, Button, Switch, Select } from "@chakra-ui/react";
import { useState } from "react";
import BlackButton from "../../commons/Button/BlackButton";
import WhiteButton from "../../commons/Button/WhiteButton";
import RegisterHeader from "./RegisterHeader";

type Policy = {
  return: boolean;
  exchange: boolean;
  timeframe: number;
};

export default function Returns({ policy, setPolicy }) {
  const [changePolicy, setChangePolicy] = useState<boolean>(false);

  return (
    <Flex // 목록 세부정보
      display={"flex"}
      width={"1280px"}
      padding={"24px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"32px"}
      border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
    >
      <RegisterHeader
        title={"반품 및 교환"}
        description={"선택한 정책이 이 목록에 적용됩니다."}
      />

      <Flex alignItems={"flex-start"} gap={"40px"} alignSelf={"stretch"}>
        <Flex
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          gap="16px"
          flex="1 0 0"
        >
          {changePolicy ? (
            <CreatingPolicy
              policy={policy}
              setChangePolicy={setChangePolicy}
              setPolicy={setPolicy}
            />
          ) : (
            <CheckPolicy policy={policy} setChangePolicy={setChangePolicy} />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

const CheckPolicy = ({ policy, setChangePolicy }) => {
  return (
    <Flex
      display="flex"
      padding="20px"
      justifyContent="space-between"
      alignItems="center"
      alignSelf="stretch"
      border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
    >
      <Flex
        display="flex"
        flexDirection={"column"}
        alignItems="flex-start"
        gap="12px"
      >
        <Flex
          display="flex"
          flexDirection={"column"}
          alignItems="flex-start"
          gap="8px"
        >
          <Flex alignItems={"center"} gap={"6px"}>
            <Text textStyle={"B16M"}>
              {policy.return && "반품"}{" "}
              {policy.exchange && policy.return && " 및 "}{" "}
              {policy.exchange && "교환"}
              {!policy.return && !policy.exchange && "반품 및 교환 불가"}
            </Text>
            <SvgCalendar />
            <Text textStyle={"B16M"}>{policy.timeframe}일</Text>
          </Flex>

          <Text width={"440px"} textStyle={"B16R"}>
            구매자는 품목이 원래 상태로 반품되지 않은 경우 반품 배송비용과 가치
            손실에 대한 책임이 있습니다.
          </Text>
        </Flex>
      </Flex>
      <WhiteButton title={"변경"} onClick={() => setChangePolicy(true)} />
    </Flex>
  );
};

const CreatingPolicy = ({ policy, setChangePolicy, setPolicy }) => {
  const options = [7, 14, 21, 30, 45, 60, 90];

  const [tempPolicy, setTempPolicy] = useState(policy);

  const handlePolicyChange = (type, value) => {
    const newPolicy = { ...tempPolicy };
    newPolicy[type] = value;
    setTempPolicy(newPolicy);
  };

  const confirmPolicy = () => {
    setPolicy(tempPolicy);
    setChangePolicy(false);
  };

  return (
    <Flex flexDirection={"column"} alignSelf={"stretch"} gap={"10px"}>
      <Text textStyle={"B16M"}>교환 반품 정책 설정</Text>
      <Flex gap={"40px"}>
        <Switch
          id={`return-switch`}
          size={"lg"}
          isChecked={tempPolicy.return}
          onChange={(e) => handlePolicyChange("return", e.target.checked)}
          alignSelf={"center"}
        />
        <Flex width={"400px"} flexDirection={"column"}>
          <Text>반품</Text>
          <Text>반품을 허용합니다</Text>
        </Flex>
      </Flex>
      <Flex gap={"40px"}>
        <Switch
          id={`exchange-switch`}
          size={"lg"}
          isChecked={tempPolicy.exchange}
          onChange={(e) => handlePolicyChange("exchange", e.target.checked)}
          alignSelf={"center"}
        />
        <Flex width={"400px"} flexDirection={"column"}>
          <Text>교환</Text>
          <Text>교환을 허용합니다</Text>
        </Flex>
      </Flex>
      <Text textStyle={"B16M"} marginTop={"10px"}>
        기간
      </Text>
      <Text>구매자는 이 기간 안에 연락하고 제품을 반송해야합니다.</Text>
      <Select
        width={"400px"}
        value={tempPolicy.timeframe}
        onChange={(e) => handlePolicyChange("timeframe", e.target.value)}
      >
        {options.map((detail) => (
          <option key={detail} value={detail}>
            {`${detail}일 이내`}
          </option>
        ))}
      </Select>
      <Flex flexDirection={"column"} marginY={"30px"}>
        <Text textStyle={"B16M"}>반품 조건</Text>
        <li>구매자는 교환과 반품이 가능합니다</li>
        <li>구매자는 30일 이내에 반품해야합니다</li>
        <li>구매자는 반품 배송비용을 지불해야 합니다</li>
        <li>
          구매자는 상품이 원상태로 반품되지 않은 경우 해당하는 만큼의 손실에
          책임을 져야합니다
        </li>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <WhiteButton
          title={"취소"}
          borderRadius={"100px"}
          width="200px"
          onClick={() => setChangePolicy(false)}
        />
        <BlackButton
          title={"적용"}
          borderRadius={"100px"}
          width="200px"
          onClick={confirmPolicy}
        />
      </Flex>
    </Flex>
  );
};

const SvgCalendar = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="calendar_month">
        <mask
          id="mask0_929_11764"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_929_11764)">
          <path
            id="calendar_month_2"
            d="M12 14.1537C11.7936 14.1537 11.6138 14.0771 11.4606 13.9238C11.3074 13.7706 11.2308 13.5908 11.2308 13.3844C11.2308 13.178 11.3074 12.9982 11.4606 12.845C11.6138 12.6918 11.7936 12.6152 12 12.6152C12.2064 12.6152 12.3862 12.6918 12.5394 12.845C12.6926 12.9982 12.7692 13.178 12.7692 13.3844C12.7692 13.5908 12.6926 13.7706 12.5394 13.9238C12.3862 14.0771 12.2064 14.1537 12 14.1537ZM8 14.1537C7.79358 14.1537 7.61378 14.0771 7.46058 13.9238C7.30738 13.7706 7.23077 13.5908 7.23077 13.3844C7.23077 13.178 7.30738 12.9982 7.46058 12.845C7.61378 12.6918 7.79358 12.6152 8 12.6152C8.20642 12.6152 8.38622 12.6918 8.53942 12.845C8.69262 12.9982 8.76923 13.178 8.76923 13.3844C8.76923 13.5908 8.69262 13.7706 8.53942 13.9238C8.38622 14.0771 8.20642 14.1537 8 14.1537ZM16 14.1537C15.7936 14.1537 15.6138 14.0771 15.4606 13.9238C15.3074 13.7706 15.2308 13.5908 15.2308 13.3844C15.2308 13.178 15.3074 12.9982 15.4606 12.845C15.6138 12.6918 15.7936 12.6152 16 12.6152C16.2064 12.6152 16.3862 12.6918 16.5394 12.845C16.6926 12.9982 16.7692 13.178 16.7692 13.3844C16.7692 13.5908 16.6926 13.7706 16.5394 13.9238C16.3862 14.0771 16.2064 14.1537 16 14.1537ZM12 17.9998C11.7936 17.9998 11.6138 17.9232 11.4606 17.77C11.3074 17.6168 11.2308 17.437 11.2308 17.2306C11.2308 17.0242 11.3074 16.8444 11.4606 16.6912C11.6138 16.538 11.7936 16.4613 12 16.4613C12.2064 16.4613 12.3862 16.538 12.5394 16.6912C12.6926 16.8444 12.7692 17.0242 12.7692 17.2306C12.7692 17.437 12.6926 17.6168 12.5394 17.77C12.3862 17.9232 12.2064 17.9998 12 17.9998ZM8 17.9998C7.79358 17.9998 7.61378 17.9232 7.46058 17.77C7.30738 17.6168 7.23077 17.437 7.23077 17.2306C7.23077 17.0242 7.30738 16.8444 7.46058 16.6912C7.61378 16.538 7.79358 16.4613 8 16.4613C8.20642 16.4613 8.38622 16.538 8.53942 16.6912C8.69262 16.8444 8.76923 17.0242 8.76923 17.2306C8.76923 17.437 8.69262 17.6168 8.53942 17.77C8.38622 17.9232 8.20642 17.9998 8 17.9998ZM16 17.9998C15.7936 17.9998 15.6138 17.9232 15.4606 17.77C15.3074 17.6168 15.2308 17.437 15.2308 17.2306C15.2308 17.0242 15.3074 16.8444 15.4606 16.6912C15.6138 16.538 15.7936 16.4613 16 16.4613C16.2064 16.4613 16.3862 16.538 16.5394 16.6912C16.6926 16.8444 16.7692 17.0242 16.7692 17.2306C16.7692 17.437 16.6926 17.6168 16.5394 17.77C16.3862 17.9232 16.2064 17.9998 16 17.9998ZM5.61538 20.9998C5.15513 20.9998 4.77083 20.8457 4.4625 20.5373C4.15417 20.229 4 19.8447 4 19.3844V6.61519C4 6.15494 4.15417 5.77065 4.4625 5.46232C4.77083 5.15399 5.15513 4.99982 5.61538 4.99982H7.3846V2.76904H8.46152V4.99982H15.6154V2.76904H16.6154V4.99982H18.3846C18.8449 4.99982 19.2292 5.15399 19.5375 5.46232C19.8458 5.77065 20 6.15494 20 6.61519V19.3844C20 19.8447 19.8458 20.229 19.5375 20.5373C19.2292 20.8457 18.8449 20.9998 18.3846 20.9998H5.61538ZM5.61538 19.9998H18.3846C18.5385 19.9998 18.6795 19.9357 18.8077 19.8075C18.9359 19.6793 19 19.5383 19 19.3844V10.6152H5V19.3844C5 19.5383 5.0641 19.6793 5.1923 19.8075C5.32052 19.9357 5.46154 19.9998 5.61538 19.9998Z"
            fill="#1C1B1F"
          />
        </g>
      </g>
    </svg>
  );
};
