# EnnBi

A modern, responsive business website built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Custom Domain**: Deployed at [www.ennbi.com](https://www.ennbi.com)
- **GitHub Pages**: Automated deployment via GitHub Actions

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1 with TypeScript
- **Styling**: Tailwind CSS with custom fonts (Inter, Poppins, Space Grotesk)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM v7
- **Build Tool**: Vite
- **Deployment**: GitHub Pages with custom domain

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/EnnBi/EnnBi.git
cd EnnBi
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## 🌐 Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions. Any push to the `main` branch triggers a new deployment.

**Live URL**: [www.ennbi.com](https://www.ennbi.com)

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services showcase
│   ├── Portfolio.tsx   # Portfolio projects
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── data/               # Static data
│   └── index.ts        # Services, testimonials, projects
├── types/              # TypeScript type definitions
└── App.tsx            # Main app component
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in Tailwind CSS. Main brand colors can be updated in the CSS files.

### Content
- **Services**: Update `src/data/index.ts`
- **Testimonials**: Modify testimonials array in `src/data/index.ts`
- **Contact Info**: Edit `src/components/Footer.tsx`

## 📄 License

This project is proprietary and confidential. All rights reserved by EnnBi.

## 🤝 Contributing

This is a private project. For any questions or suggestions, please contact the development team.

---

Built with ❤️ by EnnBi Team
