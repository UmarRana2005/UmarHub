'use client'
import GameGrid from "@/components/GameGrid";
import GenersList from "@/components/GenersList";
import NavBar from "@/components/NavBar";
import { Geners } from "@/hooks/useGeners";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
 const [selectedGener,setSelectedGener] =useState<Geners|null>(null)
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
        <GenersList onSelectedGener={selectedGener} SelectedGener={(gener)=>setSelectedGener(gener)}/>
      </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid selectedGener={selectedGener}/>
      </GridItem>
    </Grid>
    </>
  ) 
}
