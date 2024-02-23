import { Avatar, AvatarGroup, Box, Button, Chip, Stack, Tooltip } from "@mui/material"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from "../../../utils/formatLetter"

const CHIP_STYLE ={
  color:'#fff', bgcolor:'transparent', border:'0', padding:'5px', borderRadius:'6px',
  '.MuiSvgIcon-root':{
    color:'#fff'
  },
  '&:hover':{
    bgcolor:'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box sx={{ width:'100%', height: theme => theme.trello.appBarHeight, display:'flex', gap:'1rem', alignItems:'center', justifyContent:'space-between', padding:'1rem', overflow:'auto', borderBottom: '1px solid #00bfa5', bgcolor: theme => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2' }}>

      <Stack direction='row' alignItems='center' spacing={2}>
        <Chip
          sx={CHIP_STYLE}
          icon={<SpaceDashboardIcon />}
          label={board.title}
          clickable
          // onClick={()=>{}}
        />

        <Chip
          sx={CHIP_STYLE}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board.type)}
          clickable
          // onClick={()=>{}}
        />

        <Chip
          sx={CHIP_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
          // onClick={()=>{}}
        />

        <Chip
          sx={CHIP_STYLE}
          icon={<BoltIcon />}
          label="Autumation"
          clickable
          // onClick={()=>{}}
        />

        <Chip
          sx={CHIP_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          // onClick={()=>{}}
        />
      </Stack>

      <Stack direction='row' alignItems='center' spacing={2}>
        <Button variant="outlined" startIcon={<PersonAddIcon/>} sx={{ color:'white' }}> Invite</Button>
        <AvatarGroup max={3}
          sx={{
            gap:'10px',
            '& .MuiAvatar-root':{
              width: '30px',
              height: '30px',
              fontSize: '14px',
              border:'0'
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
