import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ゲームホームページ',
  description: 'ゲームの公式ホームページ - キャラクター、スタッフ、最新ニュースをお届け',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  )
}