import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Information from "./components/Information/Information"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="overflow-hidden min-h-screen">
      <Navbar />
      <div className="py-8">
        <Hero />
      </div>
      <div className="py-8">
        <Information />
      </div>
      <div className="py-8">
        <Testimonials />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}



export default App
