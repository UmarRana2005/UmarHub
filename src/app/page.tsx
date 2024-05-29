import { Grid, GridItem, Show } from "@chakra-ui/react";

export default function Home() {
  return(
    <>
    <Grid templateAreas={{
      base:`"nav " " main"`,
      lg:`"nav nav" "aside main"`
    }}>
      <GridItem area='nav' bg='coral'>Nav</GridItem>
      <Show above="lg">
      <GridItem area='aside' bg='dodgerblue'>Aside</GridItem>
      </Show>
      <GridItem area='main' bg='gold'>Main</GridItem>
    </Grid>
    </>
  ) 
}
