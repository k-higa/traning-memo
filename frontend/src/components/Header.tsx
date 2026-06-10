'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dumbbell, Home, Plus, History, Calendar, BarChart3, List, LogOut, ClipboardList, Scale, Settings } from 'lucide-react'
import { removeToken } from '@/lib/auth'
import { useRouter } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    removeToken()
    router.push('/login')
  }

  const navItems = [
    { href: '/dashboard', label: 'ホーム', icon: Home },
    { href: '/workout/new', label: '記録', icon: Plus },
    { href: '/calendar', label: 'カレンダー', icon: Calendar },
    { href: '/menus', label: 'メニュー', icon: ClipboardList },
    { href: '/body-weight', label: '体重', icon: Scale },
    { href: '/stats', label: '統計', icon: BarChart3 },
  ]

  return (
    <header className="bg-ink/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center bg-volt text-ink">
              <Dumbbell className="h-5 w-5" />
            </span>
            <span className="font-display text-lg uppercase tracking-wide text-white hidden sm:block">
              Training<span className="text-volt">Memo</span>
            </span>
          </Link>

          {/* ナビゲーション */}
          <nav className="flex items-center gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'text-volt'
                      : 'text-concrete hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:block">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* ユーザーメニュー */}
          <div className="flex items-center gap-0.5">
            <Link
              href="/settings"
              className={`flex items-center gap-2 px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                pathname === '/settings'
                  ? 'text-volt'
                  : 'text-concrete hover:text-white'
              }`}
            >
              <Settings className="h-5 w-5" />
              <span className="hidden sm:block">設定</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium uppercase tracking-wider text-concrete hover:text-volt transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span className="hidden sm:block">ログアウト</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

