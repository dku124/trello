import AppBar from '../../components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '../../apis/mock-data'

function Board() {
  return (
    <div>
      <AppBar/>
      <BoardBar board = {mockData.board}/>
      <BoardContent board = {mockData.board}/>
    </div>
  )
}

export default Board
