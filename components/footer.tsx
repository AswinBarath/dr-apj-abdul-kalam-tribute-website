import Link from "next/link"
import { Heart, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About This Site</h3>
            <p className="text-sm leading-relaxed">
              This tribute website is dedicated to preserving and sharing the legacy of Dr. APJ Abdul Kalam for
              educational and inspirational purposes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/biography" className="hover:text-white transition-colors">
                  Biography
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="hover:text-white transition-colors">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/quotes" className="hover:text-white transition-colors">
                  Quotes & Speeches
                </Link>
              </li>
              <li>
                <Link href="/sources" className="hover:text-white transition-colors">
                  Sources
                </Link>
              </li>
            </ul>
          </div>

          {/* Sources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Primary Sources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Wikipedia <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.thehindu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  The Hindu <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://timesofindia.indiatimes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Times of India <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> to honor Dr. APJ Abdul Kalam's legacy
          </p>
          <p className="mt-2 text-gray-400">For educational and inspirational purposes only</p>
        </div>
      </div>
    </footer>
  )
}
