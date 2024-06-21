import usePlatform, { Platform } from "@/hooks/usePlatform"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
interface Props{
    onSelectedPlatform:(platform:Platform) => void,
    selectedPlatform:Platform|null,
}
const PlatformSelector = ({onSelectedPlatform,selectedPlatform}:Props) => {
    const {data} = usePlatform();
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList>
            {data.map(platform=><MenuItem onClick={()=>onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector