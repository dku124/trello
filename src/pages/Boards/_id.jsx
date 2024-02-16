// import {useColorScheme } from '@mui/material/styles'
// import Button from '@mui/material/Button'
import AppBar from '../../components/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
import ModeSelect from '../../components/ModeSelect'

// function ModeToggle() {
//   const { mode, setMode } = useColorScheme()
//   return (
//     <Button onClick={() => {
//       setMode(mode === 'light' ? 'dark' : 'light')
//     }}>
//       {mode === 'light' ? 'Turn dark' : 'Turn light'} 
//     </Button>
//   )
// }

function Board() {
  return (
    <div>
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </div>
  )
}

export default Board
