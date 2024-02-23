import { Box } from "@mui/material"
import ListColumn from "./ListColumn/ListColumn"
import { mapOrder } from "../../../utils/sorts"
import { DndContext } from "@dnd-kit/core"

function BoardContent({ board }) {

  const orderedColumn = mapOrder(board?.columns, board?.columnOrderIds, '_id')

  const handleDragEnd = (e) => {
    console.log('handleDragEnd', e)
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box sx={{ bgcolor:theme => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2', width:'100%', height: theme => theme.trello.boardContentHeight, p: 1, overflowY:'hidden', overflowX: 'auto' }}>
        {/* <ListColumn columns = {board.columns}/> */}
        <ListColumn columns = {orderedColumn}/>
      </Box>
    </DndContext>
  )
}

export default BoardContent
