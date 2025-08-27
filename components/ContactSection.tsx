'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Create Together</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
            Ready to bring your vision to life? Let's discuss your next creative project!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Start Your Project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/20 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-neon-green focus:ring-2 focus:ring-neon-green/20 transition-all"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                  Message
                </label>
                                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-neon-yellow focus:ring-2 focus:ring-neon-yellow/20 transition-all resize-none"
                    placeholder="Tell me about your creative vision..."
                    required
                  />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green text-white font-semibold rounded-lg glow hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
                          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Let's Collaborate</h3>
            
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-lg border border-white/10 hover:border-neon-pink/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-neon-blue rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-white/70">jackg2006@icloud.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-lg border border-white/10 hover:border-neon-blue/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-white/70">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-lg border border-white/10 hover:border-neon-green/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-neon-green to-neon-yellow rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-white/70">Leeds, UK</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-xl font-bold text-white mb-6">Follow Me</h4>
              <div className="flex space-x-4">
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
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-12 h-12 bg-gradient-to-r from-neon-yellow to-neon-orange rounded-full flex items-center justify-center text-white hover:glow transition-all"
                >
                  <Instagram size={24} />
                </motion.a>
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 rounded-xl border border-white/10"
            >
              <h4 className="text-lg font-bold text-white mb-2">Current Status</h4>
              <p className="text-white/70 mb-3">I'm currently available for new creative projects and collaborations!</p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-neon-green text-sm font-medium">Available for creative work</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 