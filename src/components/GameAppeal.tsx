export default function GameAppeal() {
  return (
    <section id="appeal" className="section-padding bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container-max max-w-4xl">
        
        {/* 注意事項 */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">⚠️</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-300">
            【注意事項】←ぜったいよめ
          </h2>
          <div className="bg-red-900/30 border border-red-500/50 p-6 rounded-lg mb-4">
            <p className="text-gray-200 leading-relaxed mb-4">・当店は施術失敗時におけるお客様の安全を保障しません。</p>
            <p className="text-gray-200 leading-relaxed mb-4">・施術には後遺症(認知症・うつ病・せん妄など)が発生する恐れがあります。</p>
            <p className="text-gray-200 leading-relaxed mb-4">・上記の事柄に対し、当店が治療費を出すことはありません。</p>
            <p className="text-yellow-200 font-semibold">・以上の点についてご了承いただける方のみ呼び鈴を押してください。</p>
          </div>
        </div>

        {/* 店名・紹介 */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🏪</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-purple-300">
            【おもいでや】
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>都会から二駅離れた街、妖しい雰囲気が漂う夜の街。</p>
            <p>路地裏の階段を下った先に、その店はひっそりと。</p>
            
            <div className="my-8">
              <p className="text-purple-200 font-semibold text-xl mb-2">「消したい記憶を消しましょう」</p>
              <p className="text-purple-200 font-semibold text-xl">「消したい想いを消しましょう」</p>
            </div>
            
            <p className="italic">誰もが一度は考える記憶の消去、その力を使う者は人間なのでしょうか？</p>
          </div>
        </div>

        {/* 仕事内容 */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">💭</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-300">
            【仕事の内容】
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>会話と記憶、異なる二つの情報を探るアドベンチャー。</p>
            <p>やってくるお客さんは悩みを抱えていますが、店主がそれに答えるかどうかはあなた次第。</p>
            <p>嘘を見抜き、真意を詳らかにしましょう。大丈夫、難しいことではありません。</p>
          </div>
        </div>

        {/* 店主の言葉 */}
        <div className="text-center mb-16">
          <blockquote className="text-2xl md:text-3xl italic text-purple-200 mb-6 leading-relaxed">
            「相手の望みを聞き出す、あとは適当にやるだけだよ」
          </blockquote>
          <p className="text-xl md:text-2xl text-gray-400">──ほらね？</p>
        </div>

        {/*

        Call to action
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/80 to-red-900/80 text-white p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4 text-purple-200">記憶の扉を開く準備はできましたか？</h3>
            <p className="text-xl mb-6 text-gray-300">深い夜の街で、あなたを待つ謎めいた物語</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200 shadow-lg border border-purple-400/50">
              呼び鈴を押す
            </button>
          </div>
        </div>
        */}
      </div>
    </section>
  )
}