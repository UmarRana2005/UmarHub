'use client'
import GameGrid from "@/components/GameGrid";
import GenersList from "@/components/GenersList";
import NavBar from "@/components/NavBar";
import { Grid, GridItem, Show } from "@chakra-ui/react";

export default function Home() {
  return(
    <>
    <Grid templateAreas={{
      base:`"nav " " main"`,
      lg:`"nav nav" "aside main"`
    }}>
      <GridItem area='nav'>
        <NavBar/>
        </GridItem>
      <Show above="lg">
      <GridItem area='aside'>
        <GenersList/>
      </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid/>
      </GridItem>
    </Grid>
    </>
  ) 
}
