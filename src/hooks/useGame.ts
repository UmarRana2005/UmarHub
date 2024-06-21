import useData from "./useData";
import { Geners } from "./useGeners";
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

const useGame = (selectedGener:Geners|null)=> useData<Game>('/games',{params:{genres:selectedGener?.id}},[selectedGener?.id])

export default useGame;
