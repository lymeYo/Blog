import produce, { Draft } from 'immer'
import { actionInterface } from '../../../utils/constants'

interface initialStateInterface {
   
}

let initialState: initialStateInterface = {
   
}


const postsReducer = produce((draft: Draft<initialStateInterface>, action: actionInterface) => {
   switch (action.type) {
         
   }

   return draft
}, initialState)


export default postsReducer