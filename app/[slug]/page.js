import { getAllPostIds, getPostData } from "../../lib/posts"

export default async function Post({ params: { slug } }) {

  const postData = await getPostData(slug);

  return (
    <div>
      <h1 className="text-2xl">
        {postData.title}
      </h1>

      <div className="mt-4" dangerouslySetInnerHTML={{__html:postData.contentHtml}} />
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