
import { Stack } from "@mui/material"
import CardTrel from "./Card/CardTrel"


function ListCard({ cards }) {

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

      {cards?.map( card => (
        <CardTrel key={ card._id } card={card}/>
      ))}
      {/* <CardTrel/> */}

    </Stack>
  )
}

export default ListCard
