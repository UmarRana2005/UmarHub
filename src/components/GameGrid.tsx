import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "@/hooks/useGame";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/app/page";
interface Props{
  gameQuery:GameQuery,
}
const GameGrid = ({gameQuery}:Props) => {
  const {data,error,isLoading} = useGame(gameQuery)
  const SkeletonItems = [0,1,2,3,4,5]
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2,lg:3}} padding='10px' spacing={4}>
        {isLoading && SkeletonItems.map(Skeleton=>
          <GameCardContainer  key={Skeleton} ><CardSkeleton/></GameCardContainer>)}
        {data.map(game => 
          <GameCardContainer key={game.id} ><GameCard game={game} /></GameCardContainer>
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
