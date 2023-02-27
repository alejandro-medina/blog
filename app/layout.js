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
          <main className='mt-36 mb-16 lg:mb-36 min-h-screen'>
            <div className='px-4'>
              {children}
            </div>
          </main>
          <footer>
            <div className='w-full py-4'>
              <p className='text-center text-gray-500 text-sm'>
                © {new Date().getFullYear()} Alejandro Medina
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
