import { Flex, IconButton, Box, Image, Text, Input } from "@chakra-ui/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { SvgX } from "../RegisterProdcuct/ProductDetails";
import { useState } from "react";
import { CheckIcon, EditIcon } from "@chakra-ui/icons";

export default function DragSections({ sections, setSections, deleteSection }) {
  console.log(sections);
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
    const newSections = reorder(
      sections,
      result.source.index,
      result.destination.index
    );
    setSections(newSections);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="vertical">
        {(provided) => (
          <Box {...provided.droppableProps} ref={provided.innerRef} gap="10px">
            {sections.map((section, index) => (
              <Draggable
                key={section.title}
                draggableId={String(section.title)}
                index={index}
              >
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    position="relative"
                    gap={"10px"}
                  >
                    <TagBox
                      id={section.id}
                      tag={section.title}
                      setSections={setSections}
                      index={index}
                      removeTag={deleteSection}
                    />
                    <Box height={"10px"} />
                  </Box>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}

const TagBox = ({ id, tag, index, removeTag, setSections }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTag, setEditedTag] = useState(tag);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    setSections((prevSections) => {
      const newSections = [...prevSections];
      newSections[index] = { id: id, title: editedTag, product_count: 0 };
      return newSections;
    });
  };

  const handleChange = (e) => {
    setEditedTag(e.target.value);
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      gap="10px"
      height="40px"
      padding="8px"
      borderRadius="5px"
      border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
    >
      <Flex alignItems="center" gap="10px">
        <Box onClick={() => removeTag(index)} cursor="pointer">
          <SvgX />
        </Box>
        <Flex
          borderRight="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
          height="150%"
          marginRight="8px"
        />
        {isEditing ? (
          <Input value={editedTag} onChange={handleChange} autoFocus />
        ) : (
          <Text textStyle={"bodyMini"} padding={"3px 12px"}>
            {tag}
          </Text>
        )}
      </Flex>
      <IconButton
        aria-label="Edit tag"
        icon={isEditing ? <CheckIcon /> : <EditIcon />}
        size="sm"
        onClick={isEditing ? handleSave : toggleEdit}
      />
    </Flex>
  );
};
