import { getAllPostIds } from "../../lib/posts"

export default function Post({ params: { slug } }) {
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  )
}

export function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}