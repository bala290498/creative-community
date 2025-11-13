'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/community', label: 'Community' },
    { href: '/community-owned', label: 'Community-Owned' },
    { href: '/initiatives', label: 'In-House Initiatives' },
    { href: '/partners', label: 'Trusted Partners' },
    { href: '/membership', label: 'Membership' },
    { href: '/about', label: 'About' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Group - Perfectly aligned */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 md:gap-3 flex-shrink-0 h-full"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-base md:text-lg leading-none">CC</span>
            </div>
            <span className="text-base md:text-lg lg:text-xl font-bold text-gray-900 whitespace-nowrap leading-tight">
              Creative-Community
            </span>
          </Link>

          {/* Desktop Navigation - Evenly spaced */}
          <nav className="hidden lg:flex items-center h-full">
            <div className="flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm xl:text-base text-gray-700 hover:text-secondary-600 font-medium transition-colors duration-200 whitespace-nowrap py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Tablet Navigation - Shorter labels, evenly spaced */}
          <nav className="hidden md:flex lg:hidden items-center h-full">
            <div className="flex items-center gap-4">
              {navLinks.map((link) => {
                const shortLabel = link.label === 'In-House Initiatives' ? 'Initiatives' : 
                                  link.label === 'Community-Owned' ? 'Owned' :
                                  link.label === 'Trusted Partners' ? 'Partners' : link.label
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-secondary-600 font-medium transition-colors duration-200 whitespace-nowrap py-2"
                  >
                    {shortLabel}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Mobile Menu Button - Centered */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 flex items-center justify-center h-10 w-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-secondary-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

