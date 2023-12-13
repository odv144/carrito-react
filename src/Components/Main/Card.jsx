import {  Flex, Image, Stack, Text } from "@chakra-ui/react";

export const Card = () => {
  return (
    <Stack  minW='75vw' bgColor="blue.400">
      <Flex m='10px 20px' border='2px solid white'>
      <Image p='10px' src='https://www.concejosantafe.gov.ar/wp-content/uploads/2023/12/20231207115812_IMG_6865-810x540.jpg' w='150px' alt='Dan Abramov' />
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum saepe
        perspiciatis iure numquam quae vero?
      </Text>
      
      </Flex>
    </Stack>
  );
};
