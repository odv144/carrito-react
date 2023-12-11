import { Box, Container, Icon } from "@chakra-ui/react"

import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
export const NavBar = () => {
    return (
        <Container>
            <Box>
                <p>Este es el header  con el navlink</p>
                <PhoneIcon />
                <AddIcon boxSize={6} />
                <WarningIcon w={8} h={8} color="red.500" />

                <Icon x="0px" y="0px" w={6} h={6} color="red.500" viewBox="0 0 26 26">
                <path d="M21.125,0h-16.25c-2.69141,0 -4.875,2.18359 -4.875,4.875v16.25c0,2.69141 2.18359,4.875 4.875,4.875h16.25c2.69141,0 4.875,-2.18359 4.875,-4.875v-16.25c0,-2.69141 -2.18359,-4.875 -4.875,-4.875zM20.46484,14.00391h-2.43359v9.00391h-4.0625v-9.00391h-1.57812v-3.03516h1.57813v-1.93359c0,-2.53125 1.05078,-4.03516 4.03906,-4.03516h3.02344v3.02344h-1.75781c-1.16016,0 -1.23828,0.42969 -1.23828,1.24219l-0.00391,1.70313h2.76563z"></path>   
                </Icon>
               
            </Box>
        </Container>
    )
}

