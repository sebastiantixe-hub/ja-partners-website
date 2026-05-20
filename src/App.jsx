
import './App.css'
import Navbar from './navbar/Navbar.jsx'
import Hero from './hero/Hero.jsx'
import Services from './sections/Services.jsx'
import About from './sections/About.jsx'
import WhySection from './sections/WhySection.jsx'
import WhoSection from './sections/WhoSection.jsx'
import Stats from "./sections/Stats"
import Cta from './sections/Cta.jsx'
import Form from './sections/Form.jsx'
import Schedule from './sections/Schedule.jsx'
import Footer from './footer/Footer.jsx'


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <WhySection />
      <WhoSection />
      <About />
      <Stats />
      <Services />
      <Cta/>
      <Form />
      <Schedule />
      <Footer />
    </>
  )
}

export default App
