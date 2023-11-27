import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import React from 'react'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {


    //Hstack allows ust to layout items horizontally
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize='60px'></Image>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar