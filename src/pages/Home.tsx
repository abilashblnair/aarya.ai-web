import React from 'react';
import { Download, Sparkles, Palette, Zap } from 'lucide-react';

function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Unleash Your Creativity with AARYA AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your ideas into stunning digital art with the power of artificial intelligence
            </p>
            <a
              href="https://apps.apple.com/app/aarya-ai"
              className="inline-flex items-center px-8 py-3 rounded-full bg-white text-black hover:bg-purple-100 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              <Download className="w-5 h-5 mr-2" />
              Download AARYA AI
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AARYA AI?</h2>
            <p className="text-gray-400">Experience the future of digital creativity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all">
              <Sparkles className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Advanced AI Technology</h3>
              <p className="text-gray-400">Powered by cutting-edge artificial intelligence to bring your ideas to life</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all">
              <Palette className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Infinite Possibilities</h3>
              <p className="text-gray-400">Create unique artworks with endless style variations and customization options</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all">
              <Zap className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Generate stunning artwork in seconds with our optimized AI engine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
            <p className="text-gray-400">Discover what's possible with AARYA AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="AI Generated Art"
              className="rounded-lg hover:opacity-75 transition-opacity"
            />
            <img
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="AI Generated Art"
              className="rounded-lg hover:opacity-75 transition-opacity"
            />
            <img
              src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="AI Generated Art"
              className="rounded-lg hover:opacity-75 transition-opacity"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;