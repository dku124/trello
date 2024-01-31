import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme
} from '@mui/material/styles'
import Button from '@mui/material/Button'

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
    </>
  )
}

export default App
