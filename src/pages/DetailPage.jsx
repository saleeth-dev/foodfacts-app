import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function DetailPage({ saved, dispatch }) {
  const { barcode } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios
      .get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(res => setProduct(res.data.product))
  }, [barcode])

  if (!product) return <p>Loading...</p>

  const isSaved = saved.some(p => p.code === barcode)

  const handleSave = () => {
    if (isSaved) {
      dispatch({ type: "REMOVE", code: barcode })
    } else {
      dispatch({ type: "ADD", product })
    }
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>

      <h2>{product.product_name}</h2>
      <img src={product.image_small_url} alt="" />

      <p>Brand: {product.brands}</p>

      <p>Calories: {product.nutriments?.['energy-kcal_100g']}</p>
      <p>Protein: {product.nutriments?.proteins_100g}</p>

      <button onClick={handleSave}>
        {isSaved ? "Remove" : "Save"}
      </button>
    </div>
  )
}

export default DetailPage