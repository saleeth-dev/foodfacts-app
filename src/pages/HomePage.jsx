import { useState } from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import FoodList from '../components/FoodList'

function HomePage() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query) => {
    setLoading(true)

    try {
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

      const filtered = res.data.products.filter(
        (p) => p.product_name
      )

      setResults(filtered)

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>🥗 FoodFacts</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      <FoodList products={results} />
    </div>
  )
}

export default HomePage