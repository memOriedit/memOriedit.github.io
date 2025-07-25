export default function Characters() {
  const characters = [
    {
      id: 1,
      name: "アリス",
      role: "勇者",
      description: "正義感が強く、仲間思いの主人公。剣術に長けており、どんな困難にも立ち向かう勇気を持つ。",
      image: "/api/placeholder/300/400"
    },
    {
      id: 2,
      name: "レオン",
      role: "魔法使い",
      description: "古代魔法の研究者。冷静沈着で知識豊富。強力な魔法でパーティーをサポートする。",
      image: "/api/placeholder/300/400"
    },
    {
      id: 3,
      name: "サクラ",
      role: "忍者",
      description: "素早い動きと隠密行動が得意。情報収集と偵察を担当し、チームの影の支援者。",
      image: "/api/placeholder/300/400"
    },
    {
      id: 4,
      name: "マックス",
      role: "戦士",
      description: "屈強な体格と不屈の精神を持つ戦士。重装備で前線に立ち、仲間を守る盾となる。",
      image: "/api/placeholder/300/400"
    }
  ]

  return (
    <section id="characters" className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          キャラクター
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          個性豊かなキャラクターたちと共に冒険の旅に出よう
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character) => (
            <div key={character.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[3/4] bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                {character.name[0]}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{character.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{character.role}</p>
                <p className="text-gray-600 leading-relaxed">{character.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}