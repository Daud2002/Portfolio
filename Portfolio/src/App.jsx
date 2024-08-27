import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Landingpage from './Components/LandingPage/Landingpage'
import About from '../src/Components/About/About.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {


  return (
    <div className='flex flex-col gap-8'>
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
