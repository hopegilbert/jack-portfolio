'use client'

import { motion } from 'framer-motion'
import { User, MapPin, Mail, Github, Linkedin, Twitter } from 'lucide-react'

export default function AboutSection() {
  const skills = [
    { name: 'Digital Design', color: 'from-neon-pink to-neon-blue' },
    { name: 'Photography', color: 'from-neon-blue to-neon-green' },
    { name: 'Adobe Creative Suite', color: 'from-neon-green to-neon-yellow' },
    { name: 'Digital Art', color: 'from-neon-yellow to-neon-orange' },
    { name: 'UI/UX Design', color: 'from-neon-orange to-neon-pink' },
    { name: 'Photo Editing', color: 'from-neon-pink to-neon-blue' },
    { name: 'Illustration', color: 'from-neon-blue to-neon-green' },
    { name: 'Brand Design', color: 'from-neon-green to-neon-yellow' },
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
            I'm a passionate digital artist who loves creating visual experiences that inspire and captivate
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
                Digital Designer & Visual Artist
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                I'm a digital designer and visual artist with a passion for creating stunning, impactful designs that tell stories. 
                With expertise in digital design, photography, and digital art, I've worked on everything from brand identities 
                to editorial photography and digital illustrations.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                When I'm not creating, you can find me exploring new techniques, experimenting with different mediums, 
                or capturing the world through my lens. I believe in creating designs that not only look beautiful 
                but also communicate powerful messages and evoke emotions.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h4>
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