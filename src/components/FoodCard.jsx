function FoodCard({ product }) {
  const { product_name, brands, nutriments, image_small_url } = product

  return (
    <div className="food-card">
      <img src={image_small_url} alt="food" width="100" />

      <h2>{product_name || "Unknown"}</h2>
      <p>Brand: {brands}</p>

      <p>Calories: {nutriments?.['energy-kcal_100g']}</p>
      <p>Protein: {nutriments?.proteins_100g}</p>
      <p>Carbs: {nutriments?.carbohydrates_100g}</p>
    </div>
  )
}

export default FoodCard