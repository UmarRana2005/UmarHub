import useData from "./useData";
import { Geners } from "./useGeners";
import { Platform } from "./usePlatform";
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
  selectedGener: Geners | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGener?.id, platforms: selectedPlatform?.id } },
    [selectedGener?.id, selectedPlatform?.id]
  );

export default useGame;
