import Link from 'next/link'
import Image from 'next/image'
import { FOOTER_LINKS, FOOTER_LOCATIONS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-bg-deep border-t border-border-subtle py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image src="/logo.png" alt="TokPay" height={28} width={100} style={{ width: 'auto', height: '28px', objectFit: 'contain' }} />
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Cross-border financial infrastructure.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([group, items]) => (
            <div key={group}>
              <p className="section-label text-text-muted mb-5">{group}</p>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-text-secondary text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-body">
          <span>© 2026 TokPay. All rights reserved.</span>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {FOOTER_LOCATIONS.map(loc => (
              <span key={loc} className="px-3 py-1 rounded-full border border-border-subtle">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
