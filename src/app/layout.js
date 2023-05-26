import './globals.css'
import { Playfair_Display } from 'next/font/google'
const playfair_display = Playfair_Display({
  weights: [400, 700],
  display: 'swap',
  subsets: ['latin'],
});

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Tehseena Nazneen</title>
        <meta name="description" content="Instructional Design Portfolio of Tehseena Nazneen" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${playfair_display.className} text-stone-900`}>
        <div className='container mx-auto'>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
