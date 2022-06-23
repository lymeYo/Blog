import Router from 'next/router'
import PostItem from '../../components/posts/PostItem'


function FullPost (props: any) {

   return (
         <PostItem isFullPost={true} />
   )
}

export default FullPost