import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Information from "./components/Information/Information"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="overflow-hidden min-h-screen">
      <Navbar />
      <hr className="border-t-2 border-gray-300 my-4" />
      <div className="py-8">
        <Hero />
      </div>
      <hr className="border-t-2 border-gray-300 my-4" />
      <div className="py-8">
        <Information />
      </div>
      <hr className="border-t-2 border-gray-300 my-4" />
      <div className="py-8">
        <Testimonials />
      </div>
      <hr className="border-t-2 border-gray-300 my-4" />
      <div className="py-8">
        <Footer />
      </div>
    </div>
  )
}



export default App
