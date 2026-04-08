import { useState } from 'react'
import axios from 'axios'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import SearchBar from '../components/SearchBar'
import FoodList from '../components/FoodList'

function HomePage() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query) => {
    setLoading(true)

    const res = await axios.get(
      'https://world.openfoodfacts.org/cgi/search.pl',
      {
        params: {
          search_terms: query,
          json: 1,
          page_size: 10
        }
      }
    )

    setResults(res.data.products)
    setLoading(false)
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Search Food
      </Typography>

      <SearchBar onSearch={handleSearch} />

      {loading ? <CircularProgress /> : <FoodList products={results} />}
    </Container>
  )
}

export default HomePage