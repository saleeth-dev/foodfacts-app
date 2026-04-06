import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const navigate = useNavigate()

  const { product_name, brands, nutriments, image_small_url, code } = product

  return (
    <div
      className="food-card"
      onClick={() => navigate(`/product/${code}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={image_small_url} alt="food" width="100" />
      <h3>{product_name}</h3>
      <p>{brands}</p>
      <p>Calories: {nutriments?.['energy-kcal_100g']}</p>
    </div>
  )
}

export default FoodCard