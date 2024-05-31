import { Box, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import { useState } from "react";
import Editor from "react-simple-wysiwyg";

const PostCard = () => {
  const [html, setHtml] = useState("my <b>HTML</b>");

  function onChange(e: any) {
    setHtml(e.target.value);
  }
  return (
    <Box px={12}>
      <Text fontSize={"32px"} fontWeight={"bold"} py={12}>
        New Journey
      </Text>
      <Flex flexDir={"column"} px={12} gap={6}>
        <Text fontSize={"24px"} fontWeight={"bold"}>
          Title
        </Text>

        <Input type="text" w={"full"} border={"none"} bg={"white"} />
        <Box bgColor={"white"}>
          <Editor value={html} onChange={onChange} />
        </Box>
        <Box height={"200px"}></Box>
      </Flex>
    </Box>
  );
};

export default PostCard;
