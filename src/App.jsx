import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/layout/Navbar/Navbar.jsx'
import Footer from './components/layout/Footer/Footer.jsx'
import PageTransition from './components/layout/PageTransition.jsx'
import { useScrollToTop } from './hooks/useScrollToTop.js'

import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ServiceCategoryPage from './pages/ServiceCategoryPage.jsx'
import ProcessPage from './pages/ProcessPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage/ContactPage.jsx'

const wrap = (el) => <PageTransition>{el}</PageTransition>

export default function App() {
  const location = useLocation()
  useScrollToTop()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />

      <main id="main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={wrap(<HomePage />)} />
            <Route path="/services" element={wrap(<ServicesPage />)} />
            <Route path="/services/:id" element={wrap(<ServiceCategoryPage />)} />
            <Route path="/process" element={wrap(<ProcessPage />)} />
            <Route path="/about" element={wrap(<AboutPage />)} />
            <Route path="/order" element={wrap(<ContactPage />)} />
            {/* Fallback → home */}
            <Route path="*" element={wrap(<HomePage />)} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  )
}
