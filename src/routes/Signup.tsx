import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  useToast,
  Icon,
  InputGroup,
  InputRightElement,
  Image,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AiOutlineCamera,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { createUser, getUploadURL, uploadImage } from "../api";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

export default function Signup() {
  const IMAGE_DELIVERY_URL = "https://imagedelivery.net/bsWtnSHPIyo_nZ9jFOblFw";
  const toast = useToast();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Female");
  const [birthday, setBirthday] = useState("");
  const [description, setDescription] = useState("");

  // State for address fields
  const [user_name, setUserName] = useState("김철수");
  const [address_name, setAddressName] = useState("기본 배송지");
  const [cell_phone_number, setCellPhoneNumber] = useState("010-1234-5678");
  const [postal_code, setPostalCode] = useState("12345");
  const [street_address_1, setStreetAddress1] =
    useState("서울특별시 관악구 관악로1");
  const [street_address_2, setStreetAddress2] = useState("컴퓨터연구소");

  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("avatar")?.click();
  };

  const extractErrorMessage = (error: unknown): string => {
    // Check if error is an instance of Error
    if (error instanceof Error) {
      return error.message || "An unknown error occurred.";
    }
    // Handle other types of errors or return a generic message
    return "An unknown error occurred.";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = "loading-toast"; // Unique ID for the loading toast

    try {
      toast({
        id: toastId,
        title: "계정 생성중...",
        description: "잠시만 기다려주세요",
        status: "info",
        duration: null, // null duration keeps the toast open indefinitely
        isClosable: false,
      });
      await onCreateUser();
      toast.close(toastId);

      toast({
        title: "계정 생성 완료!",
        description: "홈으로 돌아갑니다.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      navigate(`/`);
    } catch (error) {
      console.error("Error during submission:", error);
      toast.close(toastId);

      const errorMessage = extractErrorMessage(error);
      toast({
        title: "계정 생성 실패",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const uploadImageMutation = useMutation(uploadImage, {});
  const uploadURLMutation = useMutation(getUploadURL, {});

  const onCreateUser = async () => {
    let thumbnail = "";
    try {
      if (avatar) {
        const uploadURLResponse = await uploadURLMutation.mutateAsync();
        console.log(`업로드 url ${uploadURLResponse}`);
        const response = await uploadImageMutation.mutateAsync({
          uploadURL: uploadURLResponse.uploadURL,
          file: avatar,
        });
        thumbnail = `${IMAGE_DELIVERY_URL}/${response.result.id}/public`;
      }

      const result = await createUser({
        username: username,
        password: password,
        email: email,
        name: name,
        gender: gender,
        birthday: birthday,
        description: description,
        avatar: thumbnail,
      });
      return result;
    } catch (error) {
      console.error("Account creation failed", error);
      throw error; // Re-throw the error as is
    }
  };

  return (
    <Box p={4} width={"1280px"}>
      <VStack spacing={4} align="flex-start">
        <Heading as="h2" size="xl">
          Sign Up
        </Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4} align="flex-start">
            {/* User fields */}
            <FormControl isRequired>
              <FormLabel htmlFor="username">아이디</FormLabel>
              <Input
                width={"200px"}
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">비밀번호</FormLabel>

              <InputGroup width={"200px"}>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
                <InputRightElement
                  children={
                    <Icon
                      as={showPassword ? AiOutlineEyeInvisible : AiOutlineEye}
                    />
                  }
                  onClick={handlePasswordVisibility}
                  cursor="pointer"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="name">닉네임</FormLabel>
              <Input
                width={"200px"}
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                width={"200px"}
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </FormControl>

            {/* ... other user fields ... */}
            <FormControl>
              <FormLabel htmlFor="avatar">Avatar</FormLabel>
              <Button onClick={triggerFileInput} p={1} boxSize={"100px"}>
                {avatarPreview ? (
                  <Image
                    src={avatarPreview}
                    alt="Avatar preview"
                    boxSize="100px"
                  />
                ) : (
                  <AiOutlineCamera size="100px" />
                )}
              </Button>
              <input
                id="avatar"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                hidden
              />
            </FormControl>
            {/* Gender field */}
            <FormControl isRequired>
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <Select
                width={"200px"}
                id="gender"
                placeholder="Select gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">남성</option>
                <option value="Female">여성</option>
                <option value="RatherNotSay">알리고 싶지 않음</option>
                <option value="Custom">기타</option>
              </Select>
            </FormControl>
            {/* Birthday field */}
            <FormControl isRequired>
              <FormLabel htmlFor="birthday">Birthday</FormLabel>
              <Input
                width={"200px"}
                id="birthday"
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                placeholder="Select your birthday"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description">Short Description</FormLabel>
              <Textarea
                width={"400px"}
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="당신에 대해서 조금만 설명해주세요"
              />
            </FormControl>
            {/* Address fields */}
            <FormControl>
              <FormLabel htmlFor="user_name">배송지 이름</FormLabel>
              <Input
                width={"200px"}
                id="address_name"
                type="text"
                value={address_name}
                onChange={(e) => setAddressName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="user_name">배송 받으시는 분 이름</FormLabel>
              <Input
                width={"200px"}
                id="user_name"
                type="text"
                value={user_name}
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="cell_phone_number">전화번호</FormLabel>
              <Input
                width={"200px"}
                id="cell_phone_number"
                type="text"
                value={cell_phone_number}
                onChange={(e) => setCellPhoneNumber(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="postal_code">우편번호</FormLabel>
              <Input
                width={"200px"}
                id="postal_code"
                type="number"
                value={postal_code}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="street_address_1">주소1</FormLabel>
              <Input
                width={"400px"}
                id="street_address_1"
                type="text"
                value={street_address_1}
                onChange={(e) => setStreetAddress1(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="street_address_2">상세 주소</FormLabel>
              <Input
                width={"400px"}
                id="street_address_2"
                type="text"
                value={street_address_2}
                onChange={(e) => setStreetAddress2(e.target.value)}
              />
            </FormControl>
            {/* ... other address fields ... */}

            <Button type="submit" colorScheme="blue" size="lg">
              Sign up
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
}
