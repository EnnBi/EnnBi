import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
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
import Login from './components/Login';
import TechnologyDetailsPage from './components/TechnologyDetailsPage';
import SoftwareDevelopmentServicesPage from './components/SoftwareDevelopmentServicesPage';
import './index.css';

const Styleguide = lazy(() => import('./components/Styleguide'));

const NAV_OFFSET = 80;

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
};

const Home: React.FC = () => {
  const location = useLocation();

  // Scroll to anchor when arriving from another route (e.g., navbar link from /technologies)
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      // wait for the page to mount before measuring
      window.setTimeout(() => scrollToId(state.scrollTo!), 50);
    }
  }, [location.state]);

  return (
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
};

/**
 * Global click handler that intercepts anchor clicks:
 * - "#x"   → smooth-scroll to #x on current page
 * - "/#x"  → if already on /, smooth-scroll; otherwise router-navigate
 *            to / and scroll after mount via Home's useEffect
 */
const NavigationHandler: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      // Ignore clicks with modifier keys (open in new tab etc.)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';

      // "/#section" — go to home and scroll
      if (href.startsWith('/#') && href.length > 2) {
        const id = href.slice(2);
        e.preventDefault();
        if (location.pathname === '/') {
          scrollToId(id);
        } else {
          navigate('/', { state: { scrollTo: id } });
        }
        return;
      }

      // "#section" — same-page scroll
      if (href.startsWith('#') && href.length > 1) {
        const id = href.slice(1);
        if (document.getElementById(id)) {
          e.preventDefault();
          scrollToId(id);
        }
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [navigate, location.pathname]);

  return null;
};

function App() {
  useEffect(() => {
    document.title = 'EnnBi — Custom Software & Technology Solutions';
  }, []);

  return (
    <Router>
      <NavigationHandler />
      <Routes>
        <Route path="/" element={<Home />} />
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
