import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CiBookmark } from "react-icons/ci";

const dummyData = [
  {
    id: 1,
    title: "Bersemayam di tanah Dewata",
    date: "29 July 2020",
    author: "Cipto",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima modi quaerat praesentium magnam voluptatem est, impedit tenetur soluta cum reiciendis delectus sunt alias cumque omnis adipisci nemo accusamus maiores dolorem ipsum mollitia. Esse, iusto illum recusandae distinctio cum atque voluptatem aperiam cupiditate alias possimus amet, quas sit porro doloremque modi sapiente neque suscipit saepe vel expedita error accusantium molestias, odit facere. Corrupti corporis aperiam, modi in enim consectetur sapiente totam assumenda eos? Distinctio quas molestiae officia repudiandae quisquam veritatis, architecto nobis, quis voluptatum, voluptates magnam tempora similique perferendis. Nihil veritatis laborum odio illo iste, obcaecati itaque! A quos eos distinctio.",
    imageSrc: "/src/assets/img/balifull.jpg",
  },
];
const Detail = () => {
  return (
    <Flex>
      {dummyData.map((item) => (
        <Box>
          <Flex align={"center"} justifyContent={"space-between"} px={12}>
            <Text fontSize={"38px"} fontWeight={"bold"}>
              {item.title}
            </Text>
            <Text fontWeight={"bold"} fontSize={"23px"}>
              {" "}
              {item.author}
            </Text>
          </Flex>
          <Box px={12}>
            <Text fontSize={"18px"} color={"rgba(59, 151, 211, 1)"} py={2}>
              {" "}
              {item.date}
            </Text>
          </Box>
          <Flex position="relative" justify={"center"} mt={12}>
            <Flex
              position={"absolute"}
              bgColor={"white"}
              borderRadius={"full"}
              w={"35px"}
              h={"35px"}
              align={"center"}
              justify={"center"}
              mr={3}
              mt={2}
            >
              <CiBookmark size={26} color="blue" />
            </Flex>
            <Image w={"1260px"} borderRadius={"5px"} src={item.imageSrc} />
          </Flex>
          <Box px={12} mt={4}>
            <Text fontSize={"14px"}>{item.description}</Text>
          </Box>

          <Box px={12}>
            <Text fontSize={"38px"} fontWeight={"bold"}>
              {item.title}
            </Text>
          </Box>
          <Box px={12}>
            <Text fontSize={"14px"}>{item.description}</Text>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default Detail;
