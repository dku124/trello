import { Box } from "@mui/material"
import ListColumn from "./ListColumn/ListColumn"

function BoardContent() {

  return (
    <Box sx={{ bgcolor:theme => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2', width:'100%', height: theme => theme.trello.boardContentHeight, p: 1, overflowY:'hidden', overflowX: 'auto' }}>
      <ListColumn/>
    </Box>
  )
}

export default BoardContent
