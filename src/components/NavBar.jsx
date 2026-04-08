import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function NavBar() {
  const count = useSelector(state => state.saved.items.length)

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">🥗 FoodFacts</Typography>

        <div>
          <Button color="inherit" component={NavLink} to="/">
            Search
          </Button>

          <Button color="inherit" component={NavLink} to="/saved">
            <Badge badgeContent={count} color="secondary">
              Saved
            </Badge>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar