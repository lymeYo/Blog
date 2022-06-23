import PostsList from "./PostsList"

function Posts(props: any) {
   return (
      <div className="posts">
         <PostsList />
         <div className="comments">comments</div>
      </div>
   )
}

export default Posts