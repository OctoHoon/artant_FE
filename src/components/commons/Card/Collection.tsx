import { AspectRatio, Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

export default function Collection({ title, total_count, images }) {
  return (
    <Box
      width="24%"
      border="1px solid #D9D9D9"
      borderRadius={"4px"}
      cursor={"pointer"}
    >
      <Flex justifyContent={"space-between"} padding={"8px 16px"}>
        <HStack gap={"4px"}>
          <Text>{title}</Text>
          <SvgArrowRight />
        </HStack>{" "}
        <Text>{total_count}개 항목</Text>
      </Flex>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridTemplateRows="repeat(2, 1fr)"
      >
        {images.map((image, index) => (
          <AspectRatio key={index} ratio={1 / 1}>
            <Image src={image} boxSize="100%" objectFit="cover" />
          </AspectRatio>
        ))}
      </Box>
    </Box>
  );
}

const SvgArrowRight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <mask
        id="a"
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#1C1B1F"
          d="m13.692 17.308-.707-.72 4.088-4.088H5v-1h12.073l-4.088-4.088.707-.72L19 12l-5.308 5.308Z"
        />
      </g>
    </svg>
  );
};
