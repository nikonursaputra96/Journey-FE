import { Box, Button, Input, InputGroup, Text } from "@chakra-ui/react";

const Search = () => {
  return (
    <Box mx={"auto"} px={12}>
      <Text fontSize={"40px"} fontWeight={"bold"} pt={10}>
        Journey
      </Text>
      <InputGroup px={10} pt={6}>
        <Input
          type="text"
          w={"full"}
          border={"none"}
          bg={"white"}
          placeholder="Find Journey"
        />
        <Button ml={1} bg={"#2E86DE"} color={"white"}>
          Search
        </Button>
      </InputGroup>
    </Box>
  );
};

export default Search;
