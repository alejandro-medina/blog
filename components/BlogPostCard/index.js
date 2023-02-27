import styles from './BlogPostCard.module.css';

export default function BlogPostCard({ post }) {
  const { blog__post__card } = styles;
  return (
    <a href={`/${post.id}`} role="blog_post" className={blog__post__card}>
      <p>Publicado el {post.date}</p>
      <p>{post.title}</p>
    </a>
  )
}