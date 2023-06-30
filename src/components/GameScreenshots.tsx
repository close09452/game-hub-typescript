import React from "react";
import useScreenshot from "../hooks/useScreenshot";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshot(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} marginY={4}>
      {data?.results.map((result) => (
        <Image key={result.id} src={result.image} borderRadius={4}/>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
