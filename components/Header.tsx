'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Church, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navStructure = {
  about: {
    label: 'About',
    items: [
      { href: '/about', label: 'About Us' },
      { href: '/staff', label: 'Our Staff' },
    ]
  },
  ministries: {
    label: 'Ministries',
    items: [
      { href: '/ministries', label: 'All Ministries' },
    ]
  },
  connect: {
    label: 'Connect',
    items: [
      { href: '/contact', label: 'Contact Us' },
      { href: '/events', label: 'Events' },
      { href: '/prayer', label: 'Prayer Requests' },
      { href: '/testimonies', label: 'Testimonies' },
    ]
  },
  media: {
    label: 'Media',
    items: [
      { href: '/watch-live', label: 'Watch Live' },
      { href: '/social-media', label: 'Social Media' },
    ]
  }
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (openDropdown && !dropdownRefs.current[openDropdown]?.contains(target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [openDropdown])

  const handleDropdownToggle = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }

  const handleMobileToggle = (key: string) => {
    setMobileOpenSection(mobileOpenSection === key ? null : key)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group flex-shrink-0">
            <Church className="w-8 h-8 text-primary-dark group-hover:text-accent transition-colors" />
            <span className="text-lg md:text-xl font-serif font-bold text-primary-dark whitespace-nowrap">
              Worldwide Acceptance
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            <Link
              href="/"
              className="text-gray-700 hover:text-accent font-medium transition-colors relative group py-2"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>

            {Object.entries(navStructure).map(([key, section]) => (
              <div
                key={key}
                className="relative"
                ref={(el) => {
                  dropdownRefs.current[key] = el
                }}
              >
                <button
                  onClick={() => handleDropdownToggle(key)}
                  className="flex items-center gap-1 text-gray-700 hover:text-accent font-medium transition-colors py-2 group"
                >
                  {section.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openDropdown === key ? 'rotate-180' : ''}`}
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                </button>

                <AnimatePresence>
                  {openDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-strong border border-gray-100 overflow-hidden min-w-[200px]"
                    >
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-6 py-3 text-gray-700 hover:bg-accent/10 hover:text-accent transition-all hover:pl-8"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline py-2 px-6 text-sm"
            >
              Google
            </a>
            <Link
              href="/giving"
              className="btn-primary py-2 px-6 text-sm"
            >
              Give
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t"
            >
              <div className="px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-gray-700 hover:text-accent font-medium transition-colors border-b border-gray-100"
                >
                  Home
                </Link>

                {Object.entries(navStructure).map(([key, section]) => (
                  <div key={key} className="border-b border-gray-100">
                    <button
                      onClick={() => handleMobileToggle(key)}
                      className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-accent font-medium transition-colors"
                    >
                      {section.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${mobileOpenSection === key ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileOpenSection === key && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 pb-2 space-y-2"
                        >
                          {section.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2 text-gray-600 hover:text-accent transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 btn-outline text-center"
                >
                  Google
                </a>
                <Link
                  href="/giving"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block btn-primary text-center"
                >
                  Give
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
