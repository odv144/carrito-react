import { Box, Flex, Link, Text } from "@chakra-ui/react"

export const NavLink = ({href,text}) => {
  return (
   
        <Link
         href={href}  
         m='5px 10px' 
         p='5px 15px' 
         bgColor='red.500'
         borderRadius='10px'
         maxH='30px'
        
         
         >
            <Text color='white'  verticalAlign='center' fontWeight='bold'>{text}</Text>

        </Link>
   
  )
}
