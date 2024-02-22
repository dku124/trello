import { Badge, Box, Button, InputAdornment, Stack, SvgIcon, TextField, Tooltip, Typography } from '@mui/material'
import ModeSelect from '../ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import TrelloIcon from '../../assets/trello.svg?react'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

function AppBar() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <Box sx={{ width:'100%', height: theme => theme.trello.appBarHeight, display:'flex', gap:'1rem', alignItems:'center', justifyContent:'space-between', padding:'0 1rem', overflow:'auto', bgcolor: theme => theme.palette.mode === 'dark' ? '#2d3436' : '#1565c0' }}>
      <Stack direction='row' alignItems='center' spacing={2}>
        <AppsIcon sx={{ color: '#fff' }}/>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <SvgIcon component={TrelloIcon} fontSize='small' inheritViewBox sx={{ color: '#fff' }} />
          <Typography variant='span' sx={{ fontSize:'1.2rem', fontWeight:'700', color: '#fff' }}>Trello</Typography>
        </Stack>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }} >
          <Workspaces/>
          <Recent/>
          <Starred/>
          <Templates/>
          <Button sx={{ border: 'none', '&:hover':{ border:'none' } }} variant="outlined" startIcon={<AddIcon/>}>Create</Button>
        </Box>

      </Stack>
      <Stack direction='row' alignItems='center' spacing={2}>
        <TextField id="outlined-search" label="Search..." type="text" size='small' sx={{ minWidth:'120px', maxWidth:'170px', '& label':{ color:'#fff' }, '& input':{ color:'#fff' } }} value = {searchValue} onChange = { (e) => setSearchValue(e.target.value) }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color:'#fff', fontSize:'14px' }}/>
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon fontSize='small' sx={{ color: searchValue ? '#fff' : 'transparent', cursor:'pointer' }} onClick = { () => setSearchValue('') } />
            )
          }}
        />

        <ModeSelect/>

        <Tooltip title="Notification">
          <Badge color="warning" variant="dot">
            <NotificationsNoneIcon sx={{ color: '#fff' }}/>
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor:'pointer', color: '#fff' }}/>
        </Tooltip>

        <Profiles/>
      </Stack>
    </Box>
  )
}

export default AppBar
