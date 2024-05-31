import { Box, Text } from "@chakra-ui/react";
import Card from "./Card";

const Bookmark = () => {
  return (
    <Box>
      <Box px={12}>
        <Box py={5}>
          <Text fontSize={"30px"} fontWeight={"bold"}>
            Bookmark
          </Text>
        </Box>
      </Box>
      <Box>
        <Card />
      </Box>
    </Box>
  );
};

export default Bookmark;
