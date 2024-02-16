import {
  useColorScheme
} from '@mui/material/styles'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Stack } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

function ModeSelect() {
  const { mode, setMode } = useColorScheme()


  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-light-mode"
        id="select-dark-dark-mode"
        value={mode}
        label="Mode1"
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <Stack direction="row" justifyContent="center" alignItems="center" sx={{gap:1, color: 'primary.main'}}>
            <LightModeIcon fontSize='small'/> Light
          </Stack>
        </MenuItem>
        <MenuItem value='dark'>
          <Stack direction="row" justifyContent="center" alignItems="center" sx={{gap:1, color: 'primary.main'}}>
            <DarkModeOutlinedIcon fontSize='small'/> Dark
          </Stack>
        </MenuItem>
        <MenuItem value='system'>
          <Stack direction="row" justifyContent="center" alignItems="center" sx={{gap:1, color: 'primary.main'}}>
            <SettingsBrightnessIcon fontSize='small'/> System
          </Stack>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
