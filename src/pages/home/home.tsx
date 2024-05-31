import { Box } from "@chakra-ui/react";
import Search from "../../component/Search";
import Card from "../../component/Card";

const Home = () => {
  return (
    <Box>
      <Box>
        <Box>
          <Search />
          <Card />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
