import { Header, Providers } from '@/components';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Online Shop',
  description: 'The best pizza in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <Providers>
            <Header />
            <div className="content">
              {children}
            </div>
          </Providers>
        </div>
      </body>
    </html>
  )
}
