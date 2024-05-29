import { Box, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "@/assets/download.png";
const NavBar = () => {
  return (
    <>
      <HStack m={2}>
        <Box borderRadius={10} overflow="hidden" boxShadow={12}>
          <Image src={logo} alt="This is logo" width={60} height={60} />
        </Box>
        <Text>NavBar</Text>
      </HStack>
    </>
  );
};

export default NavBar;
