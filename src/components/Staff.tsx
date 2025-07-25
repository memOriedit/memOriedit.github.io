export default function Staff() {
  const staffMembers = [
    {
      id: 1,
      name: "田中 太郎",
      role: "ゲームディレクター",
      description: "10年以上の経験を持つベテランディレクター。数々のヒット作を手がけてきた。",
      avatar: "田"
    },
    {
      id: 2,
      name: "佐藤 花子",
      role: "アートディレクター",
      description: "美術大学出身。独創的なビジュアルデザインでゲーム世界を彩る。",
      avatar: "佐"
    },
    {
      id: 3,
      name: "鈴木 一郎",
      role: "プログラマー",
      description: "技術力に定評があり、革新的なゲームシステムの実装を担当。",
      avatar: "鈴"
    },
    {
      id: 4,
      name: "高橋 美咲",
      role: "サウンドデザイナー",
      description: "音楽とサウンドエフェクトで感動的な体験を創造する音響のスペシャリスト。",
      avatar: "高"
    },
    {
      id: 5,
      name: "伊藤 健太",
      role: "シナリオライター",
      description: "心に響くストーリーテリングで、プレイヤーを物語の世界に引き込む。",
      avatar: "伊"
    },
    {
      id: 6,
      name: "山田 麻衣",
      role: "UIデザイナー",
      description: "使いやすく美しいインターフェースデザインでプレイヤー体験を向上させる。",
      avatar: "山"
    }
  ]

  return (
    <section id="staff" className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          開発スタッフ
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          情熱を持ってゲーム制作に取り組む開発チームをご紹介
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                {member.avatar}
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Team message */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">開発チームからのメッセージ</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              私たちは、プレイヤーの皆様に最高のゲーム体験をお届けするため、
              日々情熱を持って開発に取り組んでいます。
              一人ひとりの専門性を活かし、チーム一丸となって
              素晴らしい作品を創り上げています。
              皆様に愛されるゲームを目指して、これからも頑張ります！
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}