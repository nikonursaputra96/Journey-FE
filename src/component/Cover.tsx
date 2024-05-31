import { Box, Flex, Image, Text } from "@chakra-ui/react";
import LoginForm from "./Modal/Login";
import RegisterForm from "./Modal/Register";

const Cover = () => {
  return (
    <Box>
      <Box h={"460px"} backgroundImage="url('/src/assets/img/phuket.png')">
        <Flex justifyContent={"space-between"} px={12} py={5}>
          <Image src="/src/assets/img/iconwhite.png" color={"white"} />
          <Flex gap={3}>
            <Box>
              <LoginForm />
            </Box>
            <Box>
              <RegisterForm />
            </Box>
          </Flex>
        </Flex>

        <Box w={"60%"} px={12}>
          <Text fontSize={"70px"} color={"white"} fontWeight={"bold"}>
            The Journey
          </Text>
          <Text fontSize={"70px"} color={"white"} fontWeight={"bold"}>
            you ever dreamed of.
          </Text>
          <Text fontSize={"20px"} color={"white"}>
            {" "}
            We made a tool so you can easily keep & share your travel memories.
            But there is a lot more
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Cover;
