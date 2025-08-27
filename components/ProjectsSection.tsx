'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Palette, Zap } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      title: "Brand Identity Design",
      description: "Complete brand identity design for a modern tech startup, including logo design, color palette, typography, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Design", "Typography"],
      github: "#",
      live: "#",
      color: "from-neon-pink to-neon-blue",
      icon: Palette
    },
    {
      title: "Editorial Photography Series",
      description: "A stunning editorial photography series exploring urban architecture and human connection in modern cityscapes.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      technologies: ["Photography", "Lightroom", "Photo Editing", "Composition"],
      github: "#",
      live: "#",
      color: "from-neon-blue to-neon-green",
      icon: Eye
    },
    {
      title: "Digital Art Collection",
      description: "A vibrant collection of digital artwork featuring abstract compositions and experimental color theory.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=300&fit=crop",
      technologies: ["Digital Art", "Procreate", "Color Theory", "Composition"],
      github: "#",
      live: "#",
      color: "from-neon-green to-neon-yellow",
      icon: Palette
    },
    {
      title: "UI/UX Design System",
      description: "Comprehensive design system for a mobile app, including user interface components, user experience flows, and interactive prototypes.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      technologies: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
      github: "#",
      live: "#",
      color: "from-neon-yellow to-neon-orange",
      icon: Zap
    },
    {
      title: "Product Photography",
      description: "Professional product photography showcasing lifestyle and commercial applications with creative lighting and composition.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      technologies: ["Product Photography", "Lighting", "Composition", "Post-Processing"],
      github: "#",
      live: "#",
      color: "from-neon-orange to-neon-pink",
      icon: Eye
    },
    {
      title: "Illustration Series",
      description: "A whimsical illustration series featuring character design and storytelling through visual narratives and expressive artwork.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
      technologies: ["Illustration", "Character Design", "Storytelling", "Digital Drawing"],
      github: "#",
      live: "#",
      color: "from-neon-pink to-neon-blue",
      icon: Palette
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">My Work</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Here are some of my creative projects. Each piece tells a unique story through design, photography, and digital art.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-pink transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-neon-pink to-neon-blue text-white rounded-lg text-sm font-medium hover:glow transition-all"
                    >
                      <Eye size={16} />
                      <span>View</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 border border-neon-green text-neon-green rounded-lg text-sm font-medium hover:bg-neon-green hover:text-black transition-all"
                    >
                      <ExternalLink size={16} />
                      <span>Details</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
                      <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green text-white font-semibold rounded-full glow hover:shadow-lg transition-all duration-300"
            >
              View All Work
            </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 