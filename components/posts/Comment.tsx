import { Avatar, IconButton } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StatisticsButtons from "../universal/StatisticsButtons"

function Comment(props: any) {
   const { name, time, rate, text } = props

   return (
      <div className="comment">
         <div className="comment-info">
            <div className="comment-avatar"><Avatar alt="Ramil Javadi" src="https://leonardo.osnova.io/8769cf2e-070c-59a2-bc6b-89f31a89a9eb/-/scale_crop/64x64/-/format/webp/" /></div>
            <div className="comment-profile">
               <div className="comment-name">{name}</div>
               <div className="comment-time">{time}</div>
            </div>
            <StatisticsButtons rate={rate} downClick={() => { }} upClick={() => { }} />
         </div>
         <div className="comment-text">{text}</div>
         <div className="comment-buttons">
            <div>Ответить</div>
            <div><IconButton><MoreHorizIcon /></IconButton></div>
         </div>
      </div>
   )
}

export default Comment