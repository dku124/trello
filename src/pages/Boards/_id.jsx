import AppBar from '../../components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'

function Board() {
  return (
    <div>
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </div>
  )
}

export default Board
