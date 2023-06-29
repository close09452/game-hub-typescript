import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import { Heading, Spinner } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <Heading>{game.description_raw}</Heading>
    </>
  );
};

export default GameDetailPage;
