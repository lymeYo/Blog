import Router from "next/router"
import PostItem from "./PostItem"

function PostsList(props: any) {

   
   return (
      <ul className="list">
         <PostItem isFullPost={false} />
         <PostItem isFullPost={false} />
         <PostItem isFullPost={false} />
      </ul>
   )
}

export default PostsList