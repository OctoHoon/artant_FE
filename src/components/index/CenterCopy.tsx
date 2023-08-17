import React from "react";
import { Box, Text } from "@chakra-ui/react";

const CenteredText: React.FC = () => {
  const lines = [
    "일상의 분위기를 바꾸는 한 점의 작품",
    "아트앤트는 모든 창작자가 경제적 독립을 위한 기회를 가질 자격이 있다고 믿습니다.",
    "여러분의 모든 구매로 누군가가 열정은 지속될 것입니다.",
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="40vh" /* Adjust the height as needed */
    >
      {lines.map((line, index) => (
        <div key={index}>
          <Text
            fontSize={index === 0 ? "40px" : "18px"}
            fontWeight={index === 0 ? "500" : "300"}
            marginTop={index === 2 ? 0 : "23px"}
          >
            {line}
          </Text>
        </div>
      ))}
    </Box>
  );
};

export default CenteredText;
