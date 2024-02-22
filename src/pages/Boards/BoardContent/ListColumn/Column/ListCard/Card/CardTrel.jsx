import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function CardTrel({ cardHiddenMedia }) {

  if (cardHiddenMedia) {
    return (
      <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
          <Typography>
            Card 01
          </Typography>
        </CardContent>
      </Card>
    )
  }

  return (
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
  )
}

export default CardTrel
