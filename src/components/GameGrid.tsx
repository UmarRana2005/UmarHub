import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "@/hooks/useGame";
import GameCard from "./GameCard";
const GameGrid = () => {
  const {games,error} = useGame()
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2,lg:3}} padding='10px' spacing={10}>
        {games.map(game => 
          <GameCard game={game} key={game.id}/>
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
