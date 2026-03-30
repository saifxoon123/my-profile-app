import './globals.css'
import { ReactNode } from 'react'
import Header from './Header'
import Link from 'next/link'

export const metadata = {
  title: 'Monir & Sanzida Group',
  description: 'Chemical Companies Website',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 flex flex-col min-h-screen">

        <Header />

        <main className="p-6 flex-grow">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-16">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-12">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Monir & Sanzida Chemical
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Trusted industrial and cleaning chemical supplier delivering
            high-quality, safe, and reliable chemical solutions across Bangladesh.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-yellow-400 transition">Facebook</a>
            <a href="#" className="hover:text-yellow-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-yellow-400 transition">WhatsApp</a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact Info
          </h4>
          <ul className="space-y-3 text-gray-400">
            <li>Email: info@monirchemical.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Location: Bangladesh</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/monir-chemical" className="hover:text-yellow-400 transition">
                Monir Chemical
              </Link>
            </li>
            <li>
              <Link href="/sanzida-chemical" className="hover:text-yellow-400 transition">
                Sanzida Chemical
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      {/* Bottom Bar */}
      <div className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Monir & Sanzida Chemical. All Rights Reserved.
      </div>

    </footer>
  );
}