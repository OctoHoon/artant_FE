import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  Text,
} from "@chakra-ui/react";
import IdRecoveryForm from "./IdRecoveryForm";
import PwRecoveryForm from "./PwRecoveryForm";

export default function RecoveryTabs() {
  return (
    <Tabs isFitted variant="unstyled">
      <TabList mb="1em">
        <Tab
          // 기본 스타일
          color="#767676"
          borderBottom="1px solid #DBDBDB"
          _selected={{
            color: "#222",
            borderBottom: "2px solid #222", // 선택된 탭에 대한 스타일
          }}
          _focus={{ boxShadow: "none" }}
        >
          <Text textStyle={"B16M"}>아이디(이메일) 찾기</Text>
        </Tab>
        <Tab
          // 기본 스타일
          color="#767676"
          borderBottom="1px solid #DBDBDB"
          _selected={{
            color: "#222",
            borderBottom: "2px solid #222", // 선택된 탭에 대한 스타일
          }}
          _focus={{ boxShadow: "none" }}
        >
          <Text textStyle={"B16M"}>비밀번호 찾기</Text>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel p={0}>
          <IdRecoveryForm />
        </TabPanel>
        <TabPanel p={0}>
          <PwRecoveryForm />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
