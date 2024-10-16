import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      maxW="800px"
      mx="auto"
      p={8}
      textAlign="center">
      <VStack spacing={4}>
        <Heading
          as="h1"
          size="2xl"
          color="brand.700">
          About ReactFlix
        </Heading>

        <Image
          src="/images/popcorn-movie-night-med.jpg"
          alt="Person lying on a couch, holding a remote control, with popcorn scattered on their clothes and a bowl of popcorn nearby, enjoying a movie night."
          width={{ base: "600px", md: "1200px" }}
          height="auto"
          loading="lazy"
          srcSet="/images/popcorn-movie-night-small.jpg 600w, /images/popcorn-movie-night-med.jpg 1200w"
          sizes="(max-width: 600px) 600px, 1200px"
          borderRadius="lg"
        />

        <Text
          fontSize="lg"
          color="gray.600">
          Welcome to <strong>ReactFlix</strong>! 🎬🍿
        </Text>

        <Text
          fontSize="md"
          color="gray.600">
          Ever found yourself endlessly scrolling through movie apps, trying to
          find something good to watch? Yeah, we feel you! That's why we built
          ReactFlix – your one-stop shop for all things movies.
        </Text>

        <Text
          fontSize="md"
          color="gray.600">
          Whether you're searching for that obscure indie film from the 90s or
          the latest blockbuster, we've got you covered. Just type in a title,
          grab some popcorn, and let ReactFlix help you find your next
          binge-worthy flick!
        </Text>

        <Text
          fontSize="md"
          color="gray.600">
          So sit back, relax, and let the movie magic begin! 🍿✨
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
