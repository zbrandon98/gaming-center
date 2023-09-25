import { Grid, GridItem, Show } from "@chakra-ui/react";
import NabBar from "./components/NabBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";


function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList  selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
