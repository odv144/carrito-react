import { Box, Container } from "@chakra-ui/react"
import { Header } from "./Components/Header"
import { Principal } from "./Components/Main/Principal"
import { Footer } from "./Components/Footer"


export  const CarritoApp=()=>{
    return(
        <Box m='0'maxW="100vw">

            <Header></Header>
            <Principal></Principal>
            <Footer></Footer>
        </Box>
           
    )
}