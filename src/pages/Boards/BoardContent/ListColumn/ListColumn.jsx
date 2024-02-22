import { Box, Button } from "@mui/material"
import Column from "./Column/Column"
import NoteAddIcon from '@mui/icons-material/NoteAdd'


function ListColumn() {

  return (
    <Box sx={{ bgcolor:'inherit', width:'100%', height:'100%', display:'flex', alignItems:'start', gap:2, overflowY:'hidden', overflowX: 'auto', p:1, '&::-webkit-scrollbar-track': { m:2 } }}>
      <Column/>
      <Button startIcon={<NoteAddIcon />} sx={{ color:'#fff', minWidth: '200px', maxHeight:'200px', height:'fit-content', mx:'1rem', borderRadius:'6px', bgcolor:'#ffffff3d' }}>Add New Column</Button>
    </Box>
  )
}

export default ListColumn
