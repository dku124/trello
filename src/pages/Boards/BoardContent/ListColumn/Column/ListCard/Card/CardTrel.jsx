import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function CardTrel({ card }) {
  // if (hideMedia) {
  //   return (
  //     <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
  //       <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
  //         <Typography>
  //           Card 01
  //         </Typography>
  //       </CardContent>
  //     </Card>
  //   )
  // }
  const shouldShowActionCard= ()=>{
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }

  return (
    <Card sx={{ width: '100%', cursor:'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)' }}>
      {card?.cover &&
        <CardMedia
          sx={{ height: 140 }}
          image={card.cover}
          title={card.title}
        />
      }
      <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
        <Typography>
          {card.title}
        </Typography>
      </CardContent>
      {shouldShowActionCard() &&
        <CardActions sx={{ p:'0 4px 8px 4px' }}>
          {!!card?.memberIds?.length &&
            <Button size="small" startIcon={<GroupIcon/>}>{card?.memberIds?.length}</Button>
          }
          {!!card?.comments?.length &&
            <Button size="small" startIcon={<ModeCommentIcon/>}>{card?.comments?.length}</Button>
          }
          {!!card?.attachments?.length &&
            <Button size="small" startIcon={<AttachmentIcon/>}>{card?.attachments?.length}</Button>
          }
        </CardActions>
      }
    </Card>
  )
}

export default CardTrel
