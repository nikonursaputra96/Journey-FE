import { Box } from "@chakra-ui/react";
import Cover from "../component/Cover";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const RootLayout = () => {
  return (
    <Box w={"98.7vw"}>
      <Box>
        <Cover />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default RootLayout;
