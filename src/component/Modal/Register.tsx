import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Icons } from "../../assets/icons/icons";
import { useState } from "react";
import { registerApi } from "../../lib/call/user";
import LoginForm from "./Login";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formRegister, setFormRegister] = useState<{
    fullname: string;
    email: string;
    password: string;
    phone: string;
  }>({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChangeRegister = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await registerApi(formRegister);
      console.log(res);

      onClose();
      <Alert status="success">
        <AlertIcon />
        Registered!. Fire on!
      </Alert>;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button bg={"rgba(46, 134, 222, 1)"} color={"white"} onClick={onOpen}>
        Register
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          h={"640px"}
          w={"416px"}
          mx={0}
          my={"auto"}
          borderRadius={"xl"}
        >
          <ModalCloseButton />
          <ModalBody p={0}>
            <Flex flexDir={"column"} justify={"center"}>
              <Box textAlign={"center"}>
                <Flex justifyContent={"space-between"}>
                  <Icons.elipses />
                  <Text fontSize="42px" fontWeight="bold" pt={8} ml={10}>
                    Register
                  </Text>
                  <Icons.elipse />
                </Flex>
              </Box>

              <Box px={8} mt={"-20px"}>
                <form onSubmit={handleRegister}>
                  <FormControl
                    isRequired
                    color={"white"}
                    border="rgba(144, 144, 144, .5)"
                  >
                    <Text
                      fontSize={"22px"}
                      fontWeight={"bold"}
                      color={"black"}
                      mb={1}
                    >
                      Fullname
                    </Text>
                    <Input
                      bgColor={"rgba(210, 210, 210, 0.25)"}
                      onChange={handleChangeRegister}
                      color={"black"}
                      type="text"
                      name="fullname"
                      h={50}
                      mb={5}
                    />
                    <Text
                      fontSize={"22px"}
                      fontWeight={"bold"}
                      color={"black"}
                      mb={1}
                    >
                      Email
                    </Text>
                    <Input
                      mb={5}
                      bgColor={"rgba(210, 210, 210, 0.25)"}
                      onChange={handleChangeRegister}
                      type="email"
                      color={"black"}
                      name="email"
                      id="email"
                      h={50}
                    />
                    <Text
                      fontSize={"22px"}
                      fontWeight={"bold"}
                      color={"black"}
                      mb={1}
                    >
                      Password
                    </Text>
                    <Input
                      mb={5}
                      bgColor={"rgba(210, 210, 210, 0.25)"}
                      onChange={handleChangeRegister}
                      type="password"
                      color={"black"}
                      name="password"
                      id="password-input"
                      h={50}
                    />
                    <Text
                      fontSize={"22px"}
                      fontWeight={"bold"}
                      color={"black"}
                      mb={1}
                    >
                      Phone
                    </Text>
                    <Input
                      mb={4}
                      bgColor={"rgba(210, 210, 210, 0.25)"}
                      onChange={handleChangeRegister}
                      type="text"
                      color={"black"}
                      name="phone"
                      id="phone"
                      h={50}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    bg="rgba(46, 134, 222, 1)"
                    color="white"
                    fontSize="20px"
                    w={"full"}
                    h={"45"}
                    // onClick={handlePost}
                  >
                    Register
                  </Button>
                </form>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterForm;
