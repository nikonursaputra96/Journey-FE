import { Box } from "@chakra-ui/react";
import Cover from "../component/Cover";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const RootLayoutLogin = () => {
  return (
    <Box w={"98.7vw"}>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default RootLayoutLogin;
