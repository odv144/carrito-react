import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Aside } from "./Aside";
import { Card } from "./Card";
import { CardAside } from "./CardAside";

export const Principal = () => {
  return (
    <Box p='10px'>
      <Flex maxW="100vw" flexDir="row" justifyContent="center" minH="80vh">
        <Box p='5px'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Box>
        <Box p='5px'maxW="100vw" minH='300px'>
        <Aside/>
        <CardAside/>
        <CardAside/>
        <CardAside/>
        </Box>
      </Flex>
    </Box>
  );
};
