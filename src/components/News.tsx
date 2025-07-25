import Link from 'next/link'

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: "新キャラクター「アリス」の詳細情報を公開！",
      excerpt: "勇敢で仲間思いの主人公として登場するアリスの能力やバックストーリーを詳しくご紹介します。",
      date: "2025年7月25日",
      category: "キャラクター",
      slug: "alice-character-reveal"
    },
    {
      id: 2,
      title: "バトルシステムの大幅アップデート実装",
      excerpt: "より戦略的で楽しいバトル体験を提供するため、バトルシステムを全面的に見直しました。",
      date: "2025年7月23日",
      category: "アップデート",
      slug: "battle-system-update"
    },
    {
      id: 3,
      title: "オープンワールドの新エリア「神秘の森」を追加",
      excerpt: "美しい自然と隠された秘密に満ちた新エリアで、さらなる冒険をお楽しみください。",
      date: "2025年7月20日",
      category: "コンテンツ",
      slug: "mystical-forest-area"
    },
    {
      id: 4,
      title: "開発チームインタビュー：ゲーム制作の裏側",
      excerpt: "ディレクターとアートディレクターが語る、ゲーム開発の苦労と喜びについて。",
      date: "2025年7月18日",
      category: "インタビュー",
      slug: "dev-team-interview"
    },
    {
      id: 5,
      title: "サウンドトラック試聴版を公開",
      excerpt: "ゲームを彩る美しい音楽の一部を先行公開。作曲家のコメントも併せてお楽しみください。",
      date: "2025年7月15日",
      category: "音楽",
      slug: "soundtrack-preview"
    },
    {
      id: 6,
      title: "ベータテスト参加者募集開始",
      excerpt: "正式リリース前の貴重な体験機会！ベータテストにご参加いただける方を募集しています。",
      date: "2025年7月12日",
      category: "お知らせ",
      slug: "beta-test-recruitment"
    }
  ]

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
    <section id="news" className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          最新ニュース
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          ゲームの最新情報やアップデート情報をお届け
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                  <time className="text-gray-500 text-sm">{article.date}</time>
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                  <Link href={`/news/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <Link 
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
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

        <div className="text-center mt-12">
          <Link 
            href="/news"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors duration-200 inline-block"
          >
            すべてのニュースを見る
          </Link>
        </div>
      </div>
    </section>
  )
}