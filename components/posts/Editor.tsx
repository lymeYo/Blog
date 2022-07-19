import React from "react";

//подключил библиотеку editor
import EditorJS from '@editorjs/editorjs'

export function Editor(props: any) {
   React.useEffect(() => {
      const editor = new EditorJS({
         holder: 'editorjs',
      })
   }, [])

   return (
      <div id="editorjs"></div>
   )
}