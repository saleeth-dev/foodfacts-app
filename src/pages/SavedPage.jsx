import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { removeItem } from '../store/savedSlice'

function SavedPage() {
  const savedItems = useSelector(state => state.saved.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (savedItems.length === 0) {
    return <Typography>No saved items</Typography>
  }

  return (
    <Container>
      <Typography variant="h5">Saved Items</Typography>

      {savedItems.map(p => (
        <div key={p.code}>
          <Typography>{p.product_name}</Typography>

          <Button onClick={() => navigate(`/product/${p.code}`)}>
            View
          </Button>

          <Button onClick={() => dispatch(removeItem(p.code))}>
            Remove
          </Button>
        </div>
      ))}
    </Container>
  )
}

export default SavedPage