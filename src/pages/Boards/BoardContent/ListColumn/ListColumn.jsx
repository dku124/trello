import { Box } from "@mui/material"
import Column from "./Column/Column"


function ListColumn() {

  return (
    <Box sx={{ bgcolor:'inherit', width:'100%', height:'100%', display:'flex', gap:2, overflowY:'hidden', overflowX: 'auto', p:1, '&::-webkit-scrollbar-track': { m:2 } }}>
      <Column/>
    </Box>
  )
}

export default ListColumn
