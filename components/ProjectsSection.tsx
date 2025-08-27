'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Palette, Zap } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      color: "from-neon-pink to-neon-blue",
      icon: Code
    },
    {
      title: "Creative Portfolio",
      description: "A stunning portfolio website with smooth animations and modern design. Built with Next.js and Framer Motion for an engaging user experience.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
      github: "#",
      live: "#",
      color: "from-neon-blue to-neon-green",
      icon: Palette
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Firebase", "Vuex", "Vuetify"],
      github: "#",
      live: "#",
      color: "from-neon-green to-neon-yellow",
      icon: Zap
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with interactive maps, detailed forecasts, and location-based services using modern APIs.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
      github: "#",
      live: "#",
      color: "from-neon-yellow to-neon-orange",
      icon: Eye
    },
    {
      title: "Social Media Clone",
      description: "A social media platform with features like posts, comments, likes, and real-time notifications using WebSocket technology.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "#",
      live: "#",
      color: "from-neon-orange to-neon-pink",
      icon: Code
    },
    {
      title: "AI Chat Application",
      description: "An intelligent chat application powered by AI with natural language processing, sentiment analysis, and smart responses.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["Python", "OpenAI API", "FastAPI", "React"],
      github: "#",
      live: "#",
      color: "from-neon-pink to-neon-blue",
      icon: Zap
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
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Here are some of the exciting projects I've worked on. Each one tells a unique story of creativity and innovation.
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
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 border border-neon-green text-neon-green rounded-lg text-sm font-medium hover:bg-neon-green hover:text-black transition-all"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
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
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 