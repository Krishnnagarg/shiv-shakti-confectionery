import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// OLD components (homepage)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// NEW Components (Dynamic Pages)
import ProductGrid from "./components/ProductGrid";
import PriceList from "./components/PriceList";
import Gallery from "./components/Gallery";
import BusinessDetails from "./components/BusinessDetails";
import ContactPage from "./components/ContactPage";
import MapEmbed from "./components/MapEmbed";
import WhatsAppFloating from "./components/WhatsAppFloating";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Homepage with old sections */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Testimonials />
              <Contact />
            </>
          }
        />

        {/* NEW Dynamic Pages */}
        <Route path="/products" element={<ProductGrid />} />
        <Route path="/price" element={<PriceList />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/about-business" element={<BusinessDetails />} />
        <Route path="/location" element={<MapEmbed />} />
      </Routes>

      <Footer />
      <WhatsAppFloating />
    </Router>
  );
}
