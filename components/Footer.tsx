import Link from 'next/link'
import { Church, Phone, Mail, MapPin, Facebook, Youtube, Clock, Heart } from 'lucide-react'
import CalgaryCommunities from './CalgaryCommunities'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/staff', label: 'Our Staff' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/events', label: 'Events' },
  { href: '/watch-live', label: 'Watch Live' },
]

const socialLinks = [
  {
    name: 'Church Facebook',
    href: 'https://www.facebook.com/worldwideacceptanceministry',
    icon: Facebook,
  },
  {
    name: 'Pastor Facebook',
    href: 'https://www.facebook.com/john.john.219283/',
    icon: Facebook,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCJdC2zOZUDnICZkO2J1Uymw',
    icon: Youtube,
  },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-dark via-[#1e3a5f] to-primary text-white relative overflow-hidden">
      {/* Top Gold Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent"></div>

      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Brand Section - Wider column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center shadow-lg">
                  <Church className="w-7 h-7 text-white" />
                </div>
                <span className="text-xl font-serif font-bold">
                  Worldwide Acceptance<br />Ministries
                </span>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Come worship with us and grow in faith together. Experience God's love in a welcoming community.
              </p>
              <div className="flex items-center space-x-2 text-accent">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Building faith, Spreading love</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h3 className="font-serif text-lg font-semibold mb-6 flex items-center">
                <span className="w-8 h-0.5 bg-accent mr-3"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-accent transition-all text-sm flex items-center group hover:pl-2"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="font-serif text-lg font-semibold mb-6 flex items-center">
                <span className="w-8 h-0.5 bg-accent mr-3"></span>
                Contact Us
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3 group">
                  <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a
                    href="tel:+14036814688"
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    +1 (403) 681-4688
                  </a>
                </li>
                <li className="flex items-start space-x-3 group">
                  <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a
                    href="mailto:worldwideacceptanceministry@yahoo.com"
                    className="text-gray-300 hover:text-accent transition-colors break-words"
                  >
                    worldwideacceptanceministry@yahoo.com
                  </a>
                </li>
                <li className="flex items-start space-x-3 group">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300">
                    Unit 40, 2333 18 Ave NE<br />
                    Calgary, AB T2E 8T6
                  </span>
                </li>
                <li className="flex items-start space-x-3 group">
                  <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300">
                    Mon to Thurs<br />9AM - 3PM
                  </span>
                </li>
              </ul>
            </div>

            {/* Stay Connected */}
            <div className="lg:col-span-2">
              <h3 className="font-serif text-lg font-semibold mb-6 flex items-center">
                <span className="w-8 h-0.5 bg-accent mr-3"></span>
                Stay Connected
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-all text-sm group hover:pl-2"
                    >
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{social.name}</span>
                    </a>
                  )
                })}

                <div className="pt-4 space-y-2">
                  <Link
                    href="/prayer"
                    className="block btn-outline text-center text-sm py-2 px-4 border-white/30 text-white hover:bg-white hover:text-primary-dark"
                  >
                    Prayer Requests
                  </Link>
                  <Link
                    href="/giving"
                    className="block btn-primary text-center text-sm py-2 px-4"
                  >
                    Give Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calgary Communities SEO Section - Hidden but present for SEO */}
        <CalgaryCommunities />

        {/* Copyright Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Worldwide Acceptance Ministries. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-gray-400">
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
              <span>•</span>
              <Link href="/prayer" className="hover:text-accent transition-colors">
                Prayer
              </Link>
              <span>•</span>
              <Link href="/testimonies" className="hover:text-accent transition-colors">
                Testimonies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

