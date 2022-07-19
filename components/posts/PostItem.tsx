import Router from "next/router"
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IosShareIcon from '@mui/icons-material/IosShare';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Button, IconButton } from "@mui/material";
import PostComments from "./PostComments";
import StatisticsButtons from "../universal/StatisticsButtons";


function InfoButtons(props: any) {
   return (
      <div className="buttons">
         <div className="subscribe"><IconButton><AddIcon /></IconButton></div>
         <div className="parametrs"><IconButton><MoreHorizIcon /></IconButton></div>
      </div>
   )
}

function PostInfo(props: any) {

   return (
      <div className="info">
         <div className="info-row">
            <div className="category">Игры</div>
            <div className="username">Джамиль Махмутов</div>
            <div className="timepost">2 часа</div>
         </div>
         <InfoButtons />
      </div>
   )
}

function PostBody(props: any) {
   const { openPost } = props

   return (
      <div onClick={openPost} className="body">
         <div className="title">Нарративная адвенчура Pentiment от Obsidian получит локализацию на русский язык после</div>
         <div className="text-area">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam eaque blanditiis nulla doloremque eos odit magni sint? Error mollitia sunt dolorem, sequi pariatur aperiam nisi dignissimos delectus exercitationem, dolores, cumque rem consequatur necessitatibus. A dolores, natus inventore minus odio iure quas sapiente expedita repellendus velit ducimus, ab, deserunt qui!</div>
         <div className="image">
            <img src="https://leonardo.osnova.io/9df8fe85-93b5-592c-a3b2-641e4fc752b0/" alt="" />
         </div>
      </div>
   )
}

function ButtonsRow(props: any) {

   return (
      <div className="row">
         <div className="row-comments"><IconButton><ChatBubbleOutlineIcon /></IconButton></div>
         <div className="row-share"><IconButton><IosShareIcon /></IconButton></div>
         <div className="row-bookmark"><IconButton><BookmarkBorderIcon /></IconButton></div>
      </div>
   )
}

function PostButtons(props: any) {
   const upClickFunction = () => {
      console.log('upClickFunction')
      
   }
   const downClickFunction = () => {
      console.log('downClickFunction')
      
   }
   
   
   return (
      <div className="buttons">
         <ButtonsRow />
         <StatisticsButtons downClick={downClickFunction} upClick={upClickFunction} />
      </div>
   )
}

function PostContent(props: any) {

   return (
      <div className="content">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus non rem alias, asperiores nostrum aspernatur aperiam quis nulla et obcaecati eveniet? Laudantium vero, nulla sint minima incidunt quibusdam exercitationem nobis similique repudiandae necessitatibus! Asperiores molestias quos excepturi provident minima in repellendus. Perspiciatis amet repudiandae suscipit necessitatibus a tempore maiores doloribus ipsam assumenda explicabo harum, ad iste quibusdam aperiam dolorem officiis et consectetur voluptas esse exercitationem maxime consequatur quis inventore excepturi. Unde tempora a placeat exercitationem eveniet fugiat accusantium inventore libero voluptas soluta, cum veritatis iste incidunt assumenda molestiae sint sunt voluptates quo laboriosam. Mollitia sit molestias doloribus vero quis saepe!
      </div>
   )
}

export default function PostItem(props: any) {
   const { isFullPost } = props 
   const id = '1224'

   const openPost = () => {
      Router.push(`/post/${id}`)
   }

   let content = (
      <div className="post-item">
         <PostInfo />
         <PostBody openPost={openPost} />
         {isFullPost ? <PostContent />: ''}
         <PostButtons />
         {isFullPost ? <PostComments />: ''}
      </div>
   )
   
   content = isFullPost ? (<div className="post-item-wrapper">{content}</div>) : content
   
   return (
      content
   )
}