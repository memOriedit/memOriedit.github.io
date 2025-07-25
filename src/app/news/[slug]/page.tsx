import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getNewsArticle, getAllNewsSlugs } from '@/lib/news'

interface NewsPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllNewsSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default function NewsPage({ params }: NewsPageProps) {
  const article = getNewsArticle(params.slug)

  if (!article) {
    notFound()
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
            <Link href="/news" className="hover:text-blue-600 transition-colors">
              ニュース
            </Link>
            <span>/</span>
            <span className="text-gray-900">{article.title}</span>
          </div>
        </div>
      </nav>

      {/* Article */}
      <main className="container-max py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <time className="text-gray-500">{article.date}</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {article.excerpt}
            </p>
          </header>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link 
              href="/news"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ニュース一覧に戻る
            </Link>
            
            <Link 
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              ホームに戻る
            </Link>
          </div>
        </article>
      </main>
    </div>
  )
}

function getCategoryColor(category: string) {
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