import Header from '../components/Header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body>
        <div className='container mx-auto'>
          <header>
            <Header />
          </header>
          <main className='mt-36'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
