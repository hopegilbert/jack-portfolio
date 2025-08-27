# Jack's Portfolio 🎨

A bright, colorful, and fun portfolio website built with modern web technologies. This portfolio showcases creative development work with an engaging and vibrant design that's both professional and cool.

## ✨ Features

- **Bright & Colorful Design**: Neon colors and gradient effects throughout
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Layout**: Works perfectly on all devices
- **Interactive Elements**: Hover effects, mouse followers, and dynamic components
- **Modern Tech Stack**: Built with Next.js, TypeScript, and Tailwind CSS
- **Professional Sections**: Hero, About, Projects, and Contact sections

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jacks-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
jacks-portfolio/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── AboutSection.tsx     # About section component
│   ├── ProjectsSection.tsx  # Projects showcase component
│   └── ContactSection.tsx   # Contact form component
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── README.md               # This file
```

## 🎨 Design Features

### Color Palette
- **Neon Pink**: #ff0080
- **Neon Blue**: #00ffff
- **Neon Green**: #00ff00
- **Neon Yellow**: #ffff00
- **Neon Orange**: #ff8000

### Animations
- Gradient text effects
- Floating elements
- Mouse follower
- Smooth scroll animations
- Hover effects with glow
- Rotating icons

### Components
- **Hero Section**: Eye-catching introduction with animated elements
- **About Section**: Personal information with skill badges
- **Projects Section**: Portfolio showcase with project cards
- **Contact Section**: Interactive contact form and social links

## 🔧 Customization

### Colors
Edit the `tailwind.config.js` file to modify the color palette:

```javascript
colors: {
  neon: {
    pink: '#ff0080',
    blue: '#00ffff',
    green: '#00ff00',
    yellow: '#ffff00',
    orange: '#ff8000',
  }
}
```

### Content
Update the content in each component file:
- `app/page.tsx` - Hero section content
- `components/AboutSection.tsx` - Personal information
- `components/ProjectsSection.tsx` - Project details
- `components/ContactSection.tsx` - Contact information

### Animations
Modify animations in `app/globals.css` and component files using Framer Motion.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests

## 📞 Contact

For questions or support, reach out to:
- Email: jack@example.com
- GitHub: [@jack](https://github.com/jack)

---

Made with ❤️ and lots of ☕ by Jack 