import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Download, Menu, X, Github, Twitter, Instagram } from 'lucide-react';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <img src="/logo.png" alt="AARYA AI Logo" className="h-8 w-auto mr-2" />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
                <Link to="/terms" className="hover:text-purple-400 transition-colors">Terms</Link>
                <Link to="/privacy" className="hover:text-purple-400 transition-colors">Privacy</Link>
                <a
                  href="https://apps.apple.com/app/aarya-ai"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white text-black hover:bg-purple-100 transition-all"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md hover:bg-white/10"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/terms"
                  className="block px-3 py-2 rounded-md hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terms
                </Link>
                <Link
                  to="/privacy"
                  className="block px-3 py-2 rounded-md hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy
                </Link>
                <a
                  href="https://apps.apple.com/app/aarya-ai"
                  className="block px-3 py-2 rounded-md hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download App
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">AARYA AI</h3>
                <p className="text-gray-400">Unleash your creativity with the power of artificial intelligence.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">aarya.ai.info@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://x.com/aarya_ai" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/aarya.ai.info/" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
              <p>© {new Date().getFullYear()} AARYA AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;