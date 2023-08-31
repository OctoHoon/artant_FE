import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Image,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  createPhoto,
  createVideo,
  getUploadURL,
  getVideoUploadURL,
  uploadImage,
  uploadVideo,
} from "../api";
import { useState } from "react";

interface IForm {
  file: FileList;
}

interface IUploadURLResponse {
  id: string;
  uploadURL: string;
}

export default function UploadPhotos() {
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  const [productPK, setProductPK] = useState("3");
  const { register, handleSubmit, watch, reset } = useForm<IForm>();
  const { shopPk } = useParams();
  const [cloudflareStreamUrl, setCloudflareStreamUrl] = useState<string>("");
  const createPhotoMutation = useMutation(createPhoto, {});
  const uploadImageMutation = useMutation(uploadImage, {
    onSuccess: ({ result }: any) => {
      console.log(result);
      if (productPK) {
        createPhotoMutation.mutate({
          image: `https://imagedelivery.net/bsWtnSHPIyo_nZ9jFOblFw/${result.id}/public`,
          productPK,
        });
      }
    },
  });
  const uploadURLMutation = useMutation(getUploadURL, {});

  const onSubmit = async () => {
    try {
      const uploadURLResponses = await Promise.all(
        selectedFiles.map(() => uploadURLMutation.mutateAsync())
      );

      const uploadPromises = selectedFiles.map(async (file, index) => {
        const response = uploadURLResponses[index];
        await uploadImageMutation.mutateAsync({
          uploadURL: response.uploadURL,
          file: file,
        });
      });

      await Promise.all(uploadPromises);
      reset();
    } catch (error) {
      console.error("Error uploading photos:", error);
    }
  };

  const createVideoMutation = useMutation(createVideo, {});

  const uploadVideoURLMutation = useMutation(getVideoUploadURL, {
    onSuccess: (data: IUploadURLResponse) => {
      const cloudflareStreamUrl = `https://customer-8j0waj0pjwj8wz5e.cloudflarestream.com/${
        data.uploadURL.split("/")[3]
      }/watch`;
      setCloudflareStreamUrl(cloudflareStreamUrl);
      uploadVideoMutation.mutate({
        uploadURL: data.uploadURL,
        file: watch("file"),
      });
    },
  });

  const uploadVideoMutation = useMutation(uploadVideo, {
    onSuccess: (response: any) => {
      if (productPK) {
        console.log(cloudflareStreamUrl);
        createVideoMutation.mutate({
          video: cloudflareStreamUrl, // 사용 가능
          productPK,
        });
      }
    },
  });

  const onSubmitVideo = () => {
    uploadVideoURLMutation.mutate();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFilesList = e.target.files;

    console.log("selected filelist", selectedFilesList);
    if (selectedFilesList) {
      const newFiles = Array.from(selectedFilesList);
      setSelectedFiles([...selectedFiles, ...newFiles]);
    }
    console.log(selectedFiles);
  };

  return (
    <Box pb={40} mt={10} px={{ base: 10, lg: 40 }}>
      <Container>
        <Heading textAlign={"center"}>Upload a Photo</Heading>
        <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={5} mt={10}>
          <FormControl>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              multiple
            />
          </FormControl>
          {/* 선택된 파일들의 썸네일 표시 */}
          <Box w="100%">
            {selectedFiles.map((file, index) => (
              <Image
                key={index}
                src={URL.createObjectURL(file)}
                alt={`Thumbnail ${index}`}
                w="100px"
                h="100px"
                objectFit="contain"
                my={2}
              />
            ))}
          </Box>
          <Button
            isLoading={
              createPhotoMutation.isLoading ||
              uploadImageMutation.isLoading ||
              uploadURLMutation.isLoading
            }
            type="submit"
            w="full"
            colorScheme={"red"}
          >
            Upload photos
          </Button>
          <FormControl>
            <Input {...register("file")} type="file" accept="video/*" />
          </FormControl>
          {/* 선택된 파일들의 썸네일 표시 */}
          {/* <Box w="100%">
             
                <Image
              
                  src={URL.createObjectURL(watch("file"))}
                  alt={`Thumbnail ${index}`}
                  w="100px"
                  h="100px"
                  objectFit="contain"
                  my={2}
                />
              
            </Box> */}
          <Button
            isLoading={
              createVideoMutation.isLoading ||
              uploadVideoMutation.isLoading ||
              uploadVideoURLMutation.isLoading
            }
            onClick={onSubmitVideo}
            w="full"
            colorScheme={"red"}
          >
            Upload Videos
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
