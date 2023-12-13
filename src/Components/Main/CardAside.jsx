import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const CardAside = () => {
  return (
    <Box m="5px" p="10px" bg="#D3D3E0" color="#7B84B3" borderRadius="10px" boxShadow='2px 2px 1px grey'>
      <Image
        src="https://www.concejosantafe.gov.ar/wp-content/uploads/2023/12/20231207115812_IMG_6865-810x540.jpg"
        w="50px"
        alt="Dan Abramov"
      />
      <Text>Concursos y Licitaciones</Text>
    </Box>
  );
};
