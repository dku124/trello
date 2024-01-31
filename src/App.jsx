import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme
} from '@mui/material/styles'
import Button from '@mui/material/Button'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function ModeSelect() {
  const { mode, setMode } = useColorScheme()


  const handleChange = (event) => {
    const selectedMode = event.target.value;
    console.log(selectedMode)
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-light-mode"
        id="select-dark-dark-mode"
        value={mode}
        label="Mode1"
        onChange={handleChange}
      >
        <MenuItem value='light'>Light</MenuItem>
        <MenuItem value='dark'>Dark</MenuItem>
        <MenuItem value='system'>System</MenuItem>
      </Select>
    </FormControl>
  );
}


function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button onClick={() => {
      setMode(mode === 'light' ? 'dark' : 'light')
    }}
  >
    {mode === 'light' ? 'Turn dark' : 'Turn light'} 
    </Button>
  )
}



function App() {
  return (
    <>
      <ModeToggle/>
      <hr />
      <ModeSelect/>
    </>
  )
}

export default App
