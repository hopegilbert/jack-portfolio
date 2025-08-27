'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code, Palette, Zap, Heart, Star, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-neon-pink rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-neon-blue rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-neon-green rounded-full opacity-25 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-neon-yellow rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-neon-orange rounded-full opacity-30 animate-pulse-slow"></div>
      </div>

      {/* Mouse follower */}
      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-neon-pink to-neon-blue rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            Jack.dev
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex space-x-8"
          >
            <a href="#about" className="text-white hover:text-neon-pink transition-colors">About</a>
            <a href="#projects" className="text-white hover:text-neon-blue transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-neon-green transition-colors">Contact</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="gradient-text">Hello, I'm Jack</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light">
              Creative Developer & Digital Artist
            </p>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              I craft digital experiences that are as bright and colorful as they are functional. 
              Let's build something amazing together! ✨
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-blue text-white font-semibold rounded-full glow hover:scale-105 transition-transform duration-300 flex items-center gap-2">
              <Sparkles size={20} />
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-neon-green text-neon-green font-semibold rounded-full hover:bg-neon-green hover:text-black transition-all duration-300 flex items-center gap-2">
              <Heart size={20} />
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <ArrowDown className="text-white/60 w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-10 text-neon-pink opacity-30"
        >
          <Code size={40} />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-10 text-neon-blue opacity-30"
        >
          <Palette size={40} />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/4 text-neon-green opacity-30"
        >
          <Zap size={40} />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/3 text-neon-yellow opacity-30"
        >
          <Star size={40} />
        </motion.div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2024 Jack. Made with ❤️ and lots of ☕
          </p>
        </div>
      </footer>
    </main>
  )
} 