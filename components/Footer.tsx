import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CC</span>
              </div>
              <span className="text-xl font-bold text-white">
                Creative-Community
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              A private, voluntary community created to bring together individuals who want to grow, collaborate, explore opportunities, and support meaningful projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-secondary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-secondary-400 transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/community-owned" className="hover:text-secondary-400 transition-colors">
                  Community-Owned
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="hover:text-secondary-400 transition-colors">
                  In-House Initiatives
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-secondary-400 transition-colors">
                  Trusted Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Creative-Community. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              A voluntary community • Not a company • Not profit-based
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

