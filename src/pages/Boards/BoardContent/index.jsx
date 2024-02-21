import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Tooltip, Typography } from "@mui/material"
import { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Cloud, ContentCopy, ContentCut, ContentPaste } from "@mui/icons-material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

function BoardContent() {

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ bgcolor:theme => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2', width:'100%', height: theme => theme.trello.boardContentHeight, p: 1, overflowY:'hidden', overflowX: 'auto' }}>

      <Box sx={{ bgcolor:'inherit', width:'100%', height:'100%', display:'flex', overflowY:'hidden', overflowX: 'auto', p:1, '&::-webkit-scrollbar-track': { m:2 } }}>
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
            height: COLUMN_HEADER_HEIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Typography variant="h6" sx={{fontWeight:'700', cursor:'pointer', fontSize:'1rem'}}>Column Title</Typography>
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
          <Stack sx={{p:' 5px', m:'0 5px', gap: 1, overflowX: 'hidden', overflowY: 'auto',
            maxHeight: theme => `calc(
              ${theme.trello.boardContentHeight}
            - ${theme.spacing(4)}
            - ${COLUMN_HEADER_HEIGHT}
            - ${COLUMN_FOOTER_HEIGHT})
            `,
            '& .MuiCard-root': { overflow:'unset' },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }
          }}>
            <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
              <CardActions sx={{p:'0 4px 8px 4px'}}>
                <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                <Button size="small" startIcon={<ModeCommentIcon/>}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
              </CardActions>
            </Card>

            <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
          </Stack>

          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Button startIcon={<AddCardIcon/>}>Add new Card</Button>
            <Tooltip title='Drag to move'>
              <DragHandleIcon sx={{cursor:'pointer'}}/>
            </Tooltip>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default BoardContent
