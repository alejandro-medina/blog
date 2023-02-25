"use client";

import { useEffect, useState } from 'react'

export default function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, []);


  return (
    <main className="">
      <p>Blog</p>
    </main>
  )
}
