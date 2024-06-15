import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "@/hooks/useGame";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";
const GameGrid = () => {
  const {games,error,isLoading} = useGame()
  const SkeletonItems = [0,1,2,3,4,5]
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2,lg:3}} padding='10px' spacing={4}>
        {isLoading && SkeletonItems.map(Skeleton=><GameCardContainer><CardSkeleton key={Skeleton}/></GameCardContainer>)}
        {games.map(game => 
          <GameCardContainer><GameCard game={game} key={game.id}/></GameCardContainer>
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
