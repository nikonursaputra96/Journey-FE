import { Avatar, Box, Flex, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box h={"85px"}>
      <Flex
        px={12}
        h={"50px"}
        bgColor={"#f1f1f1"}
        justifyContent={"space-between"}
        boxShadow="-1px 21px 23px -4px rgba(0,0,0,0.21)"
      >
        <Image src="/src/assets/img/icon.png" />
        <Avatar size={"md"} />
      </Flex>
    </Box>
  );
};

export default Navbar;
