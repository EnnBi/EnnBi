import React, { Suspense, useEffect, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
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
    <About />
    <Services />
    <Technologies />
    <WhyChooseUs />
    <Portfolio />
    <Testimonials />
    <Newsletter />
    <Contact />
    <Footer />
  </>
);

function App() {
  useEffect(() => {
    document.title = 'Ennbi Softwares - Transform Your Business With Technology';

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => animatedElements.forEach(el => observer.unobserve(el));
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
