import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button, ButtonGroup, Show } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
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
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' padding={5}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area='main' >
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>

  )
}

export default App
