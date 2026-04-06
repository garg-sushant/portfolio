# 🚀 Portfolio

A modern, interactive portfolio website built with Next.js, React, and Tailwind CSS. Showcase your projects, skills, and experience with smooth animations and a responsive design.

## 🌐 Live Demo

[View Live Portfolio](https://garg-sushant-portfolio.vercel.app/)

## ✨ Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Engaging transitions and scroll animations powered by Framer Motion
- **Modern UI** - Clean, glassmorphic design with Tailwind CSS
- **Multiple Sections**:
  - Hero section with introduction
  - Projects showcase with tech stack details
  - Skills display
  - Coding profiles (GitHub, LeetCode, etc.)
  - About section
  - Contact information
  - Footer with links

- **Performance Optimized** - Next.js 16, React 19, and optimized font loading
- **Type Safe** - Full TypeScript support
- **SEO Ready** - Next.js built-in SEO optimizations
- **Dark Theme** - Professional dark mode design

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/) - Production-ready animation library
- **Icons**: 
  - [React Icons 5](https://react-icons.github.io/react-icons/) - Popular icon library
  - [Lucide React](https://lucide.dev/) - Beautiful SVG icons
- **Fonts**: [Geist](https://vercel.com/font) - System font family
- **Linting**: [ESLint 9](https://eslint.org/) - Code quality tool

## 📋 Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x, **yarn**, **pnpm**, or **bun** package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run Development Server

```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000). Open it in your browser to see the result.

### 4. Start Editing

Edit the files in `src/app` and `src/components` to customize your portfolio. The page will hot-reload as you make changes.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout component
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Hero.tsx            # Hero/intro section
│   │   ├── About.tsx           # About section
│   │   ├── Skills.tsx          # Skills display
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── CodingProfiles.tsx  # Coding profiles section
│   │   ├── Contact.tsx         # Contact information
│   │   ├── Footer.tsx          # Footer component
│   │   └── SectionWrapper.tsx  # Reusable section wrapper
│   └── data/
│       └── projects.ts         # Projects data
├── public/                      # Static assets
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
├── tailwind.config.mjs           # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
├── eslint.config.mjs             # ESLint configuration
└── README.md                    # This file
```

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at http://localhost:3000 |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

## 🎨 Customization

### Update Your Information

1. **Main Content**: Edit `src/app/page.tsx` to modify the main page structure
2. **Projects**: Update `src/data/projects.ts` to add/modify your projects
3. **Sections**: Customize each component in `src/components/`:
   - `Hero.tsx` - Update your introduction and social links
   - `About.tsx` - Add your bio and background
   - `Skills.tsx` - List your technical skills
   - `Projects.tsx` - Showcase your work
   - `CodingProfiles.tsx` - Link to your coding profiles
   - `Contact.tsx` - Update contact information

### Styling

- **Colors & Theme**: Modify Tailwind classes in components
- **Animations**: Adjust Framer Motion variants in component files
- **Fonts**: Configure in `src/app/layout.tsx`
- **Tailwind Config**: Edit `tailwind.config.mjs` for custom configurations

## 🚀 Deployment

This portfolio is deployed and live at [https://garg-sushant-portfolio.vercel.app/](https://garg-sushant-portfolio.vercel.app/) using Vercel.


## 💡 Performance Tips

- **Images**: Use Next.js Image component for automatic optimization
- **Code Splitting**: Next.js automatically splits code by route
- **Font Optimization**: Geist fonts are optimized and cached
- **Build Size**: Production build is optimized with tree-shaking

## 📧 Contact

Have questions or suggestions? Feel free to reach out through the contact section in the portfolio.

---

**Made with ❤️ using Next.js and React**
