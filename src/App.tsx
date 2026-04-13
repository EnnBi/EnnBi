import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stack from './components/Stack';
import Work from './components/Work';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Login from './components/Login';
import TechnologyDetailsPage from './components/TechnologyDetailsPage';
import SoftwareDevelopmentServicesPage from './components/SoftwareDevelopmentServicesPage';
import './index.css';

const Styleguide = lazy(() => import('./components/Styleguide'));

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Services />
    <Stack />
    <Work />
    <Process />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

function App() {
  useEffect(() => {
    document.title = 'EnnBi — Custom Software & Technology Solutions';

    // Smooth anchor scrolling (accounting for sticky navbar)
    const handler = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      const offset = 80;
      const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/technologies" element={<TechnologyDetailsPage />} />
        <Route
          path="/software-development-services"
          element={<SoftwareDevelopmentServicesPage />}
        />
        <Route
          path="/styleguide"
          element={
            <Suspense fallback={<div className="min-h-screen bg-ink-950" />}>
              <Styleguide />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
