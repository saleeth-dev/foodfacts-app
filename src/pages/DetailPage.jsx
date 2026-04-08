import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '../store/savedSlice'

function DetailPage() {
  const { barcode } = useParams()
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const savedItems = useSelector(state => state.saved.items)

  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(res => setProduct(res.data.product))
  }, [barcode])

  if (!product) return <p>Loading...</p>

  const isSaved = savedItems.some(p => p.code === barcode)

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>Back</Button>

      <Typography variant="h5">{product.product_name}</Typography>

      <Button
        variant="contained"
        onClick={() =>
          isSaved
            ? dispatch(removeItem(barcode))
            : dispatch(addItem(product))
        }
      >
        {isSaved ? "Remove" : "Save"}
      </Button>
    </Container>
  )
}

export default DetailPage