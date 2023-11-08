import { Flex, Text, Button } from "@chakra-ui/react";
import RegisterHeader from "./RegisterHeader";
import { useEffect, useState } from "react";

export default function AddVideo({ setSelectedVideoFile, videoFileInputRef }) {
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string>("");

  const onVideoFileSelect = () => {
    if (videoFileInputRef.current) {
      console.log("여기");
      videoFileInputRef.current.click();
    }
  };

  const handleFileInputChange = (event) => {
    if (videoPreviewUrl) {
      URL.revokeObjectURL(videoPreviewUrl);
      setVideoPreviewUrl("");
    }

    const file = event.target.files[0];
    if (file) {
      // Maximum file size in bytes (100 MB)
      const maxFileSize = 100 * 1024 * 1024;
      if (file.size > maxFileSize) {
        // Inform the user that the file is too large
        alert("The selected file exceeds the maximum size of 100MB.");
        return;
      }
      setSelectedVideoFile(file);

      const url = URL.createObjectURL(file);
      setVideoPreviewUrl(url);
    }
  };

  // When you are done with the video (e.g., after upload or component unmounts)
  // you should revoke the object URL
  useEffect(() => {
    return () => {
      if (videoPreviewUrl) {
        URL.revokeObjectURL(videoPreviewUrl);
      }
    };
  }, [videoPreviewUrl]);

  return (
    <Flex
      display={"flex"}
      width={"1280px"}
      padding={"24px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"32px"}
      border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
    >
      <RegisterHeader
        title={"동영상"}
        description={
          " 5~15초 길이의 동영상으로 제품에 생기를 불어넣으세요. 판매를 늘리는 데 도움이 될 수 있습니다. 동영상에는 소리가 포함되어 있지 않으므로 제품이 말하도록 하세요!"
        }
      />

      <Flex alignSelf={"stretch"} alignItems={"flex-start"} gap={"40px"}>
        <Flex
          width={"234px"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"12px"}
        >
          <Flex
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"6px"}
            alignSelf={"stretch"}
          >
            <Text textStyle={"B13R"} lineHeight="130%">
              TIP
            </Text>
            <Flex
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"8px"}
              alignSelf={"stretch"}
              lineHeight="140%"
              color="var(--maincolorstextgray-595959, #666)"
            >
              <Text textStyle={"B13R"}>
                • 모델이 입는 착용 가능한 아이템을 촬영하거나 기능성 아이템이
                사용되는 모습을 보여줍니다.
              </Text>
              <Text textStyle={"B13R"}>
                • 고해상도 비디오를 녹화하려면 설정을 조정하세요. 1080p 이상을
                목표로 하세요.
              </Text>
              <Text textStyle={"B13R"}>
                • 동영상을 업로드한 후 올바른 크기를 얻으려면 동영상을 자르세요.
              </Text>
            </Flex>
          </Flex>
          <Text
            textStyle={"B13R"}
            textDecorationLine="underline"
            cursor="pointer"
          >
            판매되는 동영상을 만드는 방법 알아보기
          </Text>
        </Flex>
        <Flex
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"20px"}
        >
          <Flex display={"flex"} alignItems={"flex-start"} gap={"20px"}>
            <input
              type="file"
              ref={videoFileInputRef}
              style={{ display: "none" }} // Hide the input element
              onChange={handleFileInputChange} // Set the event handler here
              accept="video/*" // Optionally, ensure only video files can be selected
            />
            <Button
              display={"flex"}
              width={"248px"}
              height={"248px"}
              padding={"24px"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"26px"}
              border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
              variant="unstyled" // 클릭 효과와 색상 없애기
              onClick={onVideoFileSelect}
            >
              {videoPreviewUrl ? (
                <Flex position={"absolute"}>
                  <video
                    muted
                    loop
                    width="100%"
                    src={videoPreviewUrl}
                    controls
                  />
                </Flex>
              ) : (
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"48px"}
                  mb={"-60px"}
                >
                  <Flex
                    display={"flex"}
                    height={"81px"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"8px"}
                  >
                    <SvgPlayCircle />
                    <Text textStyle={"B13R"}>동영상 추가</Text>
                  </Flex>
                  <Text
                    color="var(--maincolorstextgray-595959, #666)"
                    textStyle={"B14R"}
                  >
                    최대 파일 용량: 100MB
                  </Text>
                </Flex>
              )}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

const SvgPlayCircle = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1005_4485"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1005_4485)">
        <circle cx="24" cy="24" r="18" fill="white" />
        <path
          d="M20 31.1539L31.1539 24L20 16.8461V31.1539ZM24.0067 42C21.5176 42 19.1774 41.5277 16.9862 40.583C14.795 39.6384 12.8889 38.3564 11.2679 36.737C9.64705 35.1176 8.36383 33.2133 7.4183 31.0241C6.47277 28.8349 6 26.4958 6 24.0067C6 21.5176 6.47232 19.1774 7.41695 16.9862C8.36162 14.795 9.64365 12.8889 11.2631 11.268C12.8825 9.64705 14.7867 8.36383 16.9759 7.4183C19.1651 6.47277 21.5042 6 23.9933 6C26.4824 6 28.8226 6.47232 31.0138 7.41695C33.205 8.36162 35.1111 9.64365 36.732 11.263C38.353 12.8824 39.6362 14.7867 40.5817 16.9759C41.5272 19.1651 42 21.5042 42 23.9933C42 26.4824 41.5277 28.8226 40.583 31.0138C39.6384 33.205 38.3564 35.1111 36.737 36.732C35.1176 38.353 33.2133 39.6362 31.0241 40.5817C28.8349 41.5272 26.4958 42 24.0067 42ZM24 40C28.4667 40 32.25 38.45 35.35 35.35C38.45 32.25 40 28.4667 40 24C40 19.5333 38.45 15.75 35.35 12.65C32.25 9.55 28.4667 8 24 8C19.5333 8 15.75 9.55 12.65 12.65C9.55 15.75 8 19.5333 8 24C8 28.4667 9.55 32.25 12.65 35.35C15.75 38.45 19.5333 40 24 40Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
};
