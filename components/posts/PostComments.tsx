import { Avatar, Paper } from "@mui/material"
import AddCommentArea from "../universal/AddCommentArea"
import Comment from "./Comment"


function CommentsList(props: any) {
   const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, placeat? Blanditiis modi fuga fugiat atque esse unde cupiditate nobis omnis.'
   return (
      <ul className="comments-list">
         <li><Comment time={'2 часа'} name={'Ramil Javadi'} text={text} rate={12345} /></li>
         <li><Comment time={'2 часа'} name={'Ramil Javadi'} text={text} rate={12345} /></li>
         <li><Comment time={'2 часа'} name={'Ramil Javadi'} text={text} rate={12345} /></li>
         <li><Comment time={'2 часа'} name={'Ramil Javadi'} text={text} rate={12345} /></li>
      </ul>
   )
}

function PostComments(props: any) {
   return (
      <div className="comments">
         <Paper variant="elevation" square>
            <AddCommentArea />
            <CommentsList />
         </Paper>
      </div>
   )
}

export default PostComments