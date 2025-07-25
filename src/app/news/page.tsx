import Link from 'next/link'
import { getAllNewsArticles } from '@/lib/news'

export default function NewsPage() {
  const articles = getAllNewsArticles()

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'キャラクター': 'bg-blue-100 text-blue-800',
      'アップデート': 'bg-green-100 text-green-800',
      'コンテンツ': 'bg-purple-100 text-purple-800',
      'インタビュー': 'bg-orange-100 text-orange-800',
      '音楽': 'bg-pink-100 text-pink-800',
      'お知らせ': 'bg-gray-100 text-gray-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container-max py-4">
          <Link 
            href="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            ゲームタイトル
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="container-max py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              ホーム
            </Link>
            <span>/</span>
            <span className="text-gray-900">ニュース</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container-max py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ニュース一覧
            </h1>
            <p className="text-xl text-gray-600">
              ゲームの最新情報やアップデート情報をお届けします
            </p>
          </header>

          <div className="space-y-8">
            {articles.map((article) => (
              <article key={article.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <time className="text-gray-500">{article.date}</time>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-blue-600 transition-colors">
                    <Link href={`/news/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  
                  <Link 
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    続きを読む
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ホームに戻る
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}