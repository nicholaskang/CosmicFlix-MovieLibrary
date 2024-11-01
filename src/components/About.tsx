import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      maxW="800px"
      mx="auto"
      p={8}
      my={10}
      textAlign="center"
      color="gray.200"
      borderRadius="lg"
      boxShadow="lg">
      <VStack spacing={6}>
        <Heading
          as="h1"
          size="2xl"
          color="text.primary"
          mb={6}>
          Welcome to CosmicFlix
        </Heading>

        <Image
          src="/images/screen-under-the-stars.jpg"
          alt="A person sits outdoors, gazing at a blank movie screen under a starry sky, searching for the perfect film among the stars in a tranquil, open-air cinema setting."
          width={{ base: "300px", md: "400px" }}
          height="auto"
          loading="lazy"
          sizes="(max-width: 600px) 600px, 1200px"
          borderRadius="lg"
          boxShadow="lg"
          mb={2}
        />

        <Text
          fontSize="md"
          color="gray.200">
          Ever drifted through an endless galaxy of movie apps, searching for
          the perfect film? We know the feeling! That’s why we created{" "}
          <strong>CosmicFlix</strong>—your guiding star in the vast universe of
          movies.
        </Text>

        <Text
          fontSize="md"
          color="gray.200">
          Whether you're on a quest to rediscover a hidden indie gem from the
          '90s or catch the latest blockbuster supernova,{" "}
          <strong>CosmicFlix</strong> is here to light your way. Just enter a
          title, grab some popcorn, and let us connect the stars to reveal your
          next binge-worthy adventure!
        </Text>

        <Text
          fontSize="md"
          color="gray.200">
          So lean back, gaze at the screen, and let the cosmic magic unfold.
          🍿🌌✨
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
