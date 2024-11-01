import { Box, Flex, Heading, Link, Spacer, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Box
      as="header"
      bg="brand.700"
      py={4}
      px={8}
      color="white">
      <Flex alignItems="center">
        <Heading
          as="h1"
          size="lg">
          <RouterLink to="/">ReactFlix</RouterLink>
        </Heading>
        <Spacer />
        <HStack spacing={6}>
          <Link
            as={RouterLink}
            to="/about"
            _hover={{ textDecoration: "underline" }}>
            About
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
