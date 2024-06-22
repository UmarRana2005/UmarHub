import { GameQuery } from "@/app/page";
import useData from "./useData";
export interface Platforms {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

const useGame = (
  gameQuery:GameQuery
) =>
  useData<Game>(
    "/games",
    { params: { genres: gameQuery.gener?.id, platforms: gameQuery.platform?.id,ordering:gameQuery?.sortOrder,search:gameQuery.search } },
    [gameQuery]
  );

export default useGame;
