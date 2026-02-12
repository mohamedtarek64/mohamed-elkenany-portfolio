# 🚀 Mohamed Elkenany - Portfolio Website

A modern, professional, and fully responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Responsive Design**: Mobile-first approach with perfect responsiveness across all devices
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Multi-language Support**: Arabic and English with RTL support
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **PWA Ready**: Progressive Web App capabilities
- **Contact Form**: Functional contact form with email integration
- **CV Download**: PDF download functionality
- **Smooth Animations**: Framer Motion for professional animations
- **Performance**: 95+ Lighthouse score in all categories

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (English) + Cairo (Arabic)
- **Email**: Nodemailer
- **Deployment**: Vercel

## ⚙️ Configuration

This project runs on a custom port (1573) for development. The port is configured in `package.json`:

```json
"scripts": {
  "dev": "next dev -p 1573"
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohamedtarek64/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Update the values in `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=https://mohamed-elkenany.vercel.app
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   CONTACT_EMAIL=mohamed20220632@gmail.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=mohamed20220632@gmail.com
   SMTP_PASS=your-app-password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:1573](http://localhost:1573) in your browser**

### Troubleshooting

If you encounter any issues:

1. **Clear node_modules and reinstall**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node.js version**
   ```bash
   node --version
   # Should be 18+ 
   ```

3. **Clear Next.js cache**
   ```bash
   rm -rf .next
   npm run dev
   ```

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── sections/       # Page sections
│   │   ├── animations/     # Animation components
│   │   ├── layout/         # Layout components
│   │   └── forms/          # Form components
│   ├── lib/                # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── data/               # Static data
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # CSS files
│   └── utils/              # Utility functions
├── public/                 # Static assets
├── tests/                  # Test files
└── docs/                   # Documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#f97316)
- **Secondary**: Dark Orange (#ea580c)
- **Dark Mode**: Dark slate colors
- **Light Mode**: Light gray colors

### Typography
- **English**: Inter (Google Fonts)
- **Arabic**: Cairo (Google Fonts)
- **Monospace**: JetBrains Mono

## 📱 Responsive Breakpoints

- **sm**: 640px (Mobile)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large Desktop)
- **2xl**: 1536px (Extra Large)

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📊 Performance

- **Lighthouse Score**: 95+ in all categories
- **Core Web Vitals**: Optimized
- **Bundle Size**: < 500KB
- **Load Time**: < 2s

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohamed Elkenany**
- GitHub: [@mohamedtarek64](https://github.com/mohamedtarek64)
- LinkedIn: [Mohamed Elkenany](https://www.linkedin.com/in/mohamed-elkenany-41aab6264)
- Email: mohamed20220632@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

---

**Project Status**: Under Development  
**Version**: 1.0.0  
**Last Updated**: December 2024
