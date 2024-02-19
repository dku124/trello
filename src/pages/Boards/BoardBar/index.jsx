import { Avatar, AvatarGroup, Box, Button, Chip, Stack, Tooltip } from "@mui/material"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const CHIP_STYLE ={
  color:'primary.main', bgcolor:'white', border:'none', padding:'5px', borderRadius:'6px',
  '& .MuiSvgIcon-root':{
    color:'primary.main'
  },
  '&:hover':{
    bgcolor:'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{ width:'100%', height: theme => theme.trello.appBarHeight, display:'flex', gap:'1rem', alignItems:'center', justifyContent:'space-between', padding:'1rem', overflow:'auto', borderTop: '1px solid #00bfa5'}}>

      <Stack direction='row' alignItems='center' spacing={2}>
        <Chip
          sx={CHIP_STYLE}
          icon={<SpaceDashboardIcon />}
          label="Acc Name"
          onClick={()=>{}}
        />

        <Chip
          sx={CHIP_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private"
          onClick={()=>{}}
        />

        <Chip
          sx={CHIP_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          onClick={()=>{}}
        />

        <Chip
          sx={CHIP_STYLE}
          icon={<BoltIcon />}
          label="Autumation"
          onClick={()=>{}}
        />

        <Chip
          sx={CHIP_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          onClick={()=>{}}
        />
      </Stack>

      <Stack direction='row' alignItems='center' spacing={2}>
        <Button variant="outlined" startIcon={<PersonAddIcon/>}> Invite</Button>
        <AvatarGroup max={3}
          sx={{
            '& .MuiAvatar-root':{
              width: '30px',
              height: '30px',
              fontSize: '14px'
            }
          }}
        >
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0BR2K1AxKKzs07DdKpnfBt4BYiAvhdFmGw&usqp=CAU" />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0BR2K1AxKKzs07DdKpnfBt4BYiAvhdFmGw&usqp=CAU" />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0BR2K1AxKKzs07DdKpnfBt4BYiAvhdFmGw&usqp=CAU" />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0BR2K1AxKKzs07DdKpnfBt4BYiAvhdFmGw&usqp=CAU" />
          </Tooltip>
        </AvatarGroup>
      </Stack>

    </Box>
  )
}

export default BoardBar
