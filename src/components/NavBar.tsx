import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import React from 'react'

const NavBar = () => {


    //Hstack allows ust to layout items horizontally
    return (
        <HStack>
            <Image src={logo} boxSize='60px'></Image>
            <Text>NavBar</Text>
        </HStack>
    )
}

export default NavBar