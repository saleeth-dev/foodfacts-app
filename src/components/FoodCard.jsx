import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const navigate = useNavigate()

  return (
    <Card>
      <CardActionArea onClick={() => navigate(`/product/${product.code}`)}>
        {product.image_small_url && (
          <CardMedia
            component="img"
            height="140"
            image={product.image_small_url}
          />
        )}

        <CardContent>
          <Typography variant="h6">
            {product.product_name}
          </Typography>

          <Typography variant="body2">
            {product.brands}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default FoodCard