import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import GoldConsignment from './pages/GoldConsignment'
import DiamondConsignment from './pages/DiamondConsignment'
import JewelryConsignment from './pages/JewelryConsignment'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PricesPage from './pages/PricesPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ChristmasPage from './pages/ChristmasPage'
import './App.css'

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gold-consignment" element={<GoldConsignment />} />
          <Route path="/diamond-consignment" element={<DiamondConsignment />} />
          <Route path="/jewelry-consignment" element={<JewelryConsignment />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/christmas" element={<ChristmasPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
