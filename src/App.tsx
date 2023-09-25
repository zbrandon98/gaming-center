import { Grid, GridItem } from "@chakra-ui/react";
import NabBar from "./components/NabBar";

function App() {
  return (
    <>
      <Grid                                 
        templateAreas={{                  
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main" `,
        }}          
      >
        <GridItem area="nav">
          Nav
          <NabBar/>
        </GridItem>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
        <GridItem area="main" bg="yellow">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
