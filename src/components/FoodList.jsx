import FoodCard from './FoodCard'

function FoodList({ products }) {
  // If no products
  if (!products || products.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        ❌ No results found. Try a different food.
      </p>
    )
  }

  return (
    <div className="food-list">
      {products.map((product) => {
        // Skip items without name
        if (!product.product_name) return null

        return (
          <FoodCard
            key={product.code}
            product={product}
          />
        )
      })}
    </div>
  )
}

export default FoodList