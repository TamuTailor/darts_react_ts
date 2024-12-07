import { Box, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import {  gameScore } from "../../Atom";

export const Score = () => {
  const [score, setScore] = useAtom(gameScore);


  return (
    <Box>
      <Text>{score}</Text>
    </Box>
  );
};
