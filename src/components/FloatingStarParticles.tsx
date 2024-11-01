import { Box } from "@chakra-ui/react";
import React from "react";

const StarParticle: React.FC<{ size: number; top: string; left: string }> = ({
  size,
  top,
  left,
}) => (
  <Box
    position="absolute"
    top={top}
    left={left}
    width={`${size}px`}
    height={`${size}px`}
    animation="float 10s ease-in-out infinite, shimmer 3s ease-in-out infinite"
    sx={{
      "@keyframes float": {
        "0%": { transform: "translateY(0px)" },
        "50%": { transform: `translateY(${size}px) rotate(20deg)` },
        "100%": { transform: "translateY(0px) rotate(-20deg)" },
      },
      "@keyframes shimmer": {
        "0%, 100%": { opacity: 0.8 },
        "50%": { opacity: 0.3 },
      },
    }}>
    <Box
      as="svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      color="rgba(255, 255, 255, 0.7)"
      width="100%"
      height="100%">
      {/* Star shape path */}
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.85L12 17.77l-6.18 3.22L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </Box>
  </Box>
);

const FloatingStarParticles = () => (
  <Box
    position="fixed"
    top="0"
    left="0"
    width="100vw"
    height="100vh"
    zIndex="-1"
    overflow="hidden"
    pointerEvents="none">
    {[...Array(40)].map((_, i) => (
      <StarParticle
        key={i}
        size={Math.random() * 20 + 5}
        top={`${Math.random() * 100}%`}
        left={`${Math.random() * 100}%`}
      />
    ))}
  </Box>
);

export default FloatingStarParticles;
