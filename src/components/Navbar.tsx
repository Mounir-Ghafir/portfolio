'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-center gap-6 py-4 border-b">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={
            pathname === href
              ? 'font-bold underline underline-offset-4'
              : 'text-gray-500 hover:text-gray-900'
          }
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}