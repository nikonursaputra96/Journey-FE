import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CiBookmark } from "react-icons/ci";

const dummyData = [
  {
    id: 1,
    title: "Bersemayam di tanah Dewata",
    date: "29 July 2020",
    author: "Cipto",
    description:
      "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali. Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan.",
    imageSrc: "/src/assets/img/bali.png",
  },
  {
    id: 2,
    title: "Mencari Petualangan di Bukit Tebing",
    date: "15 March 2021",
    author: "Indra",
    description:
      "Perjalanan seru di Bukit Tebing dengan pemandangan yang menakjubkan dan aktivitas hiking yang menyenangkan. Pengalaman yang tidak terlupakan!",
    imageSrc: "/src/assets/img/bali.png",
  },
  {
    id: 3,
    title: "Wisata Kuliner di Pasar Malam",
    date: "10 September 2019",
    author: "Rani",
    description:
      "Menikmati makanan lezat dan suasana yang meriah di pasar malam kota. Kesempatan untuk mencoba berbagai hidangan tradisional dan kuliner lokal.",
    imageSrc: "/src/assets/img/bali.png",
  },
  {
    id: 4,
    title: "Menjelajahi Keindahan Pantai",
    date: "5 Mei 2022",
    author: "Dian",
    description:
      "Hari yang menyenangkan di pantai dengan matahari terbenam yang memukau. Bermain pasir, berenang, dan menikmati keindahan alam sekitar.",
    imageSrc: "/src/assets/img/bali.png",
  },
  {
    id: 5,
    title: "Petualangan Seru di Hutan Tropis",
    date: "20 November 2021",
    author: "Andi",
    description:
      "Menjelajahi keindahan alam hutan tropis dengan berbagai flora dan fauna yang menarik. Berfoto bersama satwa liar dan menikmati keindahan alam.",
    imageSrc: "/src/assets/img/bali.png",
  },
  {
    id: 6,
    title: "Eksplorasi Kota Tua",
    date: "12 April 2020",
    author: "Budi",
    description:
      "Berjalan-jalan di kota tua yang bersejarah dengan bangunan-bangunan klasik dan museum yang menarik. Mengenal lebih dalam tentang sejarah dan budaya lokal.",
    imageSrc: "/src/assets/img/bali.png",
  },
  {
    id: 7,
    title: "Mencari Damai di Pegunungan",
    date: "8 September 2022",
    author: "Eka",
    description:
      "Menghabiskan waktu santai di pegunungan dengan udara segar dan pemandangan alam yang menenangkan. Bersepeda, berjalan-jalan, dan menikmati keindahan alam.",
    imageSrc: "/src/assets/img/bali.png",
  },
  {
    id: 8,
    title: "Petualangan Seru di Sungai",
    date: "18 Juni 2021",
    author: "Fitri",
    description:
      "Menjelajahi sungai dengan perahu kano dan menikmati keindahan alam sepanjang perjalanan. Melihat kehidupan liar di sekitar sungai dan mengikuti petualangan seru.",
    imageSrc: "/src/assets/img/bali.png",
  },
];
const Card = () => {
  return (
    <Flex mt={"40px"} px={6} pb={10} flexWrap={"wrap"} gap={6}>
      {dummyData.map((item) => (
        <Box w={"300px"} h={"400px"} bgColor={"white"} borderRadius={"5px"}>
          <Flex position="relative" justify="flex-end">
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
            <Image w={"auto"} borderRadius={"5px"} src={item.imageSrc} />
          </Flex>
          <Box px={5} mt={4}>
            <Text fontSize={"18px"} fontWeight={"bold"}>
              {item.title}
            </Text>
            <Text fontSize={"12px"} color={"rgba(191, 191, 191, 1)"} py={2}>
              {" "}
              {item.date}, {item.author}
            </Text>
            <Text fontSize={"14px"}>{item.description}</Text>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default Card;
