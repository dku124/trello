import * as React from 'react'
import { Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import { Check } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Starred() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Button
        sx={{ color:'white' }}
        id="basic-button-starred"
        aria-controls={open ? 'basic-menu-starred' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon/>}
      >
        Starred
      </Button>
      <Menu
        id="basic-menu-starred"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-starred'
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemText inset>Single</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText inset>Double</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Starred