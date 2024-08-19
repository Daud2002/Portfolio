import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Landingpage from './Components/LandingPage/Landingpage'
import About from '../src/Components/About/About.jsx'
import Projects from './Components/Portfolio/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {


  return (
    <div>
      <Navbar />
      <Landingpage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
