# 🚀 Sushant Garg - Developer Portfolio

A high-performance, modern developer portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Features dynamic interactive components, a macOS-style terminal card, authentic live project screenshots, an education & experience timeline, and a vibrant **Sea Green & Electric Blue** theme.

## 🌐 Live Demo

[View Live Portfolio](https://garg-sushant-portfolio.vercel.app/)

## ✨ Key Features

- **Responsive & Modern Design** - Clean, frosted glassmorphic UI optimized for desktop, tablet, and mobile devices.
- **Sea Green & Electric Blue Aesthetic** - Tailored dual-gradient palette with glowing ambient lighting and dark oceanic foundation.
- **Scrollspy Navigation** - Fixed floating navbar that automatically highlights the active section in real time.
- **Interactive Developer Terminal** - macOS-styled interactive `whoami` terminal with dynamic prompt and syntax highlighting.
- **Comprehensive Timeline & Profile**:
  - **Hero Section**: Dynamic rotating skill badges, bio, and direct action CTAs.
  - **Education**: Detailed academic background (PEC Chandigarh B.Tech CSE, 12th Senior Secondary, 10th Secondary).
  - **About Me**: Engineering philosophy, core pillars, and specialization areas.
  - **Work Experience**: Industrial internship experience and production achievements.
  - **Skills Matrix**: Categorized technical skills across Frontend, Backend, AI/ML, DevOps, and Core CS.
  - **Featured Projects**: Uniform grid with authentic live window mockups, uncropped screenshots, and direct Live Demo / GitHub links.
  - **Coding Profiles**: LeetCode, CodeChef, GeeksforGeeks, and GitHub statistics cards.
  - **Interactive Contact**: Pre-filled email client form and direct social channels.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (Turbopack)](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Modern utility-first styling with custom CSS variables
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Smooth scroll reveals, transitions, and text rotations
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts & metadata
│   │   ├── page.tsx            # Home page composition & ambient lighting
│   │   └── globals.css         # Sea Green & Blue design system tokens
│   ├── components/
│   │   ├── Navbar.tsx          # Fixed floating navbar with scrollspy
│   │   ├── Hero.tsx            # Hero intro & macOS whoami terminal
│   │   ├── Education.tsx       # Academic timeline (PEC, 12th, 10th)
│   │   ├── About.tsx           # Bio & core engineering pillars
│   │   ├── Experience.tsx      # Work experience & internship details
│   │   ├── Skills.tsx          # Categorized technical skill pills
│   │   ├── Projects.tsx        # Equal-sized project cards with live previews
│   │   ├── CodingProfiles.tsx  # Competitive programming & GitHub links
│   │   ├── Contact.tsx         # Direct message form & channels
│   │   ├── Footer.tsx          # Footer component with socials
│   │   └── SectionWrapper.tsx  # Reusable animated section wrapper
│   └── data/
│       ├── education.ts        # Education records data
│       ├── experience.ts       # Experience and internship data
│       └── projects.ts         # Project metadata and screenshots
├── public/
│   ├── projects/               # Authentic live project preview screenshots
│   └── Resume.pdf              # Downloadable resume
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/garg-sushant/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

## 📧 Contact & Links

- **Email**: [sgarg9031@gmail.com](mailto:sgarg9031@gmail.com)
- **LinkedIn**: [linkedin.com/in/sushant-garg-4b0a37284](https://www.linkedin.com/in/sushant-garg-4b0a37284/)
- **GitHub**: [github.com/garg-sushant](https://github.com/garg-sushant)

