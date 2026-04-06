import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query.trim()) {
      setError("Enter food name")
      return
    }

    setError('')
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search food..."
      />
      <button type="submit">Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  )
}

export default SearchBar