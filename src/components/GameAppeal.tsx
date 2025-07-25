export default function GameAppeal() {
  const features = [
    {
      icon: "🌍",
      title: "広大なオープンワールド",
      description: "自由に探索できる美しい世界。隠された秘密や宝物を発見しよう。"
    },
    {
      icon: "⚔️",
      title: "戦略的バトルシステム",
      description: "スキルと戦略を駆使した奥深いバトル。仲間との連携が勝利の鍵。"
    },
    {
      icon: "🎭",
      title: "感動のストーリー",
      description: "心を揺さぶる壮大な物語。キャラクターたちの成長を見守ろう。"
    },
    {
      icon: "👥",
      title: "マルチプレイ対応",
      description: "友達と一緒に冒険を楽しもう。協力プレイで困難を乗り越えよう。"
    },
    {
      icon: "🎨",
      title: "美麗なグラフィック",
      description: "最新技術による圧倒的な映像美。没入感あふれる世界を体験。"
    },
    {
      icon: "🎵",
      title: "壮大なサウンドトラック",
      description: "有名作曲家による感動的な音楽。冒険を彩る美しいメロディー。"
    }
  ]

  return (
    <section id="appeal" className="section-padding bg-white">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          ゲームの魅力
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          このゲームでしか体験できない特別な要素をご紹介
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">今すぐ冒険を始めよう！</h3>
            <p className="text-xl mb-6">無料体験版をダウンロードして、ゲームの魅力を体感してください</p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              無料体験版をダウンロード
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}