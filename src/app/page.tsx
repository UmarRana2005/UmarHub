'use client'
import GameGrid from "@/components/GameGrid";
import GenersList from "@/components/GenersList";
import NavBar from "@/components/NavBar";
import PlatformSelector from "@/components/PlatformSelector";
import { Platforms } from "@/hooks/useGame";
import { Geners } from "@/hooks/useGeners";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
export interface GameQuery{
  gener:Geners|null,
  platform:Platforms|null,
}
export default function Home() {
 const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)
  return(
    <>
    <Grid templateAreas={{
      base:`"nav " " main"`,
      lg:`"nav nav" "aside main"`
    }}
      templateColumns={{
        base:"1fr",
        lg:`200px 1fr`
      }}
    >
      <GridItem area='nav'>
        <NavBar/>
        </GridItem>
      <Show above="lg">
      <GridItem area='aside' paddingX={4}>
        <GenersList onSelectedGener={gameQuery.gener} SelectedGener={(gener)=>setGameQuery({...gameQuery,gener})}/>
      </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform)=> setGameQuery({...gameQuery,platform})} />
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
    </>
  ) 
}
