import { HStack, Icon } from "@chakra-ui/react"
import { Platforms } from "@/hooks/useGame"
import {FaWindows,FaPlaystation,FaLinux,FaXbox,FaAndroid,FaApple} from 'react-icons/fa'
import {MdPhoneIphone}  from 'react-icons/md'
import {SiNintendo}  from 'react-icons/si'
import {BsGlobe}  from 'react-icons/bs'
import { IconType } from "react-icons"
interface Props{
    platform:Platforms[]
}
const PlatformIconsList = ({platform}:Props) => {
    const iconMap:{[key:string]:IconType} = {
        pc:FaWindows,
        playstation:FaPlaystation,
        linux:FaLinux,
        xbox:FaXbox,
        android:FaAndroid,
        mac:FaApple,
        ios:MdPhoneIphone,
        nintendo:SiNintendo,
        web:BsGlobe
    }
  return (
    <HStack marginY={1}>
    {platform.map((platform)=><Icon as={iconMap[platform.slug]} color='gray.500'/>)}
    </HStack>
  )
}

export default PlatformIconsList