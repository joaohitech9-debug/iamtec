import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Awards from './components/Awards';
import Services from './components/Services';
import Team from './components/Team';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <About />
      <Awards />
      <Services />
      <Team />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
