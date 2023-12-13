import { Box, Container, Flex, Image } from "@chakra-ui/react"
import { NavBar } from "./NavBar"
import { NavBar2 } from "./NavBar2"


export const Header = () => {
    return (
        <Box maxW="100vw">
           <NavBar></NavBar>
           <Flex>
           <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
           </Flex>
           <NavBar2></NavBar2>
        </Box>
    )
}
