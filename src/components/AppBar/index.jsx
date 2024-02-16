import { Badge, Box, Button, Stack, SvgIcon, TextField, Tooltip, Typography } from '@mui/material'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import TrelloIcon from '../../assets/trello.svg?react'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'

function AppBar() {
  return (
    <Box sx={{width:'100%', height: '60px', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 1rem'}}>
      <Stack direction='row' alignItems='center' spacing={2}>
        <AppsIcon sx={{color: 'primary.main'}}/>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <SvgIcon component={TrelloIcon} inheritViewBox sx={{color: 'primary.main'}} />
          <Typography variant='span' sx={{fontSize:'1.2rem', fontWeight:'700', color: 'primary.main'}}>Trello</Typography>
        </Stack>

        <Workspaces/>
        <Recent/>
        <Starred/>
        <Templates/>

        <Button variant="outlined">Create</Button>
      </Stack>
      <Stack direction='row' alignItems='center' spacing={2}>
        <TextField id="outlined-search" label="Search..." type="search" size='small'/>
        <ModeSelect/>

        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot">
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon sx={{cursor:'pointer'}}/>
        </Tooltip>

        <Profiles/>
      </Stack>
    </Box>
  )
}

export default AppBar
