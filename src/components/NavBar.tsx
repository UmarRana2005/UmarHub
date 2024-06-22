import { Box, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "@/assets/download.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props{
  onSearch:(search:string)=>void
}
const NavBar = ({onSearch}:Props) => {
  return (
    <>
      <HStack m={2}>
        <Box borderRadius={10} overflow="hidden" boxShadow={12}>
          <Image src={logo} alt="This is logo" width={60} height={60} />
        </Box>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
      </HStack>
    </>
  );
};

export default NavBar;
