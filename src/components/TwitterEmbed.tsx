export default function TwitterEmbed() {
  // Mock Twitter posts for demonstration
  const tweets = [
    {
      id: 1,
      username: "GameOfficial",
      handle: "@gameofficial",
      time: "2時間前",
      content: "新しいキャラクター「アリス」の詳細情報を公開しました！勇敢で仲間思いの主人公として、皆様の冒険をサポートします。 #ゲーム #キャラクター紹介",
      likes: 245,
      retweets: 89,
      replies: 32
    },
    {
      id: 2,
      username: "GameOfficial",
      handle: "@gameofficial", 
      time: "1日前",
      content: "開発チームからの最新アップデート！新しいバトルシステムのテストが完了しました。より戦略的で楽しいバトルをお楽しみください！ #開発日記 #バトルシステム",
      likes: 189,
      retweets: 67,
      replies: 28
    },
    {
      id: 3,
      username: "GameOfficial", 
      handle: "@gameofficial",
      time: "3日前",
      content: "美しいゲーム世界のスクリーンショットを公開！広大なオープンワールドで自由な冒険をお楽しみください。 #スクリーンショット #オープンワールド",
      likes: 312,
      retweets: 156,
      replies: 45
    }
  ]

  return (
    <section id="twitter" className="section-padding bg-white">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          最新情報
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Twitterで最新の開発情報やアップデートをチェック
        </p>
        
        <div className="max-w-2xl mx-auto space-y-6">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-bold text-gray-900">{tweet.username}</h3>
                    <span className="text-gray-500">{tweet.handle}</span>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-500">{tweet.time}</span>
                  </div>
                  <p className="text-gray-800 mb-4 leading-relaxed">{tweet.content}</p>
                  <div className="flex items-center space-x-6 text-gray-500">
                    <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>{tweet.replies}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>{tweet.retweets}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>{tweet.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200">
            Twitterでフォロー
          </button>
        </div>
      </div>
    </section>
  )
}