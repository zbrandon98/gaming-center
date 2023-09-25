import { Grid, GridItem } from "@chakra-ui/react";
import NabBar from "./components/NabBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";


function App() {
  return (
    <>
      <Grid                                 
        templateAreas={{                  
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main" `,
        }}        
        templateColumns={{
          base: '1fr',
          large: '200px 1fr'
        }}  
      >
        <GridItem area="nav">
          <NabBar/>
        </GridItem>
        <GridItem area="aside" paddingX={5}>
          <GenreList/>
        </GridItem>
        <GridItem area="main">
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
