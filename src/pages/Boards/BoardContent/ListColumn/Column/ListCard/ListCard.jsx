
import { Stack } from "@mui/material"
import Card from "./Card/Card"


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
      <Card/>
      <Card hideMedia/>
      {/* <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
          <Typography>
            Lizard
          </Typography>
        </CardContent>
      </Card> */}
    </Stack>
  )
}

export default ListCard
