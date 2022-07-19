import { Button, TextareaAutosize } from "@mui/material"
import React from "react"
import { useRouter } from 'next/router'
import dynamic from "next/dynamic"


const Editor = dynamic(async (): Promise<any> => {
   const responce = await import('../components/posts/Editor')
   const data = await responce.Editor
   return data
}, { ssr: false }) //создаю эдитор динамически, ибо из-за next он не грузится

function AccountParams(props: any) {

   return (
      <div className="account-parametrs">
         <div className="profile-icon">ava</div>
         <div className="location">Мой блог</div>
      </div>
   )
}

function Title(props: any) {
   const curInput = React.createRef()

   const NONECLASS = 'none'
   const NEARLYCLASS = 'nearly'
   const STOPCLASS = 'stop'
   const [maxLengthClass, changeMaxLengthClass] = React.useState(NONECLASS)
   const [wordsAmount, changeWordsAmount] = React.useState(0)
   const [curValue, setCurValue] = React.useState('')
   const nearlyTitleLength = 30
   const maxTitleLength = 50


   const inputChange = (event): any => {
      const inputValue = curInput.current.value //?подчеркивает value
      const valueLength = Number(inputValue.length) 
      
      
      if (inputValue.split('').reverse()[0] == '\n') {
         return
         
      }
      
      if (valueLength == maxTitleLength + 1) {
         maxLengthClass == STOPCLASS ? '' : changeMaxLengthClass(STOPCLASS)
         changeWordsAmount(curValue.length)
         return
      }
      
      if (maxLengthClass != NEARLYCLASS && valueLength < nearlyTitleLength) {
         maxLengthClass == NONECLASS ? '' : changeMaxLengthClass(NONECLASS)
      }

      if (valueLength > nearlyTitleLength && valueLength <= maxTitleLength) {
         maxLengthClass == NEARLYCLASS ? '' : changeMaxLengthClass(NEARLYCLASS)
      }

      setCurValue(inputValue)
      changeWordsAmount(valueLength)
   }

   return (
      <div className="text-title">
         <textarea value={curValue} cols={30} rows={3} ref={curInput} onChange={inputChange} placeholder="Заголовок" type="text" />
         <div className={maxLengthClass}>{maxTitleLength - wordsAmount}</div>
      </div>
   )
}

function PostText(props: any) {

   return (
      <div className="text">
         <Title />
         <Editor />
      </div>
   )
}

function Buttons(props: any) {
   let router = useRouter()
   let publishingPost = () => console.log('post are published') 
   
   return (
      <div className="buttons">
         <Button onClick={publishingPost} variant="contained">Опубликовать</Button>
      </div>
   )
}

function createPost(props: any) {

   return (
      <div className="create-post">
         <div className="body">
            <AccountParams />
            <PostText />
            <Buttons />
         </div>
      </div>
   )
}

export default createPost