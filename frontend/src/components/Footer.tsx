import Link from 'next/link'
import { Dumbbell } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-concrete">
            <Dumbbell className="h-5 w-5 text-volt" />
            <span className="font-display uppercase tracking-wide">Training Memo</span>
          </div>
          <div className="flex items-center gap-6 text-sm uppercase tracking-wider text-concrete">
            <Link href="/terms" className="hover:text-volt transition-colors">
              利用規約
            </Link>
            <Link href="/privacy" className="hover:text-volt transition-colors">
              プライバシーポリシー
            </Link>
          </div>
          <p className="font-mono text-xs text-gray-600">© 2026 Training Memo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
