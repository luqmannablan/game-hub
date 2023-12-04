import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import React from 'react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
    onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: Props) => {


    //Hstack allows ust to layout items horizontally
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize='60px'></Image>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar