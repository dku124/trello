import { Box, Button } from "@mui/material"
import Column from "./Column/Column"
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable"


function ListColumn({ columns }) {

  return (
    <SortableContext items={columns} strategy={horizontalListSortingStrategy}>
      <Box sx={{ bgcolor:'inherit', width:'100%', height:'100%', display:'flex', gap:2, overflowY:'hidden', overflowX: 'auto', p:1, '&::-webkit-scrollbar-track': { m:2 } }}>
        {columns?.map( column => (
          <Column key={ column._id } column={column}/>
        ))}
        <Button startIcon={<NoteAddIcon />} sx={{ color: '#fff', borderRadius:'6px', bgcolor:'#ffffff3d', mx: 2, height:'fit-content' }}>Add new column</Button>
      </Box>
    </SortableContext>
  )
}

export default ListColumn
