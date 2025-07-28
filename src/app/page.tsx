import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Characters from '@/components/Characters'
import GameAppeal from '@/components/GameAppeal'
import Staff from '@/components/Staff'
import TwitterEmbed from '@/components/TwitterEmbed'
import News from '@/components/News'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <News />
      <GameAppeal />
      <Staff />
    </main>
  )
}