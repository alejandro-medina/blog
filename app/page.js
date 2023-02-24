import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <>
        <div role="blog_post">
          <a href="">
            <p className='description'>Post 1</p>
          </a>
        </div>

        <div role="blog_post">
          <a href="">
            <p className='description'>Post 2.</p>
          </a>
        </div>
      </>
    </main>
  )
}
