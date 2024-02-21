import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material"


function ListCard() {

  return (
    <Stack sx={{p:' 5px', m:'0 5px', gap: 1, overflowX: 'hidden', overflowY: 'auto',
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
      <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
          <Typography>
            Card 01
          </Typography>
        </CardContent>
        <CardActions sx={{ p:'0 4px 8px 4px' }}>
          <Button size="small" startIcon={<GroupIcon/>}>20</Button>
          <Button size="small" startIcon={<ModeCommentIcon/>}>15</Button>
          <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
        </CardActions>
      </Card>

      <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
          <Typography>
            Lizard
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default ListCard
