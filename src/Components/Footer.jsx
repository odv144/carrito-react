import { Box, Container, Divider, Flex, Image, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      h="250px"
      maxW="100vw"
      bgColor="#354590"
      display="flex"
      justifyContent="space-around"
    >
      <Container
        display="flex"
        flexDir="column"
        justifyContent="end"
        w="30vw"
        m="5px 5px"
      >
        <Text as="h3" fontWeight="bold" fontSize="2em" color="white">
          CONCEJO
        </Text>
        <Text as="h3" fontWeight="bold" fontSize="2em" color="white">
          SANTA FE
        </Text>
      </Container>
      <Container
        display="flex"
        justifyContent="space-between"
        m="5px"
        boxSizing="content-box"
      >
        <Box
          color="white"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxW="none"
          p="20px"
          mr="130px"
        >
          <Text as="h2" fontSize='1.8em' fontWeight="bold">
            Contacto
          </Text>
          <Divider />
          <Text as='h4' fontSize='1.3em'>Tel:(54) 342-4571800/4571765</Text>
          <Text as='h4' fontSize='1.2em'>Salta 2943 - Santa Fe</Text>
        </Box>
        <Box>
          <Image
            src="gibbresh.png"
            fallbackSrc="https://via.placeholder.com/250"
          />
        </Box>
      </Container>
    </Box>
  );
};
