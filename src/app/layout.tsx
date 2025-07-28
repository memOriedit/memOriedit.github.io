import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'memOriedit',
  description:
`悩みを抱える利用者と対話し、時に記憶を覗くことで問題を解決するカウンセリングADV。
解決に必要な情報はどれかを見極め、利用者の人生を救いましょう。
ただし、彼らを救うかどうかはあなた次第です。`,
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