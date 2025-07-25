import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const newsDirectory = path.join(process.cwd(), 'content/news')

export interface NewsArticle {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  content: string
}

// Sample news data for static generation
const sampleNewsData: { [key: string]: NewsArticle } = {
  'alice-character-reveal': {
    slug: 'alice-character-reveal',
    title: '新キャラクター「アリス」の詳細情報を公開！',
    excerpt: '勇敢で仲間思いの主人公として登場するアリスの能力やバックストーリーを詳しくご紹介します。',
    date: '2025年7月25日',
    category: 'キャラクター',
    content: `
      <h2>アリスについて</h2>
      <p>新キャラクター「アリス」は、正義感が強く仲間思いの主人公として、プレイヤーの冒険をサポートします。</p>
      
      <h3>基本情報</h3>
      <ul>
        <li><strong>名前:</strong> アリス</li>
        <li><strong>職業:</strong> 勇者</li>
        <li><strong>年齢:</strong> 18歳</li>
        <li><strong>出身:</strong> 光の王国</li>
      </ul>
      
      <h3>能力とスキル</h3>
      <p>アリスは剣術に長けており、以下のような特殊能力を持っています：</p>
      <ul>
        <li><strong>聖なる剣技:</strong> 光の力を宿した剣で敵を浄化</li>
        <li><strong>仲間への激励:</strong> パーティー全体の能力を向上</li>
        <li><strong>回復の光:</strong> 傷ついた仲間を癒す</li>
      </ul>
      
      <h3>バックストーリー</h3>
      <p>光の王国の騎士団で育ったアリスは、幼い頃から正義感が人一倍強く、困っている人を見過ごすことができない性格でした。
      ある日、闇の勢力が世界を脅かしていることを知り、仲間たちと共に立ち上がることを決意します。</p>
      
      <p>彼女の持つ純粋な心と強い意志は、どんな困難な状況でも希望の光となり、仲間たちを導いていきます。</p>
      
      <h3>プレイヤーの皆様へ</h3>
      <p>アリスと共に壮大な冒険の旅に出かけましょう。彼女の勇気と優しさが、きっと皆様の心に響くはずです。</p>
    `
  },
  'battle-system-update': {
    slug: 'battle-system-update',
    title: 'バトルシステムの大幅アップデート実装',
    excerpt: 'より戦略的で楽しいバトル体験を提供するため、バトルシステムを全面的に見直しました。',
    date: '2025年7月23日',
    category: 'アップデート',
    content: `
      <h2>新バトルシステムの特徴</h2>
      <p>今回のアップデートでは、より戦略性の高いバトル体験を提供するため、システムを根本から見直しました。</p>
      
      <h3>主な変更点</h3>
      <ul>
        <li><strong>ターン制からリアルタイム制へ:</strong> よりスピーディーで緊張感のあるバトル</li>
        <li><strong>連携攻撃システム:</strong> 仲間との協力で強力な攻撃が可能</li>
        <li><strong>環境を活用した戦術:</strong> フィールドの地形や障害物を戦略に組み込める</li>
        <li><strong>スキルカスタマイズ:</strong> プレイヤーの好みに合わせてスキルを組み合わせ</li>
      </ul>
      
      <h3>連携攻撃システム</h3>
      <p>新しく追加された連携攻撃システムでは、パーティーメンバー同士が協力することで、
      単体では不可能な強力な攻撃を繰り出すことができます。</p>
      
      <p>タイミングを合わせてボタンを押すことで発動する連携攻撃は、
      見た目にも美しく、戦略的な深みを加えています。</p>
      
      <h3>環境活用システム</h3>
      <p>バトルフィールドの環境要素を戦略に組み込むことができるようになりました：</p>
      <ul>
        <li>高台からの攻撃でダメージボーナス</li>
        <li>水辺での雷魔法の威力向上</li>
        <li>障害物を利用した防御戦術</li>
      </ul>
      
      <h3>開発チームからのメッセージ</h3>
      <p>「プレイヤーの皆様により楽しんでいただけるよう、チーム一丸となって開発に取り組みました。
      新しいバトルシステムで、これまでにない戦略的な楽しさを体験してください！」</p>
    `
  },
  'mystical-forest-area': {
    slug: 'mystical-forest-area',
    title: 'オープンワールドの新エリア「神秘の森」を追加',
    excerpt: '美しい自然と隠された秘密に満ちた新エリアで、さらなる冒険をお楽しみください。',
    date: '2025年7月20日',
    category: 'コンテンツ',
    content: `
      <h2>神秘の森について</h2>
      <p>新たに追加された「神秘の森」は、美しい自然と古代の魔法が息づく特別なエリアです。</p>
      
      <h3>エリアの特徴</h3>
      <ul>
        <li><strong>幻想的な景観:</strong> 光る花々と浮遊する島々</li>
        <li><strong>古代遺跡:</strong> 失われた文明の謎を解き明かそう</li>
        <li><strong>新モンスター:</strong> 森の精霊や魔法生物との出会い</li>
        <li><strong>隠された宝物:</strong> 探索の先に待つ貴重なアイテム</li>
      </ul>
      
      <h3>新クエストライン</h3>
      <p>神秘の森では、森の守護者との出会いから始まる壮大なクエストラインが展開されます。
      古代の封印を解き、森に隠された真実を明らかにしていく物語をお楽しみください。</p>
      
      <h3>新アイテムと装備</h3>
      <p>神秘の森でしか手に入らない特別なアイテムや装備が多数追加されました：</p>
      <ul>
        <li><strong>森の加護の剣:</strong> 自然の力を宿した聖剣</li>
        <li><strong>精霊のローブ:</strong> 魔法防御力を大幅に向上</li>
        <li><strong>古代の知識書:</strong> 新しい魔法を習得可能</li>
      </ul>
      
      <h3>探索のヒント</h3>
      <p>神秘の森を効率よく探索するためのヒントをご紹介します：</p>
      <ul>
        <li>光る花の近くには隠されたアイテムがあることが多い</li>
        <li>古代文字の石碑は重要な手がかりを示している</li>
        <li>森の精霊と友好関係を築くと特別な情報を教えてくれる</li>
      </ul>
      
      <p>美しく神秘的な新エリアで、新たな冒険をお楽しみください！</p>
    `
  }
}

export function getAllNewsSlugs(): string[] {
  return Object.keys(sampleNewsData)
}

export function getNewsArticle(slug: string): NewsArticle | null {
  return sampleNewsData[slug] || null
}

export function getAllNewsArticles(): NewsArticle[] {
  return Object.values(sampleNewsData).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

// Function to process markdown files (for future use when markdown files are added)
export async function processMarkdownFile(filePath: string): Promise<NewsArticle | null> {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
    
    return {
      slug: path.basename(filePath, '.md'),
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      category: data.category,
      content: processedContent.toString()
    }
  } catch (error) {
    console.error('Error processing markdown file:', error)
    return null
  }
}