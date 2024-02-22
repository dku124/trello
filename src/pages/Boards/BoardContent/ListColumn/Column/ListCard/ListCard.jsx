
import { Stack } from "@mui/material"
import Card from "./Card/CardTrel"
import CardTrel from "./Card/CardTrel"


function ListCard() {

  return (
    <Stack sx={{ p:'5px', m:'0 5px', gap: 1, overflowX: 'hidden', overflowY: 'auto',
      maxHeight: theme => `calc(
        ${theme.trello.boardContentHeight}
      - ${theme.spacing(4)}
      - ${theme.trello.columnHeaderHeight}
      - ${theme.trello.columnFooterHeightL})
      `,
      '& .MuiCard-root': { overflow:'unset' },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ced0da'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#bfc2cf'
      }
    }}>
      <CardTrel/>
      <CardTrel hideMedia/>
    </Stack>
  )
}

export default ListCard
