'use client'

import { motion } from 'framer-motion'
import { User, MapPin, Mail, Github, Linkedin, Twitter } from 'lucide-react'

export default function AboutSection() {
  const skills = [
    { name: 'React', color: 'from-blue-400 to-cyan-400' },
    { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
    { name: 'Node.js', color: 'from-green-400 to-green-600' },
    { name: 'Python', color: 'from-yellow-400 to-orange-400' },
    { name: 'AWS', color: 'from-orange-400 to-red-400' },
    { name: 'Docker', color: 'from-blue-500 to-blue-700' },
    { name: 'MongoDB', color: 'from-green-500 to-green-700' },
    { name: 'GraphQL', color: 'from-pink-500 to-purple-500' },
  ]

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that make people smile
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink via-neon-blue to-neon-green rounded-full animate-pulse-slow opacity-30"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-neon-blue via-neon-green to-neon-yellow rounded-full animate-float opacity-30"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-neon-green via-neon-yellow to-neon-orange rounded-full animate-pulse-slow opacity-30"></div>
                <div className="absolute inset-12 bg-slate-800 rounded-full flex items-center justify-center">
                  <User className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4 text-white/80">
                <MapPin className="w-5 h-5 text-neon-pink" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-white/80">
                <Mail className="w-5 h-5 text-neon-blue" />
                <span>jack@example.com</span>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-12 h-12 bg-gradient-to-r from-neon-pink to-neon-blue rounded-full flex items-center justify-center text-white hover:glow transition-all"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-full flex items-center justify-center text-white hover:glow transition-all"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-12 h-12 bg-gradient-to-r from-neon-green to-neon-yellow rounded-full flex items-center justify-center text-white hover:glow transition-all"
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                Creative Developer & Problem Solver
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly applications. 
                With over 5 years of experience in web development, I've worked on everything from small business websites 
                to large-scale enterprise applications.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community. I believe in writing clean, maintainable code 
                and creating experiences that users love.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-r ${skill.color} p-3 rounded-lg text-white font-semibold text-center text-sm hover:glow transition-all cursor-pointer`}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 