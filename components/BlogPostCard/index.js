import styles from './BlogPostCard.module.css';

export default function BlogPostCard({ post }) {
  const { blog__post__card } = styles;
  return (
    <div role="blog_post" className={blog__post__card}>
      <a href={`/${post.id}`}>
        <p>{post.title}</p>
      </a>
    </div>
  )
}