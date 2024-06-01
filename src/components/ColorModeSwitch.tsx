import { ColorMode, HStack, Switch,Text,useColorMode } from '@chakra-ui/react'
interface ColorModeContextType{
  toggleColorMode:()=> void,
  colorMode: ColorMode,
}
const ColorModeSwitch = () => {
    const { toggleColorMode,colorMode } = useColorMode();
  return (
    <HStack>
    <Switch colorScheme='green' isChecked={colorMode==='dark'} onChange={toggleColorMode} />
    <Text>{colorMode === 'light' ? 'Dark' : 'Light'} Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch