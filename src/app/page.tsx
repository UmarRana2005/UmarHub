'use client'
import GameGrid from "@/components/GameGrid";
import GenersList from "@/components/GenersList";
import GameHeading from "@/components/GameHeading";
import NavBar from "@/components/NavBar";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Platforms } from "@/hooks/useGame";
import { Geners } from "@/hooks/useGeners";
import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
export interface GameQuery{
  gener:Geners|null,
  platform:Platforms|null,
  sortOrder:string,
  search:string,
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
        <NavBar onSearch={(search)=>setGameQuery({...gameQuery,search})}/>
        </GridItem>
      <Show above="lg">
      <GridItem area='aside' paddingX={4}>
        <GenersList onSelectedGener={gameQuery.gener} SelectedGener={(gener)=>setGameQuery({...gameQuery,gener})}/>
      </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={2}>
        <GameHeading gameQuery={gameQuery}/>
        <Flex marginBottom={5}>
          <Box marginRight={5}>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform)=> setGameQuery({...gameQuery,platform})} />
        </Box>
        <SortSelector selectedOrder={gameQuery.sortOrder} onSelectOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
        </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
    </>
  ) 
}
