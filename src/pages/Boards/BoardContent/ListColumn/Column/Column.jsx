import { Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Cloud, ContentCopy, ContentCut, ContentPaste } from "@mui/icons-material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCard from "./ListCard/ListCard"
import { mapOrder } from "../../../../../utils/sorts"


function Column({ column }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')

  return (
    <Box sx={{
      minWidth:'300px',
      minHeight:'300px',
      height:'fit-content',
      width:'300px',
      bgcolor: theme => theme.palette.mode === 'dark' ? '#333643' : '#ebecf8',
      borderRadius:'6px',
      maxHeight: theme => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
    }}>

      <Box sx={{
        height: theme => theme.trello.columnHeaderHeight,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Typography variant="h6" sx={{ fontWeight:'700', cursor:'pointer', fontSize:'1rem' }}>{column?.title}</Typography>
        <Box>
          <Tooltip title='More'>
            <ExpandMoreIcon sx={{ color:'text.primary', cursor:'pointer' }}
              id="basic-button-column"
              aria-controls={open ? 'basic-menu-column' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-column"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button-column'
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
              <ListItemText>Delete this column</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon><DeleteForeverIcon /></ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* List card */}
      {/* <ListCard cards={column?.cards}/> */}
      <ListCard cards={orderedCards}/>

      <Box sx={{
        height: theme => theme.trello.columnFooterHeightL,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Button startIcon={<AddCardIcon/>}>Add new Card</Button>
        <Tooltip title='Drag to move'>
          <DragHandleIcon sx={{ cursor:'pointer' }}/>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column
