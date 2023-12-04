import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box, Button, ButtonGroup, Flex, HStack, Show } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'


export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  searchText: string
}
function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  // in the GenreList we set that the genre so that in the GameGrid it shows the genres that was selected
  return (

    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`

    }}
      templateColumns={{
        base: '1fr', //1 fraction
        lg: '200px',

      }}
    >
      <GridItem area='nav' >
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' padding={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area='main' >
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          </Box>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>

  )
}

export default App
