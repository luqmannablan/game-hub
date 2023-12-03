import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'


interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {

    // adding index signature so we don't have to specify the name of the keys
    const iconMap: { [key: string]: IconType } = {
        //slug is a textual id more reliable not supposed to change usually always lowercase
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (<Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
            ))}
        </HStack>
    )
}

export default PlatformIconList