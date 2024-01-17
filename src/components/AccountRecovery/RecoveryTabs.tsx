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
        <TabPanel padding={0}>
          <IdRecoveryForm />
        </TabPanel>
        <TabPanel>
          {/* 비밀번호 찾기 컴포넌트를 여기에 추가하세요 */}
          <VStack spacing={4} align="flex-start">
            <Text textStyle={"B16M"}>비밀번호 찾기 기능은 준비 중입니다.</Text>
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
