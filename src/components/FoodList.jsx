import Grid from '@mui/material/Grid'
import FoodCard from './FoodCard'

function FoodList({ products }) {
  return (
    <Grid container spacing={2}>
      {products.map(p => (
        <Grid item xs={12} sm={6} md={4} key={p.code}>
          <FoodCard product={p} />
        </Grid>
      ))}
    </Grid>
  )
}

export default FoodList