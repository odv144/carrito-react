import { Flex } from "@chakra-ui/react";
import { NavLink } from "./NavLink";

export const NavBar2 = () => {
  return (
   <Flex bgColor='grey' minW='50vw'justifyContent='right'>

      <NavLink href={'/'} text={"Home Page"}></NavLink>
      <NavLink href={'/'} text={"Contacto"}></NavLink>
      <NavLink href={'/'} text={"Administracion"}></NavLink>
   </Flex>
  );
};
