import { Box, Flex, Text, Link, Spacer, HStack } from "@chakra-ui/react";
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
        <Text
          fontSize="lg"
          color="blue.400"
          fontWeight="bold"
          _hover={{
            color: "accent.600",
            transform: "scale(1.02)",
            transition: "transform 0.3s ease, color 0.3s ease",
          }}
          _active={{
            color: "accent.700",
          }}
          transition="transform 0.3s ease, color 0.3s ease">
          <RouterLink to="/">CosmicFlix</RouterLink>
        </Text>
        <Spacer />
        <HStack spacing={6}>
          <Link
            as={RouterLink}
            to="/about"
            color="blue.400"
            fontWeight="bold"
            _hover={{
              color: "accent.600",
              transform: "scale(1.02)",
              transition: "transform 0.3s ease, color 0.3s ease",
            }}>
            About
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
