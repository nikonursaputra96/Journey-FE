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
import { getProfile } from "../../lib/call/profile";
import { loginApi } from "../../lib/call/user";
import { SET_LOGIN } from "../../store/slice/auth";
import { useAppDispatch } from "../../store";

const LoginForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginApi(formInput);

      const token = res.data.data;
      const resProfile = await getProfile(token);
      localStorage.setItem("token", token);

      dispatch(SET_LOGIN({ user: resProfile.data.data, token }));

      <Alert status="success">
        <AlertIcon />
        Welcome Traveller!
      </Alert>;
      onClose();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        bg={"none"}
        border={"2px solid white"}
        color={"white"}
        onClick={onOpen}
      >
        Login
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          h={"516px"}
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
                  <Text fontSize="42px" fontWeight="bold" pt={10} ml={10}>
                    Login
                  </Text>
                  <Icons.elipse />
                </Flex>
              </Box>

              <Box px={8}>
                <form onSubmit={handleLogin}>
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
                      Email
                    </Text>
                    <Input
                      bgColor={"rgba(210, 210, 210, 0.25)"}
                      onChange={handleChange}
                      color={"black"}
                      type="text"
                      name="email"
                      h={50}
                      mb={10}
                    />
                    <Text
                      mb={1}
                      fontSize={"22px"}
                      fontWeight={"bold"}
                      color={"black"}
                    >
                      Password
                    </Text>
                    <Input
                      bgColor={"rgba(210, 210, 210, 0.25)"}
                      onChange={handleChange}
                      type="password"
                      color={"black"}
                      name="password"
                      id="password-input"
                      h={50}
                      mb={8}
                    />
                  </FormControl>

                  {/* <Text textAlign={"right"} my={"8px"}>
                    Forgot password?
                  </Text> */}

                  <Button
                    type="submit"
                    bg="rgba(46, 134, 222, 1)"
                    color="white"
                    fontSize="20px"
                    w={"full"}
                    h={"45"}
                    // onClick={handlePost}
                  >
                    Login
                  </Button>
                </form>
              </Box>

              <Flex align={"center"} px={8} justify={"center"}>
                <Text
                  textAlign={"right"}
                  my={"8px"}
                  color={"rgba(177, 177, 177, 1)"}
                >
                  Don't have an account? ?
                </Text>
                <Text
                  color={"rgba(177, 177, 177, 1)"}
                  ml={2}
                  fontWeight={"bold"}
                  cursor={"pointer"}
                  onClick={() => navigate("/register")}
                >
                  Click Here
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginForm;
