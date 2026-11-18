
import './App.css'
import Navbar from './Components/Navbar'
import About from './Section/About'
import Hero from './Section/Hero'
import Skills from './Section/Skills'
import Projects from './Section/Projects'
import Journey from './Section/Journey'
import WhatsAppButton from './Components/WhatsAppButton'
import Services from './Section/Services'
import Contact from './Section/Contact'
import Footer from './Section/Footer'
import useVisitor from './hooks/useVisitor'

// import BackgroundMesh from './Components/BackgroundMesh'


function App() {
  useVisitor();

  return (
    <>
    
      <Navbar></Navbar>
      <WhatsAppButton></WhatsAppButton>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Services></Services>
      <Journey></Journey>
      <Contact></Contact>
      <Footer></Footer>

      
      </>
  )
}

export default App
