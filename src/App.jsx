import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Information from "./components/Information/Information"
import Testimonials from "./components/Testimonials/Testimonials"

function App() {

  return (
    <div className="overflow-hidden min-h-screen">
    <Navbar />
    <Hero />
    <Information />
    <Testimonials />
    </div>
  )
}

export default App
