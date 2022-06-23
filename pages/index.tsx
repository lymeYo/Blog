import Router from 'next/router'
import { useRouter } from 'next/router'
import Posts from '../components/posts/Posts';



export default function HomePage() {
  const router = useRouter()
  return (
    <>
      <Posts />
    </>
  )
}