'use client'

export default function Header() {
  const navItems = [
    { name: 'ホーム', href: '#hero' },
    { name: 'キャラクター', href: '#characters' },
    { name: 'ゲームの魅力', href: '#appeal' },
    { name: 'スタッフ', href: '#staff' },
    { name: 'Twitter', href: '#twitter' },
    { name: 'ニュース', href: '#news' },
    { name: 'ガイドライン', href: '/guidelines' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-50">
      <nav className="container-max">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-blue-600">
            ゲームタイトル
          </div>
          
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}