import BlogPostCard from "../components/BlogPostCard";
import { getSortedPostsData } from "../lib/posts";

export default function Home() {

  const posts = getSortedPostsData();

  return (
    <div className="flex flex-col gap-4">
      {
        posts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))
      }
    </div>
  )
}
