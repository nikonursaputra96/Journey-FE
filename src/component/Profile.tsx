import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Card from "./Card";

const Profile = () => {
  return (
    <Box>
      <Box px={12}>
        <Box pt={8}>
          <Text fontSize={"30px"} fontWeight={"bold"}>
            Profile
          </Text>
        </Box>
        <Flex justify={"center"} py={12}>
          <Avatar size={"xl"} />
        </Flex>
      </Box>
      <Box>
        <Card />
      </Box>
    </Box>
  );
};

export default Profile;
