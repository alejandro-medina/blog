import { getSortedPostsData } from "../lib/posts";

export default function Home() {

  const posts = getSortedPostsData();

  return (
    <main className="">
      <p>Blog Posts</p>
      {
        posts.map(post => (
          <div key={post.id} role="blog_post">
            <a href={`/${post.id}`}>
              <p>{post.title}</p>
            </a>
          </div>
        ))
      }
    </main>
  )
}
