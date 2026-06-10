import Link from 'next/link'
import { Dumbbell, TrendingUp, Calendar, ArrowRight } from 'lucide-react'
import { Footer } from '@/components/Footer'

const marqueeWords = [
  'Push',
  'Pull',
  'Legs',
  'Progressive Overload',
  'No Excuses',
  'Track Every Rep',
]

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-ink text-white grain">
      {/* Atmospheric glows */}
      <div className="pointer-events-none absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full bg-volt/20 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-volt/5 blur-[120px]" />

      {/* Ghost numeral watermark */}
      <span className="pointer-events-none absolute -bottom-24 -right-6 select-none font-display text-[42vw] leading-none text-white/[0.025]">
        01
      </span>

      {/* ===== HEADER ===== */}
      <header className="relative z-10 container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center bg-volt text-ink">
              <Dumbbell className="h-5 w-5" />
            </span>
            <span className="font-display text-xl uppercase tracking-wide">
              Training<span className="text-volt">Memo</span>
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium uppercase tracking-wider text-concrete transition-colors hover:text-white"
            >
              ログイン
            </Link>
            <Link
              href="/signup"
              className="bg-volt px-4 py-2 font-display text-sm uppercase tracking-wide text-ink transition-transform duration-200 hover:-translate-y-0.5"
            >
              新規登録
            </Link>
          </div>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <main className="relative z-10 flex-1">
        <section className="container mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-28">
          <p
            className="font-mono text-xs uppercase tracking-[0.35em] text-volt animate-rise"
            style={{ animationDelay: '40ms' }}
          >
            — Strength Log / No.01
          </p>

          <h1 className="mt-6 font-display uppercase leading-[0.86] tracking-tight">
            <span
              className="block text-[15vw] animate-rise sm:text-7xl md:text-8xl lg:text-9xl"
              style={{ animationDelay: '120ms' }}
            >
              鍛えて、
            </span>
            <span
              className="block text-[15vw] animate-rise sm:text-7xl md:text-8xl lg:text-9xl"
              style={{ animationDelay: '200ms' }}
            >
              記録する<span className="text-volt">。</span>
            </span>
            <span
              className="block text-stroke text-[15vw] animate-rise sm:text-7xl md:text-8xl lg:text-9xl"
              style={{ animationDelay: '280ms' }}
            >
              TRACK IT ALL
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p
              className="max-w-md text-base leading-relaxed text-concrete animate-rise"
              style={{ animationDelay: '360ms' }}
            >
              日々のトレーニングを記録し、重量の推移を可視化する。
              積み上げた数字だけが、昨日の自分を超える証になる。
            </p>

            <div
              className="flex flex-wrap gap-3 animate-rise"
              style={{ animationDelay: '440ms' }}
            >
              <Link
                href="/signup"
                className="group inline-flex items-center gap-3 bg-volt px-7 py-4 font-display uppercase tracking-wide text-ink transition-transform duration-200 hover:-translate-y-0.5"
              >
                無料で始める
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-3 border border-white/25 px-7 py-4 font-display uppercase tracking-wide text-white transition-colors duration-200 hover:border-volt hover:text-volt"
              >
                ログイン
              </Link>
            </div>
          </div>
        </section>

        {/* ===== MARQUEE ===== */}
        <div className="relative overflow-hidden border-y border-white/10 bg-volt py-3">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[0, 1].map((dup) => (
              <span key={dup} className="flex shrink-0">
                {marqueeWords.map((word) => (
                  <span
                    key={`${dup}-${word}`}
                    className="mx-6 font-display text-lg uppercase tracking-widest text-ink"
                  >
                    {word} <span className="opacity-40">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ===== FEATURES ===== */}
        <section className="container mx-auto px-4 py-20">
          <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-4">
            <h2 className="font-display text-3xl uppercase tracking-wide md:text-4xl">
              できること
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-concrete">
              3 / Features
            </span>
          </div>

          <div className="grid gap-px overflow-hidden bg-white/10 sm:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={f.title} index={i} {...f} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const features = [
  {
    icon: Dumbbell,
    title: '簡単記録',
    description:
      '種目・重量・回数をサクッと入力。前回の記録をコピーしてさらに時短。',
  },
  {
    icon: TrendingUp,
    title: '進捗の可視化',
    description: 'グラフで成長を実感。自己ベスト更新時には通知でお知らせ。',
  },
  {
    icon: Calendar,
    title: 'カレンダー管理',
    description:
      'トレーニング履歴をカレンダーで確認。継続日数も一目でわかる。',
  },
]

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  index: number
}) {
  return (
    <div
      className="group relative flex min-h-[15rem] flex-col justify-between bg-ink p-7 transition-colors duration-300 animate-rise hover:bg-ink-2"
      style={{ animationDelay: `${520 + index * 90}ms` }}
    >
      <div className="flex items-start justify-between">
        <Icon className="h-10 w-10 text-volt" />
        <span className="font-mono text-sm text-concrete">0{index + 1}</span>
      </div>
      <div>
        <h3 className="font-display text-2xl uppercase tracking-wide transition-colors group-hover:text-volt">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-concrete">{description}</p>
      </div>
      <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-volt transition-all duration-300 group-hover:w-full" />
    </div>
  )
}
