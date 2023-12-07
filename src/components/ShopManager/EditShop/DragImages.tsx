import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Box, Image } from "@chakra-ui/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function DragImages({ images, setImages, deleteImage }) {
  console.log(images);
  // Function to reorder the images
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  // Handler for end of drag event
  const onDragEnd = (result) => {
    console.log(result);
    // Dropped outside the list
    if (!result.destination) {
      return;
    }
    const newImages = reorder(
      images,
      result.source.index,
      result.destination.index
    );
    setImages(newImages);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <Flex {...provided.droppableProps} ref={provided.innerRef} gap="10px">
            {images.map((image, index) => (
              <Draggable
                key={image.url}
                draggableId={String(image.url)}
                index={index}
              >
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    position="relative"
                  >
                    <Image
                      src={image.url}
                      alt={`image-${index}`}
                      boxSize="100px"
                    />
                    <IconButton
                      aria-label="Delete image"
                      icon={<CloseIcon />}
                      size="sm"
                      position="absolute"
                      top="1"
                      right="1"
                      onClick={() => deleteImage(index)}
                    />
                  </Box>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Flex>
        )}
      </Droppable>
    </DragDropContext>
  );
}
