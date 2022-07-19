import { Button, IconButton, Input } from "@mui/material"
import CollectionsIcon from '@mui/icons-material/Collections';
import { useEffect } from "react";
import React from "react";

function AddCommentInput(props: any) {

   
   return (
      <input type="text" />
   )
}

function AddCommentButtons(props: any) {

   
   return (
      <div className="add-comment-buttons">
         <div className="icons"> <IconButton><CollectionsIcon /></IconButton> </div>
         <div className="published-btn"><Button>Опубликовать</Button></div>
      </div>
   )
}

function AddCommentArea(props: any) {
   React.useEffect(() => {
      console.log('useEffect');
      
      const clickHandler = (event: any) => {
         if (event.target && !event.target.closest('.add-comment-area') && !event.target.classList.contains('add-comment-area')) {
            console.log('nope')
            return
         }

         console.log('yep')
      }
      
      document.addEventListener('click', clickHandler)

      return (
         () => document.removeEventListener('click', clickHandler)
      )
   }, [])
   
   return (
      <div className="add-comment-area">
         <AddCommentInput currentClass='СДЕЛАТЬ ТЕКУЩИЙ КЛАСС' />
         <AddCommentButtons />
      </div>
   )
}

export default AddCommentArea