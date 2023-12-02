import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface Props {
    children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {

    // this is where we design the place for our cards
    return (
        <Box width='100%' borderRadius='10px' overflow='hidden'>
            {children}
        </Box>
    )
}

export default GameCardContainer